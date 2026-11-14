## 14 novembre : chiens du prologue forestier

`dist/assets/foley/dog.mp3` : Brandon Morris (HaelDB), « Dog barking mono », CC0 proposée par la page auteur https://opengameart.org/content/dog-barking-mono . Fichier source https://opengameart.org/sites/default/files/dog_barking_mono.wav , WAV mono 44,1 kHz, 2,038594 s, 179848 octets. Quatre aboiements enregistrés. Conversion locale MP3, filtres 75–6500 Hz et courts fondus, aucun son Playdead. La première annonce est discrète depuis le sous-bois, puis sa position suit le chien et s’atténue en s’éloignant et dans l’eau. Aucun fond de pluie/vent permanent ajouté. Décodage vérifié ; aucune écoute critique revendiquée.

SHA256 source : `bbd0f908b3514dd3bd7d2bc04dcf64f8d360a161e7f43cac5d6761e7add79451`.

---

## 14 novembre : décharges et acoustique spatiale

Deux sources indépendantes pour les décharges de la citerne, annonce depuis l’approche sèche, direction et atténuation continues. Résonance selon le lieu, bois sur nacelle et pierre après la croûte de sel. 250 tests réussis ; quinze échantillons décodés et graphe Web Audio contrôlé dans Chromium. Aucune écoute critique, WebGL toujours indisponible. Voir docs/SPATIAL-FOLEY.md et docs/ETAT-JOUABLE.md pour la portée et la suite.

---

## 14 novembre : causalité sonore corrigée

La musique de rafale s’efface progressivement sous les abris, y compris l’abri mobile. Plus de nouveaux grincements dus au seul maintien d’une commande immobile ; effort respiratoire lié au déplacement réel et à la poussée. 234 tests réussis, parcours et reprises conservés. WebGL cloud indisponible ; aucune écoute critique. Pas de nouveau niveau dans cette passe, extension après les refuges toujours prioritaire. Voir ITERATION.md pour les sources et limites.

---

# Corps, matière et silence, 13 novembre 2026

Les trois passages 3D utilisent désormais quinze courts échantillons locaux : trois pas sur sol dur, trois pas sur bois, trois pas sur sable, souffle, impact d'eau, mouvement d'eau, tissu, verrou métallique et craquement. Pas d'oscillateur ni de bruit blanc dans cette couche. Les anciennes fonctions procédurales restent pour les anciennes versions peintes, pas pour le nouveau mix 3D.

Sources consultées et téléchargées gratuitement le 13 novembre 2026 :

| Dérivés locaux | Source et auteur | Licence |
| --- | --- | --- |
| stone1/2/3.mp3 | https://opengameart.org/content/footsteps-0, gboxmikefozzy, enregistrements dans le métro | CC0 |
| wood1/2/3.mp3 | https://opengameart.org/content/steps-in-wood-floor, mikeask | CC0 |
| breath.mp3 | https://opengameart.org/content/breathing-tired, mikeask | CC0 |
| sand1/2/3.mp3, splash.mp3, stroke.mp3 | https://opengameart.org/content/water-splash-and-sand-footsteps, peludo | CC0 |
| cloth.mp3, metal.mp3 | https://opengameart.org/content/50-rpg-sound-effects, Kenney Vleugels, cloth1.ogg et metalLatch.ogg | CC0 |
| creak.mp3 | https://opengameart.org/content/tree-creaking, Department64, édition AntumDeluge | CC0 |

Licence : https://creativecommons.org/publicdomain/zero/1.0/

Transformations : mono 24 kHz, MP3 64 kbit/s, coupe-bas 65 Hz, filtre passe-bas entre 2,3 et 6 kHz, fondus d'entrée, extraction de pas individuels, ajustement des gains. Les pas sur sable proviennent d'un MP3 dont certains pics dépassent 0 dB après décodage : gain réduit à 0,6 avant export. Le craquement d'arbre est réinterprété comme craquement de matière et de mécanisme, pas présenté comme un enregistrement de la machine du jeu. Les battements d'ailes sont une brève variation du tissu, encore à remplacer par une prise dédiée.

Les pas suivent la distance parcourue au sol, avec trois variantes et une amplitude réduite en accroupissement. L'effort accumulé en course déclenche le souffle, qui s'apaise à l'arrêt ; pas de souffle terrestre ni de pas sous l'eau. Les mouvements dans l'eau ont leur propre cadence. Craquements pendant les mécanismes seulement, pas de pluie ou vent permanent. Pas lointains filtrés et panoramisés pour la silhouette et le poursuivant. Maximum huit voix ; arrêt et remise à zéro des cadences à la pause/reprise.

Le conservatoire, le désert et la citerne ne jouent plus de musique pendant l'exploration ordinaire. Surveillance : présence musicale très basse. Poursuite réelle : entrée plus franche. Immersion : retour au corps et à l'eau. Sortie et ouverture de la vidange : retour musical discret. Les morceaux de Scott Buckley conservent leur licence et leurs crédits dans MUSIC.md.

Validation réelle : les quinze MP3 ont été décodés par AudioContext dans le navigateur cloud. Contexte running, deux voix lancées, poids musicaux nuls en exploration ; après pause, zéro voix et quatre pistes arrêtées. Ce contrôle prouve le fonctionnement audio, pas une écoute critique du mix. Ni écoute humaine au casque ni essai iPhone physique revendiqués. Les sons du convoi, les longues ambiances spatiales et les transitions acoustiques restent à développer.

## Transport et musique de la citerne, 14 novembre

Les pas utilisent la marche propre, excluant le transport de nacelle. Frein, frottements espacés et arrivée sont liés au cycle réel, atténués avec la distance. Réemploi des sons CC0 décrits ci-dessus (creak et wood1), sans nouvel asset. Le bassin et la nacelle retrouvent le silence musical ; détente à la vidange puis au quai final seulement. Validation technique 203 tests, pas une validation perceptive.
