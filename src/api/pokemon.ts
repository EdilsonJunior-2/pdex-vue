import { ListItemInterface } from "@/commons/interfaces/lists/list";
import { PokemonInterface } from "@/commons/interfaces/pokemon";
import api from ".";
import ListItem from "@/commons/classes/lists/listItem";

export const pokemonData = (name: string) =>
  api.get(`/pokemon/${name}`).then((pokemon) => pokemon.data);

export const getPokemonList = (offset: number, limit: number) =>
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
