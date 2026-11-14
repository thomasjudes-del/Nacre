# Le conservatoire : premier passage polygonal

12 novembre 2026. Entrée `conservatoire.html`. Un essai séparé reprend le parcours du Convoi, avec une mécanique de balance propre à la 3D, sans modifier Le convoi peint ni les sauvegardes existantes. Le bouton Traverser lance la partie ; Voir la traversée guidée joue la solution déterministe avec les mêmes commandes et collisions, sans téléportation. Prendre la main restitue les commandes à tout moment. Le parcours connu dure désormais 42,52 s. Ce n’est pas une mesure de première découverte.

## Ce qui est réellement en 3D

Three.js r170 est livré localement, sous licence MIT. Le personnage est un mesh déformé par 17 articulations ; son corps n’est pas une image plane. L’architecture, les quais, les plantes, les obstacles et accessoires sont des volumes glTF ou des maillages créés par le moteur. Caméra en perspective, ombres, lumières, eau réfléchissant la scène, brume de profondeur et particules. Les deux GLB totalisent 6,32 Mo. Ni CDN, ni API de génération, ni service payant au lancement.

La simulation conserve ses unités ; 60 unités représentent un mètre de rendu. Le mouvement latéral reste imposé par la conception 2.5D. Une scène polygonale ne signifie pas un déplacement libre dans les trois axes.

La course CMU existante a été retargetée sur le squelette complet : bassin, torse, épaules, bras, tête et jambes. La cadence suit la vitesse de déplacement. Des fondus raccordent repos, course, saut, accroupissement et nage. Les mains sont placées par cinématique inverse pour pousser et prendre appui au rebord. Pendant la remontée, la présentation du corps s’abaisse pour rendre le contact atteignable, puis se redresse après le lâcher. Aucune modification de collision pour masquer un défaut d’animation.

La caméra avance son cadrage dans la course, se rapproche au passage de la caisse et s’abaisse au bassin. Deux lanternes proches teintent la profondeur ; un contre-jour sépare les silhouettes. Le convoi du fond roule sur un viaduc de service. Les petites pièces des accessoires sont regroupées par matériau pour éviter un appel de rendu par barreau. Reflet limité à 512 px ; résolution du canvas plafonnée. Ce sont des précautions de coût, pas une mesure de fluidité sur téléphone.

## Commandes, progression et comparaison

Même clavier et gestes à deux pouces que Le convoi. Le téléphone demande le paysage. Pause à la perte de visibilité, volume musique/effets séparé, sauvegarde propre `nacre-conservatoire-3d-v1`. Le mode guidé n’écrit pas de sauvegarde. Les anciennes clés ne sont ni effacées ni migrées. Le Convoi peint et le trailer V5 restent inchangés.

WebGL 2 est nécessaire pour cette page. Si sa création échoue, aucun bouton de jeu factice n’est activé : l’écran précise que l’image est un aperçu fixe et propose Le convoi original. Le poster est un rendu hors navigateur de la scène de contrôle, pas une capture WebGL.

## Sources et vérification reproductible

- `dist/conservatory-art.mjs` : scène Three, personnages, interactions, ombres, eau.
- `dist/conservatory-view.js` : conversion des unités, cadrages et poses.
- `dist/conservatory-game.mjs` : interface et boucle, mêmes modules de simulation/contrôles.
- `dist/conservatory-pilot.js` : solution guidée.
- `scripts/build-character-3d.py`, `scripts/build-conservatory-3d.py` : génération Blender des GLB, documentée dans CHARACTER-3D.md et ENVIRONMENT-3D.md.
- `scripts/inspect-3d.mjs` : exécution réelle des modèles, animations, matrices et caméras Three sur CPU ; export des maillages déformés. Aucun contexte WebGL n’est simulé par ce contrôle.
- `scripts/render-3d-reference.py` : rend ces données avec Blender Cycles pour vérifier proportions, contacts, profondeur et cadrage. Les shaders, la brume et la réponse lumineuse ne sont pas ceux de WebGL. Les images sont des références, jamais présentées comme captures de gameplay navigateur.
- `tests/conservatory-3d.test.cjs` : fin de parcours, poses, amplitude du haut du corps, contacts, présence/absence des sols polygonaux, dépendances embarquées.

Exemple de contrôle hors navigateur : `node scripts/inspect-3d.mjs 15.5 /tmp/nacre-scene.json`, puis `blender -b --python scripts/render-3d-reference.py -- /tmp/nacre-scene.json /tmp/nacre.png`.

Dans un navigateur compatible, `conservatoire.html?inspection=1` fournit les jalons issus du parcours et un contrôle de rendu sur toute la traversée. Ce contrôle n’a pas pu être exécuté ici : le Chromium distant refuse la création de contexte WebGL avec `GL_VENDOR = Disabled`. La page de repli a été vérifiée ; aucun FPS, test Safari ou iPhone physique n’est revendiqué.

## Ce qui manque encore

