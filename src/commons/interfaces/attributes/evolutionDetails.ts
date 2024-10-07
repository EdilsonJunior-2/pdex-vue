import { ListItemInterface } from "../lists/list";

export interface EvolutionDetailsInterface {
  gender: number | null;
  item: ListItemInterface | null;
  held_item: ListItemInterface | null;
  known_move: ListItemInterface | null;
  known_move_type: ListItemInterface | null;
  location: ListItemInterface | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean;
  party_type: ListItemInterface | null;
  time_of_day: string;
  party_species: ListItemInterface | null;
  trade_species: ListItemInterface | null;
  relative_phisical_state: number | null;
  trigger: ListItemInterface;
  turn_upside_down: boolean;
}
