const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

  //Crée une POST
  router.post('/New',auth,multer,stuffCtrl.createPost);
  
  //récuperer tous les POSTS
  router.get('/',auth,stuffCtrl.getPost);
  
  //récuperer une POST
  router.get('/:id',auth, stuffCtrl.searchPost );
  
  //permet de modifier une POST
  router.put('/:id',auth, multer,stuffCtrl.modifyPost );
  
  //permet de suprimmer une POST
  router.delete('/:id', auth, stuffCtrl.deletePost);
 
  //mettre un like ou dislike sur une POST
  router.post('/:id/like', stuffCtrl.likePost);
  module.exports = router;
  