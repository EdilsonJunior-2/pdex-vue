import { DamageRelationsInterface } from "./attributes/damageRelations";
import { LanguageListItemInterface } from "./lists/languageList";
import { ListItemInterface } from "./lists/list";

export interface TypeInterface {
  id: number;
  name: string;
  moves: ListItemInterface[];
  names: LanguageListItemInterface[];
  pokemon: {
    slot: number;
    pokemon: ListItemInterface;
  }[];
  damage_relations: DamageRelationsInterface;
}
