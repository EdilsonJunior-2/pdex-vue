import { getPokemonList, pokemonData, pokemonEvoChain } from "@/api/pokemon";
import Pokemon from "@/commons/classes/pokemon";
import { EvolutionChainInterface } from "@/commons/interfaces/attributes/evolutionChain";
import { PokemonInterface } from "@/commons/interfaces/pokemon";
import { PokemonSpeciesInterface } from "@/commons/interfaces/pokemonSpecies";
import { getIdByUrl } from "@/commons/utils/URLs";
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
            pokemonEvoChain(
              getIdByUrl(res.pokemon_species.evolution_chain.url)
            ).then((evo_chain: EvolutionChainInterface) =>
              commit(
                "setSelectedPokemon",
                new Pokemon({
                  ...res.pokemon,
                  ...res.pokemon_species,
                  evo_chain: evo_chain,
                })
              )
            )
        )
      : commit("setSelectedPokemon");
  },
};

export default actions;
