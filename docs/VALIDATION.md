## 14 novembre : causalité sonore corrigée

La musique de rafale s’efface progressivement sous les abris, y compris l’abri mobile. Plus de nouveaux grincements dus au seul maintien d’une commande immobile ; effort respiratoire lié au déplacement réel et à la poussée. 234 tests réussis, parcours et reprises conservés. WebGL cloud indisponible ; aucune écoute critique. Pas de nouveau niveau dans cette passe, extension après les refuges toujours prioritaire. Voir ITERATION.md pour les sources et limites.

---

## 14 novembre : refuge mobile en mer de sel

Le premier abri se déplace sur rails en maintenant l’action et en marchant. Protection et particules suivent sa position ; retour, lâcher, saut et reprise possibles. Barre accessible sans centrage exact, accessoires hors du trajet. 231 tests réussis et référence Blender CPU inspectée ; WebGL cloud toujours indisponible. Nouvelle option sur la séquence existante, pas un niveau supplémentaire. Détails, source et limites dans docs/ITERATION.md.

---

## 14 novembre : volet de sel corrigé

Volet de la mer de sel : traversée depuis l’arrière et blocage malgré une hauteur libre corrigés. Fermeture retenue si le passage est occupé, saut contre le dessous, reprise et retour possibles. Transmission et contrepoids visibles, montant avant aminci, cadrage local relevé. 225 tests réussis ; rendu Blender CPU inspecté, WebGL cloud indisponible. Aucun nouveau niveau ni durée supplémentaire. Voir ITERATION.md pour les limites et la suite.

---

# Galerie de décharge, 14 novembre 2026

220 tests réussis, validation-cistern-gallery.txt : parcours complets, bords et attentes sûrs, aller-retour aux deux jets, sauts, arrivées décalées, checkpoint 4, échec/reprise, pause, son et concordance des phases de la scène Three. Correction d'une rétrogradation de checkpoint pendant la décrue de vidange. Citerne 54,62 s en solution connue sans décès ; mer de sel 33,57 s. Deux références Blender CPU inspectées, jamais des captures navigateur. WebGL 2 encore refusé par le navigateur cloud. Aucun iPhone, FPS ou mix sonore validé. Les prototypes restent courts et leur découverte par un joueur non éprouvée. Détails et point de reprise dans ITERATION.md.

---

# Réservoir de nacelle, 14 novembre 2026

214 tests réussis, validation-cistern-transfer.txt. Parcours complets, arrêts décalés dans les deux sens, grille solide en marche/saut, fermeture occupée, retour depuis la grille et réembarquement sans reset, chute, pause et anciennes sauvegardes. Citerne connue 38,00 s sans décès, mer de sel 33,57 s. Deux rendus Blender CPU inspectés, dont une correction de montant occultant la silhouette. Nouvel essai cloud : WebGL 2 indisponible. Aucun iPhone ni écoute critique. Détails et limites dans ITERATION.md.

---

# Frein manuel, 14 novembre 2026

207 tests réussis : validation-ferry-brake.txt. Arrêt/reprise dans les deux sens, saut, éloignement, pause, checkpoint, mains et parcours complets. Rendu Blender inspecté ; WebGL cloud indisponible. Aucun iPhone ni écoute critique. Détails dans ITERATION.md.

---

# Nacelle et bruitages, 14 novembre 2026

203 tests réussis : validation-ferry-feedback.txt. Défauts reproduits dans le code précédent puis corrigés : arrêt lors du recul hors approche et pas pendant le transport immobile. Parcours complets conservés, retours, pauses, reprises, anciens checkpoints et synchronisation testés. Deux rendus Blender inspectés, le second dégage la silhouette après déplacement des suspentes. WebGL cloud toujours indisponible, aucune écoute critique ni essai iPhone. Détails dans ITERATION.md.

---

# Traversée suspendue ajoutée, 14 novembre 2026

La citerne comporte maintenant une nacelle à câbles après le bassin : embarquement, transport, débarquement et retour possibles, troisième checkpoint local. Route connue 35,40 s sans décès ; 196 tests réussis. Rendu Blender contrôlé, WebGL cloud toujours indisponible. Les trois passages restent courts. Sources, détails, limites et prochaine priorité dans ITERATION.md.

---

# Citerne hydraulique, 14 novembre 2026

192 tests réussis : validation-cistern-hydraulics.txt. Deux traversées de grille fermée reproduites puis corrigées (retour et saut). Contrôles de plafond, fermeture occupée, verrouillage, drainage, reprise, pause, anciens checkpoints et parcours complets des trois passages. Deux rendus Blender CPU de contrôle ; nouvel essai navigateur : WebGL 2 indisponible. Pas d'essai iPhone physique ni d'écoute sonore. Voir ITERATION.md pour portée, sources et limites.

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

# Validation du mécanisme de sel, 13 novembre 2026

176 tests réussis : `validation-salt-engine.txt`. Parcours complets simulés des trois passages ; pesée décalée, déchargement puis récupération, pause et cohérence géométrique du mécanisme testés. Rendu Blender `captures/salt-engine.png` inspecté. Chromium cloud refuse toujours WebGL (GL_VENDOR Disabled), repli visible observé. Aucun essai iPhone physique ni validation perceptive du son. Détails dans ITERATION.md.

---

# Validation corps / capture / plein écran, 13 novembre 2026

173 tests réussis : `validation-embodied.txt`. Les parcours complets des trois passages sont simulés, sans régression du contrepoids ni des sauvegardes. Voir `ITERATION.md` pour portée et limites. AudioContext du navigateur cloud a chargé et décodé les 15 MP3 ; pause et gains silencieux d'exploration vérifiés. La création de contexte WebGL reste refusée. Captures Blender CPU de la capture et de la silhouette de fond inspectées. Pas de validation GPU, iPhone physique ou écoute critique.

---

# Validation des trois passages 3D, 13 novembre 2026

167 tests réussis, sortie complète dans `validation-worlds-3d.txt`. Suite complémentaire audio réexécutée après avoir supprimé une fenêtre transitoire de gain au démarrage, avant la résolution de la promesse play(). Aucune écoute critique déduite de ces tests.

