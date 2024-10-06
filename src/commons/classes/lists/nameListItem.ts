import { NameListItemInterface } from "@/commons/interfaces/lists/nameList";
import { getIdByUrl } from "@/commons/utils/URLs";

export class NameListItem {
  id: string;
  isoCode: string;
  name: string;

  constructor(props: NameListItemInterface) {
    this.id = getIdByUrl(props.language.url);
    this.isoCode = props.language.name;
    this.name = props.name;
  }
}
