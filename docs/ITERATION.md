# 14 novembre au soir : serre complète en 3D, lisière et remplissage des cuves

Source Sites 65 reprise par le workflow, commit 5c829dcb343b473f50eefcf34063f0b1ef3e054f. Dépôt initialement propre, verrou nominatif. Objectif prioritaire révisé par Thomas : sortir des micro-correctifs, porter réellement la serre peinte, livrer une étude forestière et corriger les effets incohérents de remplissage.

## Changement effectif

- **Serre retrouvée (`serre.html`)** : toute la progression de la serre peinte passe dans une scène Three.js dédiée. Graine cachée devant l’iris, miroir à rappel, deux racines et passerelles temporaires, iris du pont, effondrement et saut, chariot sur plaque, rappel et montée de nacelle, écluse, deux résonateurs et surveillance, offrande et floraison. Voyageuse skinnée, prise du miroir/chariot, graine tenue, architecture en profondeur, matières locales, oiseau perché puis envol à l’approche. Charge du chariot par chevauchement réel de 60 %, plaque visible de 110 unités. Écluse solide dans les deux sens, hauteur libre et dessous pris en compte. Logique isolée dans serre-logic.js : la version peinte et le trailer ne changent pas.
- **La lisière (`lisiere.html`)** : forêt en profondeur, racines retournées à couvert, caisson et talus, garde et poursuite, refuge sous un arbre, sortie surveillée, deux chiens originaux articulés, fuite vers l’eau, nage et remontée. Un oiseau s’envole à l’approche. Les chiens arrivent depuis l’arrière-plan au lieu d’apparaître au contact ; leurs sauts sont calculés séparément. Le phare suit le véhicule. Ce passage adapte explicitement la logique et la disposition du Convoi : il ne contient pas une nouvelle famille d’énigmes et ne reproduit pas les sept premières minutes d’INSIDE. C’est une étude courte et distincte, pas l’achèvement de la demande.
- **Cuves** : le jet de la réserve embarquée rejoint sa surface réelle, avec débit perdu quand elle n’est que partiellement sous le jet. Eau translucide, surface séparée, flotteur et vide cohérents. La première réserve a une fenêtre frontale ; son volume d’eau et sa jauge suivent le remplissage réel, pas la pression instantanée.
- Bruitages locaux enregistrés dans les nouveaux passages ; aboiements CC0 de Brandon Morris, source et transformation dans RECORDED-FOLEY.md. Musique ponctuelle, forêt plus sèche acoustiquement, sauvegardes propres aux nouveaux passages et réglages persistants. Pas d’écoute critique revendiquée.

## Sources étudiées et observation réelle

Voir **FOREST-REFERENCE.md** : clip primaire Playdead Forest de 68,2667 s observé par **68 photogrammes à 1 Hz**, séquences et timecodes consignés. Ni visionnage continu ni écoute de la bande-son. Documentation audio primaire et soluce écrite complémentaires ; tentative de lecteur GameSpot infructueuse. Leçons appliquées : annonce avant contact, alternance attente/déplacement/fuite, refuge identifiable, eau qui interrompt la poursuite. Aucun asset, décor ou musique Playdead importé.

## Contrôles et limites

**280 tests Node réussis** dans validation-serre-forest.txt. Routes complètes simulées de la serre (52,47 s, zéro chute), de la forêt (41,65 s, zéro capture), du conservatoire et des deux mondes. Ce sont des durées en solution connue, pas des durées de découverte. Échec et reprise, recharge des quatre checkpoints de serre, checkpoints forêt, retour vers le danger, caisse dans les deux sens et saut depuis la prise, chariot décalé ±40, écluse aller-retour et jet à vide/partiel/plein. Matrices des acteurs et chiens, positions des plateformes et cadrages contrôlés sur CPU.

Rendus **Blender CPU** inspectés : serre au miroir et à la nacelle, forêt à couvert et en poursuite, cuve à 35 %. Après inspection : panneaux de serre espacés, couvert forestier moins rectangulaire, éclairage de silhouette augmenté. Trois références finales sont conservées dans captures/serre-port-cpu.png, forest-cover-cpu.png et tank-fill-cpu.png. Elles ne sont pas des captures WebGL. Le navigateur cloud a refusé WebGL avec GL_VENDOR Disabled ; un nouvel essai en fin de passe a aussi échoué au délai de connexion. Aucun jeu réel navigateur, contrôle iPhone physique, FPS ni qualité sonore perceptive validés. Les exports Blender ne reproduisent pas exactement brouillard, transparences et éclairage Three.

## Reprise

Les nouveaux passages enrichissent le contenu accessible mais restent courts et stylisés. La forêt réutilise les étapes du Convoi et les décors demandent encore une composition plus organique. Prochaine priorité substantielle : prolonger la serre par une énigme physique réversible issue de l’écluse (écoulement, contrepoids et trajet de retour), puis développer la forêt au-delà du parcours Convoi. Ne pas qualifier le résultat de reproduction aboutie d’INSIDE. Vérifier le rendu et le mix dans un navigateur WebGL dès que disponible. Garder les correctifs d’arches, gardien, balance, caisse et berge. Mandat complet dans MANDAT-THOMAS-14-NOV.md ; reprise horaire existante actualisée sans doublon, sans promesse de quatre heures continues. Sites privé ; miroir public autorisé sur Nacre et confluenceofminds.com. Noël et publications sociales intacts.

---

# 14 novembre, reprise 18 h : retour vers la berge d’entrée

Source Sites 64 récupérée via le workflow, commit 41b9b91eb71e79781e250a00c412afeae2806cab ; dépôt propre et verrou nominatif. Deux tests reproduisent la limite invisible du bassin à gauche : la nage restait bloquée sans pouvoir prendre le quai. Le gardien attend cependant à cet endroit ; ce retour n’est donc pas un refuge sûr.

Le conservatoire permet désormais la prise et la remontée vers la gauche. Anticipation des mains, traction du bassin et pied de soutien sont adaptés au côté du quai. La présence du gardien conserve sa conséquence : capture pendant le retour puis reprise au checkpoint 5. Aucune immunité ajoutée. Le trajet normal vers la droite, la balance, le saut depuis la caisse et le sillage restent préservés. Aucun changement au Convoi peint.

270 tests réussis (validation-bank-return.txt). Deux scénarios isolent la locomotion à 30/60 Hz en éloignant le gardien dans le test seulement, puis vérifient retour, replongée et sortie droite sans mort. Un scénario conserve le gardien réel et vérifie capture/reprise ; un contrôle CPU vérifie le pied gauche au-dessus du quai. La suite complète conserve les parcours et sauvegardes des trois passages. Rendu Blender CPU inspecté : voyageuse au rebord et gardien présent sur la berge (captures/bank-return-cpu.png dans Sites). Ce n’est pas une capture WebGL. Nouveau contrôle Chromium : WebGL 2 indisponible, boutons de jeu désactivés. Aucun essai iPhone ni écoute critique.

Sources lues : https://origin.ludo.guide/guide/inside/chapter-24 décrit les retours entre eau, chiens et clôture ; https://blog.playdead.com/articles/inside_presentations/inside_publications.html répertorie les présentations sur l’animation interactive. Lecture textuelle seulement, aucune nouvelle vidéo, transcription, photogramme ou timecode. Leçon appliquée : permettre le geste de retour et faire porter sa conséquence par le danger présent plutôt que par une limite invisible. Aucun asset Playdead. Cette relecture n’élargit pas la couverture vidéo.

Ce changement ne constitue pas la nouvelle énigme attendue. Les trois passages restent courts. Prochaine priorité : séquence physique réversible avec refuge utile et conséquence visible, sans multiplier les petits correctifs sauf blocage réel. Mandat trois ambiances, Sites privé, copie publique autorisée, Noël/social hors périmètre ; aucune nouvelle automation ni achat.

---

# 14 novembre, reprise 17 h : sillage du bassin

Source Sites 63 récupérée via le workflow, commit f425d55badacb155b5b2a034fd3a087e7fa6c718. Dépôt propre et verrou nominatif avant édition. Objectif : remplacer l’anneau de nage collé au personnage par une trace de son déplacement dans l’eau.

Les ondulations sont désormais laissées à leur position de naissance, s’élargissent et s’effacent en 2,2 secondes. Le déplacement réel déclenche leur émission ; un arrêt n’en crée plus, un demi-tour laisse les anciennes derrière lui. Douze maillages réutilisés bornent le coût. Pause, reprise, téléportation et retour du temps remettent correctement cet historique local ; rien n’est ajouté aux sauvegardes. Les quatre éclaboussures d’entrée restent présentes. Collisions, commandes, remontée et musique inchangées.

266 tests réussis dans validation-water-wake.txt, dont trois tests du sillage : positions fixes, retour, arrêt, pause, berge, reprise et parcours complet simulé sans mort. La suite couvre aussi les autres passages et sauvegardes. Nouveau contrôle Chromium cloud : création du contexte WebGL refusée, GL_VENDOR Disabled. Aucun contournement, aucune validation GPU ou iPhone. Rendu Blender CPU du bassin inspecté (captures/wake-cpu.png dans Sites) : composition et personnage visibles, mais les anneaux sont trop discrets dans cet export pour valider leur apparence. Le convertisseur transforme les matériaux non éclairés Three en matériaux éclairés Blender ; ce rendu n’est pas une capture du jeu. Pas d’écoute critique dans cette passe.

Sources lues : index primaire https://blog.playdead.com/articles/inside_presentations/inside_publications.html, notices des présentations sur les effets discrets ; https://origin.ludo.guide/guide/inside/chapter-25, texte du passage échelle/passerelle puis observation des gardes à couvert. Lecture textuelle uniquement, aucune vidéo, transcription ou série de photogrammes nouvelle ; aucun timecode disponible. Leçon appliquée propre à NACRE : une trace physique discrète persiste après le geste puis rend la place au calme. Le sillage n’est pas présenté comme un effet observé dans INSIDE. Aucun asset Playdead importé.

Cette passe améliore le retour visuel de la nage, sans ajouter de séquence ni d’énigme. Les trois passages restent courts. Prochaine priorité : réaliser la séquence physique réversible du conservatoire avec refuge utile et conséquence visible ; vérifier auparavant le sillage sur un moteur WebGL disponible. Mandat de trois ambiances, privé Sites et copie publique autorisée conservés. Aucun achat, nouvelle automation ou modification Noël/social.

---

# 14 novembre, reprise 16 h : traction de caisse contre le mur

Source Sites 62 récupérée via le workflow, commit 2d556e2cc9f37e4b4afcbdc4ae78d6bb642cac08. Dépôt propre et verrou nominatif. Avant extension, défaut physique reproduit en tirant la caisse depuis son côté droit vers le mur : le personnage s’arrêtait à x2578 mais la caisse avançait jusqu’à x2538, réduisant leur séparation de 65 à 40 unités et pénétrant dans le corps. Trois tests échouaient avant correction.

Le blocage du corps se transmet maintenant à la caisse tenue : sa position conserve la distance de prise et sa vitesse est recalculée sur son déplacement effectif. À l’arrêt contre le mur la caisse reste à x2513, personnage x2578. Repartir à gauche, relâcher ou sauter reste possible. La correction est limitée au conservatoire ; aucun changement du Convoi peint/V5. Le saut à deux pouces, la balance sans centrage parfait, la floraison et les corrections des arches/gardien sont préservés.

263 tests réussis dans validation-crate-contact.txt. Trois nouveaux scénarios couvrent toute l’approche à 30/60 Hz, le maintien contre le mur, le retour, le saut, le lâcher et la récupération du checkpoint. Les parcours complets des trois passages et les sauvegardes restent couverts. Validation par simulation uniquement ; aucun nouveau rendu Blender, essai WebGL, écoute critique ou test iPhone. Les maillages sont inchangés ; leurs positions suivent la correction physique. Dernier contrôle navigateur de la passe 14 h : WebGL 2 indisponible, sans nouvelle conclusion matérielle aujourd’hui.

Sources relues : https://blog.playdead.com/articles/inside_presentations/inside_publications.html (notice animation interactive), https://origin.ludo.guide/guide/inside/chapter-24 (texte de la séquence bassin/clôture, manipulation et retour). Lecture textuelle seulement, pas de vidéo, photogrammes ou timecodes nouveaux. Application propre à NACRE : une manipulation doit rester cohérente lors d’un retour ou contre un obstacle, pas uniquement dans la solution idéale. Aucun asset Playdead importé. Cette relecture n’élargit pas la couverture étudiée du jeu.

Le mandat de trois niveaux distincts, la priorité aux bugs réels, Sites privé et la copie publique autorisée restent conservés. Aucun achat, nouvelle automation ou modification de Noël/social. Ce correctif supprime une pénétration ; il n’allonge pas les trois prototypes, qui restent courts. Prochaine priorité : réaliser la séquence physique réversible du conservatoire, avec conséquence visible et refuge utile. Bilan cumulatif dans ETAT-JOUABLE.md.

---

# 14 novembre, reprise 15 h : saut en quittant la caisse

Source Sites 61 récupérée via le workflow (ec31b5a02abf579828c081787df07150e3342277), dépôt propre, verrou nominatif. Objectif modifié après reproduction d’un blocage de commande : maintenir action avec le pouce droit puis demander le saut gardait la prise et annulait le saut. Le pilote idéal relâchait action ; un parcours conservant action lors des sauts ne terminait pas. Six tests échouaient avant correction.

Le saut prend désormais priorité sur la prise dans le conservatoire : il libère la caisse pour permettre le saut ou la prise du rebord. La commande reçue n’est pas modifiée en place ; seule sa copie transmise au moteur ignore action sur cette impulsion. Poussée, traction et inertie restent inchangées. Aucun changement au Convoi peint, à ses règles ou au trailer V5. La balance accepte toujours les placements décalés. Aucun nouveau niveau ni énigme ajouté.

260 tests réussis dans validation-grip-jump.txt, dont six nouveaux scénarios : saut depuis les deux côtés à 30/60 Hz, action et saut simultanés dès la première prise, parcours complet avec action maintenue lors de chaque saut. À 30 Hz l’approche peut amorcer la remontée sur la caisse dès la première frame ; le test accepte cette transition physique et vérifie aussi l’événement de saut. Reprises, sauvegardes et parcours des trois passages restent couverts par la suite existante. Validation de simulation uniquement : aucun nouvel essai WebGL, écoute sonore, rendu Blender ou iPhone dans cette passe. Géométrie et éclairage inchangés ; la dernière vérification navigateur (passe 14 h) refusait WebGL 2.

Sources relues : index primaire https://blog.playdead.com/articles/inside_presentations/inside_publications.html (notice animation interactive) et soluce https://origin.ludo.guide/guide/inside/chapter-24 (alternance manipulation, fuite et retour par la clôture). Texte seulement, aucune vidéo visionnée, transcription, photogramme ou timecode nouveau. Leçon appliquée propre à NACRE : permettre de quitter une manipulation par le geste de déplacement demandé, sans exiger un ordre de relâchement des pouces. Cette règle n’est pas présentée comme un comportement observé d’INSIDE. Couverture complète de ses séquences toujours à faire.

Mandat conservé : trois ambiances 3D, rythme contemplatif et physique, corrections avant extension, Sites privé et miroir public autorisé ; aucun achat, nouvelle automation ni modification sociale/Noël. Prochaine priorité inchangée : séquence physique complète et réversible du conservatoire. Les trois prototypes restent courts ; cette correction de commande ne constitue pas leur extension. Bilan cumulatif dans ETAT-JOUABLE.md.

---

# 14 novembre, reprise 14 h : rencontre vivante dans la baie

Source Sites 60 récupérée avec le workflow, commit 4597f3d3d9ee148f3ea1fec72ccac50e5cc48f7a. Dépôt propre et verrou nominatif avant édition. Objectif borné : donner une réponse visible à l’arrivée dans le répit final du conservatoire, sans ajouter de marche ni imposer une attente.

La floraison déjà présente s’ouvre progressivement après la remontée, lorsque le personnage approche (x > 7240). Ses coques s’écartent, le cœur devient plus émissif et quatorze graines flottent au-dessus. Au retour, elle se referme progressivement. Le joueur peut attendre, repartir ou terminer immédiatement ; aucun verrou de commande, changement de collision ou délai de sortie. Animation originale par déformation d’échelle des coques, pas simulation botanique. Pas de nouvelle lumière, texture, musique ou asset externe. La pause fige l’état ; une reprise au checkpoint réinitialise la rencontre. Les sauvegardes existantes restent acceptées.

254 tests Node réussis, dont quatre nouveaux tests couvrant approche, attente, retour, pause, ancien état, reprise et parcours complet sans attente obligatoire. Contrôle de la géométrie Three sur CPU : transformations finies, ouverture et émission, volume hors de la voie. Deux références Blender à position identique comparent fermeture et ouverture. Ce sont des rendus CPU hors navigateur, pas des captures WebGL. Nouvel essai du conservatoire dans Chromium cloud : contexte WebGL 2 indisponible, jeu désactivé. Aucun essai iPhone, mesure de fluidité ou validation perceptive sonore. Détails et commandes dans BLOOM-ENCOUNTER.md, résultats dans validation-bloom-encounter.txt.

Sources consultées : https://blog.playdead.com/articles/inside_presentations/inside_publications.html (notices Subtleties of INSIDE et Turn it Down 90%, lecture de l’index seulement) ; https://origin.ludo.guide/guide/inside/chapter-24 (texte de la soluce, chiens au fond, bassin et retour à la clôture, déjà étudié à la passe précédente). Aucune conférence ou vidéo visionnée, aucun photogramme ni timecode nouveau. Application de conception propre à NACRE : une petite réaction au joueur donne un motif de s’arrêter dans un répit après la menace. La floraison n’est pas empruntée à INSIDE. Couverture vidéo complète toujours non réalisée.

Mandat de Thomas conservé : trois ambiances 3D distinctes, contemplation contrôlable, énigmes physiques et corrections des bugs réels avant extension, diffusion Sites privée et copie GitHub publique autorisée. Aucun achat, nouvel abonnement, automation ou changement social/Noël. Les corrections des arches, du gardien et de la balance sont préservées. Cette passe améliore un répit existant ; elle n’ajoute ni énigme ni niveau. Prochaine priorité : une séquence physique complète et réversible dans le conservatoire, avec refuge utile et conséquence visible. Les trois prototypes restent courts ; rythme, manipulations, matériaux et mix exigent encore des essais de vrais joueurs. Voir ETAT-JOUABLE.md.

---

# 14 novembre, reprise 13 h : espace sonore et lecture des décharges

Source Sites 59 récupérée par le workflow, commit 5e314282773e572bbee4ebafae0d564324cca710 ; dépôt propre, verrou nominatif. Le fichier audio GitHub avait le même blob que Sites avant édition. Objectif : rendre la galerie de la citerne lisible à l’oreille depuis ses zones sèches et supprimer le changement arbitraire de source à x5500.

Changement effectif : les deux décharges ont chacune leur cadence d’annonce et leur position sonore. Les deux peuvent être entendues simultanément quand leurs phases se recouvrent ; aucun basculement selon le côté d’un seuil. Distance, direction stéréo et filtrage évoluent pendant la lecture, y compris sur les frottements de la nacelle mobile. Avertissement métallique pendant la phase de gouttes, eau pendant la décharge. Portée limitée à 520 unités pour les valves : silence à la baie éloignée, sans vent/pluie permanent. Résonance plus courte et plus faible en quittant la galerie pour la baie, transitions progressives également sous l’abri et au bassin du conservatoire. Il s’agit d’un écho court, pas d’une simulation acoustique géométrique ni d’une réverbération à convolution. Les pas utilisent le bois sur la nacelle et la pierre sur la croûte et la chaussée basse de sel. Les quinze enregistrements CC0 locaux sont conservés, aucune nouvelle musique ni acquisition.

