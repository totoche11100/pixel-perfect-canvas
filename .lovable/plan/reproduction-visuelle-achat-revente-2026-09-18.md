# Reproduction visuelle « Achat Revente »

## Objectif
Recréer uniquement l’interface visible dans la capture, avec des données statiques et sans backend, authentification, API ni logique métier.

## Construction
- Définir le système visuel bleu glassmorphism : fond lumineux, panneaux translucides, bordures, ombres, rayons, typographie et densité.
- Composer l’écran en éléments clairement séparés : barre latérale, en-tête, raccourcis, carte du graphique, navigation secondaire, panneau ventes et panneau achats.
- Reproduire les textes, valeurs, colonnes, badges, icônes et états actifs visibles dans la capture.
- Dessiner le graphique en CSS afin qu’il reste net et statique, sans dépendance de données.
- Ajouter uniquement des réactions visuelles locales utiles : survols, onglet sélectionné, sidebar mobile et plein écran si disponible.

## Adaptation des écrans
- Priorité à la composition desktop de la capture.
- Sur tablette et mobile, conserver le même langage visuel avec navigation repliable et zones denses défilables horizontalement.

## Contrôle final
- Comparer le rendu local à la capture sur desktop, puis vérifier tablette et mobile.
- Corriger les écarts visibles de proportions, espacements, couleurs, transparences, textes et alignements.
- Vérifier que la page se charge sans erreur et que tous les contenus restent lisibles.
