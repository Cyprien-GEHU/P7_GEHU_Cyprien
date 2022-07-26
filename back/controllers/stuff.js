const Thing = require('../models/thing');
const fs = require('fs');
const jwt = require('jsonwebtoken');

//Création de Post
exports.createPost = (req, res, next) => {
  const timestamp = Date.now()
  const postObject = req.body;
  delete postObject._id;
  const newPost = new Thing({
    ...postObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes : 0,
    date : timestamp,
    });
    newPost.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

//List de Post 
exports.getPost = (req, res, next) => {
  Thing.find()
  .then(post => {res.status(200).json(post)})
  .catch(error => res.status(400).json({ error }));
  }

//Affichage d'un Post
exports.searchPost= (req, res, next) => {
  Thing.findOne({ _id: req.params.id})
    .then(post => {res.status(200).json(post)})
    .catch(error => res.status(404).json({ error }))
  }

//Modification du Post
exports.modifyPost = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  const thingObject = req.file ?
      {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
      if(userId == thingObject.userId  || req.body.role == 1){
        Thing.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
          .then(() => {res.status(200).json({ message: 'Objet modifié !'})})
          .catch(error => res.status(400).json({ error }));
        }
    else{
        alert("vous n'avez pas le droit de modifier le Post")
      }
    };

//Supression d'un post
exports.deletePost = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  Thing.findOne({ _id: req.params.id })
  .then(thing => {
      const filename = thing.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Thing.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
          })
  })
  .catch(error => res.status(500).json({ error }));
}

//Partie Like d'un post
exports.likePost = (req, res, next ) => {
  const like = req.body.like;
  const userID = req.body.userId;
  console.log(req.body)
    
  if(like == 1 ){
    Thing.findOne({ _id: req.params.id})
    .then(post => {
      const Tab = post.usersLiked
      post.likes = post.likes + 1;
      Tab.push(userID)
      post.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(404).json({ error }))
  }

if(like == 0){
  Thing.findOne({ _id: req.params.id})
    .then(post => {
      const Tab_l = post.usersLiked

      for(let i in Tab_l){
        if(Tab_l[i] == userID){
          post.likes = post.likes - 1;
          var myIndex = Tab_l.indexOf(userID);
          if (myIndex !== -1) {
            Tab_l.splice(myIndex, 1);
          }
        }
      }
      post.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
      })
    .catch(error => res.status(404).json({ error }))
    }
};