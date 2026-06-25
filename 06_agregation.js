// ============================================================
// PIPELINES D'AGRÉGATION
// ============================================================
use marche_gabon

// ── 1. Chiffre d'affaires par catégorie
print("=== CA par catégorie ===")
db.commandes.aggregate([
  { $match: { statut: "livré" } },
  { $unwind: "$produits" },
  { $group: {
      _id: "$produits.categorie",
      chiffre_affaires: { $sum: { $multiply: ["$produits.quantite", "$produits.prix_unitaire"] } },
      nb_ventes: { $sum: "$produits.quantite" }
  }},
  { $sort: { chiffre_affaires: -1 } },
  { $project: {
      categorie: "$_id",
      chiffre_affaires: 1,
      nb_ventes: 1,
      _id: 0
  }}
]).forEach(r => print(r.categorie, ":", r.chiffre_affaires, "FCFA —", r.nb_ventes, "ventes"))

// ── 2. CA par mois 
print("\n=== CA par mois ===")
db.commandes.aggregate([
  { $match: { statut: "livré" } },
  { $group: {
      _id: { $month: "$date_commande" },
      total_mois: { $sum: "$total" },
      nb_commandes: { $sum: 1 }
  }},
  { $sort: { "_id": 1 } },
  { $project: {
      mois: "$_id", total_mois: 1, nb_commandes: 1, _id: 0
  }}
]).forEach(r => print("Mois", r.mois, ":", r.total_mois, "FCFA —", r.nb_commandes, "commandes"))

// ── 3. Top 5 produits par note moyenne (min 3 avis) 
print("\n=== Top 5 produits (note >= 3 avis) ===")
db.avis.aggregate([
  { $group: {
      _id: "$produit",
      note_moyenne: { $avg: "$note" },
      nombre_avis: { $sum: 1 },
      categorie: { $first: "$categorie" }
  }},
  { $match: { nombre_avis: { $gte: 3 } } },
  { $sort: { note_moyenne: -1 } },
  { $limit: 5 },
  { $project: {
      produit: "$_id",
      categorie: 1,
      note_moyenne: { $round: ["$note_moyenne", 2] },
      nombre_avis: 1,
      _id: 0
  }}
]).forEach(r => print(r.produit, "| Note:", r.note_moyenne, "/5 |", r.nombre_avis, "avis"))

// ── 4. Endpoint de recherche : filtres combinés ──────────────
print("\n=== Recherche : electronique 25k-400k FCFA disponible ===")
db.produits.find({
  categorie: "electronique",
  prix: { $gte: 25000, $lte: 400000 },
  disponible: true
},
{ nom: 1, prix: 1, "attributs.marque": 1, _id: 0 }
).sort({ prix: 1 })
.forEach(p => print(" →", p.nom, ":", p.prix, "FCFA"))

// ── 5. $match + $group + $sort + $lookup 
print("\n=== Ventes par ville de livraison ===")
db.commandes.aggregate([
  { $match: { statut: "livré" } },
  { $group: {
      _id: "$ville_livraison",
      total_ventes: { $sum: "$total" },
      nb_commandes: { $sum: 1 }
  }},
  { $sort: { total_ventes: -1 } }
]).forEach(r => print(r._id, ":", r.total_ventes, "FCFA —", r.nb_commandes, "commandes"))
