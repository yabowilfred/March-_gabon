// ============================================================
// COLLECTIONS : commandes & avis
// ============================================================
 marché_gabon

// ── COMMANDES 
db.commandes.insertMany([
  {
    reference: "CMD-2024-001",
    acheteur: "Nzamba Koumba Fabiola", ville_livraison: "Libreville",
    produits: [
      { nom: "Samsung Galaxy A54", categorie: "informatique", quantite: 1, prix_unitaire: 185000 },
      { nom: "Clé USB Kingston 64Go", categorie: "informatique", quantite: 2, prix_unitaire: 8500 }
    ],
    total: 202000, statut: "livré",
    date_commande: new Date("2024-02-10"), date_livraison: new Date("2024-02-12")
  },
  {
    reference: "CMD-2024-002",
    acheteur: "Moussavou Cédric", ville_livraison: "Port-Gentil",
    produits: [
      { nom: "Sac de Riz Parfumé 25kg", categorie: "alimentation", quantite: 2, prix_unitaire: 22000 },
      { nom: "Huile de Palme Locale 5L", categorie: "alimentation", quantite: 3, prix_unitaire: 8500 }
    ],
    total: 69500, statut: "livré",
    date_commande: new Date("2024-02-14"), date_livraison: new Date("2024-02-16")
  },
  {
    reference: "CMD-2024-003",
    acheteur: "Bourobou Marielle", ville_livraison: "Libreville",
    produits: [
      { nom: "Robe Wax Pagne Gabonais", categorie: "mode", quantite: 2, prix_unitaire: 25000 },
      { nom: "Sandales Femme Cuir", categorie: "mode", quantite: 1, prix_unitaire: 18000 }
    ],
    total: 68000, statut: "livré",
    date_commande: new Date("2024-02-18"), date_livraison: new Date("2024-02-20")
  },
  {
    reference: "CMD-2024-004",
    acheteur: "Assembe Jaurès", ville_livraison: "Franceville",
    produits: [
      { nom: "Climatiseur Hisense 1.5CV Split", categorie: "electronique", quantite: 1, prix_unitaire: 320000 }
    ],
    total: 320000, statut: "livré",
    date_commande: new Date("2024-02-20"), date_livraison: new Date("2024-02-24")
  },
  {
    reference: "CMD-2024-005",
    acheteur: "Mintsa Mi Nze Audrey", ville_livraison: "Owendo",
    produits: [
      { nom: "Laptop HP 250 G9", categorie: "informatique", quantite: 1, prix_unitaire: 420000 }
    ],
    total: 420000, statut: "livré",
    date_commande: new Date("2024-03-01"), date_livraison: new Date("2024-03-03")
  },
  {
    reference: "CMD-2024-006",
    acheteur: "Kombila Franck", ville_livraison: "Libreville",
    produits: [
      { nom: "Télévision LED 55 pouces 4K", categorie: "electronique", quantite: 1, prix_unitaire: 350000 },
      { nom: "Ventilateur Sur Pied 16 pouces", categorie: "electronique", quantite: 2, prix_unitaire: 35000 }
    ],
    total: 420000, statut: "livré",
    date_commande: new Date("2024-03-05"), date_livraison: new Date("2024-03-08")
  },
  {
    reference: "CMD-2024-007",
    acheteur: "Bekale Nadège", ville_livraison: "Port-Gentil",
    produits: [
      { nom: "Boubou Homme Grand Modèle", categorie: "mode", quantite: 1, prix_unitaire: 35000 },
      { nom: "Chemise Homme Lin Blanc", categorie: "mode", quantite: 2, prix_unitaire: 15000 }
    ],
    total: 65000, statut: "en cours",
    date_commande: new Date("2024-03-10"), date_livraison: null
  },
  {
    reference: "CMD-2024-008",
    acheteur: "Ntoutoume Hervé", ville_livraison: "Libreville",
    produits: [
      { nom: "Lait en Poudre Nido 900g", categorie: "alimentation", quantite: 4, prix_unitaire: 14500 },
      { nom: "Boîte de Tomate Concentrée 400g x24", categorie: "alimentation", quantite: 1, prix_unitaire: 18000 }
    ],
    total: 76000, statut: "livré",
    date_commande: new Date("2024-03-12"), date_livraison: new Date("2024-03-14")
  },
  {
    reference: "CMD-2024-009",
    acheteur: "Mengue Mvé Sandrine", ville_livraison: "Libreville",
    produits: [
      { nom: "iPhone 13 128Go", categorie: "informatique", quantite: 1, prix_unitaire: 650000 },
      { nom: "Casque Bluetooth JBL Tune", categorie: "informatique", quantite: 1, prix_unitaire: 45000 }
    ],
    total: 695000, statut: "livré",
    date_commande: new Date("2024-03-15"), date_livraison: new Date("2024-03-17")
  },
  {
    reference: "CMD-2024-010",
    acheteur: "Iyébi Mandjemba Joël", ville_livraison: "Owendo",
    produits: [
      { nom: "Réfrigérateur Samsung 350L", categorie: "electronique", quantite: 1, prix_unitaire: 480000 },
      { nom: "Machine à laver Hisense 7kg", categorie: "electronique", quantite: 1, prix_unitaire: 275000 }
    ],
    total: 755000, statut: "livré",
    date_commande: new Date("2024-03-18"), date_livraison: new Date("2024-03-22")
  },
  {
    reference: "CMD-2024-011",
    acheteur: "Nzamba Koumba Fabiola", ville_livraison: "Libreville",
    produits: [
      { nom: "Farine de Manioc 10kg", categorie: "alimentation", quantite: 3, prix_unitaire: 6500 },
      { nom: "Sucre Cristallisé 50kg", categorie: "alimentation", quantite: 1, prix_unitaire: 32000 }
    ],
    total: 51500, statut: "livré",
    date_commande: new Date("2024-04-01"), date_livraison: new Date("2024-04-03")
  },
  {
    reference: "CMD-2024-012",
    acheteur: "Moussavou Cédric", ville_livraison: "Port-Gentil",
    produits: [
      { nom: "Groupe Électrogène 3KVA", categorie: "electronique", quantite: 1, prix_unitaire: 580000 }
    ],
    total: 580000, statut: "livré",
    date_commande: new Date("2024-04-05"), date_livraison: new Date("2024-04-09")
  },
  {
    reference: "CMD-2024-013",
    acheteur: "Assembe Jaurès", ville_livraison: "Franceville",
    produits: [
      { nom: "Sac à main Femme Tressé", categorie: "mode", quantite: 2, prix_unitaire: 22000 },
      { nom: "Ensemble Pagne Enfant 3-5 ans", categorie: "mode", quantite: 3, prix_unitaire: 12000 }
    ],
    total: 80000, statut: "annulé",
    date_commande: new Date("2024-04-08"), date_livraison: null
  },
  {
    reference: "CMD-2024-014",
    acheteur: "Kombila Franck", ville_livraison: "Libreville",
    produits: [
      { nom: "Carton de Sardines GABS 48 boites", categorie: "alimentation", quantite: 2, prix_unitaire: 28000 },
      { nom: "Bouteille d'Eau Minerale Régab 1.5L x12", categorie: "alimentation", quantite: 5, prix_unitaire: 5000 }
    ],
    total: 81000, statut: "livré",
    date_commande: new Date("2024-04-12"), date_livraison: new Date("2024-04-14")
  },
  {
    reference: "CMD-2024-015",
    acheteur: "Bourobou Marielle", ville_livraison: "Libreville",
    produits: [
      { nom: "Fer à Repasser Vapeur Philips", categorie: "electronique", quantite: 1, prix_unitaire: 28000 },
      { nom: "Imprimante Canon PIXMA", categorie: "informatique", quantite: 1, prix_unitaire: 95000 }
    ],
    total: 123000, statut: "en cours",
    date_commande: new Date("2024-04-15"), date_livraison: null
  }
])

