import { GeneraListItemInterface } from "@/commons/interfaces/lists/generaList";
import { getIdByUrl } from "@/commons/utils/URLs";

export class GeneraListItem {
  id: string;
  isoCode: string;
  name: string;

  constructor(props: GeneraListItemInterface) {
    this.id = getIdByUrl(props.language.url);
    this.isoCode = props.language.name;
    this.name = props.genus;
  }
}
