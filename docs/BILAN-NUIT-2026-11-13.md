## 14 novembre : causalité sonore corrigée

La musique de rafale s’efface progressivement sous les abris, y compris l’abri mobile. Plus de nouveaux grincements dus au seul maintien d’une commande immobile ; effort respiratoire lié au déplacement réel et à la poussée. 234 tests réussis, parcours et reprises conservés. WebGL cloud indisponible ; aucune écoute critique. Pas de nouveau niveau dans cette passe, extension après les refuges toujours prioritaire. Voir ITERATION.md pour les sources et limites.

---

## 14 novembre : refuge mobile en mer de sel

Le premier abri se déplace sur rails en maintenant l’action et en marchant. Protection et particules suivent sa position ; retour, lâcher, saut et reprise possibles. Barre accessible sans centrage exact, accessoires hors du trajet. 231 tests réussis et référence Blender CPU inspectée ; WebGL cloud toujours indisponible. Nouvelle option sur la séquence existante, pas un niveau supplémentaire. Détails, source et limites dans docs/ITERATION.md.

---

## 14 novembre : volet de sel corrigé

Volet de la mer de sel : traversée depuis l’arrière et blocage malgré une hauteur libre corrigés. Fermeture retenue si le passage est occupé, saut contre le dessous, reprise et retour possibles. Transmission et contrepoids visibles, montant avant aminci, cadrage local relevé. 225 tests réussis ; rendu Blender CPU inspecté, WebGL cloud indisponible. Aucun nouveau niveau ni durée supplémentaire. Voir ITERATION.md pour les limites et la suite.

---

# État cumulatif au 14 novembre, galerie de décharge

- Conservatoire : balance tolérante, convoi, gardien entrant par sa galerie, nage et baie ; acquis conservés.
- Mer de sel : fossile et pont, volet, rafales et refuges ouverts sur le trajet ; 33,57 s en solution connue. Correction des arches conservée.
- Citerne : élévateur, grille hydraulique, vidange et marches, nacelle avec frein et réservoir commandant la grille du quai. Nouvelle séquence : deux décharges annoncées par aiguilles et gouttes, passages entre les jets, zones sèches d'attente et baie finale. Checkpoint 4 et réessai local ; 54,62 s en solution connue.

220 tests réussis, contrôles Blender CPU seulement ; navigateur cloud sans WebGL. Aucune écoute critique ni validation iPhone. Les trois prototypes sont techniquement parcourus en simulation, mais demeurent courts et visuellement répétitifs. La galerie ajoute une situation jouable d'observation et de temporisation, pas un niveau long. Prochaine priorité : transformation spatiale manipulable en mer de sel, sans reproduire un couloir de dangers cycliques. Détails, limites et sources dans ITERATION.md. Ceci n'est pas le bilan final du dimanche.

---

# État cumulatif au 14 novembre : réservoir embarqué

- Conservatoire : traversée 3D, balance tolérante, convoi, gardien, nage et baie. Arches/collisions et entrée du gardien corrigées dans les reprises précédentes, acquis conservés.
- Mer de sel : fossile et pont, volet, rafales et refuges réellement ouverts sur le trajet. Parcours connu 33,57 s, pas un niveau long.
- Citerne : remplissage et élévateur, grille hydraulique, vidange et marches, nacelle réversible, frein manuel. Nouveau : arrêter sous le jet pour remplir le réservoir embarqué, lever la grille du quai, repartir puis franchir ; retour et réembarquement possibles. Parcours connu 38,00 s sans décès.

214 tests réussis, deux rendus Blender CPU de contrôle. WebGL cloud indisponible, aucune validation iPhone ou écoute critique du mix. Les trois passages sont techniquement traversables en simulation mais restent courts, répétitifs par endroits, et leur qualité de découverte n'est pas éprouvée auprès d'un nouveau joueur. Le niveau rouge a maintenant une conséquence jouable du frein, pas seulement une animation. Prochaine priorité : composer un vrai répit puis une menace annoncée après la grille. Voir ITERATION.md pour les fichiers, limites et contrôles précis. Aucun bilan final du dimanche anticipé.