Deux scénarios de test échouaient avant la modification : continuité de l’annonce autour de x5500, avertissement dès l’approche sèche x4810. Sept tests nouveaux couvrent aussi les phases simultanées, les directions opposées, l’atténuation à la sortie, les matières, le déplacement pendant une lecture, le plafond de huit voix et le nettoyage des queues d’écho à la pause. 250 tests réussis dans validation-spatial-foley.txt, dont parcours complets simulés, aller-retour, échec/reprise, sauvegardes, balance décalée, arches et entrée du gardien. Aucun changement de collision ni de durée de niveau.

Contrôle navigateur réel, via page QA temporaire générée par scripts/qa-spatial-foley.py : AudioContext running, quinze fichiers décodés, lecture de source puis déplacement du point d’écoute. Paramètres après déplacement : gain 0,1534414 et panoramique -0,7654088 ; après arrêt zéro voix et zéro graphe, y compris queues d’écho. La valeur initiale lue immédiatement était encore la valeur native avant traitement du bloc audio ; elle ne valide pas le gain initial. La page QA est retirée avant livraison. Ce contrôle valide le fonctionnement Web Audio, pas une écoute critique du mix. Nouvel essai mondes.html : WebGL 2 indisponible, boutons de jeu désactivés. Aucun nouveau rendu Blender nécessaire, aucun essai iPhone, FPS ou validation perceptive revendiqué.

Sources étudiées : PDF primaire Unbreaking Immersion, Andersen/Schmid, lié depuis le site de Martin Stig Andersen : https://schmid.dk/talks/2016-06-16-wwise/schmid-Wwise_2016-INSIDE_Audio.pdf . Texte extrait du PDF et lu, notamment pages 8 et 12 (état physique/émotion/intensité), 20 à 22 (respiration, animation et action), 44 (proximité du danger par interpolation spatiale), 48 à 51 (continuité des changements de scène). Ce n’est ni un visionnage de conférence ni une écoute. Leçon appliquée ici : faire évoluer les paramètres sonores avec la position et garder les sources indépendantes du découpage arbitraire du parcours. Aucun système Wwise ou asset Playdead importé. La synchronisation respiratoire avancée décrite dans les diapositives n’est pas implémentée par cette passe.

Soluce complémentaire réellement lue : https://origin.ludo.guide/guide/inside/chapter-24 , séquence tunnels, chiens visibles au fond, retour dans le bassin, clôture et planches retirées avec aller-retour. Texte seulement ; aucune vidéo, transcription, série de photogrammes ni timecode nouveau. Leçon conservée pour la prochaine séquence : annoncer une menace avant le contact et laisser un refuge réutilisable. Aucun chien ajouté cette fois. Couverture complète du gameplay INSIDE toujours non réalisée.

Bilan cumulatif actualisé dans ETAT-JOUABLE.md. Prochaine priorité : enrichir le conservatoire par une séquence spatiale complète et réversible, avec anticipation et répit, après contrôle des défauts majeurs, plutôt que poursuivre des réglages sonores seuls. Restent : rendu WebGL non contrôlé ici, prises sonores parfois réinterprétées (eau de nage pour les jets), rythme court des trois prototypes, animation des manipulations encore approximative. Écoute au casque et retour de vrais joueurs nécessaires pour juger le mix. Préserver toutes les corrections de collision, commandes deux pouces, contacts, sauvegardes et V5/Noël. Aucune nouvelle automation. Sites privé ; la copie GitHub publique autorisée doit recevoir cette même amélioration.


---

# Reprise du 14 novembre : croûte de sel et transfert GitHub

Objectif réalisé : après les refuges de la mer de sel, une dalle avertit par fissuration puis descend sous le poids du personnage. Le joueur peut sauter ou suivre la descente sur une chaussée basse. Retour par saut sur la berge, checkpoints 4 et 5, reprise stable. Les fissures restent dans leur dalle. Aucun nouvel asset Playdead.

Validation : 239 tests passent, dont parcours complets simulés des mondes et 5 contrôles de charge, retour, pause, reprise et concordance du sol avec le décor. Rendu Blender CPU inspecté, pas une capture WebGL. Pas de test iPhone ni de validation perceptive audio. La séquence reste courte, les matériaux et les transitions corporelles nécessitent encore du travail.

Sources réellement lues : documentation https://blog.playdead.com/articles/inside_presentations/inside_publications.html et texte de soluce https://www.ludo.guide/guide/inside/chapter-23 . Observation textuelle : progression par abris et descente vers un trajet inférieur. Leçon appliquée : montrer une voie inférieure récupérable. Aucune vidéo visionnée, aucun timecode relevé ; la dalle descendante est une conception NACRE.

Thomas a créé thomasjudes-del/Nacre pour partager le prototype avec ses amis. Le transfert et la fiche Confluence of Minds sont en cours ; ne pas les annoncer accomplis sans vérification. Sites demeure privé.

Prochaine priorité : tester la lecture de cette descente auprès de joueurs, puis affiner bruitages et corps. Les trois mondes restent des prototypes, pas trois longs niveaux achevés.

# Son lié à la cause physique, 14 novembre 2026, reprise 10 h

Source Sites 56 restaurée après nettoyage du cloud : a938a6e195f026c83c760512ca0a3c05939e47e3. État propre, verrou nominatif avant édition. La priorité a été réorientée vers trois défauts sonores reproductibles avant de prolonger la mer de sel : musique de danger sous les refuges, nouveaux grincements quand une commande reste maintenue sans mouvement, effort respiratoire augmentant avec une vitesse demandée contre une butée.

Les trois nouveaux tests échouaient sur la version précédente. La musique de rafale utilise maintenant saltWeather, comme le danger : en zone abritée, la cible musicale redevient silencieuse par le fondu existant, y compris lorsque le refuge mobile change de place. En dehors de la protection, avertissement et rafale rétablissent la tension. Les grincements sont déclenchés par la variation réelle de la caisse, du fossile, du chariot, du volet, de l’eau ou de la vanne, plus par le seul bouton maintenu. Les échantillons déjà lancés terminent leur lecture ; pas de coupure immédiate ajoutée. L’effort suit la distance corporelle réelle, exclut le transport passif de nacelle et augmente aussi pendant une poussée effective. Il décroît à l’arrêt. Aucun nouvel asset ni nouvelle musique : la qualité intrinsèque des prises reste inchangée.

Le contrôle de nacelle a détecté une régression intermédiaire : la variable de commande de vidange redescend après verrouillage sans mouvement visible de sa roue. Ce retour interne est maintenant exclu des grincements quand la vidange est déjà ouverte. Test existant conservé. Le test du lecteur musical charge désormais la simulation du monde dans son environnement isolé, comme la page réelle, puisque la décision musicale partage sa fonction de protection.

234 tests réussis dans validation-sound-causality.txt : parcours complets simulés des trois passages, balance, arches, volet, abri mobile, nacelle, pauses, échecs/reprises et sauvegardes existants. Nouveaux tests : musique dedans/dehors avec abri déplacé et bord de refuge fixe, attente immobile de dix secondes puis déplacement, course bloquée puis réelle et récupération du souffle. Contrôle navigateur cloud sur mondes.html : WebGL 2 indisponible, boutons désactivés. Pas d’écoute critique, capture WebGL, FPS ni test iPhone. Aucun changement visuel, aucun nouveau rendu Blender nécessaire pour ces seuls déclenchements audio.

Source primaire relue : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, notices de A Game That Listens et Unbreaking Immersion, relation entre gameplay, respiration et son. Lecture textuelle de l’index seulement, pas des conférences. Soluce relue : https://www.ludo.guide/guide/inside/chapter-22, préparation d’un accès par eau et support ; cette lecture conserve la piste d’extension mais n’est pas la preuve d’un comportement sonore d’INSIDE. Application effective : attacher le signal sonore à une cause réelle et laisser le silence revenir dans un espace sûr. Aucune vidéo, transcription ou série de photogrammes nouvelle, aucun timecode revendiqué, aucun asset Playdead. Couverture complète du gameplay non réalisée.

Bilan : trois corrections audibles de déclenchement, pas d’allongement de niveau dans cette passe. Les trois prototypes restent courts. Prochaine priorité conservée : nouvelle séquence spatiale après les refuges, avec conséquences liées, checkpoint et répit, sans nouveau couloir de dangers cycliques. La qualité des bruitages, les transitions de prise du chariot et le rendu en vraie partie restent à évaluer. Sources, acquis de la version 56, V5/Noël, audience privée et automatisations préservés.

---

# Abri mobile dans la mer de sel, 14 novembre 2026, reprise 09 h

Source Sites 55 récupérée par le workflow : 1838f49c5a12df7aed6ad150909c5987d544cd78. Dépôt propre, verrou nominatif conservé pendant la passe. Objectif : donner une prise physique réversible sur la première zone de rafales, sans ajouter une marche vide.

Le premier refuge fossile roule désormais sur des rails arrière entre x4900 et x5260. Maintenir l’action près de la barre et marcher le déplace à vitesse réduite ; relâcher ou sauter libère la prise. La zone protégée et le masquage des particules suivent le toit : l’ancien emplacement devient exposé. Roues, châssis, butées et barre montrent la fonction. Le joueur peut avancer à couvert puis gagner le refuge fixe suivant, reculer et retrouver l’abri. L’ancienne solution par attente entre rafales reste jouable. Aucun nouveau niveau ni allongement de durée revendiqué : nouvelle option de manipulation sur la séquence existante.

Première référence CPU : bras trop écartés, prise trop éloignée. Barre rapprochée hors du couloir de marche, corps orienté vers elle, mains ajustées à la position du joueur, sans centrage exact. Tests de contact depuis des décalages -35, 0 et +35 unités et dans les deux sens. Les nouvelles pièces restent hors de la bande corporelle, y compris au saut. La marche sous charge repose encore sur un clip ralenti ; les prises et orientations aux transitions restent à évaluer en mouvement réel. La coque reste massive et les matériaux assez uniformes.

231 tests réussis, validation-mobile-shelter.txt. Six nouveaux contrôles : déplacement aller-retour sous rafales, butées et relâchement ; déplacement effectif de la protection et échec/reprise ; saut et pause ; raccord aux refuges fixes jusqu’à la sortie ; roues/particules liées au chariot ; contacts décalés et dégagement du trajet. Parcours complets existants des trois passages conservés, balance et anciennes sauvegardes compris. Après échec ou rechargement du checkpoint 3, chariot et joueur reviennent à x4900 : la position intermédiaire n’est pas sauvegardée, les étapes antérieures restent acquises.

Nouvel essai navigateur cloud sur mondes.html : WebGL 2 indisponible, boutons de jeu désactivés. Rendu de contrôle Blender CPU inspecté : captures/salt-mobile-shelter.png, généré depuis la scène Three par scripts/inspect-mobile-shelter.mjs et scripts/render-3d-reference.py. Aucune capture WebGL, mesure FPS, partie humaine, validation iPhone physique ni écoute critique. Pas de nouvel asset audio dans cette passe.

Sources réellement consultées : https://www.ludo.guide/guide/inside/chapter-22, soluce textuelle sur changement d’accès par niveau d’eau et placement d’une bibliothèque sous une chaîne ; https://blog.playdead.com/articles/inside_presentations/inside_publications.html, index primaire et notices des présentations. Leçon appliquée : déplacer un support utile change les possibilités de progression et doit rester récupérable. L’abri sur rails est une proposition NACRE, pas une mécanique attribuée à INSIDE. Lecture textuelle seulement ; aucune vidéo, transcription ou série de photogrammes nouvelle, aucun timecode revendiqué. Couverture complète du gameplay toujours non réalisée. Aucun asset Playdead.

Point de reprise : cette option ne remplace pas l’extension attendue. Prochaine priorité de contenu : construire au-delà des refuges une séquence de transformation spatiale avec deux conséquences liées, un paysage de répit et un checkpoint propre, puis vérifier le trajet entier. Ne pas refaire une succession de dangers périodiques. Vérifier aussi visuellement en WebGL les transitions de prise dès qu’un navigateur compatible est disponible. Trois prototypes courts, conservatoire et citerne conservés ; audience privée, V5, Noël et automatisations inchangés.

---

# Volet de la mer de sel : collision et lecture, 14 novembre 2026

Source Sites 54 récupérée après nettoyage du cloud : 9a7fc06d4dd26143443cdcc6c66c1a09bb2ac11d. Dépôt propre, verrou nominatif avant édition. Priorité modifiée après reproduction de deux défauts réels : depuis x2880, marche à gauche à travers le volet fermé et verrouillage gratuit de l’ouverture ; depuis x2750, ouverture à 60 % laissant assez de hauteur mais blocage invisible à x2800.

Le volume du volet est maintenant traité dans les deux sens et selon la hauteur réelle du corps. Le saut rencontre aussi son dessous. La fermeture attend lorsque le personnage occupe l’ouverture ; après recul, elle reprend. Le cliquet ne s’enclenche que lors d’un franchissement depuis la gauche avec une ouverture suffisante, et les checkpoints ne rétrogradent pas. Les anciennes sauvegardes conservent le volet verrouillé ouvert après résolution. Aucun centrage parfait ajouté à la balance, aucune modification des arches déjà corrigées.

Amélioration visible : axe derrière la roue, transmission haute, poulies, câbles et contrepoids guidé qui descend quand le volet monte. Les accessoires sont hors de la bande de marche. Première référence Blender : le montant avant occultait l’ouverture et la transmission était hors cadre. Montant avant aminci en bronze, caméra locale relevée progressivement pour montrer le mécanisme complet tout en gardant les pieds dans le cadre. Le cadrage se rétablit après le passage. Cinématique simplifiée, pas simulation de tension de câble. Les poulies restent statiques et les accessoires encore schématiques ; le naturel et la beauté ne sont pas établis.

225 tests réussis, validation-salt-shutter.txt. Cinq nouveaux contrôles : collisions depuis les deux côtés en marche et au saut, passage avec ouverture suffisante, fermeture occupée, plafond, attente prolongée puis retour à la roue, nouvelle résolution, reprise et retour depuis le checkpoint ; comparaison des dimensions Three et de la trajectoire du contrepoids avec l’état simulé. Parcours complets conservés, y compris galerie rouge, balance, arches et gardien. Pas d’allongement de niveau revendiqué dans cette passe.

Nouvel essai navigateur cloud : mondes.html affiche WebGL 2 indisponible, boutons désactivés. Référence finale Blender CPU inspectée : captures/salt-shutter-clearance.png, reproductible par scripts/inspect-worlds.mjs desert 2660 puis scripts/render-3d-reference.py. Ce n’est pas une capture WebGL. Aucun test iPhone physique, FPS ou écoute critique.

Source primaire relue : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, notices de Subtleties of INSIDE et A Game That Listens. Lecture textuelle de l’index seulement ; aucune conférence ni vidéo complète visionnée, aucun photogramme ou timecode nouveau. Application à NACRE : cohérence entre passage visible, collision et réaction du mécanisme. Les anciennes lectures de soluces restent consignées dans les passes précédentes ; couverture complète du gameplay toujours non réalisée. Aucun asset Playdead.

Point de reprise : l’extension de la mer de sel reste à construire. Priorité suivante : une transformation spatiale manipulable après le volet, différente des dangers périodiques. Préserver les corrections de cette passe et de la galerie rouge, améliorer les supports/transmissions encore schématiques, puis vérifier en vrai WebGL dès qu’un navigateur compatible est disponible. Trois prototypes toujours courts. Audience privée, V5, Noël et automatisations existantes inchangés.

---

# Galerie de décharge après la nacelle, 14 novembre 2026, reprise 07 h

Source Sites 53 récupérée, b49b40d807456a538a4b67c9b24c0f6ab6945502, après nettoyage du cloud. État propre et verrou nominatif avant édition. Objectif : prolonger la citerne par une menace observable puis un répit, sans refaire les premières énigmes ni modifier les autres mondes.

Après la grille hydraulique, deux cuves alimentent des décharges au-dessus du quai. Leurs aiguilles montent ; deux secondes de gouttes annoncent trois secondes de jets. Les cycles sont décalés, avec des zones sèches avant, entre et après. Le joueur garde le contrôle et choisit quand franchir. Une grille de drainage au sol délimite visuellement chaque zone ; les conduites et réservoirs restent derrière ou au-dessus du trajet. Les jets occupent toute la hauteur du personnage : sauter dedans ne contourne pas le danger. Le contact prolongé entraîne une courte réaction corporelle accroupie puis une reprise locale, pas une nouvelle animation de chute élaborée. Une petite baie d'eau éclairée en bleu clôt la traversée, sans menace ni déplacement imposé avant la sortie.

Checkpoint 4 placé avant les décharges ; compatibilité des trois précédents conservée, même clé de sauvegarde. Le test de reprise a révélé que la vidange pouvait remettre le checkpoint à 2 pendant sa décrue, réarmant alors l'annonce du nouveau passage. Correction : les checkpoints restent croissants. Reprise du passage sans refaire la nacelle, grille précédente ouverte. Les archives V5, Noël, le conservatoire et la mer de sel restent hors édition.

Bruitages locaux existants : signal métallique espacé pendant la montée, eau pendant la décharge. Les phases sonores et visuelles partagent le module cistern-pulse.js ; la musique reste silencieuse dans la galerie hors contact dangereux, puis revient progressivement dans la baie. Pas d'écoute critique réalisée. Les échantillons ne sont pas une prise réelle de jet sous pression et leur qualité reste à évaluer.

220 tests réussis dans validation-cistern-gallery.txt. Parcours complets des trois scènes, approches tardives et attentes de plusieurs cycles, bords sûrs, franchissement et demi-tour aux deux jets, saut dans la décharge, échec/reprise locale, pause, sons, phases des maillages et sauvegardes existantes. Citerne en solution connue : 54,62 s sans décès, contre 38,00 s précédemment ; mer de sel 33,57 s inchangée. Ce sont des simulations de solution connue, pas des durées de première partie. Les trois passages restent très courts.

Contrôle visuel : nouvel essai mondes.html via le navigateur cloud, refus explicite de WebGL 2, commandes désactivées. Deux rendus Blender CPU depuis la scène Three : captures/cistern-gallery-blast.png et captures/cistern-gallery-rest.png. Script : scripts/inspect-cistern-gallery.mjs, arguments blast, warning ou rest. Première inspection : gouttes trop grosses et branches ajoutées trop schématiques ; gouttes réduites et branches retirées, plan d'eau remonté pour être visible derrière le quai. Les jets restent stylisés, les matériaux et l'architecture répétitifs. Aucune capture WebGL, mesure FPS, validation iPhone physique ni qualité sonore prouvée.

Sources consultées : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, notices primaires de A Game That Listens et Unbreaking Immersion, sur relation événements/son et respiration. Lecture textuelle seulement, pas des conférences vidéo ou PDF. https://www.ludo.guide/guide/inside/chapter-30, soluce textuelle : un changement d'eau modifie l'accès et demande de revenir au véhicule. Ce dernier texte nourrit la continuité hydraulique, pas une affirmation sur les jets d'INSIDE. Leçon appliquée à NACRE : l'annonce sonore suit une cause visible, un espace sûr permet d'observer, l'échec conserve les étapes déjà résolues. Aucun nouveau visionnage, photogramme ou transcription ; aucun timecode revendiqué. Couverture complète d'INSIDE toujours non réalisée. Aucun asset Playdead.

