"""Create temporary, explicitly labelled QA pages. Run with --clean before packaging."""
from pathlib import Path
import subprocess, sys
r=Path(__file__).resolve().parent.parent
d=r/'dist'
names=['qa-convoi.html','qa-convoy-frames.json','qa-convoy-game.js','qa-touch-game.html','qa-touch.html']
if '--clean' in sys.argv:
    for n in names:(d/n).unlink(missing_ok=True)
    raise SystemExit
(d/'qa-convoi.html').write_text((r/'scripts/convoy-qa.html').read_text())
(d/'qa-touch.html').write_text((r/'scripts/convoy-touch-qa.html').read_text())
subprocess.run(['node','-e',"const fs=require('fs'),{route}=require('./tests/convoy-route.cjs');fs.writeFileSync('dist/qa-convoy-frames.json',JSON.stringify(route(true).frames.map(f=>f.state)))"],cwd=r,check=True)
h=(d/'convoi.html').read_text().replace('<script src="logic.js','<script>Object.defineProperty(navigator,"maxTouchPoints",{get:()=>2});</script><output id="qaStats" style="position:fixed;bottom:0;left:0;z-index:40;font:10px monospace;color:white;background:#05242b"></output><script src="logic.js',1).replace('src="convoy-game.js?v=09"','src="qa-convoy-game.js"')
(d/'qa-touch-game.html').write_text(h)
s=(d/'convoy-game.js').read_text().replace('art.render(playing?', '$("qaStats").textContent=JSON.stringify({x:Math.round(s.x),y:Math.round(s.y),vx:Math.round(s.vx),jumps:s.jumps,mode,portrait,scrollX,scrollY,music:audio.musicStatus,ready:audio.tracks.map(a=>a.readyState),touches:gestures.points.size});art.render(playing?')
(d/'qa-convoy-game.js').write_text(s)
print('QA pages prepared. Remove with --clean before publication.')