Une vérification visuelle du vrai rendu WebGL et une mesure sur iPhone sont prioritaires avant généralisation. Le modèle reste stylisé ; pas de visage animé ni simulation textile. La nage est procédurale, la locomotion accroupie possède maintenant un cycle propre, mais ses transitions restent à affiner. Le gardien partage encore le squelette mais possède un mantelet animé, un masque à filtres et une lanterne avec posture de veille. Les plantes sont statiques, l’architecture répétitive, les matériaux dotés de premières variations procédurales mais sans usure localisée aux contacts. La balance ajoute une préparation puis une fenêtre de passage. Sa compréhension sans texte reste à éprouver auprès d’un joueur.

Il s’agit d’un premier essai technique et artistique dans la bonne dimension de rendu, pas d’une équivalence à INSIDE. Les articles techniques officiels de Playdead sur l’éclairage ont servi de référence documentaire : https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html et https://blog.playdead.com/articles/inside_presentations/inside_publications.html. Pas de nouveau visionnage continu de gameplay dans cette passe ; les observations vidéo antérieures étaient des planches de photogrammes, consignées dans TRAILER-V5.md. Aucun élément Playdead incorporé.

## Refuge, 13 novembre 2026

Le cadrage s’abaisse à l’approche de l’abri puis remonte à sa sortie, sans retirer les commandes. Deux luminaires de maintenance fixes révèlent le corps accroupi ; boîtiers, verre et conduits sont regroupés en trois maillages. La couverture a un profil chanfreiné. Deux lumières ponctuelles locales sans ombres supplémentaires ; coût GPU non mesuré. Validation et limites dans ITERATION.md.

## Sons contextuels

conservatory-sound.js ajoute les bruitages originaux liés aux événements et au mouvement, une résonance selon le lieu et la persistance des volumes. La musique et la physique restent intactes. Tests et export hors navigateur dans ITERATION.md ; écoute réelle et Web Audio restent à valider.

La mécanique propre au conservatoire est portée par conservatory-logic.js ; le guide et tests/conservatory-route.cjs utilisent cette même simulation. L’export inspect-3d.mjs suit désormais ce nouveau parcours.

La balance comporte désormais un cadran mécanique à charge partielle/complète. La collision de la grille tient compte de la hauteur du personnage pendant le saut, avec cliquet de maintien et contact sous le battant. Validation du 13 novembre dans ITERATION.md.

## Matières locales, 13 novembre 2026

surface-finish.mjs ajoute quatre petites cartes procédurales partagées, couleur/rugosité pour pierre et bronze, avec UV projetés sur les géométries existantes. Les couleurs de sommets du décor contenaient déjà la teinte du matériau : le facteur de base est normalisé pour ces surfaces afin d’éviter sa seconde multiplication. Personnages et eau exclus. L’export de référence Blender conserve maintenant ces cartes, sans équivalence avec le rendu WebGL. Tests et limites dans ITERATION.md.

## Continuité du lâcher, 13 novembre 2026

Les mains ne quittent plus instantanément leur cible de contact à t=0,34. Jusqu’à t=0,54, une interpolation douce ramène la cible IK vers la pose libre, avec le même intervalle que le redressement du corps. Correction commune aux remontées de caisse, de mur et de bassin ; aucune modification des clips glTF ni de la simulation. Mesures et limites dans ITERATION.md.

## Balance et lecture mobile, 13 novembre 2026

Le test d’alignement à huit unités est supprimé. plateCoverage mesure le chevauchement avec le plateau visible ; charge partielle au cadran, ouverture avec personnage et au moins 60 % de couverture. Les essais de caisse décalée et de retour couvrent le blocage signalé par Thomas. Le plan du mécanisme est rapproché (14,8 m contre 18,5 m), le personnage plus visible. Le son de détection et le passage du convoi sont allongés avec attaque douce ; gouttes épisodiques sans ambiance permanente. Limites et preuves dans ITERATION.md.

## Progression lumineuse, 13 novembre 2026

conservatory-light.mjs compose les teintes et intensités selon la position : atténuation sous les structures, bassin froid puis sortie ambrée. Remplissage frontal et contour préservent la silhouette. Une lumière ponctuelle fixe près de la baie finale, sans ombre ajoutée. Aucun changement de physique, caméra ou sauvegarde. Paramètres déterministes et continus, testés aussi en revenant en arrière. La référence Blender ne reproduit pas la brume du moteur.

## Commandes corrigées, 13 novembre 2026

Le pouce gauche déplace et glisse vers le haut pour sauter. Redescendre le pouce prépare un autre saut sans le décoller. Le pouce droit reste dédié aux interactions et au maintien de saisie. Même module dans tous les passages, sans modification du clavier, de la balance ni des sauvegardes. Cette consigne remplace les anciennes mentions de saut à droite. Validation et limites dans ITERATION.md.

## Plan de berge

Une enveloppe spatiale rapproche et recentre la caméra à la sortie du bassin, dégage le dessus du quai, puis relâche le plan vers la baie finale. Stable à l’arrêt et réversible. Les commandes restent actives. Limites visuelles et contrôles dans ITERATION.md.
