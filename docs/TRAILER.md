# Version courante : V5

Cliffhanger musical et visuel, 54,5 secondes. Voir [TRAILER-V5.md](TRAILER-V5.md). Les notes ci-dessous décrivent les exports précédents.

# NACRE · Trailer de direction artistique

12 novembre 2026. Version 2 : montage de 72 secondes, 1280 × 720, 24 images/s, H.264 et AAC stéréo. 64 secondes de scènes dans le moteur, puis huit secondes de révélation du titre. Lecture privée depuis `trailer.html`.

## Ce qui est montré

Les états du personnage, des objets et des mécanismes viennent des parcours simulés existants `tests/route.cjs` et `tests/convoy-route.cjs`. Le rendu utilise les vrais modules `art.js`, `convoy-art.js`, `character.js` et `motion.js`, hors navigateur avec Canvas. Il ne s’agit pas d’une capture d’une partie jouée par un humain. Les interfaces sont masquées pour le montage.

Trois peintures originales supplémentaires remplacent le fond de certains plans : une cathédrale de pompage ambrée, des archives de sel violettes et une salle des machines rouge sombre. Leurs plateformes, personnages et interactions restent ceux de la simulation actuelle. Ce sont des propositions de direction artistique, pas trois niveaux achevés. Les plans existants conservent le conservatoire turquoise, le convoi, la poursuite et le bassin.

Mots isolés : AWAKEN, LISTEN, RUN. La taille typographique des mots passe à 88–108 pixels à l’export, contre 16 pixels auparavant. Vingt-six plans suivent une progression de 6, 5, 4, 3,5, 2, 1,5, 1 puis 0,5 seconde. Les derniers plans sont légèrement recadrés. Coupe au noir à 64 secondes, pendant le sommet orchestral. Le titre NACRE croît par courbes et fines ramifications, avec des reflets nacrés continus. La mention « AN ATMOSPHERIC ADVENTURE GAME » puis la signature apparaissent pendant la résolution musicale. Aucune image d’INSIDE n’est intégrée.

## Musique et provenance

“Signal to Noise” by Scott Buckley, released under CC BY 4.0. www.scottbuckley.com.au

Source : https://www.scottbuckley.com.au/library/signal-to-noise/

Fichier officiel : https://www.scottbuckley.com.au/library/wp-content/uploads/2020/04/sb_signaltonoise.mp3

Licence : https://creativecommons.org/licenses/by/4.0/

Transformations : extraits 0–22 s, 198–222 s, 250–280 s et 318–326 s, reliés par trois fondus croisés de quatre secondes. Le sommet orchestral traverse la coupe au titre à 64 s ; la résolution enregistrée accompagne les huit dernières secondes. Fondu final de 70 à 72 s, gain fixe et limiteur de crête, puis encodage AAC. Aucune coupure ni silence ajouté lors de l’arrivée du titre. La musique n’est pas générée par MIDI. Aucun achat, crédit ni API payante. Crédit dans le lecteur, ce document et les métadonnées MP4.

## Référence consultée

Page officielle : https://playdead.com/press/

Trailer officiel 2016 : https://playdead.com/press/INSIDE/INSIDE_Trailer_2016_NoRating_1080p30_h264_ST_6_3Mbit.mp4

Le fichier vidéo a été téléchargé et une planche de photogrammes espacés de sept secondes a été examinée. Cette consultation ne constitue ni un visionnage continu avec écoute, ni une analyse de tous les raccords. Aucune transcription utilisée. Principes retenus : lisibilité du personnage dans de grands volumes, sobriété typographique, profondeur et séparation des plans, retenue des informations.

## Reproduire

Node, FFmpeg et `@napi-rs/canvas` sont nécessaires uniquement à l’export. Le jeu livré reste autonome.

1. `node trailer/render.cjs`
2. `bash trailer/mix.sh`

La police DejaVu Sans ExtraLight est embarquée avec sa licence dans `trailer/assets`. Le titre NACRE est dessiné par des courbes originales, sans police. `render-title.cjs` permet d’exporter isolément ses huit secondes.

Les PNG et la source musicale sont dans `trailer/assets`. Les médias de travail sont ignorés par Git. Le MP4 final est dans `dist/assets`. La passe WebGL est désactivée pour cet export hors navigateur ; le rendu Canvas reste celui du jeu.

## Limites

Les performances du jeu interactif ne se déduisent pas du rendu vidéo hors ligne. Les nouveaux décors n’ajoutent pas de puzzles ou de niveaux à la version jouable. L’animation du personnage conserve les limites du moteur actuel. La vidéo ne prouve pas une qualité comparable à INSIDE. Aucun iPhone physique n’est utilisé pour la validation.
