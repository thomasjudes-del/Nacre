## 14 novembre : bassin et contrepoids dans la serre retrouvée

Nouvelle énigme jouable entre la salle d’écoute et l’offrande : remplir pour soulever une passerelle, traverser, transférer l’eau au contrepoids pour lever la porte. Vanne réversible pour revenir ; berges et porte solides, reprise locale. 286 tests réussis ; parcours complet en solution connue de 60,65 s, zéro chute. Rendu Blender CPU inspecté, WebGL cloud toujours refusé (GL_VENDOR Disabled), aucun essai iPhone ni écoute critique. Ce passage reste court. Détails dans docs/ITERATION.md.

---

## 14 novembre au soir : deux passages et des cuves corrigées

La serre peinte complète est désormais jouable en 3D dans `serre.html` : miroir, passerelles, effondrement, chariot, nacelle, écluse et salle d’écoute. `lisiere.html` ajoute une forêt distincte avec chiens articulés, aboiements, refuge et lac, en adaptant le parcours du Convoi. Le remplissage des deux cuves suit maintenant leur niveau d’eau réel. Ce sont encore des prototypes courts, pas une reproduction aboutie d’INSIDE.

280 tests réussis, parcours complets et reprises simulés. Rendus de contrôle Blender CPU ; WebGL cloud indisponible, aucun essai iPhone physique ni écoute critique. Détails, sources et prochaine étape dans docs/ITERATION.md et docs/FOREST-REFERENCE.md.

---

## 14 novembre : espace sonore

Les décharges de la citerne ont deux sources sonores indépendantes, avec direction et distance continues. Résonance selon le lieu, pas sur bois dans la nacelle et pierre après la croûte. 250 tests réussis ; Web Audio contrôlé, sans écoute critique ni validation WebGL. Voir docs/SPATIAL-FOLEY.md et docs/ETAT-JOUABLE.md.

# NACRE : version de test publique

- Jouer : https://confluenceofminds.com/nacre/play/
- Présentation : https://confluenceofminds.com/nacre/
- Retours et bugs : https://github.com/thomasjudes-del/Nacre/issues

Le jeu existant a été transféré depuis Sites avec ses assets locaux, ses tests et ses notes. Le site de test est hébergé sur Confluence of Minds, depuis ce dépôt. Voir docs/GITHUB-HOSTING.md pour les mises à jour et limites. Les sauvegardes Sites ne se transfèrent pas automatiquement à cette adresse. Le trailer de Noël reste hors périmètre.

## 14 novembre : causalité sonore corrigée

La musique de rafale s’efface progressivement sous les abris, y compris l’abri mobile. Plus de nouveaux grincements dus au seul maintien d’une commande immobile ; effort respiratoire lié au déplacement réel et à la poussée. 234 tests réussis, parcours et reprises conservés. WebGL cloud indisponible ; aucune écoute critique. Pas de nouveau niveau dans cette passe, extension après les refuges toujours prioritaire. Voir ITERATION.md pour les sources et limites.

---

## 14 novembre : refuge mobile en mer de sel

Le premier abri se déplace sur rails en maintenant l’action et en marchant. Protection et particules suivent sa position ; retour, lâcher, saut et reprise possibles. Barre accessible sans centrage exact, accessoires hors du trajet. 231 tests réussis et référence Blender CPU inspectée ; WebGL cloud toujours indisponible. Nouvelle option sur la séquence existante, pas un niveau supplémentaire. Détails, source et limites dans docs/ITERATION.md.

---

## 14 novembre : volet de sel corrigé

Volet de la mer de sel : traversée depuis l’arrière et blocage malgré une hauteur libre corrigés. Fermeture retenue si le passage est occupé, saut contre le dessous, reprise et retour possibles. Transmission et contrepoids visibles, montant avant aminci, cadrage local relevé. 225 tests réussis ; rendu Blender CPU inspecté, WebGL cloud indisponible. Aucun nouveau niveau ni durée supplémentaire. Voir ITERATION.md pour les limites et la suite.

---

Citerne, 14 novembre : après la grille de nacelle, nouvelle galerie à deux décharges d'eau annoncées, espaces d'attente secs, checkpoint local et baie de répit. 220 tests ; parcours connu rouge 54,62 s. Trois prototypes toujours courts ; contrôle Blender uniquement, WebGL cloud indisponible. Voir docs/ITERATION.md.

---

Citerne, 14 novembre : nouvelle énigme de réservoir embarqué. Freiner sous le jet remplit la réserve et lève la grille du quai ; départ, franchissement, retour et reprise possibles. 214 tests, contrôles Blender uniquement. Trois prototypes encore courts. Voir docs/ITERATION.md.

