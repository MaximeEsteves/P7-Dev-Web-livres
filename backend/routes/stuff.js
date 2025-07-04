const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');

// les route /:id a la fin pour éviter le non affichage des routes en amont
router.get('/', stuffCtrl.getAllBook); // renvoie tout les livres
router.post('/', auth, multer, stuffCtrl.createBook); // création et enregistrement dans la BD
router.get('/bestrating', stuffCtrl.getBestrating); // renvoie un tableau de 3 livres avec la meilleur moyenne
router.post('/:id/rating', auth, multer, stuffCtrl.rating); // Définit la note
router.get('/:id', stuffCtrl.getOneBook); //renvoie le livre avec l'_id fourni
router.put('/:id', auth, multer, stuffCtrl.modifyBook); // met à jour le livre
router.delete('/:id', auth, stuffCtrl.deleteBook); // supprime le livre

module.exports = router;