Parcours CPU : conservatoire 42,52 s, mer de sel 18,48 s, citerne rouge 31,33 s, zéro décès avec solution connue. Nouvelles situations testées : volet manqué puis nouvelle tentative, manivelle sous rafale, vidange partielle, immersion prématurée, reprise au second checkpoint, nacelle laissée trop longtemps puis rechargée, attente volontaire et double changement de monde. Squelette et cadrage réels Three évalués sur chaque image ; cela ne teste ni driver ni shaders.

Rendus Blender de contrôle inspectés et sauvegardés dans `captures/world-salt-3d.png` et `captures/world-cistern-3d.png`. Navigation accueil vers mondes vérifiée au navigateur cloud ; WebGL refusé (GL_VENDOR Disabled), message explicite affiché. Aucun test Safari/iPhone physique, FPS ou écoute de qualité sonore. Les nouveaux mondes sont des prototypes courts ; aucun ennemi inédit ni narration complète n'est livré dans ces deux passages.

---

# Baie vivante, 13 novembre 2026

156 tests réussis : validation-bloom.txt. Arrêt puis reprise dans la zone sûre, animation stable, cadrage sur trois formats et parcours complet. Rendu Blender inspecté et amélioré ; WebGL 2 toujours indisponible dans le navigateur cloud. Aucun essai iPhone physique. Voir ITERATION.md.

---

# Traction de berge, 13 novembre 2026

153 tests réussis : validation-shore-rise.txt. Corps relevé pendant l'appui, continuité, mains/pied, route complète et reprises vérifiés sur CPU. Rendu Blender inspecté, navigateur cloud WebGL 2 indisponible. Aucun test iPhone physique. Détails et limites dans ITERATION.md.

---

# Cadrage de berge, 13 novembre 2026

152 tests réussis : validation-shore-camera.txt. Traversée complète sans décès, transitions et cadre vérifiés sur CPU, rendu Blender inspecté. WebGL distant indisponible ; aucun iPhone physique testé. Voir ITERATION.md.

---

# Appui de berge, 13 novembre 2026

150 tests réussis, validation-bank-foot.txt ; traversée complète, pied et contacts, reprises et sauvegardes. Nouvel essai WebGL négatif, contrôle Blender uniquement. Limites détaillées dans ITERATION.md.

---

# Arrivée et présence, 13 novembre 2026

149 tests réussis : validation-living-scene.txt. Parcours complet 42,52 s sans décès, reprises et anciennes commandes conservées. Trois rendus Blender de la scène Three inspectés ; accès principal 3D vérifié dans le navigateur, WebGL 2 indisponible. Pas de test iPhone physique ni écoute critique du nouveau flutter. Détails dans ITERATION.md.

---

# Commandes tactiles, 13 novembre 2026

146 tests réussis : validation-left-jump.txt. Saut à gauche, réarmement, indépendance des pouces, annulations et transport natif simulés ; parcours complet du conservatoire via le reconnaisseur de gestes sans décès. Essai réel du glissement pointeur dans le navigateur Canvas 2D : un saut à gauche, aucun à droite, défilement [0,0]. WebGL 2 indisponible dans le conservatoire ; aucun iPhone physique testé. Détails dans ITERATION.md.

---

# Prise de berge, 13 novembre 2026

140 tests réussis, validation-swim-grip.txt. Suppression mesurée du déplacement instantané de 79 cm de la main à la prise ; continuité des deux mains et abandon de la préparation en repartant vers la gauche. Parcours entier, contacts, mécanisme et reprises conservés. Rendu de contrôle et limites dans ITERATION.md ; aucun test iPhone ou nouveau succès WebGL.

---

# Progression lumineuse du conservatoire, 13 novembre 2026

138 tests réussis, `validation-lighting-zones.txt`. Traversée complète simulée, modèles et contacts vérifiés, sauvegardes et balance conservés. Nouveaux contrôles : continuité des paramètres dans les deux sens, lumière de remplissage bornée, budget de lumières constant sur le parcours, une seule source avec ombres, aucune mutation de la simulation, retour au checkpoint déterministe. Une lumière ponctuelle sans ombre ajoutée. Ces contrôles ne mesurent pas le coût GPU ni la beauté du rendu.

Nouvel essai navigateur cloud via Sites : WebGL 2 indisponible, écran de repli et boutons désactivés observés. Pas d’essai iPhone physique. Rendus Blender et limites consignés dans ITERATION.md.

---

# Blocage de balance signalé par Thomas, 13 novembre 2026

136 tests réussis, validation-user-balance.txt. Avant correction, caisse décalée de 10/20/30 unités : aucune charge ni ouverture. Après correction, cinq placements jusqu’à 40 unités permettent charge et traversée ; retour depuis la grille fermée validé. Cas négatif hors plateau conservé. Corps et cadrage modifiés, vrais modèles et route entière recontrôlés par la suite CPU. Deux rendus Blender inspectés (balance et course), issus de la scène Three.js exportée sur CPU. Captures et limites détaillées dans ITERATION.md. Aucune capture WebGL de cette version ni écoute critique du mix final. Aucun test iPhone physique effectué par nous.

---

# Demi-tour, 13 novembre 2026

132 tests passent (validation-turn-3d.txt). Rotation progressive, absence de dépassement et cohérence à 30/60/120 Hz ; squelette fini sous inversions répétées. Route entière, mains, énigme, échecs et reprises préservés. Nouvel essai navigateur : WebGL 2 indisponible, repli affiché. Une référence Blender de demi-tour, distincte du moteur navigateur. Aucun iPhone physique ou FPS validé.

---

# Continuité du lâcher, 13 novembre 2026

130 tests réussis, validation-climb-release.txt. Nouveau contrôle des deux mains sur les trois remontées : déplacement inférieur à 1 cm au premier instant du lâcher, contre environ 40 cm pour la main gauche avant correction. Contacts jusqu’à t=0,34, fin du parcours sans décès et sauvegardes préservés. Deux poses Blender de sortie du bassin pour inspection, pas de capture WebGL ni test iPhone. Détails et limites dans ITERATION.md.

---

# Matières pierre/bronze, 13 novembre 2026

