# Conservatoire polygonal NACRE

Asset original : `dist/assets3d/conservatory.glb`. Source reproductible : `scripts/build-conservatory-3d.py`, exécutée avec Blender en mode sans interface. Aucune image de fond, texture distante, banque d’objets payante ou service de génération 3D.

## Convention

glTF : X avance, Y vertical, Z vers la caméra. Un mètre représente 60 unités de la simulation du convoi. Le personnage marche sur Z = 0 et Y = 0. L’asset est chargé sans translation, rotation ni changement d’échelle.

Les quais couvrent X -5 à 43,1667 ; le plateau surélevé couvre X 43,1667 à 50,1667 à Y = 3 ; les quais reprennent jusqu’à 65,3333 puis de 68 à 101,6667. Le bassin est ouvert de 101,6667 à 120 ; la dernière berge s’étend de 120 à 132. Les obstacles fixes sont X 8,1667 à 10,1667, Y = 0,6667 et X 95 à 96,5, Y = 0,75. Les surfaces visuelles ne remplacent pas les collisions déterministes du jeu.

Le GLB n’inclut ni l’eau animée, ni les couverts, ni la caisse déplaçable, ni les véhicules, ni les gardiens. Le passage sous l’abri est libre ; ces éléments doivent être rendus par le jeu à partir de leur état physique.

## Construction artistique

Quai de pierre avec corniches, joints, blocs de parement et petites gravures fossiles. Colonnades en plusieurs plans, arcs longitudinaux et nervures transversales d’une serre ouverte, moulures de bronze, panneaux de verre fumé opaques pour éviter les problèmes de tri alpha, fougères à feuilles nervurées, racines effilées et grands anneaux botaniques suspendus. Une baie ambrée ferme la sortie. L’avant-plan reste peu dense pour préserver la lecture des commandes et des dangers.

Géométries regroupées par matériau et par cinq sections spatiales, pour éviter un appel de rendu par feuille. Les matériaux sont des couleurs physiques sobres, sans éclairage pré-calculé. Des pigments par sommet apportent une variation continue et assombrissent les parties humides. Prévoir une lumière ambiante suffisante, une source turquoise rasante et des accents ambrés dans les zones de tension. Un brouillard profond aide la séparation des arcades. Aucun éclairage ni caméra n’est exporté dans le GLB.

Export vérifié : 57 maillages/primitives, 12 matériaux, 149 944 triangles, 5 497 208 octets. Le fichier contient les couleurs `COLOR_0` pour tous les matériaux non émissifs ; aucun fichier externe n’est référencé.

## Vérification et limites

Un rendu de contrôle Blender a été produit et inspecté depuis (15, 5, 18) vers (18, 1,5, 0). La première inspection a conduit à ouvrir les panneaux trop opaques, à ajouter des bases de pierre aux plantes et aux colonnes, à corriger les normales des pierres et à réduire l’éclairage uniforme. Le contrôle final montre les quais moulurés, la colonnade, les vitrages brisés et les plantes. Il utilise des éclairages de démonstration distincts de ceux du navigateur. Il ne prouve pas le rendu final, les performances WebGL ou l’aspect sur iPhone. Le décor est une première direction polygonale et conserve des répétitions architecturales. Les matières ne remplacent pas encore une passe complète de textures d’usure, et les plantes sont statiques.

Le script produit également les métriques de l’export dans sa sortie `NACRE_ENV_STATS`. L’export est autonome ; Blender n’est nécessaire que pour le reconstruire.

## Complément au chargement, 13 novembre 2026

Le GLB source reste inchangé. surface-finish.mjs traite les pierres et bronzes à l’exécution : facteur de base blanc si la couleur est déjà peinte par sommet ; quatre cartes locales de 128 × 128, partagées, sans téléchargement ; taches de patine et variation de rugosité ; UV locaux conservant l’attache aux accessoires mobiles. Aucun triangle ajouté. Les autres matériaux conservent leur réglage. Cette première passe ne remplace ni des traces liées aux contacts/eau ni la validation du rendu GPU. La référence Blender exporte les cartes pour permettre un contrôle cohérent des données.

## Ouverture de service et insecte, 13 novembre 2026

`conservatory-life.mjs` construit une ouverture circulaire dans une maçonnerie, avec anneaux de bronze brisés, profondeur sombre et débris. Les pièces fixes sont regroupées par matériau. Un papillon de nuit volumique possède deux ailes découpées, pigments par sommet et nervures. Il quitte la caisse à proximité du joueur, rejoint le cadran puis disparaît en profondeur. Déclenchement unique par tentative, animation liée au temps de simulation, pas de collision ajoutée. Contrôles Blender dans captures/conservatory-arrival.png et conservatory-moth.png ; rendu WebGL non validé.

## Floraison de la baie

conservatory-bloom.mjs construit sept surfaces paramétriques à pigments par sommet, un cœur nacré, des racines et une souche immergée. Animation lente sans allocation de géométrie par image ni lumière ajoutée. Motif de contemplation, sans collision ni interaction. Contrôle Blender seulement ; la végétation générale reste statique. Voir ITERATION.md.
