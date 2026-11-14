# 14 novembre, reprise midi : retour contre la dalle de sel

Bug reproduit avant correction : depuis la chaussée basse, revenir à gauche pendant la descente permettait de traverser le flanc droit de la dalle, puis de tomber et réapparaître. Deux tests échouaient. Le bord droit tient désormais compte de la hauteur courante et du rayon du corps. Il retient le joueur sans le tuer ; attendre la mise à niveau ou sauter permet de revenir. Aucun délai artificiel ni mort supplémentaire ajouté.

243 tests réussis (validation-crust-return.txt), dont quatre nouveaux contrôles : collision latérale, attente puis passage, saut de retour et sortie/retour immédiat à 30 et 60 Hz. Les parcours complets, balance décalée, abris, nacelle, checkpoints et pauses restent couverts. Aucun nouveau rendu, écoute critique, test WebGL ou iPhone dans cette passe ; la géométrie visible est inchangée. Les trois passages restent courts.

Source primaire relue : https://blog.playdead.com/articles/inside_presentations/inside_publications.html, notices Subtleties of INSIDE et animation. Lecture textuelle de l’index uniquement, aucune vidéo ni timecode. Application de conception propre à NACRE : un volume visible doit opposer une résistance prévisible lors du retour, pas seulement à l’aller. Pas de nouvelle couverture du walkthrough cette fois ; priorité au blocage reproductible.

La migration précédente est achevée : dépôt https://github.com/thomasjudes-del/Nacre et jeu public https://confluenceofminds.com/nacre/play/ ; Sites reste privé. Les versions doivent être rapprochées avant chaque modification, le déploiement public utilise le workflow import-nacre.yml du dépôt confluenceofminds-site. Cette passe a vérifié que world-logic.js était identique dans les deux sources avant édition. Prochaine priorité : approfondir la fin des passages et les sons contextuels après ces corrections de collision, sans annoncer une qualité artistique prouvée par les tests.

