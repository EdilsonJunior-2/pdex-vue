import ListItem from "../lists/listItem";
import { EvolutionDetailsInterface } from "@/commons/interfaces/attributes/evolutionDetails";

export class EvolutionDetails {
  gender: number | null;
  item: ListItem | null;
  held_item: ListItem | null;
  know_move: ListItem | null;
  know_move_type: ListItem | null;
  location: ListItem | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean | null;
  party_type: ListItem | null;
  time_of_day: string | null;
  party_species: ListItem | null;
  trade_species: ListItem | null;
  relative_phisical_state: number | null;
  trigger: ListItem;
  turn_upside_down: boolean | null;

  constructor(props: EvolutionDetailsInterface) {
    this.gender = props.gender;
    this.item = props.item ? new ListItem(props.item) : null;
    this.held_item = props.held_item ? new ListItem(props.held_item) : null;
    this.know_move = props.known_move ? new ListItem(props.known_move) : null;
    this.know_move_type = props.known_move_type
      ? new ListItem(props.known_move_type)
      : null;
    this.location = props.location ? new ListItem(props.location) : null;
    this.min_affection = props.min_affection;
    this.min_beauty = props.min_beauty;
    this.min_happiness = props.min_happiness;
    this.min_level = props.min_level;
    this.needs_overworld_rain = props.needs_overworld_rain;
    this.party_type = props.party_type ? new ListItem(props.party_type) : null;
    this.time_of_day = props.time_of_day;
    this.party_species = props.party_species
      ? new ListItem(props.party_species)
      : null;
    this.trade_species = props.trade_species
      ? new ListItem(props.trade_species)
      : null;
    this.relative_phisical_state = props.relative_phisical_state;
    this.trigger = new ListItem(props.trigger);
    this.turn_upside_down = props.turn_upside_down;
  }
}
