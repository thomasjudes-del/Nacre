# Visuels de NACRE 0.5

Créé le 12 novembre 2026 avec l'outil de génération d'images intégré, sans recours à une API externe payante ni achat de crédits. L'image générée a été intégrée comme plan distant dans le moteur, avec des couches animées indépendantes.

- Original : `art-source/serre-profonde-v03.png`, 2172 × 724 pixels.
- Version livrée : `dist/assets/serre-profonde-v03.webp`, mêmes dimensions, qualité 88, 235 676 octets.
- Le changement de format est une compression, sans retouche du contenu généré.
- Les volumes de collision, le personnage, le quai destructible, les plantes et les lumières interactives sont définis par le code. Ils ne sont pas dessinés dans cette image.

## Prompt utilisé

Use case: stylized-concept. Asset type: actual panoramic background matte painting for the original browser game NACRE, not a screenshot, no UI. Create a very wide 3:1 cinematic environment illustration, 3072x1024 if possible. Interior of a monumental abandoned tidal conservatory, partly flooded, original poetic ecological science fiction. Side-on horizontal composition for a side scrolling game. Extremely deep atmospheric perspective, massive curved corroded steel ribs and broken translucent roof panes, tall eroded limestone buttresses, hanging root curtains and distant botanical specimen cocoons. Lower quarter is dark still teal water with understated reflections; foreground walkway and all characters will be added by the game so DO NOT paint a walkway, protagonist, creatures or foreground plants. Mid-distance empty shadowed gallery across the whole width. Left third dark blue-green claustrophobic ruins with faint soft cyan roof illumination; middle third opens into a vast turquoise fog-filled nave with a single slant of pale gold daylight from a broken ceiling; right third softly luminous muted jade flooded conservatory with a very distant giant petrified tree. Restrained nuanced color, deep blacks with legible midtones, amber mineral accents, painterly sculptural materials and careful indirect light. Sophisticated cinematic independent game art, fine organic surface texture, quiet melancholic grandeur and unease. Large simple architectural masses, no repetitive decorative leaf patterns, no flat vector lines, no cartoon, no saturated neon, no text or border. Make the depth and material light feel physical. Use full bleed.


## Ajouts 0.4

- `art-source/reservoir-v04.png` : panorama original du réservoir, de la salle d’observation et de l’estuaire. Version livrée : `dist/assets/reservoir-v04.webp`, même résolution 2172 × 724, qualité 88.
- `art-source/watcher-v04.png` : présence botanique originale détourée, 1536 × 1024, canal alpha conservé. Version livrée : `dist/assets/watcher-v04.webp`, qualité 86.
- Les deux ajouts ont été créés avec l’outil d’image intégré. Aucune image ni animation de Playdead n’a été importée.
- Les matières, roues, câbles, nacelle, portes et piliers sont dessinés séparément ; le sprite reçoit une respiration, des filaments et un organe sensible animés par le moteur.

### Brief du réservoir

Panorama horizontal d’un conservatoire englouti, contrepoids et bronze à gauche, hall de verre bleu et cocons au centre, sortie jade vers l’estuaire à droite. Le chemin et les objets jouables sont ajoutés par le moteur.

### Prompt du sprite

Use case: stylized-concept. Asset type: isolated transparent 2.5D game creature sprite, side view, 3:2 landscape. Create an original enigmatic deep-sea botanical organism for a beautiful melancholic cinematic game set in a drowned botanical conservatory. A gigantic suspended seed husk, like an aged nautilus shell intergrown with ancient bark and translucent kelp membranes. Broad asymmetrical horizontal upper body, rounded and complex, with thin hanging root tendrils below. No humanoid face, no fish face, no mouth, no teeth, no gore. One small closed oval sensory opening on its front lower right quarter, subtly nacreous amber. Painterly physically lit volumetric surfaces, beautifully intricate fine branching veins, layered bark ridges, scars and wet organic folds. Colors subdued desaturated deep petrol blue, dark teal, oxidized bronze, tiny pearl accents. Soft cool rim light from above left and dark shadows, no self-glowing body. Entire organism centered with margin and complete silhouette, genuine transparent alpha everywhere outside. No environment, no floor, no text, no border, no UI. Serious atmospheric game art, not cartoon, not vector, not flat geometric shape. It should look like an ancient sleeping being more than a monster.

## Personnage 0.5

