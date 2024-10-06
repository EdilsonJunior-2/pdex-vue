import { LanguageListItemInterface } from "@/commons/interfaces/lists/languageList";
import { getIdByUrl } from "@/commons/utils/URLs";

export class LanguageListItem {
  id: string;
  isoCode: string;
  name: string;

  constructor(props: LanguageListItemInterface) {
    this.id = getIdByUrl(props.language.url);
    this.isoCode = props.language.name;
    this.name = props.genus;
  }
}
