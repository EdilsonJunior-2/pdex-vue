import { EvolutionChainInterface } from "./attributes/evolutionChain";
import { ListItemInterface } from "./lists/list";
import { FlavorTextEntryInterface } from "./attributes/flavorTextEntry";
import { FormDescriptionListItemInterface } from "./lists/formDescriptionList";
import { GeneraListItemInterface } from "./lists/generaList";
import { NameListItemInterface } from "./lists/nameList";
import { PokedexNumberListItemInterface } from "./lists/pokedexNumberList";
import { VarietyListItemInterface } from "./lists/varietyList";

export interface PokemonSpeciesInterface {
  base_hapiness: number;
  capture_rate: number;
  egg_groups: ListItemInterface[];
  evolution_chain: EvolutionChainInterface;
  evolves_from_species: ListItemInterface;
  flavor_text_entries: FlavorTextEntryInterface[];
  form_descriptions: FormDescriptionListItemInterface[];
  forms_switchable?: boolean;
  genter_rate?: number;
  genera: GeneraListItemInterface[];
  generation: ListItemInterface;
  growth_rate: ListItemInterface;
  habitat?: string;
  has_gender_differences?: boolean;
  hatch_counter?: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: NameListItemInterface[];
  order: number;
  pokedex_numbers: PokedexNumberListItemInterface[];
  shape: ListItemInterface;
  varieties: VarietyListItemInterface[];
}
