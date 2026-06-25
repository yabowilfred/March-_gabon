// ============================================================
// COLLECTION : utilisateurs (35 documents)
// ============================================================
use marche_gabon

db.utilisateurs.insertMany([
  // ── Vendeurs
  {
    nom: "Ondo Mba", prenom: "Patrick", email: "patrick.ondo@gmail.com",
    telephone: "+24174123456", ville: "Libreville", quartier: "Akanda",
    role: "vendeur", boutique: "Tech Shop Gabon", note_vendeur: 4.7,
    date_inscription: new Date("2023-01-10"), actif: true
  },
  {
    nom: "Nguema Obame", prenom: "Sylvie", email: "sylvie.nguema@yahoo.fr",
    telephone: "+24177234567", ville: "Port-Gentil", quartier: "Cite Sogacel",
    role: "vendeur", boutique: "Mode Gabonaise", note_vendeur: 4.5,
    date_inscription: new Date("2023-02-15"), actif: true
  },
  {
    nom: "Mba Ndong", prenom: "Arsène", email: "arsene.mba@gmail.com",
    telephone: "+24166345678", ville: "Libreville", quartier: "Nzeng-Ayong",
    role: "vendeur", boutique: "Alimentation du Peuple", note_vendeur: 4.8,
    date_inscription: new Date("2023-03-05"), actif: true
  },
  {
    nom: "Obiang Essono", prenom: "Carole", email: "carole.obiang@gmail.com",
    telephone: "+24165456789", ville: "Franceville", quartier: "Centre-ville",
    role: "vendeur", boutique: "Elec Plus Gabon", note_vendeur: 4.3,
    date_inscription: new Date("2023-04-20"), actif: true
  },
  {
    nom: "Ella Mintsa", prenom: "Rodrigue", email: "rodrigue.ella@gmail.com",
    telephone: "+24162567890", ville: "Owendo", quartier: "Zone Industrielle",
    role: "vendeur", boutique: "MultiShop Owendo", note_vendeur: 4.6,
    date_inscription: new Date("2023-05-12"), actif: true
  },
  // ── Acheteurs 
  {
    nom: "Nzamba Koumba", prenom: "Fabiola", email: "fabiola.nzamba@gmail.com",
    telephone: "+24174678901", ville: "Libreville", quartier: "Louis",
    role: "acheteur", date_inscription: new Date("2023-06-01"), actif: true
  },
  {
    nom: "Moussavou", prenom: "Cédric", email: "cedric.moussavou@gmail.com",
    telephone: "+24177789012", ville: "Port-Gentil", quartier: "Oprag",
    role: "acheteur", date_inscription: new Date("2023-06-15"), actif: true
  },
  {
    nom: "Bourobou", prenom: "Marielle", email: "marielle.bourobou@yahoo.fr",
    telephone: "+24166890123", ville: "Libreville", quartier: "Batterie IV",
    role: "acheteur", date_inscription: new Date("2023-07-03"), actif: true
  },
  {
    nom: "Assembe", prenom: "Jaurès", email: "jaures.assembe@gmail.com",
    telephone: "+24165901234", ville: "Franceville", quartier: "Mvengue",
    role: "acheteur", date_inscription: new Date("2023-07-20"), actif: true
  },
  {
    nom: "Mintsa Mi Nze", prenom: "Audrey", email: "audrey.mintsa@gmail.com",
    telephone: "+24162012345", ville: "Owendo", quartier: "Derrière la Prison",
    role: "acheteur", date_inscription: new Date("2023-08-10"), actif: true
  },
  {
    nom: "Kombila", prenom: "Franck", email: "franck.kombila@gmail.com",
    telephone: "+24174123890", ville: "Libreville", quartier: "PK8",
    role: "acheteur", date_inscription: new Date("2023-08-25"), actif: true
  },
  {
    nom: "Bekale", prenom: "Nadège", email: "nadege.bekale@gmail.com",
    telephone: "+24177234901", ville: "Port-Gentil", quartier: "Grand Village",
    role: "acheteur", date_inscription: new Date("2023-09-05"), actif: true
  },
  {
    nom: "Ntoutoume", prenom: "Hervé", email: "herve.ntoutoume@gmail.com",
    telephone: "+24166345012", ville: "Libreville", quartier: "Lalala",
    role: "acheteur", date_inscription: new Date("2023-09-18"), actif: true
  },
  {
    nom: "Mengue Mvé", prenom: "Sandrine", email: "sandrine.mengue@yahoo.fr",
    telephone: "+24165456123", ville: "Libreville", quartier: "Angondje",
    role: "acheteur", date_inscription: new Date("2023-10-01"), actif: true
  },
  {
    nom: "Iyébi Mandjemba", prenom: "Joël", email: "joel.iyebi@gmail.com",
    telephone: "+24162567234", ville: "Owendo", quartier: "Doumé",
    role: "acheteur", date_inscription: new Date("2023-10-20"), actif: true
  }
])

print(" " + db.utilisateurs.countDocuments() + " utilisateurs insérés.")
