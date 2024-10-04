import { ListItemInterface } from "@/commons/interfaces/lists/list";
import { getIdByUrl } from "@/commons/utils/URLs";

class PokemonListItem {
  public number: number | string;
  public name: string;
  public url: string;
  constructor(props: ListItemInterface) {
    this.number = getIdByUrl(props.url);
    this.name = props.name;
    this.url = props.url;
  }
}

export default PokemonListItem;
