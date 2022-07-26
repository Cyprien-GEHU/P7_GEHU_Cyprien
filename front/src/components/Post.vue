<!--Partie HTML de la page-->
<template>
<!--Version PC du site-->
<MqResponsive target="md+" >
  <main>
    <nav id="navigation">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo"/>
      <div id="nav">
        <router-link to="/New" class="router">Créer un posts</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
    <h1>Detail du Post</h1>
    <div id="contenu">
      <div id="contenu_image">
        <img v-bind:src ="image" alt="image du post selectionner" id="photo"/>
      </div>
      <div id="contenu_text">
        <h2> Nom du Post:</h2>
        <p>{{name}}</p>
        <h2> Description du Post: </h2>
        <p>{{description}}</p>
        <h2>Créer le :</h2>
        <p>{{date}}</p>
        <p id ="like" @click="like(actual_userId, info._id,usersLiked,already_like)">{{numberLikes}} <i class="fa fa-thumbs-up" id="icon_like"></i> </p>
      </div>
    </div>
  <ul>
    <div id="list_button">
      <li v-if="post_userId == actual_userId || role == 1">
        <button @click="modify(info._id)">Modifier</button>
      </li>
      <li v-if="post_userId == actual_userId || role == 1">
        <button @click="supprimer(info._id)">Supprimer</button>
      </li>
      <li>
        <button @click="retour()" >Retour</button>
      </li>
    </div>
  </ul>
</main>
</MqResponsive>

<!--Version mobile du site-->
<MqResponsive target="xs" >
  <main>
    <nav id="navigation_mobile">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile"/>
      <div id="nav_mobile">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien_mobile" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
    <h1>Detail du Post</h1>
    <div id="contenu_mobile">
      <div id="contenu_image_mobile">
        <img v-bind:src ="image" alt="image du post selectionner" id="photo_mobile"/>
      </div>
      <div id="contenu_text_mobile">
        <h2> Nom du Post:</h2>
        <p class = "text">{{name}}</p>
        <h2> Description du Post: </h2>
        <p class = "text">{{description}}</p>
        <h2>Créer le :</h2>
        <p class = "text">{{date}}</p>
        <p id ="like" @click="like(actual_userId, info._id,usersLiked, already_like)"> {{numberLikes}} <i class="fas fa-thumbs-up" id="icon_like"></i> </p>
      </div>
    </div>
  <ul>
    <div id="list_button_mobile">
      <li v-if="post_userId == actual_userId || role == 1">
        <button @click="modify(info._id)">Modifier</button>
      </li>
      <li v-if="post_userId == actual_userId || role == 1">
        <button @click="supprimer(info._id)">Supprimer</button>
      </li>
      <li>
        <button @click="retour()" >Retour</button>
      </li>
    </div>
  </ul>
</main>
</MqResponsive>

<!--Version tablette du site-->
<MqResponsive target="sm" >
  <main>
    <nav id="navigation_mobile">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile"/>
      <div id="nav_mobile">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien_mobile" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
    <h1>Detail du Post</h1>
    <div id="contenu_mobile">
      <div id="contenu_image_mobile">
        <img v-bind:src ="image" alt="image du post selectionner" id="photo_mobile"/>
      </div>
      <div id="contenu_text_mobile">
        <h2> Nom du Post:</h2>
        <p class = "text">{{name}}</p>
        <h2> Description du Post: </h2>
        <p class = "text">{{description}}</p>
        <h2>Créer le :</h2>
        <p class = "text">{{date}}</p>
        <p id ="like" @click="like(actual_userId, info._id, usersLiked, already_like)"> {{numberLikes}} <i class="fas fa-thumbs-up" id="icon_like"></i> </p>
      </div>
    </div>
  <ul>
    <div id="list_button_mobile">
      <li v-if="post_userId == actual_userId || role == 1">
        <button @click="modify(info._id)">Modifier</button>
      </li>
      <li v-if="post_userId == actual_userId || role == 1">
        <button @click="suprimer(info._id)">Supprimer</button>
      </li>
      <li>
        <button @click="retour()" >Retour</button>
      </li>
    </div>
  </ul>
</main>
</MqResponsive>
</template>

<!--Partie javascript de la page-->
<script>
const userActualID = JSON.parse(sessionStorage.getItem("userId"));
const role = JSON.parse(sessionStorage.getItem("rôle"));
const token = JSON.parse(sessionStorage.getItem("token"));