129 tests réussis, sortie validation-materials.txt. Traversée entière, collisions, retours après échec de timing et anciennes sauvegardes conservés. Nouveaux contrôles : textures déterministes, filtrage, partage de quatre cartes, formes et couleurs par sommet intactes, matériaux des personnages exclus. Facteur de couleur normalisé pour éviter la double teinte sur les pierres et bronzes peints.

Deux références Blender inspectées à 15,8 s et 30,6 s, avec export des UV et cartes réels du moteur. Le vêtement sous l’abri reste sombre ; le contrôle des matériaux ne résout pas ce manque de séparation. Ce contrôle ne valide pas les shaders WebGL. Pas de nouvel essai navigateur, pas de mesure de performance, iPhone physique ou écoute réelle. Détails et prochaine priorité dans ITERATION.md.

---

# Retour de charge et grille, 13 novembre 2026

126 tests passent, validation-balance-feedback.txt. Route entière inchangée et zéro décès. Tests ajoutés sur charge partielle/complète, collision pendant saut, dessous du battant ; géométrie du cadran vérifiée sur toute la traversée. Navigateur cloud réessayé : WebGL indisponible, écran de repli observé. Un rendu Blender inspecté, distinct du navigateur. Aucun iPhone physique ni écoute validés. Détails dans ITERATION.md.

---

# Balance 3D, 13 novembre 2026

124 tests réussis, validation-counterweight.txt. Parcours 3D complet de 2 553 états / 42,55 s / zéro décès ; parcours peint inchangé. Cas de fermeture, poids insuffisant, seuil occupé, retour sur caisse et anciennes reprises vérifiés. Deux rendus Blender de contrôle inspectés, premier cadrage corrigé. Pas de WebGL réel, iPhone ou écoute validés. Voir ITERATION.md pour la provenance et les limites.

---

# Acoustique contextuelle, 13 novembre 2026

119 tests passent, voir validation-acoustics.txt. Parcours entier conservé, zéro décès ; tests d’événements contextuels, signaux bornés, pauses, budget et persistance des volumes. Export audio hors navigateur de 44 s et 99 événements : crête 0,1001, sans saturation dans ce calcul. Ce n’est ni une écoute critique ni un test Web Audio réel. Aucun changement visuel ; aucun nouveau contrôle WebGL/iPhone. Détails et limites dans ITERATION.md.

---

# Gardien 3D, 13 novembre 2026

115 tests réussis, validation-guardian-3d.txt. Traversée complète inchangée et zéro décès. Vérification des coordonnées du mantelet, de son mouvement, de la prise de lanterne sur toute la poursuite et du bras relevé lors de la veille. Tests de contacts, cadrage refuge, sauvegardes et reprises conservés. Regroupement de géométries corrigé après détection d’attributs UV incompatibles.

Rendus Blender CPU inspectés, plan à 36 s et vues rapprochées de veille/course. Pas de validation WebGL nouvelle, de mesure FPS ni de test iPhone physique. Lumières, ombres et diffusion du verre peuvent différer du navigateur. Source privée publiée par le workflow Sites ; V5 inchangée.

---

# Refuge 3D, 13 novembre 2026

114 tests réussis, sortie validation-shelter-3d.txt. Traversée complète inchangée, zéro décès. Test géométrique de non-occultation de la tête par l’abri entre X 4660 et 4700, stabilité des lumières en coordonnées du monde et absence de cartes d’ombres supplémentaires. Anciens contrôles de contacts, sauvegardes et reprises passent.

Trois références Blender comparées à 29,7 s : éclairage seul, position des luminaires corrigée, puis caméra abaissée après constat d’occultation. Dernière vue inspectée : tête dégagée, buste et appuis plus lisibles. Les reflets lumineux restent spécifiques à ce rendu hors navigateur. Chromium cloud retesté : repli WebGL indisponible affiché. Aucun gameplay WebGL, FPS ou iPhone physique validé. Source Sites récupérée, publication privée, trailer V5 intact.

---

# Validation reprise et accroupissement 3D, 12 novembre 2026

112 tests réussis, sortie `validation-crouch-recovery.txt`. Parcours complet du conservatoire conservé (2 499 états, zéro décès), anciennes reprises et sauvegardes couvertes par la suite. Nouveau test de locomotion accroupie dans les deux directions : pieds de support fixes à 3 mm/image près après stabilisation, pied libre levé, mouvement du haut du corps, arrêt sans pédalage, tête sous le plafond. Mesure CPU complémentaire à 210 unités/s : dérive maximale 0,151 mm/image sur 49 échantillons d’appui, main 18,18 cm d’amplitude, articulation de tête Y 1,158–1,182 m.

Nouveau test de verrou : exclusion du second détenteur, refus du mauvais token, libération par le propriétaire, métadonnées nettoyées et inode stable. Vérification réelle de libération puis reprise du verrou de travail. Ancien checkout conservé intact, source officielle récupérée via Sites.

Chromium distant réessayé : création WebGL refusée, GL_VENDOR=Disabled / BindToCurrentSequence failed. Page de repli observée. Rendu Blender de contrôle à 29,7 s inspecté et conservé, sans assimiler sa lumière ou ses shaders au navigateur. La silhouette sous l’abri reste trop sombre. Pas de test physique iPhone, Safari, FPS ou nouvelle écoute. V5 inchangée : SHA-256 b55856f4ce0dd15a514fbc3fcc2172a92983ed318c0d0b4d5696f1937b0ea230.

---

# Validation cadrage 3D, 12 novembre 2026

110 tests réussis (`validation-conservatory-framing.txt`). Parcours complet et contacts conservés. Nouvelles assertions : personnage dans le cadre horizontal à chaque état, taille projetée de la silhouette debout entre 15 et 27 % de la hauteur ; mesure obtenue 16,3 à 20,8 %. La mesure porte sur la caméra Three et une hauteur de référence 1,69 m, pas sur un comptage des pixels visibles derrière les objets.

Inspection hors navigateur de la scène à 12 s et 14,3 s : proportions, cadrage, silhouette et caisse. Le rendu Blender de contrôle diffère du WebGL, notamment pour les faisceaux et le brouillard. Pas de validation WebGL supplémentaire ni de test iPhone physique. Aucune modification du teaser V5, de la musique, de la simulation ou des clés de sauvegarde.