Citerne : frein manuel à bord de la nacelle, arrêt en maintenant l’action près de la poignée et reprise au relâchement. Voir docs/ITERATION.md pour la portée et les limites.

Citerne, 14 novembre : correction du recul et des pas sur la nacelle ; frein, butées et sons liés au mouvement. 203 tests. Rendu de contrôle Blender, WebGL cloud indisponible. Voir docs/ITERATION.md.

Citerne, 14 novembre : traversée en nacelle à câbles après le bassin, avec reprise locale. Voir docs/ITERATION.md.

Mise à jour du 14 novembre : grille hydraulique et vidange visible dans la citerne rouge ; traversées de grille fermée corrigées en marche arrière et au saut. Trois prototypes toujours courts. Validation et limites : docs/ITERATION.md.

Extension du 13 novembre : après le volet de la mer de sel, traversée de rafales à anticiper, refuges fossiles et troisième checkpoint. Voir docs/ITERATION.md pour validation et limites.

Dernière évolution : dans la mer de sel, dalle et aiguille de charge, transmission et contrepoids animés, caméra locale et placements décalés du fossile. 176 tests passent ; contrôle visuel Blender uniquement, WebGL cloud indisponible. Voir docs/ITERATION.md.

Dernière évolution 3D : mode plein écran compatible et installation iPhone, capture incarnée au lieu du clignotement, silhouette distante et bruitages enregistrés. Trois passages toujours courts. Détails et limites : docs/ITERATION.md, docs/IMMERSIVE-MODE.md, docs/RECORDED-FOLEY.md.

# NACRE · La serre des marées

**Mise à jour du 13 novembre 2026 :** trois passages 3D accessibles. Le conservatoire reste à `conservatoire.html` ; `mondes.html` ouvre la mer de sel et la citerne rouge, avec deux étapes mécaniques chacune, sauvegardes séparées et musique réactive. Ce sont encore des prototypes courts (33,57 s et 31,33 s avec solution connue), pas trois niveaux achevés. Voir `docs/THREE-LEVELS.md` et `docs/ITERATION.md`.

Prototype 0.11, 12 novembre 2026. Trois tableaux jouables et une étude séparée, **Le convoi**, accessible depuis l’accueil ou `convoi.html`. Cette étude ajoute véhicule, observation à couvert, caisse et rebord, poursuites, refuge, nage et points de reprise. Son parcours connu prend 41,65 s, sans prétendre mesurer la première découverte.

La passe 0.11 remplace la course procédurale par une capture de mouvement CMU retargetée : bassin, dos, épaules, bras et jambes suivent la même foulée. Les régions peintes de la tête, du buste et du manteau sont articulées. Le gardien a désormais son propre atlas peint. Six accessoires peints remplacent les objets géométriques : nacelle, chariot, caisse, miroir, fossile et vanne. Les améliorations 0.6 du paysage, de la locomotion et du miroir à ressort sont conservées. Ce n'est pas une expérience de dix minutes achevée.

La passe 0.9.1 corrige le refuge du convoi : protection et accroupissement jusqu’au bord extérieur du décor, zone de détection identique au faisceau dessiné, balayage de départ progressif et recul du véhicule. La sortie se lit dans la lumière.

La passe 0.9.2 reprend la remontée : mains fixées au rebord pendant la traction, coudes articulés, buste incliné, pied posé avant le lâcher et retour aux bras libres.

La passe 0.9.3 reprend la nage : flottabilité de surface, deux bras alternés, immersion et redressement progressifs, sillages. Le poursuivant conserve son propre état ; revenir contre la berge gauche ne fait plus traverser le décor.

## Premier essai en vraie 3D

Accès principal de l’accueil : ENTRER EN 3D. Arrivée depuis une ouverture de service, réception contrôlable, repos animé et papillon réagissant à l’approche de la caisse. Les reprises existantes sont conservées.

`conservatoire.html` reprend le Convoi dans une scène polygonale autonome : personnage skinné et animé, architecture glTF, perspective, ombres, eau réfléchissante et lumières. Une traversée guidée permet de voir le passage avant de jouer. Le cadrage rapproché rend le personnage plus lisible et garde un plan plus large dans les poursuites. Même simulation et commandes ; sauvegarde séparée. WebGL 2 requis. Lire `docs/CONSERVATORY-3D.md` pour les sources et limites. Le Chromium de contrôle refuse WebGL : les poses et caméras ont été contrôlées sur CPU et les vues rendues hors navigateur, pas validées en WebGL ou sur iPhone. La version peinte et la V5 restent disponibles.