- Original : `art-source/traveller-v05.png`, 1536 × 1024, RGBA.
- Version livrée : `dist/assets/traveller-v05.webp`, mêmes dimensions, qualité 88, alpha conservé. Conversion de format uniquement.
- Atlas de deux éléments originaux : manteau sans bras à gauche, tête et cou en profil à droite. Le moteur découpe ces deux régions, anime le manteau par bandes et les attache aux articulations. Les membres, bottes, mains et queues d’écharpe sont rendus séparément.
- Génération avec l’outil d’image intégré, sans nouvel abonnement, achat de crédits ni API externe payante. Aucun personnage ou asset de Playdead importé.

### Prompt du personnage

Use case: stylized-concept. Asset type: production 2D character cutout atlas for an original cinematic browser game called NACRE. Transparent background, wide 3:2 canvas, exactly TWO separate isolated animation components, clearly separated by a large transparent vertical gutter. LEFT HALF: only the sleeveless torso garment of a slender female wanderer in exact side profile facing RIGHT, from neck opening to mid-thigh hem. A beautiful worn dark petrol-blue waxed coat with a softly flared asymmetrical hem, tailored shoulders, subtle copper seams, layered cloth folds, a narrow cross-body weathered leather strap and small bronze fastening. No head, no arms, no hands, no legs, no scarf tails on this torso component. This is an animation costume piece, cleanly ending at the shoulder openings. RIGHT HALF: only the head and neck of the SAME young adult woman in exact side profile facing RIGHT. Sensitive recognizable face, slightly tousled short dark brown bob hair, a small loose strand, determined melancholic expression, subtle pale warm skin and cool edge light. A small muted rust-red scarf wrapped around the neck, with no long trailing ends. No hood, no glowing eyes, no exaggerated makeup, not a fashion model. Both components each fill their own half with a 10% transparent margin. Beautiful painterly sculptural 3D game illustration, atmospheric physical materials, soft shadow modeling, restrained fine texture, cool cyan top-left rim light and warm reflected light, serious poetic indie game aesthetics. The head and coat must be fully visible and isolated without background rectangles, cast shadows, floor, captions, text, grid lines or labels. Genuine transparency around both components. The limbs and scarf tails are animated separately by code and must not appear here.


## Personnage 0.7

Génération intégrée, sans API externe payante. Original : `art-source/traveller-v07.png`, 1024 × 1536 RGBA. Asset du moteur : `dist/assets/traveller-v07.webp`, même résolution, qualité 92. Conversion de format seulement, alpha préservé. Le moteur utilise le rectangle source (248,54,498,1446), affiché en 28 × 81 unités. Une seule illustration remplace les découpes séparées du visage et du manteau ; le code anime ses pans inférieurs et les membres. Les assets 0.5 restent historiques et ne sont plus chargés par le personnage.

### Prompt de génération

Use case: stylized-concept. Production asset for original atmospheric side-scrolling game NACRE, a drowned botanical conservatory. Create ONE isolated rigging cutout of a female wanderer's connected HEAD, NECK, SHOULDERS AND TORSO with a short coat hem ending at upper thighs. Exact side profile facing RIGHT, neutral upright standing posture. No arms, no hands, no legs, no separate pieces, no other figures. Arms will be animated by the engine so shoulders should be capped with the same dark cloth, not empty black holes. Head must be SMALL with believable adult proportions: crown to chin only about 23 percent of total crown-to-coat-hem height. Short dark windswept hair, simplified warm muted face, quiet determined expression. One continuous anatomically convincing neck into narrow shoulders and softly curved upper back, modest small rust scarf close to neck, graceful practical dark desaturated petrol-green wool coat, subtle broad seams, slight asymmetry of coat hem. Painterly cinematic animation design with simplified broad tonal planes, matte surfaces, soft restrained side-light; not photorealistic, not a detailed portrait, not comic outlines, not a fashion model or armour, no jewelry/buckles/straps, no glow. Every part must have same level of stylization, attractive understated silhouette legible at a tiny 85 pixel displayed height. Main cutout fills centered vertical area with padding. Genuine transparent background, no shadow, no ground, no text. This is a single coherent connected upper-body sprite, not a character sheet.

## Assets de l’étude 0.9

Deux images originales créées avec la génération intégrée, sans API facturée ni achat de crédits : `art-source/convoy-v09.png` et `art-source/quay-v09.png`. Versions WebP RGBA dans `dist/assets`, alpha conservé, environ 244 et 296 Ko. Le véhicule sert aux plans du convoi et de la patrouille ; le quai aux plateformes, couverts et refuge. Prompts conservés dans `PROMPTS-09.md`. Aucun média d’INSIDE incorporé.
