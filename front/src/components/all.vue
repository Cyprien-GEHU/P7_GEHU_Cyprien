<!--Partie HTML de la page-->
<template>
<!--Version PC du site-->
  <MqResponsive target="md+">
    <nav id="navigation">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo"/>
      <div id="nav">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
  <h1>Tous les Posts</h1>
  <main id="box">
    <div v-for="(info, key) in API" :key="key">
      <a class="color_black" @click="lien(info._id)">
        <div id="post">
          <div>
            <img v-bind:src ="info.imageUrl" alt="image du post selectionner"/>
          </div>
          <div id="Post_text">
            <h2>{{ info.name }}</h2>
          <p id="description"> {{info.description}}</p>
          </div> 
        </div>
      </a>
    </div>
  </main>
</MqResponsive>

<!--Version mobile du site-->
<MqResponsive target="xs" >
    <nav id="navigation_mobile">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile"/>
      <div id="nav_mobile">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien_mobile" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
  <h1>Tous les Posts</h1>
  <main id="box_mobile">
    <div v-for="(info, key) in API" :key="key">
      <a class="color_black_mobile" @click="lien(info._id)">
        <div id="post_mobile">
          <div>
            <img v-bind:src ="info.imageUrl" alt="image du post selectionner" id="photo_mobile"/>
          </div>
          <div id="Post_text_mobile">
            <h2>{{ info.name }}</h2>
          <p id="description_mobile"> {{info.description}}</p>
          </div> 
        </div>
      </a>
    </div>
  </main>
</MqResponsive>

<!--Version tablette du site-->
<MqResponsive target="sm" >
    <nav id="navigation_mobile">
      <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile"/>
      <div id="nav_mobile">
        <router-link to="/New" class="router">Créer un post</router-link> 
        <router-link to="/allpost" class="router">Voir les posts</router-link>
        <a id="lien_mobile" @click="deconnexion()" class="router"> Deconnexion</a>
      </div>
    </nav>
  <h1>Tous les Posts</h1>
  <main id="box_mobile">
    <div v-for="(info, key) in API" :key="key">
      <a class="color_black_mobile" @click="lien(info._id)">
        <div id="post_mobile">
          <div>
            <img v-bind:src ="info.imageUrl" alt="image du post selectionner" id="photo_mobile"/>
          </div>
          <div id="Post_text_mobile">
            <h2>{{ info.name }}</h2>
          <p id="description_mobile"> {{info.description}}</p>
          </div> 
        </div>
      </a>
    </div>
  </main>
</MqResponsive>
</template>

<!--Partie javascript de la page-->
<script>
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
        API: {},
        date:'',
    }
  },
  mounted() { 
    axios
    .get('http://localhost:3000/api/groupomania/',{ headers:{
      'Authorization': 'Bearer ' + token,
    }})
    .then(reponse => {
          this.API = reponse.data;
          })
    }, 
    methods: { 
      deconnexion : function() {
        sessionStorage.clear();
        document.location.href="http://localhost:8080/"
      },
      lien : function(info){
        document.location.href="http://localhost:8080/"+info
        }

    },
}
</script>

<!--Partie CSS de la page-->
<style scoped>
/*Partie PC du site*/

/*Partie navigation du site*/ 
nav{
  font-size: 20px;
  background-color: #4E5166;
  padding: 20px 0;
  margin-bottom: 20px;  
}
 
a, #lien{
color: white;
}

#lien:hover{
  text-decoration: underline;
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
  margin-left: 4%;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

/*Partie block du site */
#box{
  display: flex;
  flex-direction: column-reverse;
}

#post{
  border: solid #FD2D01 3px;
  background-color: #FFD7D7;
  border-radius: 25px;
  width: 75%;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
}

img{
  border-radius: 20px 0 0 20px;
  object-fit: cover;
  width: 85%;
  display: flex;
  height: 250px;
}

#Post_text {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 75%;
}

.color_black{
  color: black;
  display: flex;
  justify-content: center;
}

.color_black:hover{
  color :#FD2D01
}

p{
  font-size: 18px;
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


/*Partie block du site */
#box_mobile{
  display: flex;
  flex-direction: column-reverse
}

#post_mobile{
  border: solid #FD2D01 3px;
    background-color: #FFD7D7;
    border-radius: 25px;
    width: 95%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
}

#photo_mobile{
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    display: flex;
    width: 100%;
    max-width: 100%;
}
#Post_text_mobile {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}

.color_black_mobile{
  color: black;
  display: flex;
  justify-content: center;
}

.color_black_mobile:hover{
  color :#FD2D01
}

</style>
