# État cumulatif du prototype NACRE

Actualisé le 14 novembre 2026, reprise 15 h. Cette note décrit les séquences présentes et leur vérification, pas une qualité artistique acquise.

- Conservatoire vert/bleu : arrivée contrôlable et papillon, convoi observé à couvert, caisse et rebord, balance à double charge, grille, menace et fuite, refuge, bassin et remontée, baie avec floraison qui s’ouvre à l’approche, émet des graines et se referme au retour. Ce répit reste facultatif. Vraie scène Three.js avec personnage skinné. Gardien de fond entre/sort derrière une façade ; correction du pop-in conservée. Saut possible depuis la prise de caisse même si action reste appuyée. Balance accepte les décalages plausibles de la caisse ; prise des mains, pied de berge et traction du bassin conservés.
- Mer de sel jaune : fossile et contrepoids, pont, volet et transmission, rafales avec refuges dont le premier est déplaçable, croûte qui avertit puis descend sur une chaussée basse, répit et sortie. Arches hors du trajet rendu lisible ; volet solide dans les deux sens, fermeture retenue si occupé. Retour depuis le bas contre la croûte en descente corrigé : attendre son niveau ou sauter. Cinq checkpoints possibles. Parcours connu automatisé de la dernière extension : 38,02 s, durée de découverte non mesurée.
- Citerne rouge : réserve et élévateur, grille hydraulique et vidange, traversée du bassin, nacelle à frein et réservoir embarqué ouvrant le quai, galerie à deux décharges annoncées, baie de répit. Quatre checkpoints. Pas pendant le transport passif supprimés ; les décharges se localisent maintenant séparément à l’oreille. Parcours connu automatisé de la galerie : 54,62 s, durée de découverte non mesurée.

Les trois passages sont des prototypes courts. Ils ne constituent pas trois niveaux longs et aboutis. Les anciennes versions peintes et la publication Noël sont conservées hors de cette passe.

## Vérification actuelle

260 tests Node réussis, parcours complets, gestes de retour, échecs et reprises. Tests réels des matrices/poses Three sur CPU dans la suite, sans GPU. Contrôle Web Audio sur quinze enregistrements locaux dans Chromium : lecture, variation spatiale et arrêt des voix/queues d’écho. Le navigateur cloud ne crée toujours pas de contexte WebGL 2 ; aucun nouveau rendu 3D navigateur ni test iPhone physique. Deux nouvelles références Blender comparent la floraison fermée et ouverte à cadrage identique ; elles restent des rendus hors navigateur. Aucun jugement perceptif de beauté, naturel ou mix sonore ne découle des tests.

## Diffusion et reprise

Jeu public autorisé : https://confluenceofminds.com/nacre/play/ ; présentation : https://confluenceofminds.com/nacre/ ; sources : https://github.com/thomasjudes-del/Nacre . Sites garde son audience privée. Récupérer la dernière source Sites, rapprocher les fichiers GitHub avant modification, préserver les README spécifiques à chaque hébergement. Le workflow import-nacre.yml du dépôt confluenceofminds-site importe un commit Nacre explicitement validé.

Priorité suivante : une séquence supplémentaire cohérente du conservatoire, avec refuge utile, effet physique visible et possibilité de retour ; éviter une simple marche ajoutée ou une nouvelle série de dangers cycliques. Avant extension, traiter tout blocage reproductible. Les matériaux, les transitions de manipulation et les sons de jets réinterprétés restent à affiner. Conserver l’ambition de trois ambiances distinctes, sans présenter leur achèvement comme acquis.
