import { DamageRelationsInterface } from "./attributes/damageRelations";
import { ListItemInterface } from "./lists/list";
import { NameListItemInterface } from "./lists/nameList";

export interface TypeInterface {
  id: number;
  name: string;
  moves: ListItemInterface[];
  names: NameListItemInterface[];
  pokemon: {
    slot: number;
    pokemon: ListItemInterface;
  }[];
  damage_relations: DamageRelationsInterface;
}