## Trailer

`trailer.html` propose un montage de 54,5 secondes : 21 plans sans reprise des mêmes intervalles, issus du moteur du jeu, et une ouverture néoclassique suivie d’une montée sombre et percussive de Scott Buckley, « This Too Shall Pass » puis « Juggernaut ». `frontieres.html` ajoute deux fragments jouables : contrepoids fossile dans la mer de sel, réserve et élévateur dans la citerne rouge. Ce sont des prototypes courts, pas des niveaux achevés. Lire `docs/TRAILER.md`. Le code d’export et les médias originaux sont conservés dans `trailer/` dans le dépôt. Le MP4 est livré séparément de l’archive portable du jeu.

`mouvement.html` permet de juger la course en grand et à la taille du jeu, au ralenti, avec ou sans lumière. Vidéo correspondante : `assets/nacre-course-v4.mp4`. Sources, provenance et limites dans `docs/ANIMATION.md` et `docs/TRAILER-V5.md`.

## Jouer

Servir `dist` avec un serveur statique, par exemple `python3 -m http.server 8000 --directory dist`, ou ouvrir `dist/index.html` dans un navigateur moderne. Aucun paquet, compte, clé, CDN ou service distant n'est nécessaire au jeu. Les sauvegardes sont locales au navigateur et à son origine.

- Clavier : flèches / A D / Q D pour avancer ; Espace / flèche haute pour sauter ; E / Entrée pour interagir. Maintenir E pour saisir un objet proche ou abriter la lumière. Échap : pause. M : son.
- Mobile : moitié gauche, glisser horizontalement puis maintenir pour avancer. Sur cette même moitié gauche, glisser vers le haut pour sauter ; redescendre le pouce pour préparer un autre saut. Moitié droite, maintenir pour saisir, agir ou cacher la lumière ; un toucher bref déclenche une interaction ponctuelle si disponible. Pour tirer, maintenir à droite tout en déplaçant à gauche. Le saut ne coupe pas le déplacement ni le maintien du pouce droit.
- Sur appareil tactile, le portrait demande de tourner le téléphone. Une rotation en cours de jeu met la partie et le son en pause ; le retour en paysage propose Reprendre. Pas de boutons fléchés superposés au décor.
- Le son s'active avec Entrer ou Continuer. Musique et effets ont des volumes séparés dans la pause.
- La progression est sauvegardée aux points de passage. Continuer apparaît au prochain chargement de la page. Les sauvegardes 0.4 restent compatibles.
- La surface du jeu empêche le défilement, la sélection et les menus d’appui long. Les menus conservent leur propre défilement. Le cadre utilise la petite hauteur de viewport stable (`svh`), pour éviter les variations de cadrage causées par la barre Safari. Cela ne désactive pas les gestes système ou les commandes du navigateur hors de la page.

La vitesse de course passe de 245 à 320 unités/s (+31 %). Les accélérations, freinages et sauts sont recalés. La foulée reste liée aux appuis au sol, avec environ 3,33 pas par seconde à pleine course. Le bassin accompagne les appuis sans étirer les jambes. Le rendu interpole les positions entre les pas de simulation. Le visage, le cou, les épaules et le manteau utilisent des régions peintes articulées ; la capture entraîne toute la course, avec déformation du bas du manteau. La marche lente, les interactions, la nage et la remontée conservent des poses procédurales. La solution connue simulée atteint la fin en 52,47 secondes sans chute. Ce n'est pas une durée de première découverte humaine, qui reste à mesurer.

Le contrôle gauche utilise désormais un centre flottant : après un long glissement, un petit retour du pouce suffit pour ralentir puis repartir en sens inverse. Le quai cède après 0,85 seconde à 360 unités/s, pour retrouver une menace perceptible avec la course à 320.

## Les trois tableaux

1. La serre des marées : découvrir sans danger une plante qui réagit à la lumière ; tenir un miroir à ressort pour charger la racine éloignée, puis exploiter son retour et la réserve des racines, puis abriter la graine sur le passage vivant. Un quai qui cède impose ensuite une course et un saut.
2. L'écluse : déplacer un chariot sur une plaque pour lever une porte et alimenter la nacelle. Rappeler celle-ci, embarquer, puis rejoindre une terrasse en hauteur.
3. Ce qui écoute : charger deux résonateurs avec une lumière qui attire une présence. Alterner exposition, dissimulation et refuges selon son cycle. Les charges terminées résistent aux échecs. Le parcours s'achève dans une ouverture lumineuse.

## Musique

