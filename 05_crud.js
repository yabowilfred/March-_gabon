// ============================================================
// OPÉRATIONS CRUD — Marché en Ligne du Gabon
// ============================================================
use marche_gabon

print("========== CRUD ==========")

// ── CREATE 
print("\n--- INSERT ---")
db.produits.insertOne({
  nom: "Mixeur Blender 1.5L", categorie: "electronique",
  prix: 32000, devise: "FCFA", disponible: true, stock: 8,
  ville_vendeur: "Libreville", boutique: "Elec Plus Gabon",
  date_ajout: new Date(),
  attributs: { capacite: "1.5L", puissance: "600W", marque: "Binatone", garantie: "1 an" }
})
print(" Produit inséré")

// ── READ 
print("\n--- FIND avec filtres ---")

// Tous les produits disponibles
print("Produits disponibles : " + db.produits.countDocuments({ disponible: true }))

// Produits entre 10 000 et 100 000 FCFA
print("Produits 10k-100k FCFA : " + db.produits.countDocuments({ prix: { $gte: 10000, $lte: 100000 }, disponible: true }))

// Avec projection
db.produits.find(
  { categorie: "alimentation" },
  { nom: 1, prix: 1, _id: 0 }
).forEach(p => print("  →", p.nom, ":", p.prix, "FCFA"))

// Recherche par regex
print("\nRecherche 'Samsung' :")
db.produits.find({ nom: /Samsung/i }, { nom: 1, prix: 1, _id: 0 })
  .forEach(p => print("  →", p.nom))

// Tri + limite (pagination)
print("\nTop 3 produits les plus chers :")
db.produits.find({}, { nom: 1, prix: 1, _id: 0 })
  .sort({ prix: -1 }).limit(3)
  .forEach(p => print("  →", p.nom, ":", p.prix, "FCFA"))

// ── UPDATE 
print("\n--- UPDATE ---")
db.produits.updateOne(
  { nom: "Clé USB Kingston 64Go" },
  { $set: { prix: 9000 }, $inc: { stock: -5 } }
)
print(" Prix et stock mis à jour")

db.produits.updateMany(
  { categorie: "alimentation", disponible: true },
  { $set: { "attributs.promotion": false } }
)
print(" Champ promotion ajouté à tous les produits alimentaires")

// ── DELETE 
print("\n--- DELETE ---")
db.commandes.deleteMany({ statut: "annulé" })
print(" Commandes annulées supprimées")
print("Commandes restantes : " + db.commandes.countDocuments())
