import { getPokemonList, pokemonData } from "@/api/pokemon";
import Pokemon from "@/commons/classes/pokemon";
import { PokemonInterface } from "@/commons/interfaces/pokemon";
import { PokemonSpeciesInterface } from "@/commons/interfaces/pokemonSpecies";
const actions = {
  fetchPokemonList(
    { commit }: any,
    params: { offset: string | number; limit: string | number }
  ) {
    getPokemonList(params.offset, params.limit).then((res) => {
      commit("setPokemonList", res);
    });
  },
  fetchPokemon({ commit }: any, params?: { id: number }) {
    params
      ? pokemonData(params.id).then(
          (res: {
            pokemon: PokemonInterface;
            pokemon_species: PokemonSpeciesInterface;
          }) =>
            commit(
              "setSelectedPokemon",
              new Pokemon({ ...res.pokemon, ...res.pokemon_species })
            )
        )
      : commit("setSelectedPokemon");
  },
};

export default actions;
