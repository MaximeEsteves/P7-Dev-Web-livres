# Mon Vieux Grimoire

Projet de gestion de livres en ligne, composé d’un backend Node.js/Express et d’un frontend React.

---

## Prérequis

- Node.js (version 19 recommandée)
- npm
- Accès à une base de données MongoDB Atlas

---

## Installation et Lancement

### Backend

1. Accédez au dossier backend :

   cd backend

1b. Crée un fichier `.env` dans le dossier `backend` en te basant sur le modèle suivant :

- PORT=4000
- MONGO_URI=VOTRE_CHAINE_DE_CONNEXION_MONGODB
- TOKEN_KEY=VOTRE_TOKEN
- TOKEN_TIME=VOTRE_TEMPS

2. Installez les dépendances :

   npm install

3. Démarrez le serveur :
   npm start : "node server.js"
   npm run dev : "nodemon server.js"

   Le backend sera accessible sur [http://localhost:4000](http://localhost:4000).

### Frontend

1. Accédez au dossier frontend :
   cd frontend

2. Installez les dépendances :
   npm install

3. Lancez le serveur de développement React :
   npm run start
   L’application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## Fonctionnalités

- Authentification des utilisateurs (inscription, connexion)
- Ajout, modification, suppression de livres
- Attribution et affichage de notes sur les livres
- Affichage des livres les mieux notés

---
## Principales routes API

### Authentification

- `POST /api/auth/signup` : Inscription d’un nouvel utilisateur
- `POST /api/auth/login` : Connexion d’un utilisateur

### Livres

- `GET /api/books` : Récupérer tous les livres
- `POST /api/books` : Ajouter un nouveau livre (authentifié)
- `GET /api/books/bestrating` : Récupérer les 3 livres les mieux notés
- `GET /api/books/:id` : Récupérer un livre par son ID
- `PUT /api/books/:id` : Modifier un livre (authentifié, propriétaire)
- `DELETE /api/books/:id` : Supprimer un livre (authentifié, propriétaire)
- `POST /api/books/:id/rating` : Noter un livre (authentifié)

## Auteur

Projet réalisé dans le cadre d’OpenClassrooms.
Maxime Esteves.