---

# Validation de l’essai Conservatoire 3D, 12 novembre 2026

110 tests réussis, sortie dans `validation-conservatory-3d.txt`. Les 107 tests précédents restent inchangés et passent. Le nouveau contrôle charge les vrais GLB avec GLTFLoader et exécute le personnage, les transitions, la caméra et les matrices Three sur les 2 499 états de la traversée : fin atteinte, zéro décès, données finies. La simulation et ses paramètres sont inchangés.

Contrôles de géométrie : rayons vers les sols présents et absents, plateau à 3 m, canal et bassin ouverts ; skin et cinq clips réellement intégrés ; aucune dépendance distante. Haut du corps en course : amplitude de tête et de main mesurée ; contact de poussée à moins de 20 cm et mains au rebord à moins de 1 cm pendant l’appui. Ces bornes sont des vérifications de cohérence, pas une appréciation humaine de naturel. Le test a découvert une pose de course persistante à l’arrivée ; elle est corrigée.

Inspection des rendus Blender des assets puis export CPU de la scène Three, avec ses véritables maillages déformés, caméras et positions : caisse, poursuite, remontée et bassin. Corrections de l’appui au rebord, de la nage, de l’ancrage du véhicule et de l’éclairage. Références finales dans `captures/conservatory-3d-reference.png` et `captures/conservatory-3d-basin.png`. Ce sont des rendus Cycles de contrôle ; matériaux, brume et reflets peuvent différer de WebGL.

Chromium distant : initialisation WebGL refusée (`GL_VENDOR = Disabled`, `BindToCurrentSequence failed`). Aucun parcours rendu en WebGL ni mesure de FPS disponible. Repli avec aperçu fixe et lien vers le Convoi, boutons de jeu désactivés. Le bandeau ne laisse pas croire qu’une vidéo ou une partie tourne. Pas de Safari, iPhone physique, test tactile matériel ou écoute humaine nouvelle. L’essai est publié séparément à titre expérimental ; l’ancien jeu, les médias V5 et leurs sauvegardes ne sont pas remplacés.

---

# Validation Trailer V5, 12 novembre 2026

107 tests réussis, sortie conservée dans validation-trailer-v5.txt. Le nouveau test vérifie les durées en images des 21 plans, les intervalles distincts et un dernier état réel où le personnage est encore en chute, non nageur, avec poursuivant actif. Les parcours complets, contrôles, sauvegardes et animations précédents restent couverts. Aucun code du jeu modifié dans cette passe.

Export : 54,500 s, 1280 × 720, 30 i/s, H.264 Main niveau 3.1, YUV420p, AAC LC 48 kHz, 12 289 876 octets. Décodage FFmpeg intégral sans erreur. moov à l’octet 36 avant mdat à 61 147. Crête après AAC : -1,0 dBFS. RMS 0–5 s : -26,0 dB ; 26–34 s : -15,9 dB ; 34–42 s : -12,8 dB ; 42–46,12 s : -11,8 dB ; creux 46,12–46,42 s : -15,4 dB ; impact et début du titre 46,5–48 s : -11,5 dB ; 48–51 s : -17,7 dB ; fin 51–54,5 s : -23,6 dB. Mesures d’enveloppe et de présence audio, pas une écoute humaine ni une preuve de réussite émotionnelle.

Chromium distant : lecture réelle déclenchée par clic, média non muet, readyState 4. Progression observée à 18,08 s puis 42,78 s ; fin confirmée ended=true à 54,5 s, sans erreur média. Images du désert et de la citerne inspectées dans le lecteur. Photogrammes du MP4 final inspectés à 46,4 s (chute et poursuivant) et 50,5 s (titre). Captures dans docs/captures/trailer-v5-*.jpg. Aucun test Safari ni iPhone physique.

Références officielles Playdead étudiées par planches de photogrammes, pas en visionnage continu avec écoute. Sources, montage reproductible et limites dans TRAILER-V5.md. Audience privée conservée ; pas de nouvelle dépendance payante.

---

# Validation 0.11 / Trailer V4, 12 novembre 2026

106 tests réussis, sortie conservée dans validation-v011.txt. Nouveaux contrôles : amplitude verticale du bassin et de la tête, opposition des bras, phases de suspension, boucle de capture continue, retour aux interactions, maintien de l’accroupissement sous les obstacles, contacts des deux mains au rebord sur le parcours complet. Les anciens parcours, les sauvegardes, les commandes et les deux énigmes des fragments restent couverts.

Parcours connus : principal 52,47 s, convoi 41,65 s, désert 12,05 s, citerne 18,13 s, sans échec dans les simulations de référence. Ce ne sont pas des durées de découverte humaine.

Chromium distant : vue rapprochée de la course et plusieurs phases du cycle inspectées ; commandes de marche, d’arrêt, de ralenti et de lumière actionnées. Inspection de la remontée, de la nouvelle caisse et du gardien peint. Le banc du convoi a rendu les 2 499 états jusqu’à la fin, zéro erreur de rendu. Les reprises de prévisualisation pendant les exports ont interrompu un essai ; le parcours complet a été relancé après stabilisation des fichiers et terminé. Pas de mesure de FPS réel, pas de Safari ni d’iPhone physique.

MP4 final : 54,500 s, 1280 × 720, 30 i/s, H.264 Main niveau 3.1, YUV420p, AAC LC 48 kHz. 12 601 393 octets. Décodage intégral FFmpeg sans erreur. moov à l’octet 36 avant mdat à 61 154. Crête après AAC -1,3 dBFS. RMS début 0–5 s : -22,6 dB ; montée 30–40 s : -13,5 dB ; sommet 45–46,5 s : -11,5 dB ; début du titre 46,5–48 s : -12,5 dB ; résolution 49,5–51,5 s : -20,6 dB. Ces mesures attestent l’enveloppe et la présence du son ; elles ne constituent pas une écoute humaine.

