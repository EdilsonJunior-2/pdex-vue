import { ListItemInterface } from "@/commons/interfaces/lists/list";

class PokemonListItem {
  public number: number | string;
  public name: string;
  public url: string;
  constructor(props: ListItemInterface) {
    const urlArray = props.url.split("/");
    this.number = urlArray[urlArray.length - 2];
    this.name = props.name;
    this.url = props.url;
  }
}

export default PokemonListItem;
