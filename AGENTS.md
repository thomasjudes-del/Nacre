# NACRE development continuity

Use the Sites source workflow before edits. Preserve private audience, all compatible saves, V5 trailer and Christmas package. Read README and docs/ITERATION.md, VALIDATION.md, CONSERVATORY-3D.md, CHARACTER-3D.md and ENVIRONMENT-3D.md.

## Working checkout after lock recovery

The current managed-cloud checkout is `/workspace/sites/nacre-serre-des-marees/recovery/.sites-checkout`. `/workspace/sites/nacre-serre-des-marees/.nacre-current` points here. The original `.sites-checkout` is retained intact because an earlier assistant execution lost its live flock session reference. It is not the current editing checkout. Do not delete that lock or overwrite that directory. In a new environment where this recovery checkout does not exist, open the latest source through Sites in a clean directory; do not assume a historical lock is still held. Fetch current Sites source in this checkout, never impose a historical commit.

Use `python3 scripts/work-lock.py status` to check the real kernel lock, not file presence. Before editing hold it with `python3 -u scripts/work-lock.py hold --owner <unique-execution-name>` in a retained execution session. Store the session ID and returned token. Owner metadata is in `.git/nacre-work.owner.json`. At completion, including errors, call `python3 scripts/work-lock.py release --token <your-token>`, wait for RELEASED, and check status reports active false. Never delete the lock inode. The explicit release file can recover your own holder even when the shell process namespace changes or the session reference is lost. Do not release a different execution's lock. No automatic expiry during active work.

If another execution owns this checkout, do not edit or publish its state. Do not create another development checkout merely to bypass another active execution. This recovery copy was made only for the identified abandoned holder from our own earlier attempt, from the unchanged last published source. Read docs/WORKFLOW-RECOVERY.md.
