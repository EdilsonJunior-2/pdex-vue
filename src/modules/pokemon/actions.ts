import { getPokemonList } from "@/api/pokemon";
const actions = {
  fetchPokemonList(
    { commit }: any,
    params: { offset: string | number; limit: string | number }
  ) {
    getPokemonList(params.offset, params.limit).then((res) => {
      commit("setPokemonList", res);
    });
  },
};

export default actions;
