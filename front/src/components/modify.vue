<!--Partie HTML de la page-->
<template>
<!--Partie PC du site-->
<MqResponsive target="md+">
  <main>
    <nav id="navigation">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo" />
      <div id="nav">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <p id="lien" @click="deconnexion()" class="router"> Deconnexion</p>
      </div>
    </nav>
    <ul id="formulaire">
      <div id="formualaire_crea"> 
        <div class="text">
          <li><label for="name" class="size">Nom</label></li>
          <li><input type="text" v-model="name" class="formulaire_text" required></li>
        </div>

        <div class="text">
          <li><label for="image" class="size" >Photo ou image</label></li>
          <li><input type="file" @change="photo" required></li>
          <div v-if="time_image"><img :src ="time_image" alt="nouvelle image selectionner" class="photo"/></div>
          <div v-else><img :src ="image" alt="image du post selectionner" class="photo"/></div>
          
      </div>

      <div id="text2">
          <li><label for="description" class="size">Description du post</label></li>
          <li><textarea type="text" v-model="description" class="formulaire_text" id="formulaire_text_description" required></textarea></li>
        </div>
      </div> 
    </ul>
  <button @click="modify()">Modifier</button>
  </main>
</MqResponsive>

<!--Partie mobile du site-->
<MqResponsive target="xs">
  <main>
    <nav id="navigation_mobile">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile"/>
      <div id="nav_mobile">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien_mobile" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
    <ul id="formulaire_mobile">
      <div id="formualaire_crea"> 

        <div class="text">
          <li><label for="name" class="size">Nom</label></li>
          <li><input type="text" v-model="name" class="formulaire_text_mobile" required></li>
        </div>

        <div class="text">
          <li><label for="image" class="size" >Photo ou image</label></li>
          <li><input type="file" @change="photo" id="file" required></li>
          <div v-if="time_image"><img :src ="time_image" alt="nouvelle image selectionner" class="photo_mobile"/></div>
          <div v-else><img :src ="image" alt="image du post selectionner" class="photo_mobile"/></div> 
      </div>

      <div class="text">
        <li><label for="description" class="size">Description du post</label></li>
        <li><textarea type="text" v-model="description" class="formulaire_text_mobile" id="formulaire_text_description_mobile" required></textarea></li>
      </div>
    </div> 
    </ul>
    <button @click="modify()">Modifier</button>
  </main>
</MqResponsive>

<!--Partie tablette du site-->
<MqResponsive target="sm">
  <main>
    <nav id="navigation_mobile">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile"/>
      <div id="nav_mobile">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien_mobile" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
    <ul id="formulaire_mobile">
      <div id="formualaire_crea"> 

        <div class="text">
          <li><label for="name" class="size">Nom</label></li>
          <li><input type="text" v-model="name" class="formulaire_text_mobile" required></li>
        </div>

        <div class="text">
          <li><label for="image" class="size" >Photo ou image</label></li>
          <li><input type="file" @change="photo" id="file" required></li>
          <div v-if="time_image"><img :src ="time_image" alt="nouvelle image selectionner" class="photo_tablette"/></div>
          <div v-else><img :src ="image" alt="image du post selectionner" class="photo_tablette"/></div> 
      </div>

      <div class="text">
        <li><label for="description" class="size">Description du post</label></li>
        <li><textarea type="text" v-model="description" class="formulaire_text_mobile" id="formulaire_text_description_mobile" required></textarea></li>
      </div>
    </div> 
    </ul>
    <button @click="modify()">Modifier</button>
  </main>
</MqResponsive>
</template>

<!--Partie javascript de la page-->
<script>
const userId = JSON.parse(sessionStorage.getItem("userId"));
const token = JSON.parse(sessionStorage.getItem("token"));
const role = JSON.parse(sessionStorage.getItem("rôle"));

import axios from "axios"
import { MqResponsive } from "vue3-mq";
export default {
  name: 'en-tete',
  components:{
    MqResponsive
  },
  data: function(){
    return{
        name : '',
        image : '',
        new_image:'',
        time_image: '',
        description : '',
        userId : '',
        info : null,
        id : this.$route.params.id
    }
  },
  mounted() {
    axios
    .get('http://localhost:3000/api/groupomania/'+ this.id,{ headers:{
      'Authorization': 'Bearer ' + token,
    }})
    .then(reponse => {
          this.info = reponse.data,
          this.name = reponse.data.name
          this.image = reponse.data.imageUrl
          this.description = reponse.data.description
          })
    },methods:{
      deconnexion : function() {
        sessionStorage.clear();
        document.location.href="http://localhost:8080/"
      },
      modify : function() {
        const modifyPost = {
        name : this.name,
        image : this.new_image,
        userId : userId,
        description : this.description,
        role : role}
        axios
        .put('http://localhost:3000/api/groupomania/'+ this.id, modifyPost,{ headers:{
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + token,
    }})
      .then(()=>{document.location.href="http://localhost:8080/allpost"})
      },
      photo(event){
        const image = event.target.files[0]
        this.time_image = URL.createObjectURL(image)
        this.new_image = image}
    }
}
</script>

<!--Partie CSS de la page-->
<style scoped>
/*Partie PC du site */

/*Partie navigation du site*/ 
nav{
  font-size: 18px;
  background-color: #4E5166;
  padding: 20px 0;
  margin-bottom: 20px;  
}
 
a,#lien{
color: white;
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

/*Partie formulaire du site*/
#formulaire{
  margin-bottom: 3%;
}

#formualaire_crea{
  display: flex;
  flex-direction: column;
}

.size{
  font-size: 20px;
}
.formulaire_text{
  height: 30px;
  font-size: 18px;
  padding: 3px;
  width: 90%;
}

.photo{
  width: 50%;
  margin-top: 2%;
  height: 300px;
  object-fit: cover;
  display: flex;
}

#formulaire_text_description{
  height: 250px;
  text-overflow: ellipsis;
}

.text{
  margin-bottom: 10px;
}

ul{
   list-style-type: none;

}
li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/*Partie buton site*/

button{
  padding: 1% 2%;
  border-radius: 15px;
  border-color: #FFD7D7;
  font-size: 20px;
  background-color: #FFD7D7;
  box-shadow: #4e5167 0px 0px 9px;
  margin: 3%;
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

/*Partie formulaire du site*/
#formulaire_mobile{
  padding: 0;
  margin-left: 10px;
}

.formulaire_text_mobile{
  width: 92%;
}

#file{
  font-size: 15px;
}

.photo_mobile{
  width: 90%;
  margin-top: 3%;
  height: 200px;
  object-fit: cover;
  display: flex;
}

#formulaire_text_description_mobile{
  height: 150px;
  text-overflow: ellipsis
}

/*Partie tablette du site */
.photo_tablette{
  width: 90%;
  margin-top: 3%;
  height: 300px;
  object-fit: cover;
  display: flex;
}
</style>