Point de reprise : conserver cette galerie et vérifier d'abord son rythme réel sur un navigateur WebGL compatible. Le contrôle CPU n'établit pas que l'eau, les sons ou la réaction à l'impact sont convaincants. Prochaine progression de contenu : enrichir la mer de sel par une transformation manipulable du paysage, distincte des rafales et des jets ; ne pas ajouter un troisième couloir de dangers périodiques. Rechercher aussi une lumière moins uniforme et des accessoires moins schématiques. Le mandat week-end et ses reprises existantes restent inchangés ; aucune automatisation supplémentaire. Audience privée préservée.

---

# Réservoir embarqué et sortie hydraulique, 14 novembre 2026

Source Sites 52 récupérée par le workflow après nettoyage du cloud, commit c6263e677903e432406df123c9eb2e28374bd330. Dépôt propre, verrou exclusif nominatif avant édition. Objectif : donner au frein de nacelle une conséquence spatiale jouable, au lieu de prolonger les seuls ajustements de présentation.

La vidange alimente désormais un écoulement au-dessus de la traversée. La nacelle porte un réservoir vitré, un flotteur, des repères de niveau et une petite fuite visible. Son ouverture reçoit l'eau selon l'intersection réelle avec le jet. Arrêter la nacelle dessous permet de remplir la réserve, qui commande une grille hydraulique sur le quai de sortie. Le niveau monte, le flotteur suit, le flexible rejoint le vérin et la grille se lève. Le joueur relâche le frein, rejoint le quai puis passe. La fuite laisse une marge généreuse ; en cas d'attente, on peut réembarquer et refaire un passage dans les deux sens. Un cliquet garde l'accès ouvert après franchissement. Ce modèle cinématique de commande par flotteur n'est pas une simulation physique de pression ou de fluide.

Essai initial corrigé : l'inertie du frein rendait un arrêt décalé de 40 unités trop exigeant. Ouverture visible et réception ont été élargies ensemble à 144 unités ; essais à -40, -20, 0, 20 et 40 dans les deux sens. Grille solide en marche et au saut, plafond pris en compte, fermeture retenue quand le passage est occupé. Le quai reste sûr si la réserve se vide. Une chute réinitialise localement le mécanisme au checkpoint 3 ; les trois checkpoints rouges précédents et la clé de sauvegarde sont conservés. Aucun ajout de texte obligatoire ; aide dans le menu seulement.

Cadrage local légèrement élargi pour rapprocher dans le même plan réservoir, jet et destination. L'inspection du premier rendu de sortie montrait le montant avant devant le personnage : ce montant est retiré, avec guidage et support côté arrière. Deux références finales : captures/cistern-transfer-fill.png et captures/cistern-transfer-exit.png, rendues avec Blender depuis les maillages et poses Three. Script reproductible : scripts/inspect-cistern-transfer.mjs, arguments fill ou exit. La lumière reste assez uniforme, le flexible simplifié, la posture au frein encore peu engagée ; les images ne prouvent pas le naturel ni le rendu GPU.

Bruit de remplissage discret et signal de grille issus des échantillons CC0 déjà locaux, sans achat ni asset Playdead. Musique conservée silencieuse sur la traversée, retour au quai final. Pas d'écoute critique ni de validation perceptive annoncée.

214 tests réussis, sortie validation-cistern-transfer.txt : parcours complets des trois scènes ; sept tests nouveaux couvrant arrêts décalés, aller-retour, arrêt hors jet, passage simple insuffisant, quai d'attente sûr, collision depuis les deux côtés et au saut, fermeture occupée, remplissage après attente, retour depuis la grille fermée avec réembarquement et sortie sans reset, pause, chute/reprise, sauvegardes et cohérence des volumes Three. Un ancien test de pas sur le quai droit marche maintenant vers la gauche : la grille occupe réellement la route à droite. L'assertion de bruit de pas est conservée. Citerne : 38,00 s en solution connue, contre 35,40 s avant cette énigme ; mer de sel 33,57 s, conservatoire conservé. Ces temps ne sont pas ceux d'une première découverte.

Nouvel essai cloud sur mondes.html via sites-preview : « WebGL 2 indisponible », boutons désactivés. Aucun WebGL, FPS, Safari ou iPhone physique testé. Aucun contournement de la restriction. Les tests CPU ne remplacent pas une partie humaine.

Sources réellement lues dans cette passe : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, index primaire et notices sur relations gameplay / animation / son ; https://www.ludo.guide/guide/inside/chapter-22, soluce textuelle, préparation d'un accès par variation de l'eau et positionnement d'un support. Application : rendre visible le changement d'accès, permettre de préparer puis de quitter une commande, conserver la récupération. Aucun nouveau visionnage vidéo, photogramme ou transcription ; aucun timecode revendiqué. La couverture complète du gameplay d'INSIDE reste non réalisée.

Bilan : une nouvelle petite énigme ajoutée à la traversée rouge, sans allonger une marche vide. Les trois mondes restent des prototypes courts, pas trois niveaux longs ou achevés. Prochaine priorité : une séquence rouge de répit et de menace anticipée après la grille, avec une vraie conséquence spatiale et une arrivée de présence depuis une ouverture visible ; ne pas la substituer à la vérification humaine de cette énigme. Préserver les arches corrigées, la galerie du gardien, le chevauchement de balance, le saut gauche, les sauvegardes et tous les acquis. V5, Noël et audience privée inchangés. Bilan cumulatif mis à jour.

---

# Frein de nacelle manipulable, 14 novembre 2026

Source Sites 51 récupérée après nettoyage, ebd99274251067defcc014fb162f8d732c5097f7 ; dépôt propre, verrou nominatif. Objectif : rendre le mécanisme contrôlable pendant la traversée, en préservant le parcours existant.

Une poignée en bronze reliée au frein est ajoutée sur le plateau. Maintenir l'action à proximité ralentit la nacelle en 0,25 seconde puis la maintient immobile ; relâcher redonne progressivement la vitesse sur 0,5 seconde. Le joueur peut repartir, s'éloigner ou sauter, ce qui libère la commande. Aucun verrou permanent, aucun nouvel écran obligatoire. Les deux mains suivent la poignée par IK ; son mouvement et le frein arrière reflètent la pression appliquée. Les frottements de translation s'arrêtent avec le déplacement, sans pas fantômes. L'aide facultative du menu décrit la commande. Saut gauche, sauvegardes, équilibre, anciens mondes, V5 et Noël préservés.

207 tests réussis : validation-ferry-brake.txt. Parcours complets conservés, arrêts de dix secondes dans les deux sens, reprise sans glissement, saut avec action maintenue, éloignement, pause, réinitialisation au checkpoint et contacts des mains. Rendu Blender CPU inspecté : captures/cistern-handbrake.png, export reproductible scripts/inspect-ferry-brake.mjs. Nouvelle tentative navigateur : mondes.html indique WebGL 2 indisponible. Aucun essai iPhone, rendu WebGL, FPS ni écoute critique revendiqué.

Documentation relue : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, notices sur articulation gameplay, animation et son ; https://www.ludo.guide/guide/inside/chapter-22, texte de soluce sur transformation d'un accès puis usage d'un support. Application limitée ici : donner au joueur une prise réversible sur le mécanisme, rendre sa conséquence visible et audible. Aucun nouveau visionnage de vidéo, transcription, photogramme ni timecode, aucun asset Playdead importé.

Portée : commande supplémentaire facultative, pas une nouvelle énigme complète ni un allongement du niveau. Les trois prototypes restent courts. La posture manque encore d'effort du bassin et la poignée reste petite. Prochaine priorité de contenu : donner à l'arrêt choisi de la nacelle une conséquence spatiale utile, par exemple un accès latéral hydraulique récupérable ; vérifier d'abord visibilité et portée depuis les deux directions. Ne pas présenter la nouvelle commande comme une séquence riche achevée. Bilan cumulatif mis à jour ; audience privée conservée.

---

# Nacelle : gestes, frein et sons synchronisés, 14 novembre 2026

Source Sites 50 récupérée par le workflow, commit 0bf4f5e5ce8e493d0029aae99dd39c1f7b2a65c4. Dépôt propre ; verrou nominatif exclusif avant édition. Objectif : rendre la traversée existante compréhensible par son mouvement et ses bruits.

Deux défauts reproduits sur le code de la version 50 : la nacelle cesse son cycle quand le joueur revient avant x3300 ; un passager immobile produit des pas pendant le transport. Correction : le cycle reste actif après la première approche, et la distance de marche propre est séparée du déplacement reçu du support. La foulée et les pas utilisent cette distance, interpolée avec le mouvement du support. Le redémarrage au checkpoint remet correctement ces compteurs à zéro. Aucune modification de vitesse, de durée de quai, de saut ou de sauvegarde.

Un bras de frein lesté se relève pendant les 0,65 dernières secondes d'attente, puis se repose progressivement à l'arrivée ; les butées se compriment aux quais. La roue suit le câble dans les deux sens et reste immobile à quai. La cinématique est partagée entre simulation, accessoires et bruitages. Départ annoncé par un craquement, mouvement par des frottements espacés, arrivée par un choc mat, avec volume et panoramique selon la distance. Réemploi des échantillons locaux CC0 existants, pas de nouvel asset acheté ni de son Playdead. Ces sons restent une interprétation de matériaux, pas une prise réelle de cette machine. La musique de détente après vidange s'efface à l'entrée du bassin, laisse la traversée au bruitage, puis revient seulement au quai de sortie.

203 tests réussis, sortie dans validation-ferry-feedback.txt : parcours complets des trois scènes, aller-retour sans pas fantômes, marche réelle à bord et sur les quais, retour au-delà du seuil d'approche, annonces uniques à 30/60 Hz, pause et reprise locale, continuité des accessoires, atténuation distante, synchronisation du rendu, transitions musicales. Citerne 35,40 s et mer de sel 33,57 s en solution connue, sans décès. Pas d'augmentation de durée dans cette passe.

Deux rendus Blender CPU depuis la scène Three ont été inspectés. Le premier montrait une suspente devant le visage : la suspension est désormais triangulée côté arrière, avec traverses sous le plancher. Le second, conservé dans captures/cistern-ferry-feedback.png, dégage le personnage. Le navigateur cloud affiche encore « WebGL 2 indisponible » sur mondes.html. Aucun succès WebGL, FPS, essai iPhone physique ou écoute critique du mix revendiqué. La lumière rouge reste uniforme et l'architecture répétitive ; le frein reste un accessoire simplifié, non une simulation mécanique complète.

Sources relues : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, descriptions de « A Game That Listens » et « Unbreaking Immersion », documentation primaire sur le lien son / jeu / animation. L'ouverture du PDF schmid-Wwise_2016-INSIDE_Audio.pdf a échoué : son contenu n'a pas été étudié. https://www.ludo.guide/guide/inside/chapter-22, soluce textuelle, observation de la destination et transformation d'un accès par l'eau. Leçon appliquée : les annonces dépendent du mécanisme observable et le transport ne doit pas être confondu avec un effort corporel. Aucune vidéo visionnée, transcription, nouveau photogramme ou timecode ; couverture vidéo complète toujours non réalisée.

Point de reprise : la traversée automatique est maintenant plus cohérente mais reste simple. Prochaine priorité de contenu : une conséquence manipulable de l'eau dans la citerne, avec choix d'un trajet ou changement réversible d'accès, et respiration visuelle de sortie. Ne pas multiplier les plateformes automatiques ni annoncer trois niveaux longs : les trois scènes sont encore des prototypes courts. Préserver les arches corrigées, la galerie du gardien, les grilles, la balance tolérante et le saut gauche. Audience privée, V5 et Noël inchangés.

---

# Nacelle de retour dans la citerne, 14 novembre 2026

Source Sites 49 restaurée après nettoyage, commit e306d16dec88980b7182b9345de23036642c6e60. Dépôt propre et verrou exclusif nominatif avant édition. Objectif : remplacer une partie de la sortie vide par une traversée observable et récupérable.

Après le bassin vidangé, deux quais sont séparés par une coupure réelle du sol. Une nacelle à câbles effectue des allers-retours, avec deux secondes d'arrêt à chaque extrémité et accélération/décélération progressive. Le voyageur est transporté par la plateforme sans devoir courir pour rester dessus ; il peut bouger, sauter, rester à bord et revenir. Mécanisme en bronze, suspentes, galets, garde-corps arrière, plancher en dalles, canalisation et roue d'entraînement originaux. Le cycle commence à l'approche après ouverture de la vidange. C'est une commande cinématique, pas une simulation de débit ou d'énergie hydraulique.

Troisième checkpoint rouge au quai d'approche ; une chute replace localement la nacelle au départ. Les anciens checkpoints 1 et 2 restent valides, la clé de sauvegarde ne change pas. Le trajet complet connu passe de 31,33 à 35,40 secondes sans décès. Cette extension est une courte séquence de déplacement et d'observation, pas une longue énigme ni un niveau achevé.

196 tests réussis : validation-cistern-ferry.txt. Parcours complets des trois scènes, transport pendant un aller-retour complet, retour à pied sur le quai, attente prolongée des deux côtés, embarquement manqué/chute/reprise, anciennes sauvegardes, pause et correspondance position du plancher Three / simulation sur tout le cycle. Rendu Blender CPU inspecté : captures/cistern-ferry.png. Essai navigateur cloud sur mondes.html : WebGL 2 indisponible, boutons désactivés. Aucun essai iPhone physique, aucune écoute de mix, aucun FPS revendiqué.

Source relue : https://www.ludo.guide/guide/inside/chapter-22, soluce textuelle sur l'observation d'une destination et l'utilisation d'un support pour l'atteindre. Leçon appliquée : voir le quai, observer le déplacement du support, embarquer et anticiper la sortie. Pas de vidéo visionnée, photogramme, transcription ni timecode nouveau. Les références primaires Playdead des entrées précédentes restent documentaires ; aucun asset importé.

Bilan : conservatoire et mer de sel conservés, citerne enrichie d'une traversée après la vidange. Les trois passages restent courts ; la nacelle a encore une mécanique simple, et les changements d'ambiance, le bruit du mécanisme et la richesse de la sortie restent à développer. Prochaine priorité : affiner l'annonce visuelle et sonore de cette traversée, puis ajouter une conséquence physique manipulable plutôt qu'une autre plateforme automatique. Préserver les corrections d'arches, de gardien et de grille, la balance et le saut gauche. Audience privée et V5/Noël inchangés.

---

# Citerne : grille hydraulique et vidange visible, 14 novembre 2026

Objectif : corriger les volumes de la citerne avant extension et rendre la chaîne réserve / eau / grille / vidange observable. Source Sites 48 récupérée par le workflow, commit 5b6835b24900229be3ab1f53fbd7b7bb437b203a ; dépôt initial propre, verrou exclusif nacre-cistern-20261114-02.

Deux traversées de grille fermée reproduites en simulation avant correction : depuis x1950 en revenant à gauche, le personnage atteignait x1774 ; en sautant depuis x1810, il atteignait x1974, grille toujours à zéro. La collision vérifie maintenant le corps dans les deux sens, y compris le saut, et le dessous d'une grille partiellement ouverte. Une fermeture s'arrête sur un passage occupé. Le mouvement sinusoïdal indépendant de l'eau est supprimé : la montée d'eau entraîne l'ouverture, puis un cliquet la maintient à pleine course pour permettre le retour après vidange. Les deux anciens checkpoints rouges reconstruisent cet état sans changer la clé de sauvegarde.

Changement visible : puits d'inspection ouvert, colonne d'eau graduée, flotteur de bronze guidé, transmission et cliquet ; course de la grille portée à 3,5 m pour laisser passer le saut. À la seconde vanne, canalisation de vidange, écoulement et rides liés à la quantité d'eau restante, repères de niveau sur le bassin. Après inspection des premiers rendus, le montant avant de grille est aminci et les deux roues rouges passent derrière le plan du corps, avec contacts de mains adaptés, pour limiter leurs occultations. Le cadrage s'élargit progressivement et regarde davantage vers le bassin, sans bloquer les commandes. Sons métalliques enregistrés déjà présents utilisés seulement au verrouillage ; aucun nouvel asset sonore et aucune qualité du mix revendiquée.

Validation : 192 tests réussis, sortie dans validation-cistern-hydraulics.txt. Parcours complets simulés des trois passages, déplacements aller-retour, saut contre la grille, plafond, fermeture occupée, pause, drainage, chute et reprise locale, restauration des deux checkpoints rouges, cohérence des volumes et du flotteur. Routes connues : mer de sel 33,57 s, citerne 31,33 s, zéro décès. La durée utile n'a pas été augmentée dans cette correction. Les tests ne prouvent ni beauté ni naturel.

Sources consultées : https://www.ludo.guide/guide/inside/chapter-22, texte de soluce, séquence de contrôle de niveau d'eau et accès aux plateformes ; principe retenu : la même variation physique transforme plusieurs accès, et sa conséquence doit pouvoir être observée. https://blog.playdead.com/articles/inside_presentations/inside_publications.html, index officiel lu, descriptions des présentations sur les liens gameplay / son et les subtilités ; les conférences liées n'ont pas été visionnées. Aucun nouveau visionnage, photogramme, transcription ou timecode. Aucun asset Playdead importé.

Contrôle navigateur cloud : mondes.html affiche WebGL 2 indisponible, boutons désactivés. Pas de rendu WebGL validé ni d'iPhone physique. Contrôles Blender CPU à partir des scènes Three : captures/cistern-hydraulic-gate.png et captures/cistern-drain-flow.png. Les shaders et performances du navigateur ne sont pas évalués par ces images.

Défauts restants : trois prototypes courts ; citerne sans menace propre ni deuxième grande séquence, mécaniques encore simples, environnement répétitif et qualité sonore à écouter. Prochaine priorité concrète : développer après le bassin une séquence rouge distincte dans l'espace de sortie actuel, en réutilisant l'eau évacuée comme cause visible d'un mécanisme, avec anticipation, échec/reprise et respiration finale. Ne pas rallonger une marche vide. Préserver les arches corrigées, la galerie du gardien, la balance, le saut gauche et toutes les sauvegardes. V5/Noël et audience privée inchangés.

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

# Rafales : séparation des refuges et réaction du corps, 13 novembre 2026

Source Sites 45 récupérée avant édition, commit bca91e09046470dad59883b5a5146b57ac6ff510, après nettoyage du cloud. Verrou nominatif exclusif, dépôt propre. Défaut concret : la poussière traversait visuellement les abris alors que la simulation les considérait comme protecteurs ; l'acteur disparaissait immédiatement pendant la reprise.

La poussière est maintenant masquée dans le volume protégé des voûtes. Des traînées de sel directionnelles complètent les points pour rendre les rafales plus lisibles ; elles évitent aussi le volume abrité. L'intensité commence à zéro au calme, monte pendant l'avertissement, puis décroît pendant la dernière seconde du cycle. La vitesse des particules ne saute plus lors du changement de phase. Le personnage porte progressivement la main devant son visage avec l'exposition, tout en gardant le mouvement du corps. Il reste visible dans sa pose de protection pendant la courte reprise due au sel. Aucun seuil de danger, durée de parcours, checkpoint, sauvegarde ou contrôle modifié.

