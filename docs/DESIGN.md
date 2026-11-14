# NACRE 0.5 : poids, lumière, attention

## Références effectivement étudiées

La présentation technique de Playdead « Shipping INSIDE on iOS » décrit deux schémas de contrôle. Le mode Split réserve la moitié gauche au déplacement et la moitié droite au saut et à la saisie. Le mode Fluid est une autre option ; il ne faut pas les confondre. Le document explique également l'adaptation des actions pour préserver le contrôle tactile. Source primaire, diapositives imprimées 91 à 96 : https://loopit.dk/inside_shipping_on_ios.pdf

Nacre reprend la répartition du mode Split. Nos seuils de 8 pixels pour le déplacement, 22 pixels pour le geste de saut et 180 ms pour le maintien sont des choix d'implémentation, pas des valeurs divulguées par Playdead. Le toucher bref à droite ajoute un raccourci de saut. Aucun geste de gauche ne saute.

« The Lighting of INSIDE », Marek Bogdan, explique des couches d'éclairage placées manuellement en fonction de la distance et du centre d'intérêt, notamment des ombres simples associées à une torche : https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html

La présentation audio de Martin Stig Andersen et Jakob Schmid décrit les liens avec la respiration, les états de mouvement et les transitions de jeu : https://schmid.dk/talks/2016-06-16-wwise/schmid-Wwise_2016-INSIDE_Audio.pdf

La notice « Limbo: Balancing Fun and Frustration in Puzzle Design » présente l'apprentissage par l'échec et l'équilibre entre accessibilité et difficulté : https://www.gdcvault.com/play/1013665/Limbo-Balancing-Fun-and-Frustration

Ces documents éclairent certains systèmes. Ils ne donnent pas le code source ni tous les réglages, et ne constituent pas un décryptage exhaustif des niveaux ou des animations.

## Traduction dans le jeu

Le but est d'obtenir des conséquences observables avec peu de verbes : marcher, sauter, saisir, exposer ou cacher. La complexité doit venir des relations entre les règles.

- Serre : apprendre l'objet lumineux ; orienter sa destination ; conserver deux réserves assez longtemps ; dissimuler la lumière tout en franchissant le passage. Puis rupture du rythme par un sol qui cède.
- Écluse : une masse déplaçable active un circuit mécanique visible. Son poids libère une porte mais fait monter la nacelle hors de portée. Le levier la rappelle temporairement ; il faut embarquer avant sa remontée. Les contraintes de placement, de poids et de temps s'articulent.
- Salle d'observation : la lumière est à la fois la ressource nécessaire et ce qui révèle le personnage. Les refuges permettent l'observation. La présence annonce son cycle avant de détecter ; une charge terminée reste acquise pour éviter de répéter toute la séquence après une erreur.
- Sortie : retour à une composition calme, musique mélancolique et floraison qui donne une conséquence visible au transport de la graine.

La course de base reste réactive, la traction est plus lente et le personnage regarde l'objet en reculant. Les pieds suivent la distance parcourue ; les mains rejoignent les poignées. Les cadrages s'ouvrent devant un mécanisme ou un danger, se rapprochent pendant la traction, et suivent la montée de la nacelle.

## Son et image

Hiraeth et Decoherence de Scott Buckley remplacent la partition de synthèse précédente. Ils sont stockés dans le projet ; aucun service de streaming n'est requis. Les transitions dépendent de la zone. Les échecs ne remettent pas la musique au début. Les impacts discrets sont séparés de la musique ; pas de souffle permanent.

Deux panoramas originaux séparent la serre et le réservoir. La présence est un sprite détouré original avec une respiration légère, des filaments supplémentaires, un organe sensible animé et un faisceau d'attention. Le personnage, les contacts, le chariot, la nacelle, les portes et les résonateurs restent rendus séparément et réagissent au jeu.

## Limites à traiter ensuite

Le personnage a encore moins de nuances que les animations de contact d'un jeu de studio. Les interactions utilisent des collisions simplifiées. Le comportement de la présence est cyclique, pas une intelligence générale. Le décor distant est peint et ne peut pas être exploré en profondeur. Les trois tableaux ne constituent pas encore un arc de dix minutes. Il faut mesurer la compréhension, les erreurs et la tension auprès de joueurs avant d'allonger le parcours.

## Personnage et gestes, passe 0.5

La cadence de déplacement ne doit plus être confondue avec la fréquence d’oscillation des jambes. La simulation conserve sa course à 245 unités/s ; le rendu passe à des foulées de 156 unités avec alternance des appuis. Le pied en appui reste ancré dans le monde, la jambe libre se replie tôt puis s’étend avant le contact. Le buste amortit les changements, la tête compense une partie de son inclinaison, et les vêtements réagissent avec retard. Les gestes de traction regardent la charge tout en reculant.

Le visage en profil, les cheveux courts, le manteau pétrole et l’écharpe rouille appartiennent à un personnage original. Ce sont des découpes illustrées attachées au squelette. Le choix améliore les matières et la reconnaissance sans exiger un moteur 3D. Les poses restent procédurales ; elles ne prétendent pas reproduire les animations d’INSIDE.

Pour Safari, la protection CSS est complétée par la gestion explicite des événements Touch Events sur appareils tactiles. Le rendu se mesure dans une surface fixe utilisant la petite hauteur de viewport, afin de stabiliser le cadrage quand les barres du navigateur changent. Le moteur ne reçoit plus les événements pointeur de compatibilité des mêmes doigts. Les menus de pause conservent leur défilement.

Documentation primaire consultée :
- Apple, Handling Events : https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
- Apple, TN2262, Preparing Your Web Content for iPad : https://developer.apple.com/library/archive/technotes/tn2010/tn2262/_index.html
- Apple, WWDC 2019, Introducing Desktop-class Browsing on iPad : https://developer.apple.com/videos/play/wwdc2019/203/

Ces références justifient les mécanismes de prévention et de sélection. Elles ne remplacent pas un test du matériel iPhone et de sa version courante de Safari.


## Itération 0.6 : geste, causalité, apprentissage

Étude ciblée de séquences du début d'INSIDE : https://www.gamespot.com/videos/inside-first-7-minutes-of-gameplay/2300-6433116/ . Images sélectionnées à 00:08, 00:36–39, 01:36, 01:44 et 02:04 : espace devant la course, menace en profondeur, changement de posture, ouverture du cadre, contact avec une caisse. Ce n'est ni une analyse exhaustive ni une mesure fiable de vitesse.

Source technique Playdead : https://loopit.dk/inside_shipping_on_ios.pdf , pages 94–96 sur les interactions tactiles, l'attente induite par certaines animations et le maintien de la sensation d'action.

Application originale à NACRE : une plante enseigne la dissimulation avant sa réutilisation sur le pont. Le miroir n'est plus un interrupteur : maintenir l'action oriente le faisceau, relâcher restitue la direction initiale. La racine éloignée garde une réserve et la proche se recharge pendant le retour vers la graine, limitant une attente supplémentaire. Les mains accompagnent physiquement la poignée. Ces changements ne suffisent pas à établir une qualité comparable à INSIDE.

## Étude 0.9 : Le convoi

La dernière demande porte sur une transposition de l’ouverture d’INSIDE avant de produire des variations. Étude jouable séparée et relevé précis des observations et limites : `CONVOI.md`. Le scénario comprend deux traversées sous surveillance, la caisse et le rebord, des poursuites et une sortie par l’eau. Les paramètres et le déroulé restent une adaptation, pas une reproduction exacte.
