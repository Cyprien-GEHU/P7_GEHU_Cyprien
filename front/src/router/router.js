import {createRouter, createWebHistory } from "vue-router"
import connexion from "../components/co.vue"
import inscription from "../components/inscription.vue"
import cree from "../components/cree"
import all from "../components/all"
import Post from "../components/Post"
import modifyPost from "../components/modify"

/*Preparation des routes */
const routes = [
    {
        name : connexion,
        path : "/login",
        component : connexion 
    },
    {
        name : inscription,
        path : "/",
        component : inscription
    },
    {
        name : cree,
        path : "/New",
        component : cree
    },
    {
        name : all,
        path : "/allpost",
        component : all
    },
    {
        name : Post,
        path : "/:id",
        component : Post
    },
    {
        name : modifyPost,
        path : "/modify/:id",
        component : modifyPost
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;