---

## Frein manuel, 14 novembre

La nacelle rouge peut être ralentie puis arrêtée avec sa poignée, et repartir au relâchement. Mains, frein et sons suivent la commande. 207 tests et rendu Blender, sans WebGL ni iPhone. Amélioration de contrôle, aucune nouvelle séquence longue. Prochaine priorité : accès utile rendu possible par cet arrêt choisi.

## Ajout du 14 novembre : traversée rouge cohérente

La nacelle poursuit son cycle quand on revient en arrière. Le passager immobile ne fait plus de bruits de pas ; frein, roue, butées et sons annoncent les phases réelles. Suspentes reculées pour dégager le visage. Musique effacée pendant la traversée, retour au quai final. 203 tests ; contrôle Blender seulement, écoute du mix encore manquante. Durée et contenu des trois prototypes inchangés dans cette passe. Prochaine priorité : conséquence physique manipulable dans la citerne, pas une nouvelle plateforme automatique.

# Traversée suspendue ajoutée, 14 novembre 2026

La citerne comporte maintenant une nacelle à câbles après le bassin : embarquement, transport, débarquement et retour possibles, troisième checkpoint local. Route connue 35,40 s sans décès ; 196 tests réussis. Rendu Blender contrôlé, WebGL cloud toujours indisponible. Les trois passages restent courts. Sources, détails, limites et prochaine priorité dans ITERATION.md.

---

# Bilan cumulatif au 14 novembre, reprise citerne

Conservatoire jouable : balance tolérante, convoi/gardien, nage, baie ; entrée et sortie du gardien de fond depuis un abri conservées. Mer de sel jouable : fossile/contrepoids, volet, refuges et rafales ; arches alignées sur le trajet, sans pierre traversée. Citerne jouable : remplissage, nacelle, grille maintenant reliée à l'eau et solide dans les deux sens, vidange visible, pierres et sortie. Checkpoints et commandes conservés.

Cette reprise corrige et matérialise la mécanique rouge ; elle n'ajoute pas de durée. Les trois passages restent courts et ne constituent pas encore trois niveaux aboutis. Citerne : 31,33 s avec solution connue ; mer de sel : 33,57 s. 192 tests passent, deux nouveaux rendus de contrôle Blender. WebGL cloud indisponible, aucune validation perceptive audio ou iPhone. La prochaine reprise doit composer une nouvelle séquence rouge après le bassin ; voir ITERATION.md pour le point de départ précis.

---

# Entrée et sortie du gardien de fond, 14 novembre 2026

Source Sites 47 restaurée par le workflow après nettoyage, commit f75a3c6195a7f57d78c3c73d26e75ffc36eed930 ; dépôt propre, verrou exclusif nominatif. Les arches corrigées sont conservées.

Le personnage de fond devenait visible au milieu de la passerelle et disparaissait après 5,8 s. Il quitte maintenant un abri de service, ralentit, écoute, se retourne puis revient derrière la façade opaque. Les extrémités du trajet sont masquées par une vraie géométrie, sans fondu fantomatique. Position et vitesse continues à l'arrêt/reprise ; cadence du clip liée à cette vitesse. Galerie et abri reculés derrière les rails pour ne pas créer une traversée de bâtiment par le convoi. Le sol de la galerie soutient les pieds ; panneaux, bronze et ventilations reprennent les matières du conservatoire. Déclenchement, événements sonores, dangers, poursuite, capture et sauvegardes conservés. Cette correction porte sur la silhouette de fond ; elle n'identifie pas avec certitude la scène exacte vue par Thomas.

187 tests réussis : validation-witness-scene.txt. Parcours complets des trois passages, balance, rafales, échecs et reprises toujours couverts. Nouveaux contrôles : continuité de trajectoire/vitesse, orientation au retour, occlusion physique des extrémités depuis quatre positions du joueur, arrêt visible, galerie séparée des rails et appuis sur le plancher. Aucun changement du temps de parcours ni nouveau niveau dans cette passe.

