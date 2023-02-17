import { createStore } from "vuex";
import { rooms } from "@/helpers/dataRooms";
import { acomodacoes } from "@/helpers/AcomodacaoData";

export default createStore({
  state: {
    acomodacoes: [],
    // rooms,
  },
  getters: {},
  mutations: {
    loadRooms(state, acomodacoes) {
      state.acomodacoes = acomodacoes;
    },
  },
  actions: {
    loadRooms({ commit }) {
      commit("loadRooms", acomodacoes);
    },
  },
  modules: {},
});
