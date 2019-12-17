yarn add vue-router
yarn add axios

yarn serve

ajouter bootstrap :
    - yarn add bootstrap jquery popper.js --save
    - dans le fichier 'AppRoutes.js', ajouter :
        import 'bootstrap'
        import 'jquery'
        import 'popper.js'
        import 'bootstrap/dist/css/bootstrap.css'

Page transitions :
    - yarn add vue-page-transition
    - dans le fichier AppRoutes.js :
        import VuePageTransition from 'vue-page-transition'
        Vue.use(VuePageTransition)
    - dans le fichier App.vue :
        <vue-page-transition name="fade-in-right">
            <router-view></router-view>
        </vue-page-transition>
    - pour faire une transition "locale", dans le fichier AppRoutes.js :
        path: '/contact',
        component: Contact,
        name: 'contact',
        // overwrite default transition
        meta: { transition: 'zoom' }

yarn build