Rendu Blender CPU inspecté : captures/witness-service-gallery.png. Abri dans le plan arrière et silhouette à la sortie visibles. Nouvel essai navigateur sur conservatoire.html : WebGL 2 indisponible, aperçu fixe et boutons de jeu désactivés ; donc aucun rendu navigateur 3D validé ni iPhone physique testé. Pas d'écoute du mix dans cette passe.

Source relue : https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html, Marek Bogdan, organisation des détails selon caméra et intérêt narratif. Documentation textuelle seulement ; pas de vidéo complète, transcription, photogramme ou timecode nouveau. Leçon appliquée : organiser l'entrée du personnage par la profondeur et l'architecture. Aucun asset Playdead.

Bilan cumulatif : refuges jaunes désormais ouverts sur le trajet, gardien de fond doté d'une entrée/sortie spatiale ; les trois passages restent courts. Prochaine priorité : enrichir la citerne rouge avec une séquence mécanique propre, après vérification du raccord des volumes existants. Animation de marche lente encore fondée sur la course ralentie, naturel à améliorer ; performances et ombres WebGL à contrôler dans un navigateur compatible. Ne pas confondre tests avec qualité artistique. V5/Noël et audience privée préservés.

---

# Refuges sans traversée de pierre, 14 novembre 2026

Source Sites 46 récupérée par le workflow, commit 0206b221956ff641925f4299970fc2c59200d2e7 ; checkout restauré après nettoyage, propre et verrou exclusif acquis. Priorité : bug signalé par Thomas sur les arches.

Diagnostic confirmé dans la géométrie : les anciennes demi-arches étaient dans le plan XY et extrudées en Z ; leurs deux pieds coupaient donc le chemin X du voyageur. La simulation ne bloquait pas ces pieds. Correction : axe des refuges aligné sur la marche, support arrière en dehors du couloir, toit assez haut pour toute la trajectoire de saut. Le côté caméra est érodé/ouvert pour conserver la silhouette. Les fanions sont reculés hors du chemin. Ni barrière invisible ni collision ajoutée qui empêcherait de rejoindre un refuge. Dimensions de protection, rythme des rafales, sauvegardes et commandes inchangés.

Validation : 184 tests passent, dont les parcours complets des trois passages, anciennes sauvegardes et balance. Deux nouveaux tests examinent les vrais triangles Three par rayons dans les deux directions, à plusieurs hauteurs jusqu'au sommet du saut et sur la largeur du corps ; toit présent au-dessus du refuge et ligne de vue caméra dégagée. Simulation de traversée, retour, saut et récupération dans chaque refuge. Sortie : validation-salt-vault-clearance.txt.

Contrôle visuel : le premier rendu Blender CPU a montré que la voûte complète masquait le personnage ; ouverture de la face caméra puis second rendu inspecté, conservé dans captures/salt-vault-clearance.png. Ce rendu ne valide pas les shaders WebGL. Nouvel essai du navigateur cloud sur mondes.html : WebGL 2 indisponible, boutons désactivés. Aucun test iPhone physique ni écoute audio dans cette passe.

Source primaire lue : https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html (Marek Bogdan). Documentation textuelle uniquement, aucun visionnage, photogramme ou timecode nouveau. Application : organiser les volumes selon la caméra et le point d'intérêt pour éviter une occultation du voyageur. Aucun asset Playdead.

Diagnostic distinct à poursuivre : le gardien de fond est rendu à partir de witnessStart pendant 5,8 s, avec apparition/disparition instantanées dans conservatory-art.mjs ; cela peut expliquer le retour de Thomas, sans certitude sur la scène exacte qu'il a vue. Pas modifié ici. Prochaine priorité : entrée et sortie physiquement motivées du gardien, puis enrichir les séquences. Les refuges restent visuellement simples et répétitifs ; ce correctif ne transforme pas les trois prototypes courts en niveaux aboutis. V5, Noël et audience privée préservés.

