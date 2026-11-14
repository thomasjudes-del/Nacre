# Voyageuse NACRE : premier modèle 3D

Asset livré : `dist/assets3d/traveller.glb`. Générateur reproductible :

```sh
blender -b --python scripts/build-character-3d.py
```

Le personnage est original : manteau en laine vert pétrole, col de lin, sacoche de terrain, bottes usées, visage modelé avec nez, menton et oreilles, chevelure courte. Les matériaux sont mats et réagissent à l’éclairage du moteur. Aucune image plane du personnage n’est utilisée.

## Géométrie et orientation

GLB 2.0, 874 728 octets ; 8 464 sommets avant duplication d’export, 16 520 triangles, un skin, 17 articulations, 12 primitives de matériau. Il n’exige ni Draco, ni texture externe, ni service distant. Hauteur neutre approximative : 1,69 m. Les pieds sont près de Y=0, X est l’avant, Y la verticale glTF. Pour regarder vers la gauche, tourner la racine de PI autour de Y. Le mesh porte des poids de squelette ; les coudes et genoux utilisent des surfaces continues avec mélange des poids, pas des segments rigides indépendants.

Noms des articulations : `pelvis`, `spine`, `chest`, `neck`, `head`, puis `Lthigh`, `Lshin`, `Lfoot`, `Lupperarm`, `Lforearm`, `Lhandbone` et leurs équivalents `R`. `upperarm` commence à l’épaule, `forearm` au coude et `handbone` au poignet. Le bas du manteau partage une partie des poids des cuisses.

## Clips

| Clip | Durée | Usage |
| --- | --- | --- |
| idle | 2 s | Respiration discrète, sans locomotion |
| run | 0,75 s | Course issue de la capture humaine CMU 09_01, sans translation horizontale de racine |
| jump | 0,8 s | Pose de saut, puis retour au repos ; la trajectoire vient de la simulation |
| crouch | 1 s | Pose accroupie immobile et appui de remontée |
| crouchwalk | 1 s | Locomotion accroupie originale, foulée 1,55 m, cadence selon vitesse |
| swim | 1,5 s | Nage horizontale avec bras alternés et battements |

La foulée de course correspond à 2,675656 m. Pour synchroniser la distance, utiliser `timeScale = abs(vitesseMetresSeconde) / 3.56754`, ou régler le temps du clip directement à partir de la distance parcourue. Le bassin, la colonne, les épaules, les mains, les pieds et la tête bougent ensemble. Les clips commencent exactement à zéro. Le basculement entre clips doit être fondu par le moteur.

Pour la nage, le bassin se trouve vers Y=0,99 et la tête vers Y=1,2 par rapport à l’origine du modèle. Placer l’origine approximativement 1,15 m sous la surface, puis vérifier la ligne d’eau avec le cadrage du jeu. La nage n’est pas une capture humaine.

## Provenance du mouvement

Course : CMU Graphics Lab, sujet 09, prise 01, déjà conservée dans `art-source/mocap`. Les trois coordonnées de `loop.json` sont utilisées, pas sa seule projection latérale. Le générateur retargete les articulations sur le squelette du nouveau modèle. Voir `ANIMATION.md` pour les sources, la licence et la conversion ASF/AMC. Repos, saut, accroupissement et nage sont des poses/cycles créés dans le générateur.

## Vérification et limites

Trois rendus Blender inspectés : repos, course, nage (`art-source/character-3d/traveller-*.png`). La première inspection a révélé des genoux et coudes segmentés : les manches et jambes ont été remplacées par des surfaces continues. Deuxième correction : épaules arrondies, temps glTF remis à zéro et manteau lié aux cuisses. Export binaire contrôlé : cinq clips, un skin, coordonnées finies, poids normalisés, rotations non constantes du bassin, de la colonne, de la tête et des bras pendant la course.

Il s’agit d’un modèle stylisé de premier essai, sans expressions faciales, simulation textile, doigts animés, vrais plis de tissu ou capture de nage. Les interactions de poussée et de remontée nécessitent un placement des mains dans le moteur. Le rendu final dépend encore de l’éclairage, du cadrage et des transitions de l’intégration. Ces contrôles ne prouvent pas une qualité comparable à INSIDE.