Lecture Chromium du fichier V4 déclenchée par clic : son non muet, readyState 4, progression observée à 24,32 s, puis ended=true à 54,5 s, sans erreur média. Inspection des images extraites du MP4 final : nacelle rouge, poursuite et titre. Le lecteur utilise un nouveau poster V4 qui montre les accessoires mis à jour.

Limites : le contrôle esthétique définitif appartient à Thomas. La capture retargetée en 2D ne remplace pas toutes les animations contextuelles. Aucun test manuel complet de première découverte, aucune équivalence avec INSIDE déduite des tests. Sources et modifications dans ANIMATION.md, TRAILER-V4.md et ITERATION.md.

---

# Validation 0.10 / Trailer V3, 12 novembre 2026

103 tests réussis : anciens parcours et sauvegardes, course avec lumière et retour au repos, deux parcours complets nouveaux sans décès, contrepoids indispensable au pont, réserve et montée différée de l’élévateur avec passager, checkpoint après chute, absence de recouvrement des intervalles du montage.

Parcours déterministes connus : désert 12,05 s ; citerne 18,13 s. Ce ne sont pas des estimations de première découverte. Erreur initiale détectée dans le parcours rouge : saut trop précoce vers le radeau. Bord rapproché et trajectoire corrigés ; parcours final terminé sans décès. Ancien prototype et convoi toujours simulés par les tests et par l’export.

Inspection visuelle : six poses de course agrandies, planche de neuf plans, puis photogrammes extraits du MP4 final (désert, citerne, titre). Géométrie des bras revue après la première inspection. Les accessoires de la citerne restent visuellement plus simples que son fond peint.

Navigateur Chromium distant : ouverture des deux fragments, démarrage clavier, vérification visuelle, menu de pause et aide de la citerne. Le rechargement automatique de la prévisualisation a interrompu les essais pendant les modifications de fichiers ; vérification finale effectuée après export. Les parcours complets sont simulés, pas joués entièrement à la main dans le navigateur. Pas de Safari réel ni d’iPhone physique testé.

MP4 final : 54,500 s, 1280 × 720, 24 i/s, H.264 Main niveau 3.1, AAC LC 48 kHz, 11 872 969 octets. Décodage intégral FFmpeg sans erreur ; moov placé avant mdat (faststart). Crête après AAC -0,7 dBFS. RMS début 0–5 s : -25,5 dB ; climax 46,5–49 s : -10,7 dB ; résolution 49–51,5 s : -18,7 dB. Aucun silence introduit à l’apparition du titre. Mesures de niveau, pas une affirmation d’écoute humaine.

Lecture réelle déclenchée par clic, non muette ; progression observée à 38,31 s, titre à 53,67 s, puis ended=true à 54,5 s sans erreur média. Version finale sauvegardée comme version 3 du même fichier vidéo existant.

---

# Vérification du trailer V2 Crescendo, 12 novembre 2026

72,000 secondes, 1 728 images, 1280 × 720 à 24 images/s. H.264 YUV420p, AAC stéréo 48 kHz ; 21 664 072 octets. Décodage intégral FFmpeg sans erreur ; crête après AAC -1,4 dBFS. Le mixage atteint son plus fort passage autour de la coupe au titre à 64 secondes, puis conserve une résolution musicale jusqu’au fondu 70–72 secondes. Mesures d’enveloppe effectuées ; elles ne remplacent pas une écoute humaine.

Inspection de la planche de plans, des mots à leur taille d’export et dans une réduction 568 × 320, et du titre final à 69,5 secondes. Les 26 durées décroissent de 6 à 0,5 seconde. Titre organique inspecté à plusieurs étapes de croissance. La première version des reflets produisait des bandes de couleur trop abruptes ; interpolation continue adoptée, puis les huit secondes du titre ont été réexportées et remontées. Les PNG de travail ont parfois montré un rendu incomplet du Canvas ; la vérification finale porte sur des images extraites du MP4 encodé, pas sur ces PNG.

Lecture Chromium du MP4 V2 déclenchée par clic, son non muet, progression observée à 47,5 s et pendant le titre à 70,9 s, puis fin confirmée à 72 s sans erreur média. Captures extraites du fichier final dans `docs/captures/trailer-v2-*.jpg`.

96 tests existants passent ; aucun code de simulation, de contrôle ou de sauvegarde changé. Pas de test iPhone physique ou Safari réel. Les nouveaux décors restent des études visuelles ; ce montage n’ajoute pas de niveaux jouables.

# Vérification du trailer, 12 novembre 2026

60,000 secondes, 1 440 images, 1280 × 720 à 24 images/s, H.264 YUV420p et AAC stéréo 48 kHz. Décodage complet FFmpeg sans erreur. Crête mesurée après AAC : -1,4 dBFS. Le montage musical conserve une hausse nette entre le début et la partie orchestrale. Son appréciation reste subjective ; les mesures ne constituent pas une écoute humaine.

Les treize plans ont été exportés depuis les états de simulation du jeu et du convoi. Planche de photogrammes examinée ; révision des plans ambrés pour remplacer des répétitions du veilleur par le chariot, la nacelle et le quai qui cède. Titre final examiné. Le lecteur Chromium charge le MP4 avec une durée de 60 s et une définition de 1280 × 720 ; lecture déclenchée par clic, non muette. Aucun iPhone physique ni Safari réel testé.

96 tests existants réussis, dont parcours complets et sauvegardes. Aucun module du jeu ou de ses contrôles n’a été modifié. Le lien de l’accueil, le lecteur et les fichiers du trailer sont les ajouts livrés. Sources et limites dans TRAILER.md. Les trois nouveaux décors ne sont pas des niveaux achevés.

# Vérification 0.9.6

12 novembre 2026. 96 tests réussis, sortie conservée dans validation-v096.txt. Parcours convoi 41,65 s et principal 52,47 s, zéro échec. Deux tests nouveaux couvrent la dissipation de vitesse à l'entrée dans l'eau, la stabilité de flottabilité et le déclenchement unique de l'effet.

Chromium : inspection des états Plongeon (34,87 s), Berge (35,97 s) et Échelle (40,22 s), tous issus du parcours simulé. Capture captures/nacre-v096-surface.jpg. Pas de rendu exhaustif dans cette passe. Pas de test iPhone physique ni Safari, ni mesure de performance. La version 0.9.3 avait vérifié l'équilibre mais pas suffisamment l'entrée : le dépassement de profondeur est maintenant couvert par les tests.

