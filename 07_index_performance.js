// ============================================================
// INDEX ET PERFORMANCE
// ============================================================
use marche_gabon

// ── Créer les index ──────────────────────────────────────────
print("=== Création des index ===")

// Index 1 — Recherche par catégorie + prix (composé)
db.produits.createIndex({ categorie: 1, prix: 1 }, { name: "idx_categorie_prix" })
print("✅ Index 1 : categorie + prix")

// Index 2 — Disponibilité
db.produits.createIndex({ disponible: 1 }, { name: "idx_disponible" })
print("✅ Index 2 : disponible")

// Index 3 — Produit dans les avis
db.avis.createIndex({ produit: 1, note: -1 }, { name: "idx_avis_produit_note" })
print("✅ Index 3 : avis produit + note")

// Index 4 — Ville vendeur
db.produits.createIndex({ ville_vendeur: 1 }, { name: "idx_ville_vendeur" })
print("✅ Index 4 : ville_vendeur")

// Index 5 — Date commande
db.commandes.createIndex({ date_commande: -1 }, { name: "idx_date_commande" })
print("✅ Index 5 : date_commande")

// ── Vérifier COLLSCAN → IXSCAN ──────────────────────────────
print("\n=== explain() — IXSCAN confirmé ===")
var plan = db.produits.find(
  { categorie: "electronique", prix: { $lte: 400000 } }
).explain("executionStats")
print("Stage utilisé :", plan.queryPlanner.winningPlan.inputStage.stage)
print("Documents examinés :", plan.executionStats.totalDocsExamined)
print("Documents retournés :", plan.executionStats.nReturned)

// ── Lister tous les index ────────────────────────────────────
print("\n=== Index existants sur 'produits' ===")
db.produits.getIndexes().forEach(i => print(" →", i.name, ":", JSON.stringify(i.key)))