Mandat week-end : corriger les incohérences avant extension ; progresser vers trois passages riches et distincts, sans rallonger des trajets vides. Maintenir un bilan cumulatif et laisser un point de reprise concret ; ne pas créer de tâche supplémentaire.

---

# Lisibilité des rafales, 13 novembre 2026

Poussière exclue des refuges, traînées directionnelles, montée/retombée progressive et main devant le visage selon exposition. Le corps reste visible pendant la reprise. 182 tests passent, parcours complets compris. Rendus Blender inspectés ; pas de nouvel essai WebGL ni iPhone physique. Durée et difficulté inchangées ; trois passages encore courts, citerne à enrichir. Voir ITERATION.md.

---

# Traversée des salines ajoutée, 13 novembre 2026

La mer de sel comprend maintenant une séquence de rafales annoncées, quatre refuges et un checkpoint supplémentaire, suivis d'une sortie calme. Parcours connu : 33,57 s, zéro décès. 179 tests réussis ; retour à couvert, échec/reprise, pause et anciens checkpoints contrôlés. Rendu Blender inspecté, WebGL indisponible dans le navigateur cloud, aucun iPhone physique testé. Direction artistique encore répétitive et sons des rafales à développer. Les trois passages demeurent courts. Voir ITERATION.md.

---

# Ajout : transmission de la mer de sel, 13 novembre

La pesée jaune possède une dalle mobile, une aiguille et deux contrepoids à câbles synchronisés avec le pont. Placement décalé du fossile accepté, déchargement et nouvelle tentative possibles ; caméra ouverte localement sur le mécanisme. 176 tests réussis, rendu de contrôle Blender inspecté, WebGL cloud indisponible. Cette passe améliore la compréhension de la première énigme mais n'ajoute pas de durée. Les trois passages restent courts ; prochaine priorité : séquence plus riche de la mer de sel, puis citerne.

---

# Ajout : incarnation et mode jeu, 13 novembre

Toujours trois passages 3D courts et jouables en simulation : conservatoire, mer de sel, citerne rouge. Cette passe ne les allonge pas. Elle ajoute le mode web installable et le plein écran compatible, une conséquence animée de la détection dans le conservatoire, une présence distante avant la première surveillance et 15 échantillons de bruitage dans les trois passages. La musique cesse d'occuper les zones ordinaires. 173 tests passent ; fonctionnement audio validé dans le navigateur, rendu 3D contrôlé sur CPU uniquement. Prochain contenu à développer : les deux mondes courts, avec découverte, menace et promenade propres. Pas trois niveaux achevés.

---

# NACRE : bilan du 12 au 13 novembre 2026

## Résultat disponible

La version privée conserve le jeu peint et ajoute les améliorations au passage 3D du conservatoire : https://nacre-serre-des-marees.workspace-484387.chatgpt.site/conservatoire.html. Une traversée guidée est implémentée avec les commandes ordinaires. Le parcours 3D complet est simulé en 42,52 s avec solution connue et zéro décès. Ce n’est ni la durée d’une première partie ni une validation humaine du plaisir.

## Changements cumulés

- Baie finale : floraison volumétrique respirante, cadrage qui s’ouvre et possibilité de s’arrêter sans danger. Courte zone existante, pas un niveau nouveau.
- Direction de Thomas consignée dans THREE-LEVELS.md : trois ambiances 3D, premier niveau à achever, alternance contemplation et tension.

- Plan local de sortie du bassin : rapprochement, regard recentré, ouverture progressive vers la baie finale. Bas du corps encore partiellement occulté pendant la traction.

- Premier appui du pied sur la berge avant le lâcher des mains ; traction du torse et du bassin relevée de 24 cm. Jambe arrière et coordination complète encore à affiner.