# Vérification 0.9.5

12 novembre 2026. 94 tests réussis, sortie dans validation-v095.txt. Parcours principal 52,47 s et convoi 41,65 s sans échec via entrées simulées. Deux tests ajoutés pour saut et freinage du poursuivant. Le premier a détecté un dégagement insuffisant sur le bloc : corrigé avant validation finale.

Inspection Chromium des états Saut gardien (34,13 s) et Berge (35,97 s), capture captures/nacre-v095-bank.jpg. Deux clics ont signalé un délai du navigateur distant ; l'état final a confirmé les deux actions. Pas de rendu exhaustif, pas de mesure FPS, pas de test iPhone physique ou Safari. Animation procédurale simplifiée.

# Vérification 0.9.4

12 novembre 2026. 92 tests réussis (validation-v094.txt). Modification visuelle du gardien, sans changement de logique. Parcours du convoi entièrement rendu dans Chromium : 2 499 images, zéro erreur, fin atteinte. Capture de la fuite : captures/nacre-v094-guardian.jpg. Le navigateur distant a répondu lentement pendant le rendu exhaustif ; deux attentes automatisées ont expiré, puis le résultat final a bien été observé. Cela ne constitue pas une mesure de FPS.

Pas de test iPhone physique, Safari ou multitouch matériel. Animation procédurale ; aucune affirmation d'équivalence avec INSIDE.

# Vérification 0.9.3

12 novembre 2026. 92 tests réussis, résultat brut dans validation-v093.txt. Quatre nouveaux tests : flottabilité et retour contre la berge gauche ; inclinaison continue selon profondeur et distance à l’échelle ; indépendance de la pose du poursuivant ; animation des deux bras en nage. Le premier test a révélé une vitesse négative conservée contre le mur, corrigée par annulation de la composante entrante.

Parcours simulés sans échec : convoi 41,65 s, principal 52,47 s. Rendu dans Chromium des 2 499 états du convoi jusqu’à sa fin, zéro exception. Inspection visuelle à la nage et devant l’échelle ; capture captures/nacre-v093-swim.jpg. Les journaux consultés ne montrent que des erreurs de l’extension du navigateur.

Les captures proviennent d’états du vrai moteur piloté par des entrées simulées. Aucun test iPhone physique, Safari ou multitouch matériel. Aucune mesure de FPS ou de plaisir humain. Nage procédurale simplifiée, sortie automatique ; le poursuivant conserve encore l’apparence dérivée de l’héroïne. Cette passe ne démontre aucune équivalence avec INSIDE.

## Historique

# Vérification 0.9.2

12 novembre 2026. 88 tests réussis, résultat brut dans validation-v092.txt. Trois régressions ajoutées : les deux mains restent ancrées en coordonnées monde malgré les transformations du buste ; le mouvement élève le corps avant son transfert horizontal ; les bras ne s’allongent pas vers le rebord après le lâcher. Le parcours principal reste résolu en 52,47 s ; le convoi en 41,65 s sans échec.

Le navigateur distant Chromium a rendu les 2 499 états du convoi jusqu’à la fin sans erreur. Inspection de trois moments de la remontée (prise, traction et appui). La vérification a révélé un bras encore tendu vers l’ancien contact après le lâcher : corrigé, puis rendu intégral répété. Capture captures/nacre-v092-climb.jpg, issue du vrai moteur piloté par les entrées simulées. Journaux consultés : seulement des erreurs de l’extension du navigateur.

Aucun iPhone physique, Safari ou multitouch matériel testé. Pas de benchmark ni de première partie humaine. Les poses restent procédurales, la montée automatique, la nage et le poursuivant encore simplifiés. Les tests ne démontrent pas une qualité équivalente à INSIDE.

## Historique

# Vérification 0.9.1

12 novembre 2026. 85 tests Node réussis (validation-v091.txt), dont trois nouvelles régressions sur le refuge : protection et accroupissement jusqu’au bord extérieur, volume de détection partagé avec le faisceau et dégagement progressif, retrait du véhicule sans saut de position. Les tests d’échec prématuré, sauvegarde, nage et route complète restent valides.

Parcours principal simulé : 52,47 s. Convoi : 41,30 s, zéro échec, pilote observant maintenant le balayage plutôt qu’une durée d’attente. Le navigateur distant a rendu les 2 478 états du convoi jusqu’à la fin, sans exception. Inspection visuelle de la surveillance et du départ, capture captures/nacre-v091-depart.jpg. Seules des erreurs de l’extension étaient présentes dans les journaux consultés.

Cette passe ne reteste pas le tactile physique ni Safari. Aucun iPhone physique utilisé. Les tests de contrôles existants passent, mais la vérification visuelle nouvelle porte sur le refuge dans Chromium. La capture est un état du moteur piloté par des entrées simulées, pas une partie humaine. Aucune mesure nouvelle du plaisir, de la découverte ou des FPS. Personnage poursuivant, nage et remontée restent à améliorer.

## Historique

# Vérification 0.9

12 novembre 2026. 82 tests réussis : 69 tests conservés et 13 nouveaux sur Le convoi. Résultat brut : `validation-v09.txt`. Le parcours principal reste résolu en 52,47 s. L’étude du convoi est résolue en 41,77 s, sans échec, par entrées ordinaires simulées. Aucun de ces temps ne mesure une première découverte humaine.

Tests du convoi : route complète, détection d’une course aveugle, protection par les couverts, impossibilité de franchir le grand mur sans caisse, poussée/traction et freinage, poursuite, échec à la sortie prématurée du refuge, attente du départ de la patrouille, plafond bas, nage et arrêt du poursuivant à la berge, pause, longueurs des jambes accroupies, restauration des cinq checkpoints.

Le banc navigateur a rendu les 2 506 états successifs de la route avec le moteur réel : fin atteinte, zéro exception. Inspection visuelle des scènes principales et captures `captures/nacre-v09-convoi.jpg`, `nacre-v09-shelter.jpg`, `nacre-v09-water.jpg`. Ce sont des états d’un parcours simulé, pas une partie humaine complète. Les bancs temporaires sont retirés du site avant publication ; leur générateur reste dans scripts.

