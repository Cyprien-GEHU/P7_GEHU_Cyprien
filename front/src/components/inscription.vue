<!--Partie HTML de la page-->
<template>
<!--Version PC du site-->
  <MqResponsive target="md+" >
  <nav id="navigation">
    <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo" />
    <div>
      <router-link to="/login" class="router">Connexion</router-link> 
      <router-link to="/" class="router" id="ici">Inscription</router-link>
    </div>
  </nav>
  <main>
    <div id="formulaire">
      <ul id="ins">
        <li><label for="email" class="titre_formulaire">Email</label></li>
        <li><input type="text" v-model="email" class="formulaire_text"></li>

        <li><label for="password" class="titre_formulaire">Password</label></li>
        <li><input type="password" v-model="password" class="formulaire_text"></li>
      </ul>
    </div>
        <button @click="envoie()">Inscription</button>
  </main>
  </MqResponsive>

<!--Version Mobile du site-->
  <MqResponsive target="xs">
    <nav id="navigation_mobile">
    <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile" />
    <div id="listrouter">
      <router-link to="/login">Connexion</router-link> 
      <router-link to="/" id="ici_mobile">Inscription</router-link>
    </div>
  </nav>
  <main>
    <div id="formulaire_mobile">
      <ul id="ins_mobile">
        <li><label for="email" class="titre_formulaire_mobile">Email</label></li>
        <li><input type="text" v-model="email" class="formulaire_text_mobile"></li>

        <li><label for="password" class="titre_formulaire_mobile">Password</label></li>
        <li><input type="password" v-model="password" class="formulaire_text_mobile"></li>
      </ul>
    </div>
        <button @click="envoie()" id="bouton_mobile">Inscription</button>
  </main>
  </MqResponsive>

  <!--Version tablette du site-->
  <MqResponsive target="sm">
    <nav id="navigation_mobile">
    <img src="../assets/icon-left-font-monochrome-white.png" alt ="logo du groupe" id="logo_mobile" />
    <div id="listrouter">
      <router-link to="/login">Connexion</router-link> 
      <router-link to="/" id="ici_mobile">Inscription</router-link>
    </div>
  </nav>
  <main>
    <div id="formulaire_mobile">
      <ul id="ins_mobile">
        <li><label for="email" class="titre_formulaire_mobile">Email</label></li>
        <li><input type="text" v-model="email" class="formulaire_text_mobile"></li>

        <li><label for="password" class="titre_formulaire_mobile">Password</label></li>
        <li><input type="password" v-model="password" class="formulaire_text_mobile"></li>
      </ul>
    </div>
        <button @click="envoie()" id="bouton_mobile">Inscription</button>
  </main>
  </MqResponsive>

</template>

<!--Partie javascript de la page-->
<script>
import axios from "axios"
import { MqResponsive } from "vue3-mq";
export default {
  name: 'en-tete',
  components:{
    MqResponsive
  },
  data: function(){
    return{
      email : '',
      password : ''
    }
  },
  methods: { envoie : function(){
     if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      const user = {
      email : this.email,
      password : this.password
    }
    axios
      .post('http://localhost:3000/api/auth/signup', user)
      .then(()=>{
        axios
        .post('http://localhost:3000/api/auth/login', user)
        .then(reponse => {
          const userId = reponse.data.userId
        const token = reponse.data.token
        const role = reponse.data.rôle
        sessionStorage.setItem("userId", JSON.stringify(userId))
        sessionStorage.setItem("token", JSON.stringify(token))
        sessionStorage.setItem("rôle", JSON.stringify(role))
          })
        .then(()=>{document.location.href="http://localhost:8080/allpost"})
      })
   }
   else{
    alert("l'email est pas bon")
   } 
  }
}
}

</script>


<!--Partie CSS de la page-->
<style scoped>

/*Partie PC du site */

/*Partie navigation du site*/ 
nav{
  font-size: 20px;
  background-color: #4E5166;
  padding: 20px 0;
  margin-bottom: 20px;  
}
 
a{
color: white;
}

#logo{
  width: 20%;
  height: 100px;
  object-fit: cover;
}

#navigation{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.router{
  margin-left: 15%;
}
#ici{
  text-decoration: underline;
  font-size: 24px;
}

/*Partie formulaire du site  */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  display: flex;
}

#ins {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-left: 7%;
}

.titre_formulaire{
  font-size: 24px;
}

.formulaire_text{
    height: 35px;
    font-size: 18px;
    padding: 3px;
    width: 90%;
}

/*Partie buton du site*/
button{
  padding: 1% 2%;
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


/*Partie mobile du site */

/*Partie navigation du site*/ 
nav{
  font-size: 20px;
  background-color: #4E5166;
  padding: 20px 0;
  margin-bottom: 20px;  
}
 
a{
color: white;
}

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

#ici_mobile{
  text-decoration: underline;
  font-size: 24px;
}

/*Partie formulaire du site  */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}

#ins_mobile {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-left: 5%;
  
}

.titre_formulaire_mobile{
  font-size: 20px;
  display: flex;
  justify-content: center;
}
.formulaire_text_mobile{
    height: 30px;
    font-size: 18px;
    padding: 3px;
    width: 90%;
}

label{
  margin: 0;
}

/*Partie buton du site*/
#bouton_mobile{
  width: 40%;
  height: 50px;
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

</style>
