# Rencontre de la baie, 14 novembre 2026

État `bloomOpen` dans le wrapper du conservatoire, indépendant des règles du Convoi original. Ouverture à 0,26/s au-delà de x7240, hors nage/remontée ; fermeture à 0,18/s ailleurs. La transformation utilise smoothstep. Aucun objectif ni temps d’attente imposé avant x7470 (sortie). Le contrôle reste au joueur.

La plante se trouve à (125,6 ; 0 ; -3,6) dans le monde Three, derrière la voie. Les coques gardent leur point d’ancrage ; leur largeur passe de 42 % à 100 %, avec respiration discrète. Le cœur émissif ne crée pas de lumière dynamique supplémentaire. Quatorze petites graines partagent une géométrie et un matériau, avec apparition/disparition par échelle en bout de trajectoire. Ces mouvements sont procéduraux et restent à juger en jeu réel.

## Contrôles reproductibles

- `node --test tests/*.test.cjs` : 254 réussites, fichier validation-bloom-encounter.txt. Parcours complets et régressions de collision compris.
- `node scripts/inspect-bloom-encounter.mjs 0 /tmp/bloom-closed.json` puis `blender -b --python scripts/render-3d-reference.py -- /tmp/bloom-closed.json /tmp/bloom-closed.png`.
- Même commande avec valeur 1 et chemins bloom-open : même caméra, personnage x7360. Captures archivées dans la source Sites (non copiées dans ce miroir GitHub), chemins docs/captures/bloom-closed-cpu.png et bloom-open-cpu.png. Rendus Blender CPU issus des maillages Three, pas captures du moteur navigateur.
- Essai réel de conservatoire.html dans le navigateur cloud : WebGL 2 indisponible. Pas d’essai iPhone physique, pas de preuve de FPS ni de naturel des mouvements.

Les images permettent de vérifier la composition statique et l’écart d’ouverture. Elles ne valident pas la transition temporelle, les shaders navigateur ni la perception du cœur émissif dans le moteur réel. Pas de changement audio dans cette passe. L’animation de repos du personnage et le mix demeurent ceux de la version précédente.
