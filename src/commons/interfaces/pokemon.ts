import { AbilityListItemInterface } from "./lists/abilityList";
import { CriesInterface } from "./attributes/cries";
import { ListItemInterface } from "./lists/list";
import { SpritesInterface } from "./attributes/sprites";
import { StatsListItemInterface } from "./lists/statsList";
import { TypeListItemInterface } from "./lists/typeList";

export interface PokemonInterface {
  abilities: AbilityListItemInterface[];
  cries: CriesInterface;
  base_experience: number;
  forms: ListItemInterface[];
  height: number;
  id: number;
  location_area_encounters: string;
  name: string;
  order: number;
  species: ListItemInterface;
  sprites: SpritesInterface;
  stats: StatsListItemInterface[];
  types: TypeListItemInterface[];
  weight: number;
}