print(" " + db.commandes.countDocuments() + " commandes insérées.")

// ── AVIS 
db.avis.insertMany([
  // Samsung Galaxy A54
  { produit: "Samsung Galaxy A54", categorie: "informatique", acheteur: "Nzamba Koumba Fabiola", note: 5, commentaire: "Excellent téléphone, livraison rapide à Libreville !", date: new Date("2024-02-13") },
  { produit: "Samsung Galaxy A54", categorie: "informatique", acheteur: "Kombila Franck", note: 4, commentaire: "Très bon rapport qualité/prix", date: new Date("2024-02-20") },
  { produit: "Samsung Galaxy A54", categorie: "informatique", acheteur: "Mengue Mvé Sandrine", note: 5, commentaire: "Je recommande vivement, conforme à la description", date: new Date("2024-02-25") },
  { produit: "Samsung Galaxy A54", categorie: "informatique", acheteur: "Ntoutoume Hervé", note: 4, commentaire: "Bon téléphone mais un peu cher", date: new Date("2024-03-01") },

  // Laptop HP
  { produit: "Laptop HP 250 G9", categorie: "informatique", acheteur: "Mintsa Mi Nze Audrey", note: 5, commentaire: "Laptop performant, parfait pour mon travail", date: new Date("2024-03-05") },
  { produit: "Laptop HP 250 G9", categorie: "informatique", acheteur: "Assembe Jaurès", note: 4, commentaire: "Bonne machine, bien emballée", date: new Date("2024-03-10") },
  { produit: "Laptop HP 250 G9", categorie: "informatique", acheteur: "Moussavou Cédric", note: 5, commentaire: "Top ! Livraison à Port-Gentil impeccable", date: new Date("2024-03-15") },

  // Robe Wax
  { produit: "Robe Wax Pagne Gabonais", categorie: "mode", acheteur: "Bourobou Marielle", note: 5, commentaire: "Très belle robe, tissu de qualité !", date: new Date("2024-02-22") },
  { produit: "Robe Wax Pagne Gabonais", categorie: "mode", acheteur: "Bekale Nadège", note: 4, commentaire: "Belle robe, couleurs vives comme sur la photo", date: new Date("2024-02-28") },
  { produit: "Robe Wax Pagne Gabonais", categorie: "mode", acheteur: "Mengue Mvé Sandrine", note: 5, commentaire: "Parfait pour les cérémonies gabonaises", date: new Date("2024-03-05") },

  // Climatiseur
  { produit: "Climatiseur Hisense 1.5CV Split", categorie: "electronique", acheteur: "Assembe Jaurès", note: 5, commentaire: "Installation incluse, froid rapidement. Excellent !", date: new Date("2024-02-26") },
  { produit: "Climatiseur Hisense 1.5CV Split", categorie: "electronique", acheteur: "Kombila Franck", note: 4, commentaire: "Très bon climatiseur, silencieux", date: new Date("2024-03-08") },
  { produit: "Climatiseur Hisense 1.5CV Split", categorie: "electronique", acheteur: "Iyébi Mandjemba Joël", note: 5, commentaire: "Parfait pour le climat gabonais !", date: new Date("2024-03-20") },

  // Riz
  { produit: "Sac de Riz Parfumé 25kg", categorie: "alimentation", acheteur: "Moussavou Cédric", note: 4, commentaire: "Bon riz parfumé, livraison ponctuelle", date: new Date("2024-02-17") },
  { produit: "Sac de Riz Parfumé 25kg", categorie: "alimentation", acheteur: "Nzamba Koumba Fabiola", note: 5, commentaire: "Excellent riz, ma famille est satisfaite", date: new Date("2024-02-25") },
  { produit: "Sac de Riz Parfumé 25kg", categorie: "alimentation", acheteur: "Bourobou Marielle", note: 4, commentaire: "Bonne qualité, bon prix", date: new Date("2024-03-02") },
  { produit: "Sac de Riz Parfumé 25kg", categorie: "alimentation", acheteur: "Ntoutoume Hervé", note: 5, commentaire: "Toujours commander ici !", date: new Date("2024-03-10") },

  // TV
  { produit: "Télévision LED 55 pouces 4K", categorie: "electronique", acheteur: "Kombila Franck", note: 5, commentaire: "Image magnifique, Smart TV très pratique", date: new Date("2024-03-10") },
  { produit: "Télévision LED 55 pouces 4K", categorie: "electronique", acheteur: "Mintsa Mi Nze Audrey", note: 4, commentaire: "Très belle TV, bon son", date: new Date("2024-03-18") },
  { produit: "Télévision LED 55 pouces 4K", categorie: "electronique", acheteur: "Assembe Jaurès", note: 5, commentaire: "Je suis vraiment satisfait de mon achat", date: new Date("2024-03-25") },

  // iPhone
  { produit: "iPhone 13 128Go", categorie: "informatique", acheteur: "Mengue Mvé Sandrine", note: 5, commentaire: "Produit authentique, livré rapidement", date: new Date("2024-03-19") },
  { produit: "iPhone 13 128Go", categorie: "informatique", acheteur: "Bekale Nadège", note: 4, commentaire: "Bon téléphone mais prix élevé", date: new Date("2024-03-22") },
  { produit: "iPhone 13 128Go", categorie: "informatique", acheteur: "Nzamba Koumba Fabiola", note: 5, commentaire: "Excellent, je recommande ce vendeur !", date: new Date("2024-03-28") }
])

print(" " + db.avis.countDocuments() + " avis insérés.")