import axios from "axios"
import { MqResponsive } from "vue3-mq";
export default {
  name: 'en-tete',
  components:{
    MqResponsive
  },
  data: function(){
    return{
        info :'',
        name : '',
        description:'',
        image:'',
        id : this.$route.params.id,
        post_userId:'',
        actual_userId : userActualID,
        role : role,
        numberLikes : '',
        date : '',
        usersLiked:'',
        already_like:'',
    }
  },
  // recuperation des information du Post
  mounted() {
    axios
    .get('http://localhost:3000/api/groupomania/'+ this.id,{ headers:{
      'Authorization': 'Bearer ' + token,
    }})
    .then(reponse => {
          this.info = reponse.data
          this.name = reponse.data.name
          this.description = reponse.data.description
          this.image = reponse.data.imageUrl
          this.post_userId = reponse.data.userId
          this.numberLikes = reponse.data.likes
          this.usersLiked = reponse.data.usersLiked
          var date = new Date(reponse.data.date)
          date = date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
          this.date = date
          const userl = reponse.data.usersLiked
          for(let l in userl){
           if(userl[l] == userActualID ){
            this.already_like = 1
           }
           else{
            this.already_like = 0
           }
          
          }
          })
    },methods:{
      //deconnexion du compte
      deconnexion : function() {
        sessionStorage.clear();
        document.location.href="http://localhost:8080/"
      },
      //redirection a une page pour modifier le Post
      modify : function(route) {
        document.location.href="http://localhost:8080/modify/"+ route
      },
      //fonction suprimer le post
      supprimer : function(id){
        axios
        .delete('http://localhost:3000/api/groupomania/'+ id,{ headers:{
      'Authorization': 'Bearer ' + token,
    }})
      .then(()=>{document.location.href="http://localhost:8080/allpost"})
      },
      //fonction retour sur la page de tous les posts
      retour : function() {
        document.location.href="http://localhost:8080/allpost"
      },
      //fonction like des posts
      like : function(actual_userId, id, usersLiked, already_like){
        if(usersLiked !=0){
          for(let i in usersLiked){
            console.log(usersLiked)
           if(already_like == 0){
            const like = {
              userId : actual_userId,
              like : 1}
            axios
            .post('http://localhost:3000/api/groupomania/'+ id +"/like", like, { headers:{
              'Authorization': 'Bearer ' + token,
              }})
            .then(() => {
              this.numberLikes = this.numberLikes + 1
              axios
              .get('http://localhost:3000/api/groupomania/'+ this.id,{ headers:{
                'Authorization': 'Bearer ' + token,
                  }})
              .then(reponse =>{
                this.usersLiked = reponse.data.usersLiked
                this.already_like = 1
              })
            })
           }
           if(usersLiked[i] == actual_userId ){
              const like = {
              userId : actual_userId,
              like : 0}
              console.log("ici")
              axios
              .post('http://localhost:3000/api/groupomania/'+ id +"/like", like,{ headers:{
                'Authorization': 'Bearer ' + token,
                }})
                .then(() => {
                this.numberLikes = this.numberLikes - 1
                axios
                  .get('http://localhost:3000/api/groupomania/'+ this.id,{ headers:{
                      'Authorization': 'Bearer ' + token,
                      }})
                  .then(reponse =>{
                    this.usersLiked = reponse.data.usersLiked
                    this.already_like = 0
                  })
                })
              }
            }

          }
      else{
        const like = {
        userId : actual_userId,
        like : 1}
        axios
        .post('http://localhost:3000/api/groupomania/'+ id +"/like", like, { headers:{
                  'Authorization': 'Bearer ' + token,
              }})
        .then(() => {
          this.numberLikes = this.numberLikes + 1
          axios
            .get('http://localhost:3000/api/groupomania/'+ this.id,{ headers:{
              'Authorization': 'Bearer ' + token,
                }})
            .then(reponse =>{
              this.usersLiked = reponse.data.usersLiked
              this.already_like = 1
            })
        })
      }
      }
    }
}
</script>

<!--Partie CSS de la page-->
<style scoped>
/*Partie navigation du site*/ 
nav{
  font-size: 20px;
  background-color: #4E5166;
  padding: 20px 0;
  margin-bottom: 20px; 
}
 
a,#lien{
color: white;
}

#lien{
  font-size: 18px;
}

p{
  color: black;
  font-size : 22px;
  text-align: left;
}

#logo{
  width: 25%;
  height: 100px;
  object-fit: cover;
}

#navigation{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#nav{
  width: 70%;
  display: flex;
  justify-content: flex-end;
}
.router{
  margin-left: 5%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0px 5%;
}

/*Partie contenu du post */
#contenu{
  display: flex;
  align-items: center;
  margin: 3% 0;
}

#contenu_image{
  width: 60%;
}

#photo{
  object-fit: cover;
  width: 95%;
  height: 350px;
}

#contenu_text{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
}
h2{
  margin: 0;
}

#like{
  display: flex;
  align-items: center;
  font-size: 28px;
}

#icon_like{
  width:28px;
  margin-left: 8%
}

#icon_like:hover{
  background: green;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 1;
    }

/*Partie butons site*/
#list_button{
  margin-bottom: 30px;
}

button{
  padding: 4% 6%;
  border-radius: 15px;
  border-color: #FFD7D7;
  font-size: 20px;
  background-color: #FFD7D7;
  box-shadow: #4e5167 0px 0px 9px;
}

button:hover{
  background-color: #FD2D01;
  box-shadow: #4e5167 0px 0px 15px;
  border-color: #FD2D01; 
}

/*Partie mobile du site*/

/*Partie navigation du site*/ 

#logo_mobile{
  width: 80%;
  height: 100px;
  margin-left: 10%;
  object-fit: cover;
}

#navigation_mobile{
  display: flex;
  flex-direction: column;
}

#listrouter{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

/*Partie contenu du post */
#contenu_mobile{
  display: flex;
  align-items: flex-start;
  margin: 3% 0;
  flex-direction: column;
}

#contenu_image_mobile{
  width: 100%;
  margin-bottom: 1%;
}

#photo_mobile{
  object-fit: cover;
  width: 95%;
  height: 250px;
  border-radius: 20px;
}

#contenu_text_mobile{
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 15px;
  align-items: flex-start;
}

.text{
  font-size: 18px;
}

/*Partie bouton du site */
#list_button_mobile{
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
}

</style>
