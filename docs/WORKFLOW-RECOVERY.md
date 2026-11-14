# Recovery of an assistant-owned lock, 12 November 2026

The earlier execution created `.git/nacre-work.lock` with `flock ... read`. Its tool output was truncated and the session identifier was lost. A second acquisition failed because the first holder was still alive. This was a workflow failure, not a game failure and not evidence of another developer modifying the source.

The original directory and kernel lock have not been removed or overridden. A fresh checkout was opened through Sites in `recovery/.sites-checkout` from published version 23, commit 608db55faf70fe3e86857cbb37efb49ede9656c7. The original Git status was clean. Work continues in that checkout and publication uses the normal helper's remote-head verification. Parent AGENTS.md points subsequent runs to it.

`scripts/work-lock.py` now records an owner and unique token, supports non-destructive status, and releases through an explicit token-matched request file. This works across isolated process namespaces and does not depend only on a volatile tool session identifier. No stale timeout can release a holder in the middle of edits. Tests cover exclusive acquisition, rejection of a wrong release token, successful owner release, metadata cleanup, and the stable lock inode. A leftover unlocked file is not a blocked checkout.

Recovery does not claim to have killed the inaccessible old process. It removes the dependency on that abandoned checkout while retaining all its contents. Do not repeat the workaround for an actual concurrent development run.
