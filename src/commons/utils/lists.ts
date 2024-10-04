import ListItem from "../classes/lists/listItem";

export function createPokemonListByType(
  typeList: ListItem[],
  generalList: ListItem[]
): ListItem[] {
  return typeList.length > 0
    ? generalList.filter((pokemon: ListItem) =>
        typeList.find(
          (pokemonByType: ListItem) =>
            pokemon.id.toString() === pokemonByType.id
        )
      )
    : generalList;
}
