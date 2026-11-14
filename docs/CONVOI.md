# Le convoi : étude jouable 0.9

La demande de Thomas est une transposition aussi proche que possible des comportements de l’ouverture d’INSIDE, pour éprouver le moteur avant de faire des variations. Cette livraison constitue une première étude jouable, pas la reproduction intégrale de cette ouverture.

## Référence réellement consultée

Vidéo GameSpot « INSIDE – First 7 Minutes of Gameplay » : https://www.gamespot.com/videos/inside-first-7-minutes-of-gameplay/2300-6433116/

Lors de cette passe, le lecteur a été utilisé et des images ont été inspectées autour de 00:39 (véhicule dans un autre plan, posture abaissée), 01:39–01:44 (obstacle au premier plan, camion et silhouettes au fond), 02:04–02:14 (caisse, contact et changement de hauteur), puis 03:16 (passage boisé au bord de l’eau). Certains affichages de la barre de lecture tardaient par rapport à la vidéo ; ces repères sont approximatifs. Le lecteur a tourné entre certaines observations, mais cela ne signifie pas que tout cet intervalle a été regardé. Aucune transcription n’a été utilisée. Ce n’est pas une analyse continue exhaustive des sept minutes.

Document technique primaire également consulté : Playdead, « Shipping INSIDE on iOS », https://loopit.dk/inside_shipping_on_ios.pdf . Il distingue les adaptations tactiles et explique l’intérêt de parcours enregistrés reproductibles pour le profilage. Les pages 91 à 96, consultées lors des passes précédentes, fondent le partage gauche/droite déjà présent dans NACRE. Elles ne donnent pas nos vitesses, seuils et durées d’animation.

## Correspondances et écarts

| Élément | Traduction jouable | Limite |
| --- | --- | --- |
| Menace visible dans un plan distinct | Convoi sur un chemin surélevé, puis poursuite au niveau du joueur | Composition originale et trajets condensés |
| Posture liée à la situation | Accroupissement derrière les murets et dans le passage bas | Rig procédural, sans bibliothèque d’animations capturées |
| Caisse et obstacle trop haut | Pousser ou tirer, relâcher, monter, sauter et se hisser | Collisions et prise de rebord simplifiées |
| Espace devant le mouvement | Avance amortie et cadrage spécifique de la zone observée | Pas de calibration image par image avec la référence |
| Alternance fuite et protection | Canal, abri, départ visible de la seconde patrouille, nouvelle poursuite | La deuxième patrouille et son minutage sont une adaptation |
| Changement de milieu | Nage contrôlable, poursuivant arrêté sur la berge, sortie à l’échelle | Ajout de mise en scène non établi par les seuls plans observés |

## Architecture

Simulation à 60 Hz indépendante du rendu, mêmes paramètres de course que NACRE 0.8, entrées ordinaires et gestes partagés. Le scénario de test pilote les mêmes actions que le joueur, sans téléporter ni compléter les énigmes. La caméra, les lumières et les animations prennent leur état dans cette simulation.

Le module de mouvement partagé reçoit des champs optionnels `crouch` et `swimming`. Sans ces champs, le jeu principal conserve ses comportements. Le panorama partagé borne son décalage pour ne plus laisser apparaître une bande vide à droite. Le reste de l’étude est isolé et ne lit pas la sauvegarde principale.

## Ce que cette étude permet de juger

La lisibilité de la menace, la réponse des commandes, le poids de la caisse, le passage de course à protection, la mise en scène des différents plans. Elle ne prouve ni une reproduction exacte ni une équivalence de finition. Le test décisif suivant reste une première partie humaine sans solution connue.

## Ajustement 0.9.1

La patrouille du refuge utilise une description de faisceau unique pour le dessin et la simulation. Son retrait ouvre progressivement la sortie. Le refuge protège jusqu’à son bord extérieur x4920. Le changement corrige notre étude ; il ne découle pas d’un nouveau relevé vidéo d’INSIDE. Les observations de référence ci-dessus datent de la passe 0.9.

Documentation primaire relue en 0.9.1 : Marek Bogdan, « The Lighting of INSIDE » (2016), https://blog.playdead.com/articles/the_lighting_of_inside/lighting_of_inside.html . Le texte décrit un éclairage composé manuellement selon la caméra et le point d’attention ludique. C’est une lecture documentaire, pas une nouvelle vidéo regardée ; les paramètres de notre patrouille restent propres à NACRE.

## Ajustement 0.9.2

La prise de rebord possède des contacts fixes et un lâcher progressif. Élévation, transfert et appui sont décalés dans le temps. Les repères vidéo déjà inspectés en 0.9 restent les références visuelles ; aucune nouvelle séquence regardée. Relecture documentaire des pages 14–17 de « Shipping INSIDE on iOS » : parcours enregistrés reproductibles pour examiner les régressions. Notre banc simule ses entrées et ne constitue pas un profilage matériel ni un test humain.

## Ajustement 0.9.3

La traversée du bassin a une flottabilité rehaussée, une alternance des deux bras et une transition de posture selon la profondeur et la proximité de l’échelle. Le poursuivant n’hérite plus des états aquatiques. Ces choix sont propres à NACRE, pas issus de mesures nouvelles du gameplay d’INSIDE. Les observations vidéo et documents précédents restent explicitement distingués ci-dessus ; aucune nouvelle vidéo ou transcription n’est revendiquée dans cette passe.
