# Marché en Ligne du Gabon — Base de données MongoDB
Plateforme e-commerce pour commerçants de Libreville, Port-Gentil, Franceville et Owendo.

## Prérequis
- MongoDB 7.0+
- MongoDB Compass (interface graphique)
- mongosh (shell MongoDB)

##  Installation et lancement

### 1. Démarrer MongoDB
# Windows
net start MongoDB

### 2. Ouvrir mongosh et exécuter les scripts dans l'ordre
mongosh < 01_setup.js
mongosh < 02_utilisateurs.js
mongosh < 03_produits.js
mongosh < 04_commandes_avis.js
mongosh < 05_crud.js
mongosh < 06_agregation.js
mongosh < 07_index_performance.js

## Structure du projet
marche_gabon/
 01_setup.js              → Initialisation de la base
 02_utilisateurs.js       → 15 utilisateurs (vendeurs + acheteurs)
 03_produits.js           → 30 produits (4 catégories)
 04_commandes_avis.js     → 15 commandes + 22 avis
 05_crud.js               → Opérations CRUD complètes
 06_agregation.js         → Pipelines d'agrégation
 07_index_performance.js  → Index + explain()
 README.md

## Collections
Utilisateurs: 15 Vendeurs et acheteurs
Produits: 3O, 4 catégories : informatique, mode, alimentation, électronique
Commandes: 15 Commandes avec statuts
Avis: 22  Notes et commentaires

##  Villes couvertes
- Libreville
- Port-Gentil
- Franceville
- Owendo

## Devise : FCFA |  Format téléphone : +241
