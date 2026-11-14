# Animation partagée 0.11

Le moteur de course utilise une capture humaine réelle projetée en 2D, pas une multiplication de sinusoïdes indépendantes. La silhouette reste un assemblage d’illustrations et de membres dessinés dans Canvas, pas un personnage 3D entièrement skinné.

## Provenance

Carnegie Mellon University Graphics Lab Motion Capture Database, sujet 09, prise 01 (running). https://mocap.cs.cmu.edu/subjects/09/09_01.amc et https://mocap.cs.cmu.edu/subjects/09/09.asf. Les octets ont été téléchargés via HTTP sur le même domaine officiel après échec de HTTPS. Fichiers conservés dans `art-source/mocap`.

Page officielle : https://mocap.cs.cmu.edu/ ; informations : https://mocap.cs.cmu.edu/info.php. Données mises à disposition gratuitement pour tous usages, y compris inclusion dans un produit commercial, mais pas revente des données seules. Acknowledgment: this data was obtained from mocap.cs.cmu.edu. The database was created with funding from NSF EIA-0196217.

## Conversion et intégration

`python3 scripts/build-mocap.py` requiert NumPy/SciPy, uniquement pour régénérer les données. Axes ASF, hiérarchie et rotations AMC produisent les articulations globales ; projection latérale sur la direction de déplacement, conservation du mouvement vertical, puis normalisation à 100 unités. Boucle retenue : début 41, période 90 images à 120 Hz, correction de couture répartie. `dist/run-capture.js` est embarqué ; aucune dépendance externe au lancement.

`capture-rig.js` applique un pas complet de 192 unités. L’échelle horizontale correspond à ce pas ; interpolation entre captures, transition progressive avec les poses d’interaction et de repos. L’accroupissement désactive la course capturée, comme les états aériens, la nage et la remontée. Les mains reprennent les contacts fixes du rebord. Les atlas de la voyageuse et du gardien sont découpés en régions peintes superposées à l’exécution.

Toutes les scènes chargent `run-capture.js`, `capture-rig.js` et `character.js`. Le trailer et la vue rapprochée chargent les mêmes modules. Le rendu du gardien utilise les mêmes articulations tout en conservant une apparence propre.

## Validation

Les tests vérifient le mouvement vertical du corps, l’opposition des bras, les phases de suspension, la couture de boucle, la désactivation en interaction, la conservation de l’accroupissement et les mains au rebord sur le parcours complet. Ces tests n’évaluent pas la beauté du résultat. `mouvement.html` expose course, marche, arrêt, ralenti et lumière portée pour l’examen visuel.
