import { ListItemInterface } from "./lists/list";

export interface GenerationInterface {
  id: number;
  main_region: ListItemInterface;
  pokemon_species: ListItemInterface[];
  version_groups: ListItemInterface[];
}
