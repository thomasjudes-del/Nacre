"""Build the portable, self-contained game archive without repository credentials."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
output = root / "dist" / "nacre-source.zip"
files = [root / "README.md", root / "AGENTS.md", root / "trailer" / "edit-v3.json", root / "trailer" / "edit-v5.json", root / "art-source" / "mocap" / "loop.json"]
for directory in ("dist", "docs", "tests", "scripts"):
    for path in (root / directory).rglob("*"):
        if not path.is_file() or path == output:
            continue
        relative = path.relative_to(root)
        if "captures" in relative.parts or "__pycache__" in relative.parts or relative.parts[:2] == ("docs", "audio"):
            continue
        if path.name.startswith("qa-") or path.name.startswith("nacre-trailer-") or path.name == "trailer.html":
            continue
        files.append(path)
with ZipFile(output, "w", ZIP_DEFLATED, compresslevel=9) as archive:
    for path in sorted(files):
        archive.write(path, path.relative_to(root))
print(f"{output.name}: {len(files)} files, {output.stat().st_size:,} bytes")