- Balance corrigée pour les placements décalés, cadrage rapproché et manteau plus lisible.
- Saut par geste vertical du pouce gauche, action à droite, commun à tous les passages.
- Lumière spatiale du bassin et préparation continue des mains avant la prise de berge.
- Arrivée contrôlable, repos animé et papillon indicateur près de la balance. Accès 3D principal sur l’accueil.

- Verrou de travail identifiable et libérable ; récupération de la dernière source Sites à chaque reprise. Ancien checkout laissé intact. Les propres verrous sont libérés à la fin, sans écraser un travail concurrent.
- Cycle accroupi distinct avec appuis et mouvement du haut du corps. Caméra abaissée et luminaires fixes pour dégager la silhouette sous l’abri.
- Gardien avec mantelet animé, masque et lanterne attachée à la main, relevée pendant la veille au bassin. Squelette et visage de base encore partagés.
- Musique enregistrée maintenant modulée par situations : exploration, surveillance, poursuite, immersion, sel, citerne et vidange. Bruitages procéduraux rejetés par Thomas désactivés dans les trois passages 3D, à remplacer par des prises de son.
- Balance : pousser la caisse, ajouter le poids du personnage, observer la montée, puis franchir avant fermeture. Réessai en revenant sur la caisse. Cadran mécanique à trois états, cliquet et collision sous grille tenant compte du saut.
- Variations locales de couleur/rugosité pour pierre et bronze. Double multiplication de teinte corrigée sur ces surfaces.
- Lâcher progressif des mains après la remontée. Demi-tour avec accélération et freinage de rotation.

## Passages réellement implémentés

Le conservatoire 3D comprend obstacles, patrouilles et couverts, balance et grille, remontées, poursuites, refuge, nage et sortie de bassin. Sa logique et sa scène Three sont exécutées intégralement par les tests CPU. La jouabilité WebGL réelle reste non vérifiée dans notre navigateur cloud.

Le jeu principal peint conserve serre, écluse et présence finale ; Le convoi peint reste accessible séparément. Les fragments peints jaune et rouge restent intacts. Une nouvelle page mondes.html propose maintenant deux passages polygonaux étendus : mer de sel (fossile/pont, manivelle/volet) et citerne rouge (réserve/nacelle, vidange/pierres). Routes connues de 18,48 s et 31,33 s. Ce sont des prototypes courts, sans nouveaux ennemis, pas des niveaux achevés. Aucun jeu de dix minutes achevé n’est livré.

## Validation et limites

167 tests réussis à la dernière passe : simulation complète, collisions, reprises et sauvegardes, contacts, poses, caméras et nouveaux comportements. Plusieurs rendus Blender de contrôle inspectés, avec corrections consécutives. Ils ne sont pas des captures WebGL.

Nouvel essai navigateur à la dernière passe : WebGL 2 indisponible. Pas de contournement, de test iPhone physique, de benchmark GPU ou d’écoute critique du mix final. Les tests ne valident ni beauté ni naturel. Les études de Playdead sont documentaires et les anciennes observations par photogrammes sont identifiées ; aucune vidéo complète nouvelle prétendument visionnée.

La principale dette reste la validation du rendu réel. Artistiquement : vêtements encore sombres sous l’abri, architecture répétitive, usure peu localisée, plantes statiques. Animation : pivot sans pied ancré, nage procédurale, transfert de poids/remontée trop génériques. La compréhension de l’énigme sans texte n’a pas été éprouvée par un nouveau joueur. Le passage est une base améliorée, très loin d’une qualité équivalente à INSIDE.

## Reprise recommandée

Poursuivre le contenu, les événements d'ambiance et les matériaux des nouveaux passages, en priorité la mer de sel, encore trop courte. Ne pas multiplier les petites retouches du conservatoire au détriment de la progression. Valider le rendu WebGL et l'écoute dès que possible. Préserver les corrections de balance, gestes, animation, sauvegardes, V5 et Noël. Prochaine feuille de route précise : THREE-LEVELS.md.
