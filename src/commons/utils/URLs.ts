export const sprite = (pokemonIndex: number | string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
export const typeSprite = (typeIndex: number | string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${typeIndex}.png`;
export const getIdByUrl = (url: string) => {
  const urlArray = url.split("/");
  return urlArray[urlArray.length - 2];
};
