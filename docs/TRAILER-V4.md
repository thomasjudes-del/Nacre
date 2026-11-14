# NACRE · Trailer V4

54,5 s, 1280 × 720, 30 images/s. 46,5 s issus des simulations jouables et huit secondes de titre. Les 21 plans et les mots de V3 restent en place : DISCOVER A LOST WORLD, SOLVE ANCIENT RIDDLES et ESCAPE. Les personnages et accessoires sont réexportés depuis le rendu partagé 0.11. Ce n’est pas une capture de partie humaine, mais un export des parcours de simulation.

## Partition

“This Too Shall Pass” by Scott Buckley, released under CC BY 4.0. www.scottbuckley.com.au

Source : https://www.scottbuckley.com.au/library/this-too-shall-pass/
Fichier officiel : https://www.scottbuckley.com.au/library/wp-content/uploads/2021/01/sb_thistooshallpass.mp3
Licence : https://creativecommons.org/licenses/by/4.0/

Composition néoclassique, piano, cordes et chœur. Le choix vise une montée émotionnelle progressive, et non une obligation de guitares post-rock. Aucun achat ou génération musicale payante. Aucun synthétiseur MIDI ajouté au trailer. La source est le master publié par le compositeur, sans prétention sur les conditions de son enregistrement.

Extraits 30–44, 176–192, 345–370,5 et 395–401,5 s. Fondus croisés de 3, 3 et 1,5 s. Les deux premiers passages sont atténués ; le troisième progresse vers son niveau nominal. Coupe au noir à 46,5 s, résolution à partir de 48 s, fondu final de 51,5 à 54,5 s. Limiteur sans gain automatique à 0,85 puis AAC 192 kbit/s. Crédit présent dans le lecteur et le MP4. Mesures de niveau et décodage documentés dans VALIDATION.md ; aucune écoute humaine revendiquée par l’agent.

## Reproduire

`node trailer/render.cjs`, puis `bash trailer/mix-v4.sh`. Node, FFmpeg et @napi-rs/canvas ne sont nécessaires qu’à l’export. `node scripts/render-motion-study.cjs` exporte douze secondes de course normale puis ralentie. Le jeu navigateur reste autonome.

Les objets proviennent de `art-source/props-v4.png`, le gardien de `art-source/custodian-v4.png`, leurs dérivés WebP sont dans dist/assets. Les images originales et les descriptions de génération sont conservées dans le dépôt.

## Limites

Le passage à 30 images/s ne garantit pas les performances du jeu sur téléphone. Les nouveaux matériaux ne transforment pas les fragments en niveaux complets. La nouvelle course reste retargetée dans un personnage 2D, avec des transitions et interactions procédurales. Validation artistique attendue à partir de la vue rapprochée et du trailer, distincte de la réussite technique des tests.
