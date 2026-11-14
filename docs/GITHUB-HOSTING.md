# GitHub migration, 14 November 2026

The existing playable source, local models/audio, tests and development notes have been imported from Sites commit ac9eaaa02c07c987d6ba6e6176a7d0a692bb1eec into thomasjudes-del/Nacre. The 252-file portable source snapshot preserves the game; historical trailer videos, capture archives and the old Git object history remain on Sites. No new game was generated for migration.

GitHub CI passed 239 tests. Creating a new GitHub Pages site failed because the integration lacks Pages administration. Public tester hosting therefore uses the existing Confluence of Minds site:

- Presentation: https://confluenceofminds.com/nacre/
- Game: https://confluenceofminds.com/nacre/play/
- Hosting repository: thomasjudes-del/confluenceofminds-site
- Import workflow: .github/workflows/import-nacre.yml, pinned to validated game commit 71a0e593400bb5a0ddf6f16f9e80ab5fb492a948.

When updating gameplay, update the import pin after tests and run the import workflow. Check deployment and actual asset responses before announcing release. Avoid independently editing the copied game in the hosting repository. Sites remains private; its source workflow and work-lock requirements still apply to Sites edits. Reconcile any newer Sites or GitHub changes before the next development pass. Saved progress is origin-specific and will not migrate from Sites automatically.

WebGL play and physical iPhone compatibility are not established by these CI results. Audio and artistic quality still need perceptual assessment.

Public HTTP verification: presentation, game entry, conservatory GLB model and Three.js module all returned HTTP 200. Cloud browser opened presentation and game without sign-in; GL_VENDOR remained Disabled.