182 tests réussis : validation-salt-readability.txt. Parcours complets des trois passages et anciennes reprises conservés ; nouveaux tests sur continuité de l'intensité, absence de poussière dans les volumes protégés, main proche du visage et visibilité pendant l'échec. Contrôles visuels Blender CPU : salt-readability.png (refuge) et salt-exposed.png (exposition). Les points ne sont pas exportés dans Blender ; les traînées sont des maillages. Aucun succès WebGL ni essai iPhone physique revendiqué. Le refus WebGL cloud constaté à la passe précédente n'a pas été retesté ici. Aucune nouvelle écoute sonore.

Source documentaire primaire relue : Marek Bogdan, https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html, détail et éclairage organisés selon caméra et intérêt ludique. Application : distinguer espace protégé et espace exposé dans le même plan, donner une conséquence corporelle lisible. Aucun visionnage vidéo ni transcription ou nouveau photogramme dans cette passe, aucun timecode, aucun asset Playdead.

Limites : réaction du bras procédurale, capture encore brève sans chute complète ; refuges répétitifs, paysages et matières encore rudimentaires, bruitage des rafales manquant. Aucun allongement cette fois. Trois passages courts restent jouables en simulation. Reprise : enrichir la citerne avec une mécanique et une mise en scène propres, sans étendre les défauts visuels ; tester en WebGL compatible dès que disponible. V5/Noël et audience privée préservés.

---

# Mer de sel : traversée des rafales, 13 novembre 2026

Source Sites 44, commit c9498418b75be52602226120aeb7004a5b38e755, restaurée après nettoyage du cloud avant édition ; verrou exclusif nominatif. Objectif : ajouter une séquence jouable au-delà du volet, plutôt qu'un nouvel ajustement du conservatoire.

Le parcours jaune se prolonge de 2900 unités. Quatre voûtes fossiles protègent des rafales de sel. Un cycle comporte quatre secondes calmes, deux secondes d'avertissement, trois secondes de rafale puis une seconde de retour au calme. Poussière accélérée et étoffes inclinées rendent le changement visible. Une exposition continue d'une seconde hors refuge déclenche la reprise ; rentrer à couvert dissipe l'exposition. Le corps se courbe avec celle-ci. Nouveau checkpoint au premier refuge, restaurable depuis la sauvegarde existante ; les deux mécanismes déjà résolus restent franchis. La musique se tend dans cette zone puis laisse place à une détente après les rafales. Dunes en profondeur et bassin salin de fond accompagnent la sortie où l'arrêt reste sûr. Aucun ennemi ajouté, aucun asset Playdead.

Contrôles : 179 tests réussis (validation-salt-weather.txt), parcours complets simulés et squelette/cadrage vérifiés sur toute la route. Mer de sel : 33,57 s avec solution connue contre 18,48 auparavant, zéro décès ; ce n'est pas une durée de première découverte. Trois nouveaux tests couvrent protection dans chaque refuge pendant 22 s, pause, avertissement non létal, exposition puis retour à couvert, échec/reprise et compatibilité des checkpoints 1/2/3. La citerne, le conservatoire et leurs placements décalés passent toujours. Rendu Blender CPU inspecté ; une déformation provoquant des ouvertures dans le toit a été retirée. Les particules ne sont pas représentées dans l'export Blender. Nouvel essai navigateur : WebGL 2 indisponible, message de repli observé. Aucun test iPhone physique, aucune écoute critique du mix.

Source primaire relue : https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html, Marek Bogdan, paragraphes sur la composition selon le point d'intérêt et la caméra. Lecture documentaire uniquement, aucune vidéo complète ni transcription ou photogramme nouveau, donc aucun timecode. Application limitée : silhouette et refuge regroupés dans un plan lisible. Cette passe ne constitue pas l'étude méthodique du gameplay complet demandée : celle-ci reste à poursuivre.

Limites : voûtes encore répétitives, matières uniformes, tempête à juger en vrai WebGL, absence de bruitage enregistré propre aux rafales, reprise encore simple après exposition. Les trois passages restent des prototypes courts. Prochaine priorité : direction artistique et signalement du danger de cette séquence, puis enrichissement propre à la citerne ; ne pas multiplier des couloirs identiques pour gagner de la durée. V5/Noël inchangés, audience privée conservée.

---

# Mer de sel : rendre le contrepoids lisible, 13 novembre 2026

Source Sites 43 récupérée avant édition, commit 844cd8b2e36792d91c5674d276ac3ddef15ceebb. Checkout propre puis verrou nominatif exclusif. Objectif : corriger le premier mécanisme jaune, dont le pont semblait se lever sans transmission visible.

Changements : dalle qui s'enfonce selon la charge, aiguille mécanique proportionnelle, deux contrepoids guidés, poulies et câbles dont la longueur suit le déplacement réel du tablier. Arbre de transmission protégé entre la pesée et le pont. Le fossile suit l'enfoncement de la dalle. La charge utilise maintenant l'intersection du fossile et de la dalle, avec un seuil de 60 %, plutôt qu'une position centrale stricte. Des décalages de 40 unités fonctionnent. Le voyageur seul indique une charge partielle sans ouvrir le pont ; retirer le fossile le laisse redescendre, le replacer permet de recommencer. Un événement sonore ponctuel signale la fin de montée. Le cadre s'ouvre progressivement à proximité pour présenter la dalle et la transmission, puis revient au cadre ordinaire ; aucun arrêt imposé.

Validation : 176 tests réussis, résultat intégral dans validation-salt-engine.txt. Trois nouveaux tests couvrent décalages, voyageur seul, chevauchement insuffisant, déchargement/rechargement, pause, correspondance tablier/contrepoids/câbles, absence de croissance de géométrie et réversibilité de caméra. Les parcours complets des trois passages, échecs, reprises et sauvegardes restent couverts par la suite existante. Aucun changement du contrepoids du conservatoire.

Contrôle visuel : rendu Blender CPU de la scène Three inspecté à x=1164,59 dans captures/salt-engine.png. Le mécanisme et le personnage sont visibles ensemble. Les surfaces restent trop uniformes, et le soin des accessoires doit encore progresser. Ce rendu ne reproduit pas exactement l'eau, le brouillard et les shaders du navigateur. Nouvel essai de la page mondes.html dans Chromium cloud : message WebGL 2 indisponible, création du contexte refusée, GL_VENDOR Disabled. Aucun jeu WebGL réel ni essai iPhone physique revendiqué. Pas d'écoute critique supplémentaire du son.

Source primaire lue : Marek Bogdan, The Lighting of INSIDE, https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html. Lecture documentaire sur l'organisation du détail et de la lumière en fonction du point d'intérêt de la caméra et du gameplay. Application : ouverture locale du cadre sur la relation charge/transmission/pont, détails concentrés sur les pièces actives. Aucune vidéo visionnée, aucun nouveau photogramme ni transcription, aucun timecode. Aucun asset Playdead importé.

Reprise prioritaire : enrichir réellement la durée et la succession de lieux de la mer de sel, avec une menace annoncée puis une zone de respiration ; ce correctif n'allonge pas le parcours. La mer de sel et la citerne restent des prototypes courts, sans ennemi propre. Ne pas présenter trois niveaux achevés. Préserver marche contemplative, commandes au pouce gauche, sauvegardes, incarnation/capture/sons du conservatoire. V5 et Noël intacts, audience privée conservée.

---

# Corps audible, capture et mode jeu, 13 novembre 2026

Source Sites 42 récupérée avant édition, commit 685470202233c88e17297c3cc7494ecffde145df. Verrou exclusif nominatif pendant le travail. Objectif demandé : immersion sans barres de navigateur quand la plateforme le permet, conséquence incarnée de la détection, sons du corps et des matières avant la musique.

Changements jouables : les trois passages 3D occupent toute la surface disponible ; entrée plein écran avec détection des capacités, aide iPhone et manifest pour ouverture depuis l'écran d'accueil. L'aide suspend la partie. Dans le conservatoire, la détection remplace le clignotement par une séquence de 1,94 s : approche du gardien ou réaction au convoi, affaissement du personnage, contact main/épaule lorsqu'un gardien intervient, rapprochement du cadre, fondu puis retour au checkpoint. L'acteur reste visible. Une capture en l'air rejoint le sol ; pause figée et une seule défaite comptée. Le déplacement du gardien de fond, sur la passerelle, précède le danger : marche, arrêt avec lanterne puis départ. C'est une mise en scène de proximité, pas une IA qui entend réellement le joueur.

Quinze courts échantillons CC0 locaux remplacent le silence des bruitages 3D : sol dur, bois, sable, souffle, tissu, eau, verrou et craquement. Cadence liée au déplacement réel, souffle lié à l'effort, pas lointains filtrés, niveaux plus bas en accroupissement, arrêt à la pause. Musique absente en exploration ordinaire, mécanisme, nage et traversée calme des deux autres mondes ; elle intervient pour la surveillance, la poursuite, l'exposition et la détente après résolution. Voir RECORDED-FOLEY.md et IMMERSIVE-MODE.md.

Contrôles : 173 tests réussis, dont détection par phare/gardien/convoi, retour aux checkpoints en moins de deux secondes, pause et absence de double décès, contact main/épaule, poses finies, présence non létale, cadences des pas/souffle, silence musical des lieux calmes, détection et refus du plein écran. Les trois parcours complets simulés et les placements décalés de caisse restent verts. Browser AudioContext : 15 buffers décodés, état running, deux voix effectivement lancées, puis zéro voix et quatre pistes arrêtées après pause. Cela vérifie le transport audio, pas la beauté ni l'équilibre perceptif du mix.

Contrôle visuel : capture et silhouette de fond inspectées dans deux rendus Blender de la scène Three, captures/conservatory-capture.png et captures/conservatory-witness.png. L'export CPU traitait un shader de phare comme opaque ; l'exporteur a été corrigé pour conserver son uniform d'opacité, sans changement du shader du jeu. Le contexte WebGL reste refusé dans le Chromium cloud. Interface d'aide au plein écran observée ; aucun rendu WebGL du jeu, aucune installation ni test iPhone physique revendiqués. La capture corporelle reste une composition de poses et d'IK, pas une animation de combat enregistrée.

Source primaire étudiée : entretien de Martin Stig Andersen, https://blog.prosoundeffects.com/expressive-machines-martin-stig-andersens-award-winning-game-audio-for-inside, paragraphes sur un paysage sonore propre à chaque moment, musique traditionnelle minimale et texture des sources enregistrées. Lecture documentaire uniquement. Aucune vidéo ou séquence complète visionnée, aucun photogramme ni transcription nouvelle, donc aucun timecode inventé. Application : réserves de silence musical et sons associés au geste et au lieu. Aucun asset Playdead importé.

Reprise : écouter réellement le mix au casque, vérifier l'installation iPhone et le jeu WebGL sur matériel compatible ; développer les mécaniques et la durée de la mer de sel/citerne, toujours des prototypes courts. Le gardien de fond ne détecte pas les bruits : une vraie relation bruit/comportement est à concevoir sans rendre le premier passage injuste. Les longues ambiances et le roulement enregistré du convoi manquent encore. Une nouvelle installation web peut avoir son propre stockage : transfert de sauvegarde Safari/app web non vérifié. V5/Noël non modifiés. Audience privée préservée.

---

# Deux nouveaux passages 3D et musique événementielle, 13 novembre 2026

Source Sites 41 récupérée avant édition, commit ae5a1375e2c6977c3f78e4118cb30132f231be11. Checkout propre à l'ouverture, verrou nominatif conservé pendant le travail. Retour prioritaire de Thomas : arrêter de traiter le seul conservatoire par petites corrections, remettre les trois mondes dans le jeu et faire réagir la musique aux situations.

Changement effectif : `mondes.html` propose désormais la mer de sel et la citerne rouge dans de vraies scènes Three.js. Même personnage skinné et animation corporelle que le conservatoire, caméra perspective rapprochée, ombres, matériaux et commandes deux pouces. Environnement jaune : dunes en profondeur, fossile roulant, grand nautile sculpté, pont contrebalancé, manivelle et volet à franchir avant sa descente. Environnement rouge : arcades, cuve à réserve, jauge et tuyauterie, nacelle solide à câbles, grille intermittente, seconde vanne et vidange d'un bassin révélant un parcours de pierres. Le quai final a été abaissé après qu'un parcours simulé a révélé une marche physiquement impossible. Les passages peints conservent leur propre logique ; le trailer validé n'est pas affecté.

La musique des trois passages 3D est dirigée par l'état réel. Le conservatoire distingue exploration, mécanisme, surveillance, poursuite, immersion et sortie. Mer de sel et citerne ont deux couleurs musicales différentes ; volet sous tension puis vidange déclenchent d'autres fondus. Quatre morceaux enregistrés localement, de Scott Buckley, CC BY 4.0. Deux nouveaux dérivés issus des originaux déjà autorisés : Juggernaut et This Too Shall Pass. Extraits de 45 s chacun pour limiter le téléchargement. Aucun synthétiseur mélodique nouveau. Les bruitages procéduraux rejetés sont coupés dans les trois passages 3D, en attendant des prises de son pertinentes. Cela retire le défaut mais ne constitue pas un remplacement abouti du bruitage. Réglages de volume/mute et pause conservés. Voir MUSIC.md pour les transformations.

Validation : 167 tests réussis, dont 11 nouveaux. Routes complètes des deux mondes, passage du volet, retour après fermeture tardive, manivelle sans dérive au vent, ouverture partielle puis complète de la vidange, chute dans le bassin encore plein et reprise locale, remise en pression après attente, arrêts de vingt secondes sans décès, squelette/cadrage sur toute la route, nacelle alignée avec la simulation, changement de scène sans accumulation de lumières. Tests existants du conservatoire, balance décalée, sauts, reprises et sauvegardes conservés. Temps avec solution connue : conservatoire 42,52 s ; mer de sel 18,48 s ; citerne 31,33 s. Ce sont des passages courts, pas trois niveaux longs et aboutis. La durée de découverte et le plaisir ne sont pas mesurés.

Contrôle visuel : scènes Three exportées sur CPU, rendus Blender inspectés, puis ajout de fondations, joints, reliefs du nautile, profondeur des arcades et correction de la couleur du fond dans l'export. Références conservées : captures/world-salt-3d.png et captures/world-cistern-3d.png. Ce sont des rendus de contrôle, pas des captures WebGL. Le navigateur cloud a été réessayé via l'aperçu Sites : création du contexte refusée, GL_VENDOR Disabled ; message de repli observé et boutons désactivés. Aucun test iPhone physique, aucune performance GPU ni écoute critique du mix revendiquée.

Source primaire étudiée : entretien avec Martin Stig Andersen, https://blog.prosoundeffects.com/expressive-machines-martin-stig-andersens-award-winning-game-audio-for-inside, passages sur la conception sonore propre à chaque lieu et les sources enregistrées modulées par l'action. Notice de sa conférence GDC également lue : https://gdcvault.com/play/1023731/A-Game-That-Listens-The. Lecture documentaire et entretien écrit uniquement ; aucune vidéo regardée, aucune transcription ni analyse intégrale du gameplay, pas de timecodes à inventer. Application dans NACRE : états musicaux locaux, continuité pendant pause/reprise et transitions de danger, plutôt qu'une seule boucle uniforme. La relation inverse son-vers-gameplay décrite par Andersen n'est pas implémentée ici. Aucun asset Playdead.

Reprise : développer le contenu et la mise en scène des deux nouveaux passages, particulièrement la mer de sel encore très courte ; renforcer les liens visuels entre dalle/fossile/pont et manivelle/volet ; matériaux encore trop uniformes et végétation simplifiée. Les nouveaux mondes n'ont pas encore d'ennemi propre. Besoin de véritables effets enregistrés, écoute du mix, validation WebGL et essais de découverte humaine. Ne pas revenir à des dizaines de petites retouches du conservatoire avant de faire progresser ces passages. V5, Noël et audience privée préservés.

---

# Baie vivante après le bassin, 13 novembre 2026

Source Sites 40 ouverte avant édition, commit cdc99a14eea3c16432ba46c63816b6d6aa2eaac4. Checkout restauré après nettoyage cloud, état Git propre et verrou exclusif nominatif. Objectif : donner un motif à observer dans la zone sûre après la nage, conformément au retour de Thomas sur la contemplation et les trois niveaux.

Changement effectif : floraison côtière originale en volume, sept enveloppes courbes pigmentées, cœur nacré, racines et souche minérale immergée. Respiration lente liée au temps de simulation, sans nouveau point lumineux, interaction obligatoire ni menace. Le plan s'élargit progressivement après la prise de berge (x=7290 à 7450), avec une distance de 13,1 m en paysage, tout en cadrant pieds et tête. Le joueur peut s'arrêter, repartir et revenir ; aucune caméra imposée par un chronomètre. Contrôles, collisions, fin et sauvegardes inchangés. Le passage reste court à pleine vitesse, il ne constitue pas encore une longue promenade contemplative.

156 tests réussis : validation-bloom.txt. Tests nouveaux : arrêt de vingt secondes dans la baie puis reprise jusqu'à la fin sans décès ; animation identique à temps identique et absence d'accumulation ; géométrie finie, moins de 8000 triangles et aucune lumière ajoutée ; cadrage continu sur trois formats. Parcours complet et anciens tests de balance, mains, pieds et reprises passent. Traversée déterministe toujours 42,52 s. Le coût GPU et l'effet émotionnel ne sont pas mesurés par ces tests.

Contrôle visuel Blender : deux compositions inspectées, puis ouverture des pétales avant et variation de leur hauteur pour dégager le cœur ; ajout d'une souche ancrée sous l'eau et d'un bord nacré. Capture finale : captures/conservatory-bloom.png. Scène Three exportée avec inspect-3d.mjs à 42,48 s, rendu CPU non équivalent aux shaders WebGL. Nouvel essai navigateur cloud : WebGL 2 indisponible, repli explicite observé. Aucun iPhone physique testé.

Source primaire lue : https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html, Marek Bogdan, passage sur détail et lumière composés selon caméra et point d'intérêt. Lecture documentaire uniquement ; aucune vidéo complète ni transcription ni planche de photogrammes visionnée dans cette passe, donc aucun timecode. Application NACRE : choisir un point d'intérêt volumétrique et son cadrage local ; aucun asset Playdead.

Direction des trois niveaux consignée dans THREE-LEVELS.md et ajoutée à la consigne de développement existante, sans nouvelle tâche. Reprise : étoffer le premier niveau avec une vraie alternance de lieux et rythmes, tout en conservant sa fiabilité. La baie vivante est un début, l'architecture reste répétitive et le mouvement doit encore être validé en WebGL. Préserver les nouveaux contacts et améliorer le pivot sans retarder indéfiniment la progression du niveau. V5 et Noël intacts.

---

# Traction du corps hors du bassin, 13 novembre 2026

Source Sites 39 récupérée avant édition après nettoyage du cloud, commit a02f7e74af2edccef8bbfa45d7e40cac1018c167. Dépôt propre et verrou exclusif nominatif. Objectif : corriger le bassin maintenu trop bas pendant l'appui des mains à la sortie de l'eau.

La hauteur de soutien des épaules monte progressivement de 29 à 53 cm au-dessus de la berge entre t=0,04 et 0,30 s, avant le lâcher déjà progressif. Le bassin accompagne la traction au lieu de rester sous la pierre. Les résolutions des mains et du pied s'appliquent ensuite. À t=0,30, le bassin passe de -10,5 à +13,5 cm par rapport au dessus du quai, soit 24 cm de hausse. Correction limitée à la sortie du bassin : autres rebords, caméra rapprochée, physique, durée, commandes, sauvegardes et mix inchangés.

