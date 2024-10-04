import { ListItemInterface } from "@/commons/interfaces/lists/list";
import { getIdByUrl } from "@/commons/utils/URLs";

class ListItem {
  public name: string;
  public id: string;

  constructor(props: ListItemInterface) {
    this.name = props.name;
    this.id = getIdByUrl(props.url);
  }
}

export default ListItem;
