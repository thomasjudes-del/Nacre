## Extension rouge du 14 novembre : galerie de décharge

Après la grille commandée par le réservoir embarqué, deux jets temporisés occupent le quai. Aiguilles et gouttes annoncent la phase dangereuse ; attente libre sur les zones sèches, passage dans les deux sens, reprise au quatrième checkpoint. Baie finale sans danger. La durée simulée avec solution connue passe de 38,00 à 54,62 s. Les autres mondes sont inchangés. 220 tests, références Blender ; aucune validation WebGL ou iPhone. Voir ITERATION.md pour les limites et la prochaine priorité.

---

# Trois mondes 3D, état au 13 novembre 2026

## Ce qui est disponible

1. Conservatoire, `conservatoire.html` : observation à couvert, caisse/balance/grille, convoi, gardien, nage, baie fleurie. Route connue 42,52 s.
2. Mer de sel, `mondes.html` : dunes et nautile, fossile roulant sur dalle, pont, manivelle et volet à retour lent, puis sortie. Route connue 33,57 s.
3. Citerne rouge, `mondes.html` : mise en pression, nacelle, grille entraînée par l’eau avec cliquet, seconde vanne, bassin à vider pour révéler les pierres et sortie. Route connue 31,33 s.

Les trois scènes sont réellement polygonales, avec personnage skinné commun, perspective, éclairage et ombres. Ces temps mesurent un pilote connaissant la solution, pas une première partie. Les nouveaux mondes sont plus courts et moins détaillés que le conservatoire. Ils n'ont pas encore d'ennemis propres. Ne pas présenter cette livraison comme trois niveaux riches et finalisés.

## Architecture

`frontier-3d.mjs` et `world-game.mjs` réutilisent Actor, commandes tactiles, présentation et son. `world-logic.js` contient les passages étendus et leurs checkpoints ; `frontier-logic.js` demeure inchangé pour les fragments peints et le trailer. Sauvegarde `nacre-worlds-3d-v1`, séparée de toutes les anciennes. `world-score.js` sélectionne et fond les pistes par situation réelle dans les trois mondes 3D.

## Prochaine progression

Étoffer la mer de sel en premier : accueil narratif, vestiges à parcourir, faune qui réagit, menace originale lisible et respiration finale. Renforcer causalité visuelle et matière des mécanismes existants. Dans la citerne, donner une présence physique à l'eau évacuée et des événements d'ambiance à la longue montée. Garder des espaces où l'on peut s'arrêter ; ne pas étirer les trajets pour fabriquer une durée.

Les bruitages rejetés sont désactivés, à remplacer par des enregistrements autorisés. Écouter le mix et tester WebGL dès qu'un contexte compatible est disponible. Le navigateur cloud actuel refuse toujours WebGL ; les rendus Blender ne sont pas une preuve du rendu navigateur. Préserver personnage lisible, geste de saut gauche, deux pouces, paysage, sauvegardes, trailer V5 et Noël.

## Citerne, 14 novembre

Grille solide dans les deux sens, ouverture par montée d’eau et maintien mécanique après vidange. Flotteur, transmission, repères de niveau et écoulement visibles ; caméra locale à la vanne. Pas de séquence supplémentaire dans cette correction. Voir ITERATION.md et validation-cistern-hydraulics.txt.

## Traversée suspendue, 14 novembre

Après le bassin rouge : nacelle à câbles aller-retour et troisième checkpoint. Route connue 35,40 s. Extension courte, pas un niveau finalisé. Voir ITERATION.md.