Contrôles interactifs : démarrage et déplacement clavier, pause Échap. Dans un cadre tactile simulé 844 × 390, geste gauche : x130 à x189, zéro saut ; toucher droit : un saut. Défilement du cadre nul et aucun pointeur restant après relâchement. En 390 × 844, écran de rotation visible, partie et musique en pause ; retour paysage conservant la pause, Reprendre remet la partie et la musique en lecture. Les deux médias étaient à readyState 4. Les journaux finaux consultés ne contiennent que des erreurs de l’extension du navigateur, pas du jeu.

Corrections issues de la vérification : faisceau traversable sans réfléchir, jambes accroupies trop repliées, argument de dessin erroné provoquant un arrêt du rendu, véhicules doublés ou apparaissant hors du chemin, panorama finissant sur une bande vide, ombre suivant le joueur en l’air et masses trop plates. Le parcours et le rendu intégral ont été revalidés après correction.

Limites : navigateur distant Chromium, pointeur et détection tactile simulée. Aucun iPhone physique, Safari, véritable écran multitouch ou mesure fiable de FPS. Pas d’écoute humaine revendiquée. Rendu du convoi en Canvas 2D. Animation, collisions, éclairage et poursuivant restent simplifiés. Les tests ne valident pas une qualité comparable à INSIDE.

## Historique

# Vérification 0.8

12 novembre 2026. 69 tests réussis, dont parcours complet simulé sans chute. Quatre tests nouveaux : retour local du pouce après un grand glissement ; indépendance du maintien droit et du déplacement gauche ; quai franchissable avec 0,4 s de réaction ; échec après 0,8 s d’attente. Départ de ces deux derniers scénarios : x2500, saut à proximité de x2750. Ce ne sont pas des mesures de réaction humaine.

Le centre suit le pouce à 20 pixels maximum ; revenir dans sa zone neutre de 6 pixels arrête la commande, puis la traverser inverse le mouvement. Le rôle de chaque doigt reste fixé à son appui initial.

Quai : délai de rupture 0,85 s, vitesse du front 360 ; animation et collisions utilisent les mêmes constantes. Inspection visuelle dans le navigateur du moteur à x3040, front x2794, zéro chute : fragments tombants, trajectoire et cadrage visibles. Capture `captures/nacre-v08-quay.jpg`. Scène avancée par entrées simulées et figée, pas une partie humaine complète. Banc QA supprimé de la livraison. Pas de test Safari ou iPhone physique.

## Historique

# Vérification du prototype 0.7

12 novembre 2026. 65 tests de non-régression passent après remplacement du rendu du personnage ; logique et paramètres de mouvement inchangés.

Comparaison dans le navigateur du moteur de personnage ancien/nouveau, à taille réelle et agrandi × 4 : repos, course, traction et prise du miroir. Vérification de l’intégration dans le jeu normal, démarrage et déplacement au clavier. Capture de comparaison : `captures/nacre-v07-comparison.jpg` (ancien à gauche, nouveau à droite). Cette capture provient du moteur, pas de l’illustration seule.

Nouveau haut du corps : une image continue, sans tête ou cou détachés ; seuls les pans sous la taille sont déformés. Les bras et jambes restent animés par les mêmes appuis au sol. Mains redessinées, bottes réduites, palette des membres rapprochée du manteau. Image RGBA convertie en WebP, transparence conservée. Pas de test iPhone physique. Les erreurs récentes consultées dans la console sont celles de l’extension du navigateur.

Les fichiers temporaires de comparaison sont retirés avant publication. La capture et l’original restent dans le dépôt. Les tests vérifient la non-régression technique, pas la beauté ni le plaisir de jeu.

## Historique 0.6

# Vérification du prototype 0.6

12 novembre 2026. 65 tests Node réussis, aucun échec : audio 4, chapitres 13, contrôles 11, transport 6, logique 18, mouvement 7, présentation 6.

Parcours intégral par entrées ordinaires simulées : 52,47 secondes, sans chute, solution connue. Ce résultat vérifie la faisabilité, pas la durée de découverte ni l'intérêt ludique.

Vérification navigateur : portrait tactile simulé 390 × 844 avec écran de rotation, paysage 844 × 390, geste horizontal de 24 pixels atteignant 320 unités/s. Rotation depuis le jeu : pause, touches libérées, musique suspendue ; retour paysage conservant le menu Reprendre. Défilement observé nul. Aucun test sur iPhone physique ou Safari réel.

Inspection de scènes du moteur avancées par la politique de test puis figées : miroir tenu et contact des mains, retour du faisceau, pont, course, nacelle, observation, floraison. Capture `captures/nacre-v06-mirror.jpg`. Ces images ne sont pas une partie humaine intégrale. Les fichiers QA temporaires sont supprimés de la livraison.

Tests additionnels : maintien de l'action avant d'arriver à portée, apprentissage de la plante puis passage acquis, retour du miroir et liberté de quitter son contact, longueur des membres pendant démarrage/freinage/demi-tour, interpolation sans modifier la simulation et sans lisser les téléportations.

Le navigateur distant utilise Canvas 2D. Les performances physiques iPhone et la passe WebGL restent à vérifier. La suppression du dessin des éléments hors champ réduit le travail demandé, sans prétendre mesurer un gain de FPS ici. Les erreurs récentes consultées dans la console appartiennent à l'extension du navigateur.

## Historique 0.5

# Vérification du prototype 0.5

12 novembre 2026.

## Contrôles automatisés

56 tests Node réussis : 18 sur le premier tableau et le parcours complet ; 13 sur les mécanismes suivants ; 10 sur les gestes ; 4 sur le transport et le mixage audio avec médias simulés ; 6 sur les événements tactiles et pointeur ; 5 sur la locomotion.

