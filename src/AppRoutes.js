import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import Accueil from './components/Accueil'
import Liste from './components/Liste'
import Contact from './components/Contact.vue'
import API from './components/API.vue'
import DicoLink from './components/DicoLink.vue'
import Formulaire from './components/Formulaire.vue'
import User from './components/User.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Accueil,
            name: 'Accueil'
        },
        {
            path: '/liste',
            component: Liste,
            name: 'Liste'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'contact'
        },
        {
            path: '/api',
            component: API,
            name: 'api'
        },
        {
            path: '/dicolink',
            component: DicoLink,
            name: 'dicolink'
        },
        {
            path: '/formulaire',
            component: Formulaire,
            name: 'formulaire'
        },
        {
            path: '/user/:id',
            component: User,
            name: 'user'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router