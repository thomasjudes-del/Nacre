"""Exclusive checkout lock with inspectable ownership and explicit release.
Never remove the flock inode, infer ownership from a PID, or expire a live lock.
Release uses a unique owner token, allowing recovery across process namespaces.
"""
import argparse, fcntl, json, pathlib, signal, time, uuid

def main():
    p = argparse.ArgumentParser()
    p.add_argument('command', choices=['hold', 'status', 'release'])
    p.add_argument('--git-dir', default='.git')
    p.add_argument('--owner', default='')
    p.add_argument('--token', default='')
    a = p.parse_args()
    root = pathlib.Path(a.git_dir)
    lock = root / 'nacre-work.lock'
    meta = root / 'nacre-work.owner.json'
    release = root / 'nacre-work.release'
    def read_owner():
        try: return json.loads(meta.read_text())
        except (FileNotFoundError, ValueError): return None
    with lock.open('a+') as f:
        try:
            fcntl.flock(f, fcntl.LOCK_EX | fcntl.LOCK_NB)
            active = False
        except BlockingIOError:
            active = True
        if a.command == 'status':
            print(json.dumps({'active': active, 'owner': read_owner() if active else None}), flush=True)
            return 0
        if a.command == 'release':
            owner = read_owner()
            if not active:
                print('ALREADY_RELEASED'); return 0
            if not owner or not a.token or owner.get('token') != a.token:
                print('OWNER_MISMATCH'); return 2
            release.write_text(a.token)
            print('RELEASE_REQUESTED'); return 0
        if active:
            print(json.dumps({'status':'BUSY', 'owner':read_owner()}), flush=True); return 1
        if not a.owner:
            print('--owner must identify this execution'); return 2
        token = str(uuid.uuid4())
        meta.write_text(json.dumps({'token':token, 'owner':a.owner, 'started':time.time(), 'release_file':str(release)}))
        def stop(*_): raise SystemExit(0)
        signal.signal(signal.SIGTERM, stop)
        signal.signal(signal.SIGINT, stop)
        print(json.dumps({'status':'LOCKED','token':token,'owner':a.owner}), flush=True)
        try:
            while True:
                try:
                    if release.read_text().strip() == token: break
                except FileNotFoundError: pass
                time.sleep(.1)
        finally:
            # Only remove our metadata, never the kernel lock file.
            if read_owner() and read_owner().get('token') == token: meta.unlink(missing_ok=True)
            try:
                if release.read_text().strip() == token: release.unlink()
            except FileNotFoundError: pass
            fcntl.flock(f, fcntl.LOCK_UN)
            print('RELEASED', flush=True)
    return 0
if __name__ == '__main__': raise SystemExit(main())