Couverture : accélération, arrêt, tolérance et mémorisation du saut, charges séparées, miroir, passage temporaire, dissimulation, reprise, effondrement, contrepoids, friction, porte, rappel et déplacement vertical de la nacelle, impossibilité de passer dessous, exposition, refuges, charges persistantes, progression sans régression des checkpoints. Les gestes testent les deux pointeurs simultanés, l'absence de saut à gauche, la saisie à droite, l'annulation et une action conservée si le rendu tarde entre pression et relâchement.

Le parcours intégral utilise uniquement les entrées ordinaires de la simulation. Fin atteinte sans chute en 59,87 secondes avec solution connue. Ce temps ne représente pas une première partie humaine.

Audio : démarrage des deux médias dans le geste d'activation, fondu identique à 15 et 60 images/s, pause/reprise sans retour au début, volumes indépendants. Ces tests ne remplacent pas Safari iOS.

## Vérifications conservées de la version 0.4

- Inspection des vues desktop 1280 × 720, paysage 844 × 390 et portrait 390 × 844.
- Personnage, traction, nacelle en cours de montée, nouvelle présence, résonateurs et floraison inspectés.
- Un geste vertical réel de pointeur à gauche conserve le compteur de sauts à zéro ; le même geste à droite le fait passer à un. La prise de graine a également été observée.
- Après rechargement, Continuer reprend à x = 4480 avec la lumière, le contrepoids placé et l'écluse ouverte.
- Deux médias à readyState 4, sans erreur de décodage, état audio running/playing et temps de lecture en progression. Le fondu de zone et son retour ont été observés dans les diagnostics.
- Les deux panoramas locaux sont chargés ; le sprite de la présence est visible avec son alpha.
- Le navigateur de vérification utilise le repli Canvas 2D ; WebGL n'y est pas disponible.

Un banc temporaire a avancé le moteur par ses entrées pour présenter chaque scène, figée pour inspection. Les captures de `docs/captures` sont des captures de ces scènes réelles, pas d'une partie humaine complète. Ce banc, ses scripts et son entrée dans le jeu ont été supprimés avant publication.

## Corrections après inspection

Matières du chariot et de la terrasse retravaillées ; présence plate remplacée par un sprite original texturé et animé ; deux mains au contact du chariot ; cadrage portrait rapproché ; ombre de contact sur le niveau réel de la plateforme ; maintien tactile conservé même après une image longue ; fondu audio fondé sur le temps et non sur le nombre d'images ; checkpoint empêché de régresser en revenant sur ses pas ; architecture conservée jusqu'à sa sortie du cadre.

## Vérifications supplémentaires de la version 0.5

- Nouveau visage et costume chargés depuis l’atlas local, transparence conservée. Inspection agrandie des poses de course et de repos ; inspection en jeu en paysage 844 × 390 et en portrait 390 × 844.
- Déplacement horizontal au pointeur : x passe de 190 à 663. Un déplacement oblique à gauche ne produit pas de saut. Geste vertical à droite : compteur de sauts de 0 à 1.
- Sur ces manipulations, les diagnostics indiquent scrollX = 0, scrollY = 0 et sélection vide. Après relâchement, activeTouches = 0. Ces manipulations utilisent le pointeur distant, pas un écran multitouch physique.
- Le menu de pause défile indépendamment : scrollTop atteint 77 pour clientHeight 390 et scrollHeight 467. Le curseur de musique est modifiable. À la reprise, le focus revient au document, aucune zone de saisie ne reste active.
- Le format portrait rend un canvas 390 × 844, avec un personnage visible et des commandes accessibles. La bascule de format annule les entrées maintenues.
- Atlas original prêt ; deux fichiers musicaux à readyState 4, sans erreur de média, pause et reprise observées.
- Vérification finale en plein navigateur 1363 × 936 : déplacement clavier, changement de volume au clavier puis reprise par Échap depuis le curseur, focus revenu au document. Aucun avertissement ou erreur du jeu dans le journal consulté. Capture : `docs/captures/nacre-v05-game.jpg`.
- Tests d’événements : preventDefault sur événements tactiles annulables, deux touches indépendantes, coordonnées locales à la surface, exclusion des événements pointeur de compatibilité, annulation et reprise, souris sur appareil tactile, menus non capturés.
- Tests de locomotion : cadence autour de 3,14 pas/s, appui stable dans le monde pendant sa phase de support, arrêt sans saut de pose, continuité numérique du saut et de la réception, recul en regardant l’objet tiré.

Les pages temporaires `qa-mobile.html` et `qa-motion.html` ont servi à dimensionner le vrai jeu et à afficher des poses du vrai moteur. Elles sont supprimées de la livraison. Le banc ne modifie pas les réglages de physique ou de vitesse du jeu.

## Changements après inspection en 0.5

Jambes libres repliées plus tôt dans la foulée, appuis moins précipités, buste amorti, tête en contre-rotation légère, costume et écharpe avec retard de mouvement. Position des épaules corrigée pour couvrir la jonction du costume. Appui de repos redressé, bottes moins détourées, écharpe retombant à l’arrêt. La cadence des bruits de pas suit la longueur de foulée.

La capture tactile est explicite, avec événements non passifs. Les sélections, menus contextuels, glissements d’images et gestes de zoom sont neutralisés sur la surface jouable. Le focus des réglages est libéré au retour en jeu. Les ancêtres de la surface permettent le défilement des menus ; seule la surface de jeu interdit ses gestes natifs. La taille de rendu est mesurée sur le canvas, dans le cadre stable en `100svh`.

## Limites

Aucun iPhone physique, Safari iOS ou écran réellement multitouch testé. Le navigateur distant peut suspendre la simulation entre les actions : son compteur de fréquence ne constitue pas un benchmark matériel. Pas d'écoute humaine revendiquée, ni de mesure du plaisir ou de la durée de découverte auprès de nouveaux joueurs. La passe WebGL et sa reprise après perte de contexte n'ont pas été exécutées dans ce navigateur.

La tête et le costume sont illustrés, mais leur animation et celle des membres restent procédurales. Les collisions sont simplifiées et la présence suit un cycle déterministe. Les gestes de bord du système et les commandes de Safari hors de la page ne peuvent pas être désactivés par ce jeu. La finition et la profondeur d'INSIDE ne sont pas atteintes. Les tests valident des comportements, pas une équivalence artistique.
