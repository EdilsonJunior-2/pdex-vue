import { EvolutionDetailsInterface } from "./evolutionDetails";
import { ListItemInterface } from "../lists/list";

export interface EvolutionChainInterface {
  evolution_details: EvolutionDetailsInterface[];
  evolves_to: EvolutionChainInterface[];
  is_baby: boolean;
  species: ListItemInterface;
}
