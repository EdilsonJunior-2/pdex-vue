import { ListItemInterface } from "@/commons/interfaces/lists/list";
import { PokemonInterface } from "@/commons/interfaces/pokemon";
import api from ".";
import ListItem from "@/commons/classes/lists/listItem";

export const pokemonData = (id: number) =>
  Promise.all([
    api.get(`/pokemon/${id}`),
    api.get(`/pokemon-species/${id}`),
  ]).then((res) => ({
    pokemon: res[0].data,
    pokemon_species: res[1].data,
  }));

export const getPokemonList = (
  offset: string | number,
  limit: string | number
) =>
  api
    .get(`/pokemon-species/?offset=${offset}&limit=${limit}`)
    .then(
      (pokemon: { data: { results: ListItemInterface[]; count: number } }) => ({
        count: pokemon.data.count,
        results: pokemon.data.results.map((p) => new ListItem(p)),
      })
    );

export const randomPokemon = () =>
  api
    .get(`pokemon-species`)
    .then((res: { data: { count: number } }) =>
      api
        .get(`/pokemon/${Math.floor(Math.random() * res.data.count) + 1}`)
        .then((randomPokemon: { data: PokemonInterface }) =>
          console.log(randomPokemon.data)
        )
    );