153 tests réussis : validation-shore-rise.txt. Nouveau contrôle du bassin et des épaules pendant la traction, continuité (déplacement maximal de l'articulation 11,32 cm par image à 60 Hz), parcours complet simulé sans décès. Les tests existants de contacts des mains et du pied, cadrage, échecs/reprises et balance décalée passent également. La traversée déterministe reste de 42,52 s. Ces mesures ne prouvent pas le naturel de l'animation.

Contrôle visuel : captures/conservatory-shore-rise.png, export de la scène Three à t=0,30 puis rendu Blender CPU inspecté. Le torse et le genou sont plus dégagés, mais le bas de la jambe arrière reste occulté par le bord. Script reproductible : scripts/inspect-shore-rise.mjs, argument optionnel pour exporter la scène. Les matériaux et lumières Blender diffèrent du navigateur. Nouvel essai du conservatoire dans le navigateur cloud : WebGL 2 indisponible, écran de repli et bouton désactivé observés. Aucun test iPhone physique ni succès WebGL revendiqué.

Source primaire lue : Animation-talk, slides et notes HTML, https://docs.google.com/presentation/d/1QN99FZUQl3KE4c7eg9-GLLEl3Og0FqreJbiTrCc8ZAk/htmlpresent, liée depuis https://blog.playdead.com/articles/inside_presentations/inside_publications.html. Slides 9-15 : réponse aux commandes et transitions ; 19 et 21-24 : contacts et couches procédurales. Lecture documentaire du texte des diapositives, sans vidéo visionnée, sans transcription ni échantillonnage de photogrammes ; pas de timecodes. Application originale : relever le corps pendant les contacts sans retarder la simulation. Aucun asset ni paramètre Playdead importé.

Reprise : valider l'ensemble en WebGL dès que disponible, puis améliorer le pivot avec pied ancré et la coordination de la jambe arrière. La remontée reste une composition procédurale et non un nouveau clip complet d'escalade. Ne pas multiplier les fragments. Bilan cumulatif mis à jour ; V5 et Noël préservés.

---

# Composition de la sortie du bassin, 13 novembre 2026

Source Sites 38 récupérée via le workflow après nettoyage du cloud, commit 54aea52702ef2e64e2e086962875e463e9d1c919. Dépôt propre, verrou exclusif nominatif. Objectif : rendre plus lisible le contact de berge ajouté précédemment, sans changer l'animation ni la physique.

Le cadrage se prépare pendant les derniers mètres de nage : enveloppe spatiale douce de x=6750 à 7080, maintien jusqu'à 7330, retour au plan courant jusqu'à 7690. Distance de composition 10,7 m, regard plus centré sur le personnage, caméra plus haute pour dégager le dessus du quai. Le plan revient progressivement vers la baie finale. Le même lieu produit le même cadrage à l'arrêt, en revenant en arrière et après reprise. La largeur tient compte du format écran. Le plan de balance à 14,8 m, l'abri et le recul des poursuites sont conservés. Aucun changement de collision, vitesse, commandes, sauvegardes, son ou teaser.

152 tests réussis : validation-shore-camera.txt. Continuité des cibles à l'entrée/sortie de la zone et lors du changement nage/remontée, réversibilité, stabilité temporelle, trois rapports d'écran. Vraie caméra Three : tête, mains et pied restent dans le cadre pendant la remontée. Traversée complète simulée en 42,52 s sans décès ; les tests de reprise, balance décalée et contacts passent. Cela ne valide pas le confort perceptif du travelling.

Rendu Blender inspecté à 41,5 s : captures/conservatory-shore-camera.png. Le personnage est recentré et le dessus du quai davantage visible ; le bas du corps reste partiellement occulté pendant la traction. Export de la vraie scène par scripts/inspect-3d.mjs, shaders et lumière de Blender différents de WebGL. Nouvel essai navigateur cloud : WebGL 2 indisponible, écran de repli observé. Aucun test iPhone physique.

Source lue : https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html, Marek Bogdan, 2016. Article documentaire, en particulier le contrôle du détail et de la lumière selon distance caméra et point d'intérêt ludique. Aucun visionnage vidéo, transcription ou photogrammes dans cette passe, aucun timecode. Application NACRE originale : cadrage local pour une interaction précise, sans asset Playdead.

Reprise : le cadrage ne remplace pas le transfert de poids. Reprendre le bassin et la silhouette de la traction, en conservant les contacts et la continuité. Ne pas multiplier les niveaux avant la validation WebGL du passage. Historique et bilan cumulatif conservés.

---

# Premier appui sur la berge, 13 novembre 2026

Source Sites 37 récupérée après nettoyage du cloud, commit 4dd8fbd83ae8f9a5e6bf1bcc3ac0f62657fa1970. Dépôt propre et verrou nominatif. Objectif : améliorer la jambe libre pendant la sortie du bassin, sans casser la prise anticipée des mains.

Changement effectif : le solveur à deux os accepte désormais cuisse, tibia et pied. Pendant la remontée du bassin uniquement, le pied gauche est levé avant d'avancer au-dessus du bord, posé brièvement sur la pierre, puis rendu à la pose libre. Le genou se plie vers l'avant. L'orientation libre de la chaussure est préservée après résolution pour éviter sa rotation avec le tibia. Une première mesure a montré un enfoncement à la transition ; une limite verticale maintient le pied au-dessus de la pierre après la pose. Aucune durée, collision, commande, sauvegarde ni mécanique modifiée. Les mains et les autres remontées sont conservées.

150 tests réussis : validation-bank-foot.txt. Nouveau contrôle sur le vrai squelette pendant la route complète : pied posé à 25 cm du bord, maintien avant lâcher, continuité et garde de surface après la pose. Traversée déterministe 42,52 s, zéro décès. Anciennes reprises, balance décalée, gestes tactiles et contacts passent. Les mesures sont celles des articulations ; elles ne prouvent ni la beauté ni toutes les collisions du vêtement.

Nouvel essai navigateur cloud : WebGL 2 indisponible et écran de repli observé. Contrôle visuel Blender de la vraie scène à t=0,30 de remontée : captures/conservatory-bank-foot.png. Le personnage reste partiellement occulté par la berge à ce moment ; le transfert de poids du bassin et la lisibilité du genou demandent encore une passe. Pas de capture WebGL, de benchmark ou d'iPhone physique. Le son n'est pas modifié.

Référence consultée : index officiel https://blog.playdead.com/articles/inside_presentations/inside_publications.html, description Animation-talk et besoins interactifs. Documentation seulement, pas de vidéo, transcription ni photogrammes de gameplay visionnés dans cette passe ; aucun timecode. Application originale : contact progressif d'un pied sans modifier la trajectoire physique.

Reprise : valider en WebGL, améliorer la visibilité de l'appui et le transfert de bassin, puis pivot ancré au sol. Arrivée vivante, papillon, lumière, V5 et publication Noël préservés. Ne pas généraliser cette pose aux autres rebords sans contrôle.

---

# Arrivée et présence vivante, 13 novembre 2026

Objectif : répondre au retour de Thomas sur le personnage figé et le manque de petites scènes qui donnent envie d'observer. Source Sites 36 ouverte avant édition, commit 589128f7e60489e6e15c444d94e7b2f5a11aa998 ; état propre et verrou exclusif nominatif.

Changements effectifs : courte chute depuis une ouverture de service brisée, réception accroupie et redressement. Les commandes restent disponibles immédiatement ; les reprises de checkpoint ne rejouent pas cette arrivée. Au repos, une surcouche osseuse ajoute dos légèrement voûté, respiration, mouvements des bras et regard occasionnel, sans translation des pieds. Les transformations sont restaurées avant chaque mise à jour pour éviter leur accumulation à la pause. Un papillon de nuit nacré quitte la caisse à l'approche du personnage et gagne le cadran de la balance, puis s'éloigne. Sa trajectoire suggère un lien entre objet et mécanisme sans texte. Maçonnerie, ouverture et insecte sont des volumes originaux locaux ; géométries fixes regroupées par matériau. Bruit d'ailes procédural doux ajouté, pas d'écoute critique revendiquée. L'accueil propose désormais ENTRER EN 3D en premier ; version peinte toujours accessible.

Validation : 149 tests réussis, validation-living-scene.txt. Arrivée sans intervention, prise de contrôle immédiate, pause, checkpoints et échec/reprise ; déclenchement unique de l'envol, trajectoire et immobilisation à la pause ; vraie hiérarchie osseuse et absence de dérive vérifiées. Parcours complet simulé du conservatoire : 2551 pas, 42,52 s, zéro décès. Balance décalée, saut au pouce gauche, prise de berge et sauvegardes conservés. Les tests des autres passages passent aussi.

Contrôle visuel : trois exports de la scène Three.js, rendus dans Blender et inspectés, captures/conservatory-arrival.png, conservatory-living-idle.png et conservatory-moth.png. Le premier contrôle a motivé l'ajout d'un pan de maçonnerie autour de l'ouverture et une silhouette d'ailes moins uniforme. Ce sont des contrôles CPU fixes, avec éclairage et shaders différents du navigateur, pas des captures WebGL ni une validation de fluidité. Navigation réelle accueil vers conservatoire vérifiée dans le navigateur cloud ; WebGL 2 encore indisponible, écran de repli observé. Aucun iPhone physique testé.

Source documentaire consultée : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, descriptions de Subtleties of INSIDE et Animation-talk. Index documentaire uniquement : aucune vidéo, transcription ou séquence de photogrammes visionnée dans cette passe, aucun timecode. Le retour de Thomas oriente la présence et les indices environnementaux ; mise en scène et paramètres NACRE originaux, sans asset Playdead.

Limites et reprise : la réception et le repos restent des compositions procédurales, pas une nouvelle capture de mouvement. L'ouverture reste sobre et demande davantage d'usure localisée ; un seul insecte réactif, pas un écosystème. Contrôler le mouvement en WebGL dès que possible et poursuivre transfert de poids et appui du pied à la sortie du bassin. Ne pas multiplier les niveaux avant ces finitions. V5 et dossier Noël intacts.

---

# Saut au pouce gauche, 13 novembre 2026

Retour explicite de Thomas : après revérification d’INSIDE, le geste de saut doit être effectué vers le haut avec le pouce gauche. Source Sites 35 ouverte via le workflow, commit 1e63c06eba5336623c5616e45b404c259e598d91 ; dépôt propre et verrou exclusif nominatif. Ce retour remplace les anciennes consignes attribuant le saut à droite.

Changement effectif : controls.js commun à la serre, au Convoi, au conservatoire 3D et aux deux fragments. Le pouce gauche conserve son axe horizontal flottant et déclenche le saut après 22 px CSS de montée. Redescendre d’au moins 16 px réarme un nouveau geste sans devoir lever le doigt. Les petits déplacements verticaux ne déclenchent pas de répétition. Le saut ne coupe pas l’action du pouce droit. À droite : maintien pour saisir/agir/cacher, toucher bref pour une interaction ponctuelle disponible, aucun saut. Les rôles restent attachés au côté où chaque doigt a commencé. Clavier, physique, sauvegardes, balance, prise de berge et teaser V5 conservés. Consignes, attributs accessibles et versions de cache actualisés dans toutes les entrées jouables.

Validation : 146 tests réussis (validation-left-jump.txt). Gestes simultanés, répétition sans lever le pouce, dérive, annulation, appui stationnaire, anti-doublon Touch/Pointer et prévention de défilement testés. Nouveau parcours complet du conservatoire passant réellement par le reconnaisseur de gestes : fin, grille verrouillée ouverte, berge franchie, zéro décès. Les parcours existants de tous les autres passages passent aussi.

Navigateur cloud : version peinte lancée et inspectée ; glissement du pointeur à gauche vers le haut, compteur de sauts de 0 à 1, relâchement sans commande bloquée. Même geste à droite : compteur toujours à 1. Défilement rapporté [0,0]. Il s’agit d’un pointeur de bureau, pas d’un toucher Safari. Le conservatoire a été ouvert ensuite : WebGL 2 toujours indisponible, repli explicite observé. Aucun test iPhone physique ou succès WebGL revendiqué. Pas de nouveau rendu Blender nécessaire pour cette modification de commandes.

Référence de cette correction : observation rapportée par Thomas, aucune nouvelle vidéo visionnée, transcription lue ou séquence Playdead analysée dans cette passe. Les seuils sont ceux de NACRE et ne sont pas attribués à Playdead.

Point de reprise : conserver ce schéma gauche déplacement/saut, droite action. Continuer le transfert de poids et le premier appui de pied pendant la sortie du bassin ; vérifier confort des seuils sur un vrai téléphone quand un retour utilisateur est disponible. Aucun nouveau niveau ajouté.

---

# Prise anticipée de la berge, 13 novembre 2026

Objectif : supprimer le saut des mains au passage nage/remontée. Source Sites 34 récupérée, a3e55bd56d569bf42d5d2e5e1bdb2eda97aa994a. Dépôt cloud restauré via Sites, état propre et verrou nominatif. Éclairage de la version 34 et corrections de balance conservés.

Reproduction CPU sur la vraie scène : la main gauche passe de [119,867 ; -0,741 ; -0,290] à [120 ; 0,035 ; -0,190] en une image à l’entrée de la remontée, soit 0,7934 m. La pose de nage ne préparait aucune prise, puis la cinématique inverse plaçait instantanément les mains sur la pierre.

Correction de présentation dans conservatory-art.mjs : sur les 85 dernières unités de l’approche, fondu de la nage vers une posture de préparation accroupie, relèvement progressif du modèle immergé et déplacement continu des deux mains vers le rebord. L’orientation du corps module la prise pour permettre de repartir dans l’autre sens. La remontée existante conserve ensuite ses contacts et son lâcher progressif. Aucun changement de vitesse, collision, durée du franchissement, commande ni sauvegarde. Le décalage de la main gauche à la première image de remontée descend à environ 0,000000026 m dans le parcours déterministe : c’est une mesure de continuité, pas une preuve de naturel.

140 tests réussis : validation-swim-grip.txt. Les deux mains sont vérifiées pendant toute l’approche (déplacement par image inférieur à 14 cm à 60 Hz, puis inférieur à 1 cm à la prise) ; le retour en arrière abandonne la préparation. Parcours complet simulé 2 553 états / 42,55 s / zéro décès. Contacts, balance décalée et anciennes reprises conservés.

Source documentaire consultée : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, rubrique Animation-talk, description des besoins interactifs de l’animation. Aucun nouveau visionnage de vidéo, transcription ou photogramme ; aucun timecode. L’application à NACRE et les paramètres sont originaux, pas présentés comme ceux de Playdead.

Contrôle visuel de la préparation : scène Three.js à 41,08 s exportée sur CPU puis rendue et inspectée dans Blender (`captures/conservatory-swim-grip.png`). Les deux bras rejoignent le bord de pierre, le torse reste partiellement immergé ; le visage est encore peu visible dans cette pose. Ce rendu fixe ne valide pas la fluidité, la brume ou les shaders du navigateur. La passe précédente a constaté WebGL 2 indisponible dans le navigateur cloud ; aucun nouveau succès WebGL revendiqué ici. Aucun iPhone physique testé. Le modèle et la nage restent procéduraux ; le poids du bassin et l’appui du pied pendant la traction demandent encore une animation spécifique.

Prochaine priorité : transfert de poids et premier pied sur la berge, sans perdre la continuité de prise et de lâcher. Pas de nouveau niveau avant cette finition. Teaser V5 et publication Noël intacts.

---

# Lumière du bassin et ouverture de la berge, 13 novembre 2026

Objectif : donner une progression lumineuse au passage 3D et mieux séparer le personnage de l’architecture. Source Sites 33 récupérée par le workflow, commit f842f5385d2095a4431a649afa7123d0ecbb68ea. Checkout cloud restauré après nettoyage de l’espace temporaire ; état propre, verrou nominatif acquis. Aucune reprise depuis un ancien verrou ou une ancienne copie.

Changement jouable : conservatory-light.mjs pilote les sources existantes par des enveloppes spatiales continues. La charpente et l’abri atténuent la lumière haute ; le bassin reçoit une teinte bleutée et un contour plus présent ; la dernière berge s’ouvre progressivement vers une lumière ambrée. Le remplissage frontal reste borné pour éviter de perdre le manteau dans l’ombre. Une seule lumière ponctuelle fixe est ajoutée près de la baie finale existante, sans ombre supplémentaire. Pas de météo arbitraire, de flash, de mouvement de caméra imposé, de changement de commandes ou de collision. La même position restitue la même lumière après un retour ou une reprise. La balance, les sauvegardes, le modèle et les sons de la version 33 sont préservés.

Source étudiée : Marek Bogdan, The Lighting of INSIDE (2016), https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html, texte consulté, notamment paragraphes sur la lumière composée selon le point d’attention et la distance de caméra. Application originale à NACRE : diriger le contraste autour du parcours et de sa sortie plutôt qu’éclaircir uniformément tout le décor. Ni vidéo visionnée, ni transcription, ni photogramme étudié dans cette passe ; aucun timecode, aucun asset Playdead importé.

Navigateur cloud : aperçu Sites lancé, page conservatoire ouverte par son lien ; WebGL 2 toujours indisponible, écran de repli observé et boutons désactivés. Aucun contournement ni test iPhone physique. Les rendus Blender de contrôle ne reproduisent ni la brume ni tous les shaders et ne remplacent pas cette validation.

Contrôles : 138 tests réussis, `validation-lighting-zones.txt`. Parcours complet simulé de 2 553 états, 42,55 s, zéro décès, y compris le mécanisme de balance et les reprises déjà couvertes. Nouveaux essais de continuité spatiale et retour au checkpoint ; budget de sources constant pendant la traversée et une seule source avec ombres. Aucun état physique modifié par le rendu.

Inspection visuelle : deux poses de la vraie scène et des vraies animations exportées sur CPU, puis rendues dans Blender : `captures/conservatory-basin-light.png` à 37 s et `captures/conservatory-shore-light.png` à 42,4 s. Dans le premier contrôle, personnage et gardien restent identifiables contre les eaux sombres ; dans le second, la course se détache devant la baie ambrée. Le moteur Blender utilise sa réponse lumineuse propre et n’applique pas le brouillard WebGL : les couleurs finales restent à vérifier dans un navigateur compatible. La nage et la répétition des formes du décor restent visibles comme limites ; ce changement ne les corrige pas. Aucun FPS mesuré. Teaser V5 vérifié identique par SHA-256.

Prochaine priorité : prise et transfert de poids lors de la remontée depuis l’eau ; conserver cette progression lumineuse et la lisibilité du personnage. Une vérification WebGL réelle reste nécessaire pour juger la brume, les reflets et le coût sur mobile. Le teaser V5 et sa publication Noël restent hors périmètre.

---

# Correction après blocage réel sur iPhone, 13 novembre 2026

Source Sites 32 récupérée : 64f2b6c26f0f27e6ed4e317548037ef21465dddf. Dépôt propre, verrou nominatif. Thomas fournit deux captures : personnage sur une caisse légèrement écartée du mur, cadran inactif ; caisse ensuite déplacée vers la gauche. Son constat invalide notre conseil précédent fondé seulement sur un alignement parfait.

Reproduction avant correction : caisse arrêtée à 10, 20 ou 30 unités à gauche de plateX ; personnage posé sur son dessus ; deux secondes immobiles. gate=0 et platePressure=0 dans chaque cas. À décalage zéro seulement, gate=1. Le seuil arbitraire inférieur à 8 unités ne correspondait pas au chevauchement visible du plateau et de la caisse.

Correction : plateCoverage calcule l’intersection horizontale réelle avec le plateau de 1,95 m. Le cadran réagit à la charge partielle dès qu’il y a chevauchement ; le poids du personnage ouvre la grille quand au moins 60 % de la caisse repose sur la balance. Les écarts 0/10/20/30/40 sont testés, avec charge, saut, montée et traversée. Retour depuis grille fermée également testé avec caisse décalée. Une caisse éloignée n’ouvre pas la grille. La mécanique reste déterministe, sans simulation générale des masses. Sauvegardes et checkpoint inchangés.

Lisibilité : distance de caméra du mécanisme réduite de 18,5 à 14,8 m ; cadrage général rapproché, centre du plan moins haut. Manteau 14 % plus épais en profondeur de profil et 6 % en largeur, laine plus claire. Squelette, taille verticale, foulée, contacts et clips conservés ; GLB reconstruit depuis son générateur, même nombre de triangles.

Son : ancien caught à attaque de 6 ms remplacé par une enveloppe sombre de 1,4 s à attaque progressive, filtrée. Passage du convoi de 0,85 à 4,2 s, roulement et pulsations de roues ; poursuite adaptée. Gouttes espacées de 11 s seulement hors poursuite et hors nage, sans boucle permanente de pluie. Sons procéduraux originaux, pas des enregistrements réalistes ni une nouvelle musique. Pause, budget de voix et volumes conservés. Pas d’écoute critique du mix final revendiquée.

136 tests réussis, validation-user-balance.txt. Tests ajoutés : placements décalés, retour et franchissement, poids partiel sans ouverture abusive, attaque douce et cadence des gouttes. Toute la suite couvre aussi routes complètes, sauvegardes, mains, cadrages, cycle accroupi et demi-tour. Les vérifications automatisées seules ne prouvent pas que le jeu est intuitif.

Contrôle visuel : scènes Three.js et poses réelles exportées sur CPU, puis deux rendus Blender inspectés : `captures/conservatory-user-balance.png` (15,8 s, personnage sur caisse, cadran et grille dans le même plan) et `captures/conservatory-user-character.png` (3 s, course). Le rapprochement rend le corps plus présent ; sa silhouette reste stylisée. Ces références ne valident ni les shaders WebGL, ni les performances ni la fluidité sur iPhone. Le navigateur distant testé lors de la passe précédente refusait WebGL 2 ; aucun nouveau succès navigateur revendiqué.

Référence sonore hors ligne régénérée : `audio/conservatory-foley-reference.wav`, 44 s, 100 événements, crête 0,1097 et RMS 0,0050. Elle permet une écoute ultérieure des effets seuls ; ce calcul ne remplace pas une écoute du mix dans le jeu.

Référence de cette passe : les deux captures et le retour de jeu réels de Thomas, pas une nouvelle étude Playdead. Aucun nouveau visionnage de vidéo ou source Playdead, aucun timecode. Les anciens tests idéalisaient la position de la caisse : ce défaut de couverture est corrigé explicitement. La présence d’un rendu 3D dans les captures de Thomas prouve qu’il s’affiche sur son appareil, mais ne constitue pas une session de test iPhone effectuée par nous.

Prochaine priorité : tester la compréhension de la balance sans explication ; prise et poids du corps à la sortie de l’eau ; écoute réelle du mix et rendu WebGL. Ne pas réintroduire la tolérance de huit unités ou le grand recul de caméra par défaut. Teaser V5 et publication Noël intacts.

---

# Demi-tour amorti et bilan de nuit, 13 novembre 2026

Source Sites 31 récupérée : a6909408f1b62988370848fec3b1cf4b6aa9481b. Dépôt propre, verrou nominatif. Objectif : réduire la rotation instantanée du corps à l’inversion des commandes. Ancien lissage exponentiel : environ 37,5 degrés dès la première image à 60 Hz pour un demi-tour complet.

turn-3d.mjs sépare vitesse angulaire et orientation. Accélération bornée, vitesse maximale, freinage à l’approche et arrêt sans dépassement ; sous-pas limités à 1/120 s pour cohérence à 30, 60 et 120 Hz. Le personnage et le gardien utilisent ce raccord de présentation. La simulation, l’accélération de déplacement, les gestes, collisions, sauvegardes et contacts ne sont pas modifiés. Il s’agit encore d’une rotation de racine : pas d’un pas de pivot avec pied ancré ou d’une capture humaine de demi-tour.

132 tests passent (validation-turn-3d.txt) : nouveau contrôle de rotation dans les deux directions à trois fréquences, inversions répétées du vrai squelette, parcours complet de 2 553 états / 42,55 s / zéro décès, énigme, échec et anciennes reprises. Les mains conservent le lâcher progressif de la passe précédente.

Référence relue : index officiel https://blog.playdead.com/articles/inside_presentations/inside_publications.html, description de Animation-talk et Subtleties of INSIDE. Aucun nouveau contenu de conférence visionné, aucune transcription ou photogramme étudié, aucun timecode. Application originale : éviter un changement instantané de vitesse de rotation tout en conservant la réponse des commandes. Ne pas attribuer nos paramètres à Playdead.

Navigateur cloud réessayé via l’aperçu Sites : WebGL 2 indisponible, écran de repli observé et boutons de jeu désactivés. Aucun contournement. Une pose de demi-tour exécutée par les commandes ordinaires puis rendue dans Blender a été inspectée : docs/captures/conservatory-turn-reference.png. Le corps tourne en bloc sans rupture visible du maillage sur cette pose ; les pieds ne disposent pas encore d’un pivot dédié. Pas de validation du mouvement continu WebGL, de FPS, d’écoute critique ou d’iPhone physique.

Le bilan cumulatif est dans docs/BILAN-NUIT-2026-11-13.md. Prochaine priorité : validation du vrai rendu sur navigateur compatible, puis prise et transfert de poids à la sortie de l’eau, pivot des pieds et séparation lumineuse du vêtement. Préserver les acquis avant de créer une seconde scène 3D. Teaser V5 et publication Noël inchangés.

---

# Lâcher progressif des mains, 13 novembre 2026

Source Sites 30 récupérée : 261f8cba5be6ea7e64ebbc48da48cc7bb254fd4c. Dépôt propre, verrou nominatif. Objectif : supprimer le saut de pose en fin de remontée avant d’étendre le personnage à d’autres passages.

Mesure CPU de la vraie articulation gauche avant correction : déplacement de 0,4195 m, 0,4196 m et 0,3978 m entre t=0,333 et t=0,350 sur les trois remontées (caisse, rebord et bassin). La cinématique inverse se coupait immédiatement à t=0,34, alors que le corps poursuivait sa transition jusqu’à t=0,54. Les deux mains restent désormais ancrées jusqu’à t=0,34, puis leur cible rejoint progressivement la main libre de l’animation sur la même courbe douce que le redressement du corps. Aucun changement de durée, trajectoire physique, sauvegarde ou contrôle. Ni nouvel asset ni modification du teaser.

Après correction, déplacement gauche au premier instant de lâcher : 0,0030 m, 0,0030 m et 0,0029 m. Ce sont des mesures à 60 Hz du squelette, pas une preuve de naturel perçu. 130 tests réussis (validation-climb-release.txt), dont les deux mains sur les trois remontées, contacts avant lâcher, parcours entier 2 553 états / 42,55 s / zéro décès, énigme, échecs et reprises anciennes.

Source consultée : index officiel https://blog.playdead.com/articles/inside_presentations/inside_publications.html, rubrique Animation-talk, qui présente les besoins d’animation d’une expérience interactive. Le lien Google Slides a renvoyé une page sans contenu de diapositives exploitable, puis la vue HTML a échoué. Aucun nouveau contenu des diapositives, vidéo, transcription ou photogramme étudié ; aucun timecode. Application propre à NACRE : faire coïncider la libération du contact et la transition du corps. Les références d’animation précédemment lues restent documentées dans les entrées antérieures. Aucun asset Playdead repris.

Contrôles visuels hors navigateur : deux poses exportées de la vraie scène Three au début et au milieu du lâcher à la sortie du bassin, rendues dans Blender. Images inspectées et conservées dans docs/captures/conservatory-release-start.png et conservatory-release-mid.png : mains sur le quai au début du lâcher, puis bras qui reviennent près du corps. Le redressement reste rapide et générique. Ce contrôle ne valide ni shaders WebGL ni mouvement continu en jeu. Pas de nouvel essai navigateur dans cette passe ; refus WebGL du navigateur cloud observé précédemment toujours non résolu. Aucun iPhone physique, mesure FPS ou écoute critique.

Prochaine priorité : transition de nage vers première prise et demi-tour, puis lumière du vêtement sous l’abri. La sortie de l’eau reste une remontée procédurale générique, pas une animation d’échelle dédiée ; les pieds et le transfert de poids demandent encore du travail. Les variations de matière précédentes sont conservées. Aucun autre niveau 3D ajouté avant ces corrections.

---

# Matières du conservatoire et double teinte, 13 novembre 2026

Source Sites 29 récupérée : d09b970e196a64ed80bbc3a92b5010530962e403. Dépôt propre, verrou nominatif conservé et libéré après publication. Objectif : réduire les aplats de pierre/bronze et corriger un écart de couleur entre le moteur et les références Blender.

Défaut trouvé dans build-conservatory-3d.py : les couleurs des sommets contiennent déjà la teinte du matériau, mais le facteur de couleur du matériau glTF la multipliait encore dans Three. La référence Blender utilisait seulement la couleur des sommets et masquait cet assombrissement. Sur les pierres et bronzes traités, le facteur est désormais blanc et la peinture des sommets conservée. Les autres familles ne sont pas modifiées. Il ne s’agit pas d’une hausse globale de lumière.

Nouveau surface-finish.mjs : masques originaux périodiques à plusieurs échelles, couleur et rugosité distinctes pour pierre et bronze. Quatre DataTextures de 128 × 128 partagées, filtrage avec mipmaps, sans image distante. Projection UV locale pour conserver les taches sur les pièces mobiles ; positions, indices et collisions inchangés. Traitement du décor et des parties pierre/bronze de la caisse, de la balance, du refuge et des véhicules. Personnages, eau, feuillage, vitrage et musique inchangés. Aucune normal map ni usure sculptée ajoutée : les variations restent volontairement discrètes et ne constituent pas une finition photoréaliste.

L’export CPU et le rendu Blender transmettent maintenant ces cartes et coordonnées UV ; ils ne reproduisent toujours pas les shaders, le brouillard ou la lumière WebGL. Référence écrite relue : Marek Bogdan, The Lighting of INSIDE (2016), https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html. Leçon appliquée : conserver des détails et contrastes locaux selon la distance de caméra et le point d’attention du joueur. Texte uniquement, aucune nouvelle vidéo, transcription ou planche de photogrammes ; aucun timecode ni asset Playdead.

129 tests passent (validation-materials.txt). Trois nouveaux tests vérifient les cartes déterministes et bornées, leur filtrage, l’absence de modification des formes/peintures, l’exclusion du personnage et le partage de quatre cartes dans la vraie scène. Parcours 3D intégral de 2 553 états / 42,55 s / zéro décès, retours sur la caisse après fenêtre manquée, collisions et anciennes reprises conservés. Les tests exécutent la scène Three sur CPU, sans compilation GPU ni mesure de performance.

Contrôle visuel : référence Blender du mécanisme à 15,8 s inspectée, docs/captures/conservatory-materials.png. Cadran, caisse et silhouette restent distincts ; les matériaux et l’architecture restent encore assez uniformes. Deuxième référence à 30,6 s sous le refuge inspectée : docs/captures/conservatory-materials-shelter.png. La tête reste dégagée, mais le vêtement sombre manque encore de séparation locale. Aucun nouveau contrôle navigateur dans cette passe : le refus WebGL observé lors de la passe précédente n’est pas résolu ni contourné. Aucun test iPhone physique, FPS ou écoute critique. Les nouveaux shaders de matériaux doivent encore être vus dans un navigateur compatible.

Prochaine priorité : transitions corporelles, en particulier demi-tour et sortie de l’eau, puis usure localisée aux contacts et au niveau d’eau plutôt que bruit uniforme. Il reste aussi à vérifier la compréhension de la balance auprès d’un nouveau joueur. Teaser V5 et publication Noël intacts. Cette passe ne prétend pas atteindre la qualité artistique d’INSIDE.

---

# Lecture de la charge et collision de grille, 13 novembre 2026

Source Sites 28 récupérée : 140a4b2302f30887f8c20eba6d1c7af474f6ec66. Dépôt propre, verrou exclusif identifié. Objectif : rendre la balance compréhensible avant le saut et corriger le seuil de collision fixe.

Défauts constatés dans la source : aucune réaction distincte à une caisse seule ; franchissement autorisé à gate=0,62 quelle que soit la hauteur pendant un saut. Nouveau signal platePressure : zéro sans caisse, charge partielle avec caisse, pleine avec personnage sur la caisse. Cadran volumétrique en bronze, aiguille ivoire et neuf repères sans texte ; aiguille et léger enfoncement du plateau suivent le même état physique. Éclairage local de faible portée sans ombres supplémentaires. Le cadran est placé à gauche de la caisse pour ne pas recouvrir la silhouette.

La grille compare maintenant son ouverture à une enveloppe corporelle conservatrice de 1,82 m, tenant compte de la hauteur du saut. Le cliquet conserve l’ouverture acquise si le seuil est occupé ; un saut à cet endroit rencontre le dessous du battant sans relever magiquement la porte. Il ne s’agit pas d’une collision par triangle du personnage. L’énigme, ses vitesses, l’ouverture finale, les sauvegardes et la route guidée restent compatibles.

Référence réellement relue : Marek Bogdan, The Lighting of INSIDE (2016), https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html, texte sur le contrôle des détails selon distance de caméra et point d’attention ludique. Application : accent local sur un retour d’état lisible, plutôt qu’une hausse de lumière globale. Aucun nouveau visionnage vidéo, ni timecode, ni asset Playdead. Les observations du walkthrough précédent restent consignées dans l’entrée antérieure.

126 tests passent, dont parcours complet 2 553 états / 42,55 s / zéro décès, échec de timing et retour sur la caisse, reprises anciennes et géométrie sur toute la traversée. Nouveaux tests : trois charges distinctes, saut bloqué par grille partiellement ouverte, contact avec dessous sans décès ; cadran conforme à la charge et lampe sans ombre sur tous les états.

Navigateur cloud réessayé via l’aperçu Sites : écran WebGL 2 indisponible, boutons Traverser et parcours guidé désactivés. Aucun changement de permissions ou contournement. Rendu Blender de contrôle à 15,8 s inspecté et conservé : docs/captures/conservatory-balance-feedback.png. Cadran visible à côté du personnage, mécanisme dans le cadre. Ce n’est pas une capture WebGL ; pas de mesure FPS, test iPhone physique ou écoute réelle.

Limites : lecture du cadran sur petit écran et apprentissage sans indice encore à valider humainement. Câbles fins, matériaux uniformes et décor répétitif restent visibles. Prochaine priorité : matières et lumière du passage, puis naturel des transitions du personnage, avant d’étendre d’autres niveaux. Teaser V5 et publication Noël intacts.

---

# Balance et grille du conservatoire, 13 novembre 2026

Source Sites 27 récupérée : 363c7be5bcca834c16ed13ce5b45ed8c3ec617eb. Dépôt propre, verrou nominatif acquis. Objectif : donner au passage de la caisse une cause, une observation et une fenêtre de franchissement propres à la version 3D.

conservatory-logic.js enveloppe la simulation originale sans changer Le convoi peint : pousser la caisse sur la balance, monter dessus pour ajouter son poids, attendre la levée de la grille, puis sauter vers le rebord et traverser pendant la descente amortie. Une caisse seule ne suffit pas. Le joueur peut revenir sur la caisse et recharger sans mourir. Un cliquet de sécurité empêche la fermeture sur le personnage au seuil ; le passage déclenche ensuite un verrouillage ouvert. Il s’agit d’une mécanique déterministe à seuil de charge, pas d’une simulation générale de masses/cordages ou de corps rigides.

Modèles originaux : plateau, guides bronze, jambages pierre, battant chanfreiné, poulies et contrepoids sculpté, construits avec les mêmes matériaux que le passage. Les positions sont pilotées par le même état que les collisions. Deux sons ponctuels indiquent levée complète et verrouillage. Le mode guidé attend effectivement sur la caisse, utilise les commandes ordinaires et franchit sans téléportation. L’indice facultatif est actualisé ; aucune explication supplémentaire obligatoire.

Le premier rendu Blender coupait le haut du mécanisme. Le cadre s’élargit/rehausse progressivement à l’approche, reste contrôlable, puis revient au cadrage rapproché après la grille. Deuxième rendu inspecté : docs/captures/conservatory-counterweight.png. Le personnage devient ponctuellement plus petit pour montrer la relation caisse/grille/contrepoids. Les câbles restent fins et leur lecture devra être jugée sur écran mobile. Pas de capture WebGL : ce sont des maillages Three exportés puis rendus par Blender, avec des shaders et lumières différents.

Sources réellement lues : index officiel https://blog.playdead.com/articles/inside_presentations/inside_publications.html (présentation des approches audio/animation) ; walkthrough écrit https://gameup24.wordpress.com/2016/07/01/inside-puzzle-guide-and-walkthrough/ (section The City, montée/vidange puis déplacement avant disparition de l’accès). TrueAchievements a échoué avec 402, sans achat ni contournement. Leçon retenue : préparer un état favorable puis agir pendant sa transformation ; notre balance ne reproduit pas cette salle. Texte seulement, aucune vidéo ni photogramme nouveau visionné, aucun timecode attribué, aucun asset Playdead importé.

124 tests réussis. Nouvelle traversée complète : 2 553 états, 42,55 s, zéro décès (solution connue, pas première découverte). Ancien parcours peint conservé. Tests : caisse seule inactive, fermeture après hésitation, protection au seuil, retour à la caisse après échec de timing, reprises et sauvegardes anciennes, animation et géométrie sur tout le nouveau parcours. Un test de fermeture attendait 4 s pour une descente de 4,17 s : durée d’attente corrigée. Sauvegardes checkpoint >=3 rétablissent la grille franchie ; checkpoints précédents reprennent le puzzle. Mode guidé toujours sans sauvegarde.

Limites : aucune nouvelle validation WebGL ou iPhone physique, aucune écoute critique. La mécanique n’est pas encore testée par un joueur découvrant le passage. Texture/usure, visage du gardien, collision du vêtement, exactitude des pas sonores et richesse des énigmes restent à améliorer. Prochaine priorité : vérifier la lisibilité et le retour visuel du mécanisme, puis enrichir la lumière/matière du passage plutôt que multiplier les niveaux. Teaser V5 et publication Noël inchangés.

---

# Acoustique du conservatoire, 13 novembre 2026

Source Sites 26 récupérée : d0857b52df39df98c8aa28941a52d49dde179d6e. Dépôt propre et verrou exclusif identifié. Objectif : remplacer dans le conservatoire les impacts uniformes et donner un retour sonore à l’eau et à la caisse.

Module conservatory-sound.js : cinq familles de bruitages procéduraux originaux (pierre, bois, métal, tissu, eau), variations déterministes, enveloppes courtes sans boucle ambiante permanente. Pas et réception, prise, saut/remontée, entrée dans l’eau, brassées pendant déplacement et frottement seulement quand la caisse avance. Résonance unique non bouclée plus courte sous l’abri, plus ample au bassin ; filtrage des effets dans l’eau. La musique enregistrée existante et son fondu restent inchangés. Aucun asset extérieur ajouté, aucune mélodie synthétique. Il ne s’agit pas de prises de son réelles.

Le mix musique/effets et le mute sont conservés dans une clé propre au conservatoire ; les curseurs reflètent les valeurs restaurées. Douze voix maximum, nettoyage des nœuds, arrêt des sources à la pause, pas de redémarrage de la musique aux échecs. Aucun changement de simulation, sauvegarde de progression, rendu, commandes ou teaser V5.

Source étudiée : Jakob Schmid, Playdead, The Boy from INSIDE, AES 2016, https://www.schmid.dk/talks/2016-02-11-aes/schmid-AES_2016-The_Boy_from_INSIDE.pdf. Texte extrait du PDF effectivement lu, pages 8–19 et 27–39 : sons sensibles à l’état, séparation analyse/rendu, réactions aux changements physiques. Aucune vidéo regardée ni démonstration audio écoutée, aucun timecode. Application limitée : lecture de la simulation sans la modifier, événements contextuels ; notre système n’est pas celui de Playdead.

119 tests réussis : parcours complet 2 499 états et zéro décès, sauvegardes/reprises existantes, sons de caisse/eau présents, silence à l’immobilité, limites des signaux, budget de voix, arrêt pause et persistance du mix. Le test initial comparait strictement -0 à 0 au début d’une enveloppe : assertion corrigée sur la valeur absolue, sans changement audio. Export de référence hors navigateur : docs/audio/conservatory-foley-reference.wav, 44 s, 99 événements, crête 0,1001, RMS 0,00351 au volume effets par défaut. Générateur scripts/render-foley-review.cjs ; filtre de contrôle approximé, aucune mesure du mix final avec musique.

Limites : pas d’écoute critique validée ni d’exécution Web Audio réelle dans cette passe. Pas de nouveau test visuel car aucun rendu modifié ; refus WebGL antérieur toujours ouvert. Aucun iPhone physique. Les tests ne prouvent ni réalisme acoustique ni qualité émotionnelle. Les pas suivent encore les événements de distance de la simulation, pas les contacts exacts du squelette. Prochaine priorité : énigme physique propre au passage, tout en conservant la validation WebGL et l’écoute comme contrôles ouverts. Visage partagé et collision du mantelet encore à affiner.

---

# Gardien polygonal et veille au bassin, 13 novembre 2026

Dernière source Sites 25 récupérée (5bd218e555678e187a342789c339de5d0006aec2), dépôt propre, verrou nominatif. Objectif : sortir le poursuivant de la simple copie recolorée de la voyageuse, en conservant sa physique.

Nouveau module guardian-3d.mjs : mantelet ouvert sur l’avant, maillage continu à plis légers suivant poitrine et bassin, traîne liée à la course. Masque original avec visière sombre et doubles filtres en bronze, remplaçant la grosse forme ovoïde. Lanterne volumétrique à poignée, cage, verre ambré et lumière courte sans ombres supplémentaires. Attache exacte à la main droite ; au bord de l’eau, bras relevé progressivement par cinématique inverse selon l’état watching déjà présent dans la simulation. Les accessoires statiques sont regroupés par matériau. Le squelette, la capture de course et le visage de base restent partagés : ce n’est pas encore un personnage entièrement remodelé ni une simulation textile.

Documentation étudiée : notes HTML Animation & Computerspil, Andreas N. Grøntved / Martin Fasterholdt, diapositives 21–26 (couches d’animation, contacts, détails contextuels) : https://docs.google.com/presentation/d/1QN99FZUQl3KE4c7eg9-GLLEl3Og0FqreJbiTrCc8ZAk/htmlpresent, via https://blog.playdead.com/articles/inside_presentations/inside_publications.html. Texte réellement relu après un premier échec d’ouverture ; aucune vidéo regardée dans cette passe, pas de timecodes. Application : ajouter une posture liée à l’événement de veille sans refaire la simulation. Aucun asset Playdead importé.

115 tests passent : parcours complet 2 499 états, zéro décès, anciennes sauvegardes et reprises, contacts de la voyageuse, cadrage sous refuge. Nouveau test : mantelet fini et animé sur toute la poursuite, lanterne à moins de 1 mm du point d’attache, bras levé pendant la veille, voyageuse sans accessoires de gardien. Le regroupement initial a révélé des attributs UV incompatibles ; supprimés pour ces matériaux sans texture, puis suite relancée avec succès.

Rendus Blender de contrôle : plan du bassin à 36 s, gros plan de veille à 38 s et course à 33,3 s. Références conservées dans docs/captures/guardian-3d-basin.png, guardian-3d-watch.png et guardian-3d-run.png. Caméras des gros plans modifiées uniquement pour inspection. Ce ne sont pas des captures WebGL. Aucun nouvel essai navigateur dans cette passe ; le refus WebGL du cloud observé précédemment reste une limite ouverte, aucun FPS ou iPhone physique testé. Teaser V5, audio, physique, commandes et progression inchangés.

Suite prioritaire : bruitages et acoustique contextuels, puis énigme physique propre au passage. Encore à affiner : visage/chevelure partagés, collision du vêtement avec les bras en mouvement, matériaux et transitions de demi-tour. Pas d’équivalence artistique à INSIDE revendiquée.

---

# Lisibilité du refuge 3D, 13 novembre 2026

Source Sites 24 récupérée dans un environnement cloud neuf, commit 776930ec348033d73f9f2f89caa4c17c909c7911. Verrou nominatif acquis avec work-lock.py. Objectif : révéler la silhouette accroupie sous l’abri avant d’ajouter des niveaux.

Deux luminaires de maintenance fixes, boîtiers sombres, verre nacré, attaches et conduits de bronze intégrés sous la traverse. Éclairage local de portée 5,5 m, sans nouvelles cartes d’ombres ; aucune lumière ajoutée ne suit le personnage. Profil chanfreiné de la couverture à la place du bloc rectangulaire. Les premiers rendus ont montré que la lumière ne suffisait pas : la traverse cachait la tête. La caméra descend désormais progressivement avant l’abri (X 4300–4490), garde une hauteur d’œil de 1,12 m, puis remonte après la sortie (X 4920–5100). Le contrôle reste entièrement au joueur.

Source étudiée : Marek Bogdan, The Lighting of INSIDE (2016), https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html. Article écrit effectivement lu, pas vidéo ni transcription ; pas de timecodes. Leçon appliquée : composer localement l’éclairage autour de la lecture du gameplay et du cadre, sans relever l’éclairage de tout le niveau. Notre solution utilise deux lumières ponctuelles Three, pas les decals du moteur Playdead. Aucun asset emprunté.

114 tests passent, parcours complet 2 499 états / 41,65 s / zéro décès, anciennes reprises et sauvegardes conservées. Nouveaux contrôles : éclairages immobiles et sans carte d’ombres, rayon caméra-tête libre de la structure au centre de l’abri. Contacts mains/rebord et cycle accroupi toujours vérifiés. Trois rendus Blender de contrôle comparés à 29,7 s ; le dernier montre la tête dégagée et le buste plus lisible. Référence conservée dans captures/conservatory-shelter-light.png. Les reflets et la diffusion lumineuse de Blender diffèrent du moteur navigateur.

Nouvel essai du navigateur cloud : écran de repli « WebGL 2 indisponible », aucun parcours WebGL exécuté. Pas de mesure FPS, Safari ni iPhone physique. Cette correction ne prouve pas une qualité artistique équivalente à INSIDE. V5, audio, commandes, physique et sauvegardes inchangés.

Prochaine priorité : silhouette et animation propres au gardien, puis mise en scène sonore contextuelle. Les demi-tours, les matières et la répétition architecturale restent à améliorer ; validation WebGL réelle toujours nécessaire avant généralisation.

---

# Reprise après verrou abandonné et locomotion accroupie 3D, 12 novembre 2026

Objectif : réparer le blocage créé par notre propre exécution précédente, puis corriger la glissade accroupie sans changer la physique. Le premier verrou était détenu par une session de commande dont la référence avait été perdue dans une sortie tronquée. Ce n’était pas une preuve d’écriture par un autre développeur. Ancien dossier intact ; copie propre ouverte par Sites dans `recovery/.sites-checkout` depuis la version 23, commit 608db55faf70fe3e86857cbb37efb49ede9656c7. Instructions de reprise au parent et dans AGENTS.md. Détails dans WORKFLOW-RECOVERY.md.

Changement livré : sixième clip `crouchwalk`, un cycle original d’une seconde avec pas alternés, genoux résolus sur des longueurs constantes, pieds en appui au sol, oscillation légère du bassin et mouvement opposé des bras. Cadence liée à la vitesse réelle et à une foulée de 1,55 m. La pose basse immobile reste distincte ; fondus existants conservés. Aucun changement aux vitesses, commandes, collisions, sauvegardes, musique ou médias V5. Le cycle est procédural, pas une nouvelle capture humaine.

Référence effectivement lue : notes HTML de la présentation officielle Animation & Computerspil, Andreas N. Grøntved / Martin Fasterholdt, diapositives 9–15, 19, 24 : https://docs.google.com/presentation/d/1QN99FZUQl3KE4c7eg9-GLLEl3Og0FqreJbiTrCc8ZAk/htmlpresent ; lien issu de https://blog.playdead.com/articles/inside_presentations/inside_publications.html. Documentation écrite en danois, pas vidéo ni transcription audio ; aucun timecode pertinent. Leçon appliquée : boucles courtes combinées selon les commandes, déplacement calculé par le jeu, contacts physiques distincts. Aucun média Playdead importé, aucun visionnage continu nouveau revendiqué.

Validation : 112 tests passent. Traversée complète 2 499 états, 41,65 s, zéro décès ; contacts des mains, cadrage et anciennes sauvegardes couverts. Nouveau contrôle à droite et à gauche : appui stable, pied en retour levé, haut du corps mobile, arrêt sans pédalage. Mesure séparée à vitesse constante : dérive maximale de l’appui 0,16 mm par image après stabilisation, amplitude longitudinale de main 18,2 cm. Ces mesures ne prouvent pas le naturel de l’animation.

Le nouveau verrou a été acquis, libéré par requête explicite puis repris dans cette exécution. Test d’exclusion concurrente et refus d’un mauvais propriétaire réussi. Le fichier verrou n’est jamais supprimé ; sa présence seule ne signale pas un travail actif.

Navigateur cloud réessayé : WebGL refusé, GL_VENDOR=Disabled / BindToCurrentSequence failed. Repli confirmé à l’écran. Rendu Blender de la scène Three à 29,7 s inspecté, `captures/conservatory-crouch-reference.png` : personnage sous la traverse, appuis visibles mais silhouette encore sombre. Ce n’est pas une capture WebGL. Aucun iPhone physique, Safari ou FPS réel testé.

Suite : vérifier le vrai WebGL dès qu’une voie autorisée est disponible ; améliorer la lisibilité sous l’abri, les transitions de demi-tour et la silhouette propre du gardien. Pas de nouvelle énigme dans cette correction ciblée. Le .blend de portrait précédent est un témoin historique ; le générateur Python et le GLB à six clips sont la source actuelle du mouvement.

---

# Cadrage et lisibilité 3D, 12 novembre 2026

Thomas confirme la direction 3D et signale un personnage trop petit. La source Sites 22 a été récupérée avant cette passe ; dépôt propre et aucune modification concurrente observée. Le teaser V5 et sa publication prévue pour Noël ne changent pas.

La caméra se rapproche : distance courante 13 m au lieu de 18,5 m, interaction 12,4 m au lieu de 15,7 m, poursuite 15,4 m au lieu de 19,8 m. Le cadrage vise plus bas et suit partiellement la hauteur du personnage sur les plateformes. Le plan reste plus large lors des poursuites pour garder de l’anticipation. Aucun agrandissement du modèle, donc aucune divergence des contacts ou collisions.

Le remplissage ponctuel mobile devient une lumière directionnelle diffuse de faible intensité. Elle conserve une direction constante et ne produit plus de tache localisée qui se déplace avec le personnage. Contre-jour, lanternes et musique conservés.

Mesure par projection réelle de la caméra Three sur les 2 499 états : silhouette debout de 1,69 m occupant 16,3 à 20,8 % de la hauteur du cadre ; aucun débordement horizontal du personnage. Ce n’est pas une mesure des proportions d’INSIDE. 110 tests passent, incluant désormais une borne de lisibilité et de cadrage. Rendu hors navigateur contrôlé et conservé dans captures/conservatory-framing-reference.png. La limite de vérification WebGL du précédent environnement reste ouverte ; pas de nouvel essai sur iPhone physique. Les textures, la variété et les animations contextuelles restent à affiner.

---

# Premier essai en vraie 3D, 12 novembre 2026

Thomas valide le trailer V5 pour Noël et demande un premier passage polygonal comparable aux intentions de mise en scène d’INSIDE. Dernière source Sites 21 récupérée, aucun chantier concurrent observé. La V5 est conservée avec caption et consignes dans le dossier de publication Noël ; elle n’est pas re-montée.

Le Convoi est repris dans `conservatoire.html`, isolé de l’ancienne version. Nouveaux GLB originaux : architecture et personnage skinné, vrais volumes, 17 articulations, course issue des trois coordonnées de la capture CMU déjà présente. Perspective, ombres, reflets, brume, contre-jour, lanternes, caisse, viaduc et véhicules. Les accessoires sont regroupés par matériau. Mode guidé réellement piloté par la simulation, reprise manuelle, commandes et paysage conservés ; nouvelle sauvegarde indépendante.

Contrôles ayant mené à des corrections : fin de parcours qui conservait une pose de course ; mains trop loin du rebord ; orientation de nage doublée ; véhicule du fond sans support ; lumière uniforme ; nombreux appels de rendu des petites pièces. Corrections effectuées. Le parcours de 2 499 pas atteint la fin sans décès ; les matrices Three et les contacts sont vérifiés sur tout le parcours. 110 tests passent.

Limite importante : le navigateur distant expose `GL_VENDOR = Disabled` et refuse WebGL. Le rendu navigateur, ses shaders, son coût et sa fluidité ne sont donc pas validés. Les modèles, caméras et poses ont été rendus via un export de la scène Three dans Blender. Les images de contrôle sont explicitement distinctes de captures WebGL. Aucun iPhone physique ni Safari testé. La page offre un repli lisible vers le Convoi quand WebGL manque.

Suite prioritaire : vérifier le vrai rendu WebGL sur un appareil compatible avant migration générale ; affiner les matières, réduire la répétition des salles, créer un vrai cycle accroupi et une silhouette propre au gardien. Cette passe n’ajoute pas de nouvelle énigme ni de niveau complet. Aucun niveau de qualité INSIDE revendiqué. Détails reproductibles dans CONSERVATORY-3D.md, CHARACTER-3D.md et ENVIRONMENT-3D.md.

---

# Trailer V5 : cliffhanger, 12 novembre 2026

Thomas juge le climax musical V4 insuffisant et demande la tension d’une poursuite, en référence aux chiens d’INSIDE. La V4 associait une composition surtout contemplative à un montage qui finissait par une résolution du jeu : mauvais choix dramatique malgré une hausse mesurable de volume.

Cette passe reprend le dernier tiers du trailer. Ouverture poétique conservée, puis « Juggernaut » de Scott Buckley : cordes répétitives, cuivres et percussions. Trois extraits au total, fondus de deux secondes, progression de gain, brève dépression sonore 46,12–46,42 s avant l’impact final de la partition. Le sommet orchestral tombe sur la coupe au noir à 46,5 s ; sa résonance originale reste sous le titre, puis fondu à 52 s. Aucun retour au piano calme, aucune nappe MIDI ajoutée.

Le montage retire la fin résolue de la traversée. Le dernier tiers associe veilleur, racines, immersion, fuite, effondrement du quai, course et chute au bord du bassin. La toute dernière image est un état réel de la simulation, encore en chute, avant la nage et la sortie sûre. Cadrage plus serré sur les derniers plans, pause noire de 0,55 s avant la formation du titre. 21 plans, 46,5 s de scènes + 8 s de titre, sans répétition d’intervalle ni accélération artificielle de la course.

Sources récupérées depuis la dernière version Sites 20. Aucun changement aux mécaniques, sauvegardes, personnages ou accessoires V4. Source et export V5 conservés ; public privé inchangé.

Référence : vidéos officielles Playdead E3 2014 et E3 2016 téléchargées et planches de photogrammes inspectées. La poursuite par les chiens est visible dans la planche 2014 autour de 42 s. La vidéo 2016 montre une autre séquence en intérieur ; ne pas confondre les deux. Ceci est une inspection d’images sélectionnées, pas un visionnage continu avec écoute. Aucune transcription, aucun média de Playdead incorporé. Les propriétés musicales du nouveau titre sont documentées par sa page officielle ; la réussite émotionnelle reste à juger à l’écoute.

Validation détaillée dans VALIDATION.md et TRAILER-V5.md. La modification est un nouveau montage sonore et visuel, pas de nouveaux niveaux ou une nouvelle menace jouable.

---

# Passe 0.11 / Trailer V4, 12 novembre 2026

Priorités de Thomas : course encore perçue comme du pédalage sous un torse figé ; musique progressive avec climax puis résolution, pas une obligation de post-rock ; nacelle rouge et autres accessoires incompatibles avec la peinture des décors. La capture d’écran du retour utilisateur a été inspectée avant les modifications. Dernière source récupérée par le workflow Sites, sans écrasement concurrent.

- Course refondue dans le rendu partagé. Capture CMU 09_01 convertie depuis ASF/AMC : projections latérales du bassin, du dos, des épaules, des coudes, des poignets, des hanches, des genoux et des pieds. Boucle de 90 images capturées, interpolée en fonction de la distance parcourue. Le torse, la tête et les pans du manteau utilisent maintenant des régions peintes séparées. La main qui porte la graine accompagne la foulée. Le gardien reçoit le même mouvement et un atlas original de cape/masque peint. Pas de changement de vitesse ou de collision pour masquer le problème.
- Les poses de course s’effacent lors des interactions, de la nage, de la remontée et de l’accroupissement. Un contrôle a identifié le risque de redresser la silhouette sous les passages bas : exclusion explicite du cycle capturé dans ce cas. Les mains restent ancrées au rebord.
- Accessoires cohérents : nacelle sculptée de nacre et bronze, chariot patiné, caisse botanique, miroir, fossile et vanne. Atlas transparent partagé avec harmonisation des teintes selon le lieu. La nacelle de la capture utilisateur n’utilise plus son polygone brun à contour clair. Les volumes de collision des énigmes restent les mêmes.
- Trailer réexporté avec les vrais rendus mis à jour. 54,5 s, 30 images/s, H.264 Main 3.1, AAC, faststart. Même montage resserré de 21 plans, pas de répétition d’intervalles ajoutée. Musique remplacée par « This Too Shall Pass » de Scott Buckley, CC BY 4.0 : quatre extraits montés, montée de niveau progressive jusqu’à la coupe à 46,5 s, sommet conservé au début du titre, résolution à partir d’environ 48 s et fondu 51,5–54,5 s.
- `mouvement.html` et une vidéo courte montrent la course de près, à la taille du jeu et au ralenti. C’est le même code que les scènes, pas une animation de démonstration indépendante.

106 tests passent, dont trois nouveaux sur la capture, ses transitions, l’accroupissement et l’ancrage des mains sur le parcours complet du convoi. Le reste des vérifications est consigné dans VALIDATION.md. Sauvegardes et commandes conservées. Audience privée conservée, aucun service payant ajouté.

Références de cette passe : documentation et fichiers de la capture CMU Graphics Lab, page officielle du compositeur. Aucune nouvelle vidéo INSIDE regardée, aucune transcription utilisée. Les observations antérieures restent dans CONVOI.md. Pas de mouvement extrait du code ou des fichiers de Playdead.

À juger encore : sensation réelle de course au pouce, qualité des raccords de la silhouette en très gros plan, musicalité des coupes et puissance émotionnelle du trailer. Les instruments entendus proviennent du master du compositeur, sans affirmation d’enregistrement acoustique live. La marche lente, la nage et les gestes d’interaction restent procéduraux. Les éléments de terrain et certains effets restent dessinés par le moteur. Les fragments sont toujours courts et la profondeur des énigmes n’est pas améliorée par cette passe. Aucun iPhone physique ni Safari réel testé, aucune équivalence artistique avec INSIDE revendiquée.

---

# Passe 0.10 / Trailer V3, 12 novembre 2026

Demande : rendre le haut du corps vivant, diversifier réellement les scènes, raccourcir le trailer, remplacer les verbes vides et monter vers un climax post-rock.

- Mouvement partagé : mains libres calculées depuis une rotation du bras et une flexion de l’avant-bras ; bras opposés, buste oscillant, manteau plus réactif. Main portant la lumière moins figée. Lampe dessinée dans la transformation du buste pour rester attachée à la main. IK des coudes 22/24 px, contacts de remontée conservés. Inspection de six poses : première tentative de balancier trop large donnait des coudes en arrière trop hauts, corrigée avant export final.
- Deux nouveaux fragments séparés, accessibles depuis l’accueil : mer de sel jaune/ivoire (contrepoids fossile, pont articulé, vent), citerne rouge (réserve, montée lente du radeau, saut vers quai haut, passage rythmé par des racines). Images de fond originales générées, physique déterministe, commandes partagées, pauses et paysage mobile. Checkpoints en mémoire, aucun changement aux sauvegardes existantes. Pas de persistance des nouveaux fragments entre rechargements.
- Trailer : 46,5 s de jeu + 8 s de titre, 21 plans décroissants, aucune reprise du même intervalle de simulation. Quatre lieux réellement jouables, sans remplacer artificiellement les fonds du jeu pour le montage. Trois grands titres liés aux scènes. Musique post-rock, climax traversant le noir puis apparition organique NACRE.
- Musique : Alex Morgan, Post-Rock Crescendo With Long Build, FMA, CC BY 4.0. La page déclare une génération IA totale ou partielle. Ce n’est pas présenté comme un enregistrement de musiciens. Aucun achat ou génération payante. Montage de quatre extraits avec fondus, pas de synthèse MIDI maison.

Limites : animation articulée 2D avec torse peint, pas de squelette 3D ; deux fragments très courts (parcours connus 12,05 s et 18,13 s), profondeur des énigmes encore modeste ; décor dessiné et accessoires interactifs pas encore aussi homogènes que les tableaux historiques. Pas de nouvelle vidéo de référence INSIDE regardée pendant cette passe, ni de test iPhone physique. Aucun équivalent à la qualité d’INSIDE revendiqué.

Suite utile : améliorer l’intégration visuelle des accessoires, unifier les fragments en progression continue et construire une énigme à plusieurs conséquences, plutôt qu’allonger la vidéo par répétitions.

---

# Relais de développement NACRE

État courant : 0.9.6, 12 novembre 2026. Site existant privé, mêmes autorisations et dépôt. Aucun achat, abonnement, API payante ni accès à l’ordinateur personnel.

## Correctif lecture mobile du trailer V2

Thomas signale un lecteur bloqué à zéro après lecture sur iPhone. Inspection du fichier : H.264 High, niveau 6.2, malgré 720p/24. Le remontage FFmpeg par concaténation sans niveau explicite a produit cette déclaration excessive. Cause plausible de refus du décodeur matériel, non reproduite sur iPhone physique. Réencodage Main niveau 3.1, 24 images/s, YUV420p, débit borné, AAC et faststart. Nouveau nom de fichier pour éviter le cache de l’ancien encodage. La commande de mixage fixe ces paramètres pour les prochaines versions. Ajout d’un état de chargement et d’un message d’erreur média.

## Trailer V2 : tension, mots et titre organique

Retour de Thomas : accélération plus perceptible, mots beaucoup plus grands, climax musical à l’apparition de NACRE puis paix musicale pendant la formation du titre. Montage porté à 72 secondes : 26 plans sur 64 secondes, durées décroissantes de six secondes à une demi-seconde. Mots de 88 à 108 pixels. Titre tracé en huit secondes par courbes ramifiées et reflets nacrés ; mention du jeu et signature intégrées. Quatre extraits de la composition existante, avec sommet orchestral traversant la coupe à 64 secondes, résolution enregistrée puis fondu final. Pas de silence prématuré. Le joueur ouvre toujours `trailer.html`, qui sélectionne désormais le MP4 V2. La V1 est conservée.

Les nouveaux décors restent exploratoires. Cette passe modifie le trailer et sa présentation, pas la simulation, les contrôles ou les sauvegardes. La mention de jeu en développement est explicite. Aucun nouveau visionnage de référence n’est revendiqué.

## Trailer demandé le 12 novembre, après la version 0.9.6

Thomas demande un trailer minimaliste, des univers variés, une musique enregistrée en crescendo et une révélation progressive du titre. Le montage de 60 secondes est rendu depuis les simulations existantes, avec trois arrière-plans nouveaux. Ce sont des explorations artistiques, pas des niveaux achevés. Le jeu, les sauvegardes et les contrôles restent inchangés ; seul un lien vers `trailer.html` rejoint l’accueil. Export, musique et sources : `docs/TRAILER.md`, `trailer/render.cjs` et `trailer/mix.sh`. Ne pas présenter le trailer comme une extension jouable.

Référence : photogrammes espacés du trailer officiel 2016 d’INSIDE examinés, pas de visionnage continu ni de transcription. Le prochain développement du jeu doit reprendre les faiblesses consignées ci-dessous.

## Demande de développement précédente

Thomas demande une étude jouable très proche des comportements observables du début d’INSIDE, dans les décors de NACRE : arrivée du véhicule, mouvements, caméra, couverts, caisse, poursuite. Il veut juger concrètement la capacité de reproduction avant de créer des variations. Ne pas prétendre à une copie exacte ou à une qualité équivalente. Le chapitre III n’est plus la seule priorité immédiate.

## Livré en 0.9.6 : entrée dans l'eau

Défaut réel retrouvé malgré la correction 0.9.3 : le parcours enregistrait y=705 à 36 s, contre un équilibre à y=595. La vitesse de chute était conservée trop longtemps, donnant une plongée involontaire de plusieurs secondes. L'entrée dissipe désormais cette vitesse (maximum 120 unités/s), puis une flottabilité amortie ramène vers la surface sans oscillation prolongée. Un événement unique déclenche une gerbe de gouttes et une onde au point d'entrée, indépendantes de la position ultérieure du nageur. Pas de bruit ambiant ajouté.

96 tests réussis. Nouveaux tests : entrées à 150, 450 et 900 unités/s, profondeur bornée, événement unique, stabilité à 30 et 60 Hz, pause des éclaboussures. Deux parcours complets simulés sans échec. Inspection visuelle Chromium du plongeon, de la nage à 35,97 s et de l'approche de l'échelle. La capture 0.9.5 montrait encore une immersion excessive ; la nouvelle capture au même instant confirme la tête en surface. Sauvegardes et commandes conservées.

Relecture documentaire de « Shipping INSIDE on iOS », pages 14 à 17 : intérêt et limites d'un parcours reproductible. Aucune nouvelle vidéo regardée, aucune transcription utilisée ; les séquences de gameplay effectivement inspectées restent documentées dans CONVOI.md. Ces réglages sont propres à NACRE.

À poursuivre : apparition du gardien, anticipation du danger par l'héroïne, variété des énigmes. La nage et les éclaboussures restent procédurales, sans simulation de fluide. Ni test iPhone physique, ni mesure de FPS, ni validation du plaisir d'une première découverte humaine.

## Livré en 0.9.5 : saut, freinage et veille du gardien

Faiblesse confirmée : son état restait au sol pendant son arc de saut, puis sa vitesse tombait instantanément de 378 à zéro. La pose aérienne reçoit désormais sa vitesse verticale, avec contacts continus et réception amortie. Le freinage dépend de la distance à la berge (décélération 560 unités/s²), puis le gardien se redresse et lève progressivement sa lanterne. Le balancement du bras et de la lanterne décroît avec l'activité. Le saut visuel a été relevé de 78 à 90 unités après qu'un test a montré un contact avec le bloc.

94 tests passent, dont deux nouveaux : dégagement de l'obstacle/contacts et arrêt monotone sans dépassement. Parcours complets simulés sans échec, contrôles et sauvegardes inchangés. Vérification Chromium des poses de saut et de veille, capture conservée. Pas de rendu exhaustif des 2 499 images dans cette passe, ni de test iPhone physique.

Référence : relecture de la documentation primaire Playdead « The Lighting of INSIDE », qui décrit la composition selon le point d'attention ludique. Pas de nouvelle vidéo regardée ni transcription ; les repères vidéo de CONVOI.md restent ceux effectivement inspectés en 0.9. Nos courbes de mouvement sont originales, non mesurées dans INSIDE.

À poursuivre : apparition du gardien encore déclenchée hors champ sans entrée animée ; manque d'anticipation du personnage joueur au danger ; complexité des énigmes et rythme de première découverte encore à éprouver. Le rendu du gardien reste procédural, plus simple que celui de l'héroïne. Ne pas présenter cette passe ciblée comme une refonte complète.

## Livré en 0.9.4 : gardien du conservatoire

Le poursuivant n'utilise plus le haut du corps de l'héroïne. Silhouette propre : cape cirée texturée et animée, bottes articulées, capuche fermée avec visière, respirateur botanique et lanterne oscillante. Son inclinaison et ses plis accompagnent la course. Les articulations réutilisent le moteur de mouvement existant ; ce n'est pas une animation capturée. Aucun changement aux collisions, à la vitesse, aux contrôles ou aux sauvegardes.

Validation : 92 tests réussis, parcours complet du convoi rendu dans Chromium (2 499 images, zéro erreur, fin atteinte). Inspection visuelle de la fuite et capture conservée. Aucun test iPhone physique. Prochaine faiblesse : enrichir les transitions de course et l'intention du gardien ; la silhouette est désormais distincte mais reste dessinée procéduralement. Aucune nouvelle vidéo consultée dans cette passe, les observations précédentes restent documentées.

## Livré en 0.9.3 : traversée du bassin

La nage conservait la pose aérienne du bras arrière, sa flottabilité plaçait la tête sous la surface, et le poursuivant héritait de `swimming` et `climb` en copiant l’état de l’héroïne. Ces trois défauts sont corrigés. La pose s’incline selon la profondeur puis se redresse avant l’échelle ; le demi-tour utilise le retournement amorti du personnage. Les bras alternent, la cadence dépend de la vitesse, des sillages accompagnent le mouvement. La berge gauche bloque maintenant le nageur au lieu de le laisser traverser le quai et tomber ; le retour vers la droite reste possible.

92 tests passent. Sauvegardes et commandes inchangées. Le poursuivant utilise un état de pose autonome, mais reste graphiquement trop similaire à l’héroïne : c’est encore à remplacer. Les mouvements aquatiques demeurent procéduraux, sans vraie simulation de fluide, ni respiration ou plongée contrôlée. Validation et captures dans VALIDATION.md.

Référence : observations de gameplay documentées en 0.9 réutilisées. Pas de nouvelle vidéo regardée ni transcription consultée dans cette passe ; ne pas présenter cette nage comme une reproduction mesurée d’INSIDE.

Prochaine priorité : identité et apparition du poursuivant, puis première partie sans solution connue pour juger le rythme et les énigmes. Conserver les corrections du refuge et des mains.

## Livré en 0.9.2 : contacts et remontée

Le dépôt a été restauré par Sites dans `/workspace/sites/nacre-serre-des-marees/.sites-checkout` après nettoyage de l’environnement. Utiliser le checkout renvoyé par le workflow, pas supposer le répertoire parent.

Deux défauts d’animation corrigés : le bras arrière reprenait sa pose de saut pendant la prise ; les transformations du buste déplaçaient le contact au rebord. Les deux mains sont maintenant ancrées dans le décor pendant la traction, avec conversion inverse dans le repère du buste. Les coudes utilisent une articulation à deux segments durant le contact. La remontée dure 0,54 s, avec élévation avant translation, inclinaison du buste et pose successive des pieds. Le lâcher revient progressivement aux mains libres ; la pose de guidage ne doit pas continuer à tirer le bras vers le rebord à la fin.

88 tests, parcours du convoi sans échec en 41,65 s, parcours principal conservé à 52,47 s. Les sauvegardes n’ont pas changé. Tests nouveaux : ancrage des deux mains après transformation, ordre élévation/transfert, absence d’étirement après lâcher. Vérification visuelle décrite dans VALIDATION.md.

Référence : observations vidéo de la passe 0.9, décrites dans CONVOI.md, réutilisées ; pas de nouvelle vidéo ou transcription dans cette passe. Les poses et durées sont nos réglages originaux, non des mesures de Playdead.

À poursuivre : nage, identité propre du poursuivant, appuis en sortie de bassin. Animation toujours procédurale et simplifiée, avec prise automatique du rebord. Ne pas présenter cette passe comme une refonte complète du personnage ou une équivalence avec INSIDE.

## Livré en 0.9.1 : une sortie de refuge cohérente

Défaut vérifié dans les sources et dans le rendu : le danger commençait à x4820, alors que le bord extérieur du refuge est à x4920 ; le personnage se redressait dès x4800. Le faisceau ne représentait que x4790–4960 pour une détection allant jusqu’à x5340. Cela pouvait punir le joueur dans une zone qui semblait encore protégée.

Le bord extérieur x4920 est désormais la limite commune de posture et de protection. `patrol(s)` décrit le même volume au sol pour le rendu et la détection. Entre 7,2 et 8,2 s, le faisceau balaie vers la droite, dégageant progressivement la sortie ; les feux de recul annoncent un retrait du véhicule vers la droite, à l’opposé du refuge. Pas de compteur affiché, ni de temps d’attente ajouté. Le pilote de validation observe désormais la position du faisceau au lieu d’attendre une constante temporelle.

85 tests passent, trois régressions ajoutées. Parcours connu 41,30 s, sans échec. Sauvegardes et contrôles partagés conservés, aucun changement de schéma. Références : réutilisation des observations de vidéo et des documents recensés dans CONVOI.md ; aucune nouvelle vidéo regardée ni transcription consultée dans cette passe.

La vérification visuelle est consignée dans VALIDATION.md. Prochaine faiblesse encore réelle : personnage poursuivant trop semblable à l’héroïne, remontée et nage simplifiées. Le premier balayage conserve sa logique simplifiée de couvert ; cette correction ne constitue pas un système général d’occlusion. La découverte par un nouveau joueur reste à mesurer.

## Livré en 0.9

`dist/convoi.html` est une scène séparée, accessible depuis l’accueil. Le jeu principal et sa sauvegarde 0.4 restent conservés. Logique et rendu spécifiques : `convoy-logic.js`, `convoy-art.js`, `convoy-game.js`. Pas de moteur ou dépendance ajoutés. Le convoi utilise Canvas 2D ; le jeu principal conserve sa passe WebGL optionnelle.

Séquence : premier obstacle ; convoi en profondeur ; deux couverts à franchir selon le balayage du phare ; caisse à déplacer pour atteindre un mur infranchissable depuis le sol ; accrochage et remontée du rebord ; poursuite du convoi et saut du canal ; passage bas protecteur ; seconde patrouille dont il faut attendre le départ ; poursuite à pied ; nage et sortie par l’échelle. Les menaces sont déterministes, avec annonces et reprises proches. Aucun dialogue.

Course 320, traction 128, accroupissement derrière les couverts 175, passage bas 210, nage 185 unités/s. Accroupissement automatique, pieds articulés, remontée de rebord en 0,42 s et nage. Caméra avec avance amortie, ouverture sur les zones surveillées, davantage d’espace derrière en poursuite et descente vers le bassin. Ces nombres sont nos réglages, pas ceux de Playdead.

Deux nouveaux assets originaux : véhicule botanique et quai moussu. PNG dans art-source, WebP dans dist/assets. Terrain, couverts et toit utilisent les mêmes matières. Les captures sont dans docs/captures/nacre-v09-*.jpg. Les anciennes musiques enregistrées restent intégrées localement, avec fondu de tension.

Sauvegarde de l’étude distincte : `nacre-convoi-v1`, checkpoints 1 à 5, restauration validée, aucun accès à la sauvegarde du jeu principal. Recommencer efface seulement la progression de l’étude. Le paysage reste obligatoire sur tactile. Pause lors de rotation, reprise explicite, protections contre défilement et sélection conservées.

## Validation et limites

82 tests passent. Parcours connu : 41,77 s sans échec ; ce n’est pas une durée de découverte humaine. Rendu navigateur de ses 2 506 états terminé sans erreur. Inspection visuelle des arrivées, couverts, caisse, rebord, poursuites, refuge et nage. Formats tactiles simulés 844 × 390 et 390 × 844, gestes de pointeur, pause en rotation, reprise et son vérifiés. Aucun iPhone physique, Safari réel, multitouch matériel ou benchmark de performances. Les tests ne prouvent pas le plaisir de jeu.

Le personnage reste un rig 2D peint, ses transitions de montée et de nage sont encore simplifiées. Le poursuivant réutilise une silhouette assombrie du personnage et devra être différencié. Les collisions sont simplifiées, les couverts ne sont pas calculés par lancer de rayons. Les phares indiquent les zones dangereuses, mais leur dessin et leurs volumes restent approximatifs. Les rebords ont une remontée automatique, pas un système de mains complet. Le rythme est plus condensé que dans la vidéo ; aucune correspondance image par image n’est revendiquée.

## Prochaine passe

1. Jouer l’étude et observer l’échec ou l’hésitation réelle avant d’ajouter du contenu. Améliorer la lecture de la sortie du deuxième couvert et celle du départ de la patrouille après l’abri. Éviter d’augmenter arbitrairement les temps d’attente.
2. Raffiner l’animation de remontée, les mains et l’élan de nage ; distinguer le poursuivant. Garder le haut du corps peint continu de 0.7 et les longueurs des membres.
3. Mesurer la caméra sur des captures comparables du début d’INSIDE. Les observations actuelles sont des images sélectionnées, pas une étude continue complète. Lire DESIGN.md et CONVOI.md.
4. Ne pas réintroduire les deux véhicules superposés, les plantes géométriques très visibles, les ombres flottant sous un saut ou le bord vide du panorama. Corrections déjà faites et inspectées.
5. Conserver le jeu principal. Une refonte de ses énigmes peut suivre, mais ne pas substituer une nouvelle liste de recommandations à l’étude demandée.

Six reprises horaires avaient été programmées aujourd’hui de 12:44 à 17:44 Paris. Ne pas confondre ces déclenchements avec du calcul continu. Reprendre impérativement la dernière source via Sites, vérifier qu’aucune autre exécution ne modifie le dépôt, ne jamais forcer un écrasement.

Workflow : lire README et VALIDATION ; préparer les bancs par `python3 scripts/prepare-convoy-qa.py` si nécessaire ; les retirer avec `--clean` ; tests et inspection ; mettre à jour ce relais ; reconstruire l’archive avec `scripts/package-source.py` ; publier la source exacte via Sites sans changer l’audience. Les captures Git ne sont pas dans l’archive portable.
