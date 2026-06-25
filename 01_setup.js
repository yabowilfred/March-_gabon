// ============================================================
// MARCHÉ EN LIGNE DU GABON — Setup & Données
// ============================================================

// ── 1. Sélectionner la base de données ──────────────────────
use marche_gabon

// ── 2. Supprimer les collections si elles existent déjà ─────
db.utilisateurs.drop()
db.produits.drop()
db.commandes.drop()
db.avis.drop()

print(" Base de données 'marche_gabon' prête.")
