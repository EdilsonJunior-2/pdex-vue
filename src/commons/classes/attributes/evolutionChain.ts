import { EvolutionChainInterface } from "@/commons/interfaces/attributes/evolutionChain";
import ListItem from "../lists/listItem";
import { EvolutionDetails } from "./EvolutionDetails";

export class EvolutionChain {
  evolution_details: EvolutionDetails | null;
  evolved_to: EvolutionChain[] | null;
  is_baby: boolean;
  species: ListItem;

  constructor(props: EvolutionChainInterface) {
    this.evolution_details =
      props.evolution_details.length > 0
        ? new EvolutionDetails(props.evolution_details[0])
        : null;
    this.evolved_to =
      props.evolves_to.length > 0
        ? props.evolves_to.map(
            (evo: EvolutionChainInterface) => new EvolutionChain(evo)
          )
        : null;
    this.is_baby = props.is_baby;
    this.species = new ListItem(props.species);
  }
}
