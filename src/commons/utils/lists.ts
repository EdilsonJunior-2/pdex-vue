import ListItem from "../classes/lists/listItem";
import PokemonListItem from "../classes/lists/pokemonListItem";

export function createPokemonListByType(
  typeList: ListItem[],
  generalList: PokemonListItem[]
): PokemonListItem[] {
  return typeList.length > 0
    ? generalList.filter((pokemon: PokemonListItem) =>
        typeList.find(
          (pokemonByType: ListItem) =>
            pokemon.number.toString() === pokemonByType.id
        )
      )
    : generalList;
}
