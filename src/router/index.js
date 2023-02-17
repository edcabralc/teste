import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView";
import AboutView from "@/views/About/AboutView";
import RoomsView from "@/views/Rooms/RoomsView";
import BookView from "@/views/Book/BookView";
import ContactView from "@/views/Contact/ContactView";
import SignView from "@/views/Sign/SignView";
import RegisterView from "@/views/Register/RegisterView";
import MainHeader from "@/components/commons/MainHeader";
import MainFooter from "@/components/commons/MainFooter";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      header: MainHeader,
      mainpage: HomeView,
      footer: MainFooter,
    },
  },
  {
    path: "/sobre",
    name: "sobre",
    components: {
      header: MainHeader,
      mainpage: AboutView,
      footer: MainFooter,
    },
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    components: {
      header: MainHeader,
      mainpage: RoomsView,
      footer: MainFooter,
    },
  },
  {
    path: "/reservar",
    name: "reservar",
    components: {
      header: MainHeader,
      mainpage: BookView,
      footer: MainFooter,
    },
  },
  {
    path: "/contato",
    name: "contato",
    components: {
      header: MainHeader,
      mainpage: ContactView,
      footer: MainFooter,
    },
  },
  {
    path: "/acessar",
    name: "acessar",
    components: {
      login: SignView,
    },
  },
  {
    path: "/cadastrar",
    name: "cadastro",
    components: {
      header: MainHeader,
      mainpage: RegisterView,
      footer: MainFooter,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
