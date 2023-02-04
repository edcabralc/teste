<<<<<<< HEAD
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
=======
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/About/AboutView.vue";
import RoomsView from "../views/Rooms/RoomsView.vue";
import BookView from "../views/Book/BookView.vue";
import ContactView from "../views/Contact/ContactView.vue";
import SignView from "../views/Sign/SignView.vue";
import RegisterView from "../views/Register/RegisterView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/sobre",
        name: "sobre",
        component: AboutView,
    },
    {
        path: "/acomodacoes",
        name: "acomodacoes",
        component: RoomsView,
    },
    {
        path: "/reservar",
        name: "reservar",
        component: BookView,
    },
    {
        path: "/contato",
        name: "contato",
        component: ContactView,
    },
    {
        path: "/acessar",
        name: "acessar",
        component: SignView,
    },
    {
        path: "/cadastrar",
        name: "cadastro",
        component: RegisterView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
>>>>>>> da88480a3d17c4234cb0c976fc92c5affabd795e
