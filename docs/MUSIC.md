# Direction sonore actualisée, 13 novembre 2026

La musique est désormais réservée aux menaces et à de brefs retours de détente dans les trois passages 3D. Exploration, mécanismes ordinaires et nage ont des gains musicaux nuls. Les réglages utilisateur sont conservés. Quinze dérivés de prises de son CC0 sont intégrés localement : voir `RECORDED-FOLEY.md` pour les sources et transformations. Aucun son du trailer modifié.

---

# Musique des trois passages 3D, 13 novembre 2026

`world-score.js` utilise quatre pistes locales, démarrées sur le geste de jeu et fondues selon l'état réel : exploration, surveillance, poursuite, immersion, mécanisme, retour au calme, sel et citerne. Les seuils de tension du conservatoire utilisent chaseTime/hunterTime/scanTime ; l'ancien adaptateur de coordonnées n'est plus utilisé. Mix, pause et mute existants conservés. Les effets procéduraux sont désactivés dans ces trois passages uniquement ; les versions peintes et le trailer sont inchangés.

Nouveaux dérivés, sans achat ni téléchargement supplémentaire :

- `dist/assets/pursuit.mp3`, extrait de 105 à 150 s de `trailer/assets/juggernaut.mp3`, 128 kb/s, gain 0,65, fondu d'entrée 1,5 s, sortie 4 s. Source et autorisation initiales : https://www.scottbuckley.com.au/library/juggernaut/
- `dist/assets/salt.mp3`, This Too Shall Pass, extrait de 0 à 45 s, 128 kb/s, fondu initial 1,5 s et final 4 s. Source et autorisation initiales : https://www.scottbuckley.com.au/library/this-too-shall-pass/

Compositeur : Scott Buckley, CC BY 4.0. Les quatre titres et les adaptations sont indiqués dans les pauses des jeux. Ce sont des œuvres enregistrées, pas une revendication de prise acoustique live. Les originaux du trailer et son montage V5 sont intacts. Les deux nouveaux extraits durent 45 s chacun pour limiter le téléchargement. Une attente très longue peut faire entendre le raccord de boucle.

Les tests vérifient les changements d'état, fondus, réglages et continuité des têtes de lecture. Ils ne constituent pas une écoute. Le mélange harmonique des pistes, leur niveau perçu et le retour après mort doivent être écoutés en jeu. Les pistes gardent leur position ; les raccords ne sont pas synchronisés à une grille musicale. Prochaine priorité sonore : effets enregistrés et spatialisation, pas le rétablissement des clics rejetés.

---

## Trailer V5

Ouverture « This Too Shall Pass », puis montée sombre et percussive « Juggernaut », de Scott Buckley, CC BY 4.0. Transformations et provenance dans TRAILER-V5.md. Aucun changement aux musiques du jeu.

## Trailer V4

Le trailer utilise désormais « This Too Shall Pass » de Scott Buckley, CC BY 4.0, monté en crescendo puis résolution. Détails, source et transformations dans TRAILER-V4.md. Les compositions du jeu décrites ci-dessous restent inchangées.

# Professional music assets for NACRE v0.4

Downloaded from the composer's official library on 12 November 2026. No purchase or API credit used. Integrated locally in dist/assets/hiraeth.mp3 and dist/assets/decoherence.mp3. Both start in the activation gesture; a time-based crossfade selects the listening chamber score.

## Hiraeth

'Hiraeth' by Scott Buckley - released under CC-BY 4.0. www.scottbuckley.com.au

Track page: https://www.scottbuckley.com.au/library/hiraeth/
Official download: https://www.scottbuckley.com.au/library/wp-content/uploads/2020/06/sb_hiraeth.mp3
License: https://creativecommons.org/licenses/by/4.0/

The composer describes calm synth pads, strings and a yearning solo cello. This describes the instrumentation, not evidence of a live acoustic recording session.

Files:
- sb_hiraeth.mp3: original download, MP3 320 kb/s stereo 44.1 kHz, 346.227 seconds, 13,851,302 bytes.
- dist/assets/hiraeth.mp3: 128 kb/s browser derivative, full duration, with a 1.5-second fade-in and 5-second fade-out. Changes: compressed and fades added. 5,540,092 bytes.

## Decoherence

'Decoherence' by Scott Buckley - released under CC-BY 4.0. www.scottbuckley.com.au

Track page: https://www.scottbuckley.com.au/library/decoherence/
Official download: https://www.scottbuckley.com.au/library/wp-content/uploads/2022/03/sb_decoherence.mp3
License: https://creativecommons.org/licenses/by/4.0/

The composer describes morphing synths, ominous strings and solo viola, with an underwater or deep-space mood. No claim of human listening is made here.

Files:
- sb_decoherence.mp3: original download, MP3 320 kb/s stereo 44.1 kHz, 618.136 seconds, 24,727,749 bytes.
- dist/assets/decoherence.mp3: 128 kb/s browser derivative, full duration. Change: compressed only.

## Technical verification

Both original MP3s decoded completely with FFmpeg, with no decode error. Hiraeth measured mean -16.6 dB, maximum -0.9 dB; Decoherence mean -17.6 dB, maximum -1.1 dB. Both have two channels at 44.1 kHz. These measurements verify valid audio and headroom, not subjective musical quality.

Implemented integration: Hiraeth as the main melancholic score, Decoherence as a darker alternate or for a separate chapter. Start soundtrack from a user gesture, fade transitions, keep footsteps quiet, and expose track attribution in the pause menu or credits. Preserve attribution and indicate any additional editing in the published credits.
