import { createStore } from "vuex";
import pokemonModule from "./modules/pokemonList/store";
import typeListModule from "./modules/typeList/store";

export default createStore({
  modules: {
    pokemonModule,
    typeListModule,
  },
});