## Cycle accroupi ajouté le 12 novembre 2026

Le GLB contient désormais six clips. `crouchwalk` alterne support et retour du pied, résout les genoux à longueurs constantes et entraîne bassin, épaules et bras. Le moteur revient à `crouch` à l’arrêt. Les tests réels du squelette couvrent les deux directions et les contacts d’appui. Le générateur Python et le GLB sont à jour ; le .blend et les portraits de la première livraison restent des témoins historiques à cinq clips. Nouveau rendu de contrôle en contexte : `docs/captures/conservatory-crouch-reference.png`, hors navigateur. La lumière sous l’abri et les demi-tours restent à améliorer.

## Gardien, 13 novembre 2026

`guardian-3d.mjs` complète le squelette partagé avec un mantelet animé suivant poitrine/bassin, un masque original et une lanterne attachée à la main. La posture de veille utilise l’état `watching` du poursuivant ; le bras droit est relevé par IK, sans modifier les collisions. Géométries statiques regroupées par matériau, petite lumière sans ombres. Le vêtement est procédural et ne possède pas encore de collision textile. Visage et chevelure de base restent partagés. Contrôles et références dans ITERATION.md.

## Continuité du lâcher, 13 novembre 2026

Les mains ne quittent plus instantanément leur cible de contact à t=0,34. Jusqu’à t=0,54, une interpolation douce ramène la cible IK vers la pose libre, avec le même intervalle que le redressement du corps. Correction commune aux remontées de caisse, de mur et de bassin ; aucune modification des clips glTF ni de la simulation. Mesures et limites dans ITERATION.md.

## Demi-tour, 13 novembre 2026

La rotation de racine possède une accélération et un freinage angulaires, au lieu de prendre immédiatement sa vitesse maximale. turn-3d.mjs est indépendant des commandes et collisions. Tests à trois fréquences et sur le vrai squelette. Ce n’est pas un pivot du pied ancré ; ce transfert de poids reste à développer.

## Lisibilité après retour mobile, 13 novembre 2026

La laine du manteau est éclaircie ; son volume de profil augmente de 14 % et sa largeur de 6 %, sans modifier squelette, stature, foulée ni clips. Le GLB est régénéré depuis build-character-3d.py. La caméra se rapproche également, notamment au mécanisme. Les tests de contacts sont conservés.

## Approche de la berge, 13 novembre 2026

Le moteur prépare la prise avant de déclencher la remontée : mélange nage/posture accroupie, relèvement de présentation et cibles IK progressives. L’orientation libère cette préparation lors d’un demi-tour. Le GLB et la simulation restent inchangés. Cela corrige le saut de main à la prise ; le transfert de poids des pieds reste à travailler.

## Présence au repos et arrivée, 13 novembre 2026

`living-pose.mjs` ajoute une flexion modérée du dos, respiration, bras et regard par-dessus le clip de repos. La base des quaternions est restaurée avant le mixer, puis les contacts sont appliqués. Aucun déplacement du pied par cette couche. La réception de la chute initiale utilise un fondu accroupi de 0,7 s ; toute commande rend le contrôle immédiatement. La course et la préparation de prise de berge sont préservées. Ces animations restent procédurales.

## Appui de berge

Une IK de jambe lève le pied gauche, le pose avant le lâcher des mains et protège la transition du passage sous la pierre. Orientation de la chaussure conservée. Seulement sur la berge du bassin ; animation de bassin encore générique. Voir ITERATION.md et tests/bank-foot.test.cjs.

## Traction de berge

La hauteur de soutien des épaules progresse de 29 à 53 cm avant le lâcher. Le bassin s'élève avec le torse, puis les mains et le pied sont recalés. Uniquement sur la sortie du bassin ; durée et physique conservées. Rendu CPU inspecté, WebGL non vérifié. Script de mesure et export : scripts/inspect-shore-rise.mjs.
