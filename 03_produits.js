// ============================================================
// COLLECTION : produits — 4 catégories (schéma flexible)
// ============================================================
use marche_gabon

// ── CATÉGORIE 1 : Informatique 
db.produits.insertMany([
  {
    nom: "Samsung Galaxy A54", categorie: "informatique",
    prix: 185000, devise: "FCFA", disponible: true, stock: 8,
    ville_vendeur: "Libreville", boutique: "Tech Shop Gabon",
    date_ajout: new Date("2024-01-05"),
    attributs: { ecran: "6.4 pouces", memoire: "128 Go", ram: "6 Go", couleur: "Noir", os: "Android 13" }
  },
  {
    nom: "Laptop HP 250 G9", categorie: "informatique",
    prix: 420000, devise: "FCFA", disponible: true, stock: 3,
    ville_vendeur: "Libreville", boutique: "Tech Shop Gabon",
    date_ajout: new Date("2024-01-10"),
    attributs: { ecran: "15.6 pouces", stockage: "512 Go SSD", ram: "8 Go", processeur: "Intel Core i5", os: "Windows 11" }
  },
  {
    nom: "iPhone 13 128Go", categorie: "informatique",
    prix: 650000, devise: "FCFA", disponible: true, stock: 2,
    ville_vendeur: "Port-Gentil", boutique: "Tech Shop Gabon",
    date_ajout: new Date("2024-01-15"),
    attributs: { ecran: "6.1 pouces", memoire: "128 Go", ram: "4 Go", couleur: "Bleu", os: "iOS 16" }
  },
  {
    nom: "Tablette Samsung Tab A8", categorie: "informatique",
    prix: 210000, devise: "FCFA", disponible: true, stock: 5,
    ville_vendeur: "Libreville", boutique: "Tech Shop Gabon",
    date_ajout: new Date("2024-01-20"),
    attributs: { ecran: "10.5 pouces", memoire: "64 Go", ram: "3 Go", couleur: "Gris", os: "Android 11" }
  },
  {
    nom: "Imprimante Canon PIXMA", categorie: "informatique",
    prix: 95000, devise: "FCFA", disponible: true, stock: 6,
    ville_vendeur: "Owendo", boutique: "MultiShop Owendo",
    date_ajout: new Date("2024-02-01"),
    attributs: { type: "Jet d'encre", connectivite: "WiFi + USB", format: "A4", couleur: "Blanc" }
  },
  {
    nom: "Souris Logitech sans fil", categorie: "informatique",
    prix: 18000, devise: "FCFA", disponible: true, stock: 20,
    ville_vendeur: "Libreville", boutique: "Tech Shop Gabon",
    date_ajout: new Date("2024-02-05"),
    attributs: { connexion: "Bluetooth", autonomie: "18 mois", couleur: "Noir", dpi: "1000" }
  },
  {
    nom: "Clé USB Kingston 64Go", categorie: "informatique",
    prix: 8500, devise: "FCFA", disponible: true, stock: 30,
    ville_vendeur: "Libreville", boutique: "Tech Shop Gabon",
    date_ajout: new Date("2024-02-10"),
    attributs: { capacite: "64 Go", interface: "USB 3.0", couleur: "Rouge" }
  },
  {
    nom: "Casque Bluetooth JBL Tune", categorie: "informatique",
    prix: 45000, devise: "FCFA", disponible: true, stock: 10,
    ville_vendeur: "Port-Gentil", boutique: "MultiShop Owendo",
    date_ajout: new Date("2024-02-15"),
    attributs: { connexion: "Bluetooth 5.0", autonomie: "40h", couleur: "Noir", micro: true }
  },

  // ── CATÉGORIE 2 : Mode
  {
    nom: "Robe Wax Pagne Gabonais", categorie: "mode",
    prix: 25000, devise: "FCFA", disponible: true, stock: 15,
    ville_vendeur: "Libreville", boutique: "Mode Gabonaise",
    date_ajout: new Date("2024-01-08"),
    attributs: { taille: "M", couleur: "Bleu/Orange", matiere: "Coton Wax", style: "Traditionnel" }
  },
  {
    nom: "Boubou Homme Grand Modèle", categorie: "mode",
    prix: 35000, devise: "FCFA", disponible: true, stock: 8,
    ville_vendeur: "Libreville", boutique: "Mode Gabonaise",
    date_ajout: new Date("2024-01-12"),
    attributs: { taille: "XL", couleur: "Blanc/Or", matiere: "Bazin", style: "Cérémonie" }
  },
  {
    nom: "Sandales Femme Cuir", categorie: "mode",
    prix: 18000, devise: "FCFA", disponible: true, stock: 12,
    ville_vendeur: "Port-Gentil", boutique: "Mode Gabonaise",
    date_ajout: new Date("2024-01-18"),
    attributs: { pointure: "39", couleur: "Marron", matiere: "Cuir", talon: "5cm" }
  },
  {
    nom: "Sac à main Femme Tressé", categorie: "mode",
    prix: 22000, devise: "FCFA", disponible: true, stock: 7,
    ville_vendeur: "Franceville", boutique: "Mode Gabonaise",
    date_ajout: new Date("2024-01-25"),
    attributs: { couleur: "Beige", matiere: "Raphia tressé", dimension: "30x20cm", fermeture: "Zip" }
  },
  {
    nom: "Ensemble Pagne Enfant 3-5 ans", categorie: "mode",
    prix: 12000, devise: "FCFA", disponible: true, stock: 20,
    ville_vendeur: "Libreville", boutique: "Mode Gabonaise",
    date_ajout: new Date("2024-02-03"),
    attributs: { taille: "3-5 ans", couleur: "Rouge/Jaune", matiere: "Coton", style: "Traditionnel" }
  },
  {
    nom: "Chemise Homme Lin Blanc", categorie: "mode",
    prix: 15000, devise: "FCFA", disponible: true, stock: 10,
    ville_vendeur: "Owendo", boutique: "Mode Gabonaise",
    date_ajout: new Date("2024-02-08"),
    attributs: { taille: "L", couleur: "Blanc", matiere: "Lin", manche: "Longue" }
  },

  // ── CATÉGORIE 3 : Alimentation 
  {
    nom: "Sac de Riz Parfumé 25kg", categorie: "alimentation",
    prix: 22000, devise: "FCFA", disponible: true, stock: 50,
    ville_vendeur: "Libreville", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-01-06"),
    attributs: { poids: "25kg", origine: "Thaïlande", type: "Parfumé", date_expiration: "2025-12-01" }
  },
  {
    nom: "Huile de Palme Locale 5L", categorie: "alimentation",
    prix: 8500, devise: "FCFA", disponible: true, stock: 40,
    ville_vendeur: "Owendo", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-01-09"),
    attributs: { volume: "5L", origine: "Gabon", type: "Rouge non raffinée", date_expiration: "2025-06-01" }
  },
  {
    nom: "Sucre Cristallisé 50kg", categorie: "alimentation",
    prix: 32000, devise: "FCFA", disponible: true, stock: 25,
    ville_vendeur: "Port-Gentil", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-01-14"),
    attributs: { poids: "50kg", type: "Cristallisé", origine: "Brésil", date_expiration: "2026-01-01" }
  },
  {
    nom: "Carton de Sardines GABS 48 boites", categorie: "alimentation",
    prix: 28000, devise: "FCFA", disponible: true, stock: 30,
    ville_vendeur: "Libreville", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-01-19"),
    attributs: { quantite: "48 boites", poids_unite: "125g", sauce: "Tomate", date_expiration: "2026-03-01" }
  },
  {
    nom: "Farine de Manioc 10kg", categorie: "alimentation",
    prix: 6500, devise: "FCFA", disponible: true, stock: 60,
    ville_vendeur: "Franceville", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-01-26"),
    attributs: { poids: "10kg", type: "Manioc blanc", origine: "Gabon", date_expiration: "2025-08-01" }
  },
  {
    nom: "Lait en Poudre Nido 900g", categorie: "alimentation",
    prix: 14500, devise: "FCFA", disponible: true, stock: 35,
    ville_vendeur: "Libreville", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-02-04"),
    attributs: { poids: "900g", marque: "Nestlé Nido", type: "Entier", date_expiration: "2025-10-01" }
  },
  {
    nom: "Bouteille d'Eau Minerale Régab 1.5L x12", categorie: "alimentation",
    prix: 5000, devise: "FCFA", disponible: true, stock: 80,
    ville_vendeur: "Libreville", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-02-09"),
    attributs: { volume: "1.5L x12", marque: "Régab", type: "Plate", date_expiration: "2025-02-09" }
  },
  {
    nom: "Boîte de Tomate Concentrée 400g x24", categorie: "alimentation",
    prix: 18000, devise: "FCFA", disponible: true, stock: 45,
    ville_vendeur: "Port-Gentil", boutique: "Alimentation du Peuple",
    date_ajout: new Date("2024-02-14"),
    attributs: { poids_unite: "400g", quantite: "24 boites", marque: "Mutti", date_expiration: "2026-06-01" }
  },

  // ── CATÉGORIE 4 : Électronique 
  {
    nom: "Climatiseur Hisense 1.5CV Split", categorie: "electronique",
    prix: 320000, devise: "FCFA", disponible: true, stock: 4,
    ville_vendeur: "Libreville", boutique: "Elec Plus Gabon",
    date_ajout: new Date("2024-01-07"),
    attributs: { puissance: "1.5CV", type: "Split", marque: "Hisense", garantie: "2 ans", energie: "A+" }
  },
  {
    nom: "Réfrigérateur Samsung 350L", categorie: "electronique",
    prix: 480000, devise: "FCFA", disponible: true, stock: 2,
    ville_vendeur: "Port-Gentil", boutique: "Elec Plus Gabon",
    date_ajout: new Date("2024-01-11"),
    attributs: { capacite: "350L", type: "Double porte", marque: "Samsung", garantie: "3 ans", couleur: "Inox" }
  },
  {
    nom: "Télévision LED 55 pouces 4K", categorie: "electronique",
    prix: 350000, devise: "FCFA", disponible: true, stock: 5,
    ville_vendeur: "Libreville", boutique: "Elec Plus Gabon",
    date_ajout: new Date("2024-01-16"),
    attributs: { taille: "55 pouces", resolution: "4K UHD", marque: "LG", smart: true, garantie: "2 ans" }
  },
  {
    nom: "Machine à laver Hisense 7kg", categorie: "electronique",
    prix: 275000, devise: "FCFA", disponible: true, stock: 3,
    ville_vendeur: "Franceville", boutique: "Elec Plus Gabon",
    date_ajout: new Date("2024-01-22"),
    attributs: { capacite: "7kg", type: "Chargement frontal", marque: "Hisense", garantie: "2 ans", couleur: "Blanc" }
  },
  {
    nom: "Ventilateur Sur Pied 16 pouces", categorie: "electronique",
    prix: 35000, devise: "FCFA", disponible: true, stock: 15,
    ville_vendeur: "Owendo", boutique: "MultiShop Owendo",
    date_ajout: new Date("2024-01-28"),
    attributs: { taille: "16 pouces", vitesses: 3, oscillation: true, marque: "Dowell", garantie: "1 an" }
  },
  {
    nom: "Fer à Repasser Vapeur Philips", categorie: "electronique",
    prix: 28000, devise: "FCFA", disponible: true, stock: 12,
    ville_vendeur: "Libreville", boutique: "Elec Plus Gabon",
    date_ajout: new Date("2024-02-06"),
    attributs: { puissance: "2400W", type: "Vapeur", marque: "Philips", semelle: "Inox", garantie: "1 an" }
  },
  {
    nom: "Groupe Électrogène 3KVA", categorie: "electronique",
    prix: 580000, devise: "FCFA", disponible: true, stock: 2,
    ville_vendeur: "Port-Gentil", boutique: "Elec Plus Gabon",
    date_ajout: new Date("2024-02-12"),
    attributs: { puissance: "3 KVA", carburant: "Essence", marque: "Yamaha", garantie: "2 ans", demarrage: "Electrique" }
  }
])

print(" " + db.produits.countDocuments() + " produits insérés.")
