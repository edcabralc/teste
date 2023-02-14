import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView";
import AboutView from "@/views/About/AboutView";
import RoomsView from "@/views/Rooms/RoomsView";
import BookView from "@/views/Book/BookView";
import ContactView from "@/views/Contact/ContactView";
import SignView from "@/views/Sign/SignView";
import RegisterView from "@/views/Register/RegisterView";

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
