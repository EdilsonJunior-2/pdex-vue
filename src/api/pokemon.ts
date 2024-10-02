import { ListItemInterface } from "@/commons/interfaces/lists/list";
import { PokemonInterface } from "@/commons/interfaces/pokemon";
import api from ".";

const pokemonData = (name: string) =>
  api.get(`/pokemon/${name}`).then((pokemon) => pokemon.data);

const pokemonList = (offset: number, limit: number) =>
  api
    .get(`/pokemon-species/?offset=${offset}&limit=${limit}`)
    .then(
      (pokemon: { data: { results: ListItemInterface[]; count: number } }) =>
        pokemon.data
    );

const randomPokemon = () =>
  api
    .get(`pokemon-species`)
    .then((res: { data: { count: number } }) =>
      api
        .get(`/pokemon/${Math.floor(Math.random() * res.data.count) + 1}`)
        .then((randomPokemon: { data: PokemonInterface }) =>
          console.log(randomPokemon.data)
        )
    );

export { pokemonData, pokemonList, randomPokemon };