L'ancienne partition synthétique est supprimée de la livraison. Deux compositions de Scott Buckley, Hiraeth et Decoherence, sont embarquées localement. Un fondu les relie selon la zone ; elles ne redémarrent pas à chaque échec. Pas de bruit de vent ou de pluie permanent. Quelques impacts de matière restent synthétisés. Crédits, liens officiels et transformations : `docs/MUSIC.md`.

## Le convoi

`dist/convoy-logic.js` porte la simulation indépendante ; `convoy-art.js` la mise en scène ; `convoy-game.js` la boucle et les écrans. La sauvegarde `nacre-convoi-v1` est séparée de la traversée principale. L’étude reprend les mêmes gestes et conserve le paysage obligatoire. Lire `docs/CONVOI.md` pour les références observées, les correspondances et les écarts.

## Architecture

- `dist/logic.js` : simulation indépendante à 60 Hz, collisions, charges, contrepoids, nacelle, observation et reprises.
- `dist/controls.js` : reconnaissance des gestes de deux pouces indépendants.
- `dist/input.js` : transport Touch Events non passif sur appareil tactile, Pointer Events pour souris, annulation et capture des gestes.
- `dist/motion.js` : appuis au sol, cinématique des jambes, transitions et inertie des vêtements.
- `dist/character.js` : costume et tête illustrés, membres articulés, bottes et lumière localisée.
- `dist/art.js` : composition Canvas 2D, plans illustrés en parallaxe, personnage articulé, caméra et lumières. Passe WebGL optionnelle ; repli Canvas 2D.
- `dist/chapter-art.js` : architecture interactive, matières, présence et résonateurs.
- `dist/audio.js` : deux médias locaux, gains Web Audio, fondu indépendant de la fréquence d'affichage et effets.
- `dist/game.js` : boucle, écrans, clavier, gestes et sauvegarde locale versionnée.
- `tests/*.test.cjs` : 156 tests avec le test runner standard Node.

La version principale repose sur des plans illustrés. Le nouvel essai du conservatoire est un monde polygonal 3D à déplacement latéral. Aucun moteur propriétaire n'est requis. La source se reprend dans Codex avec Node. `scripts/compose_score.py` est conservé comme historique de la partition abandonnée et n'intervient plus dans le jeu.

## Vérifier

`node --test tests/*.test.cjs`

Voir `docs/VALIDATION.md` pour les résultats et limites, `docs/DESIGN.md` pour la lecture des références et `docs/ASSETS.md` pour les visuels.

## Hébergement

`dist` est un site statique portable. Aucun abonnement ni crédit n'a été acheté, aucune API payante n'est appelée par le jeu. La publication Sites conserve son audience privée existante. Aucune gratuité perpétuelle d'un hébergeur n'est garantie ; le code n'en dépend pas.

## Archive portable

`dist/nacre-source.zip` contient le code, les tests, les documents et tous les médias utilisés par le jeu. Les PNG originaux de travail restent dans `art-source` dans le dépôt Git ; l’archive portable contient leurs versions WebP livrées. Les captures de vérification restent également dans le dépôt, hors de cette archive. Aucun fichier de test visuel temporaire n’est publié.

La passe 0.9.4 donne au poursuivant une apparence distincte de gardien du conservatoire : cape, masque, respirateur et lanterne animée.

La passe 0.9.5 reprend le saut du gardien, son freinage avant l’eau et sa posture de veille avec lanterne levée.

La passe 0.9.6 corrige la plongée involontaire à l’entrée du bassin : dissipation de la vitesse de chute, flottabilité amortie et éclaboussures localisées.

## Reprise du développement

Le verrou de travail est maintenant identifiable et libérable par son propriétaire, avec contrôle d’exclusion. Lire AGENTS.md et docs/WORKFLOW-RECOVERY.md avant toute reprise. Le conservatoire inclut un cycle accroupi avec appuis et mouvement du haut du corps, distinct de la pose immobile.

Le conservatoire utilise ses bruitages contextuels originaux (pierre, bois, eau, tissu et métal), sans boucle de vent/pluie ; mix mémorisé séparément. Référence hors navigateur et limites dans docs/ITERATION.md.

Le conservatoire ajoute une balance à double charge et une grille à descente amortie : caisse, poids du personnage, puis franchissement. Solution guidée : 42,52 s. Le parcours peint reste inchangé.

Bilan du travail du 12 au 13 novembre : `docs/BILAN-NUIT-2026-11-13.md`.

Direction de développement : `docs/THREE-LEVELS.md`. La baie finale possède une floraison volumétrique animée et un élargissement progressif du cadre.
