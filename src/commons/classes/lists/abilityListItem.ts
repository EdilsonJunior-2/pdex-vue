import { AbilityListItemInterface } from "@/commons/interfaces/lists/abilityList";
import { getIdByUrl } from "@/commons/utils/URLs";

export class AbilityListItem {
  id: string;
  hidden: boolean;
  name: string;

  constructor(props: AbilityListItemInterface) {
    this.id = getIdByUrl(props.ability.url);
    this.name = props.ability.name;
    this.hidden = props.is_hidden;
  }
}
