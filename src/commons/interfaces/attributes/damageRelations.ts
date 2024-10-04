import { ListItemInterface } from "../lists/list";

export interface DamageRelationsInterface {
  double_damage_from: ListItemInterface[];
  double_damage_to: ListItemInterface[];
  half_damage_from: ListItemInterface[];
  half_damage_to: ListItemInterface[];
  no_damage_from: ListItemInterface[];
  no_damage_to: ListItemInterface[];
}
