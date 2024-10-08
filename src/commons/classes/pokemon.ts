import { EvolutionChainInterface } from "../interfaces/attributes/evolutionChain";
import { PokemonInterface } from "../interfaces/pokemon";
import { PokemonSpeciesInterface } from "../interfaces/pokemonSpecies";
import { EvolutionChain } from "./attributes/evolutionChain";
import { AbilityListItem } from "./lists/abilityListItem";
import { GeneraListItem } from "./lists/generaListItem";
import { LanguageListItem } from "./lists/languageListItem";
import ListItem from "./lists/listItem";
import { NameListItem } from "./lists/nameListItem";

export default class Pokemon {
  id: number;
  name: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
  };
  types: ListItem[];
  pokedex_entry?: string;
  base_exp: number;
  forms: ListItem[];
  genera: GeneraListItem[];
  baby: boolean;
  mythical: boolean;
  legendary: boolean;
  height: number;
  capture_rate: number;
  base_happiness: number;
  cry: string;
  names: LanguageListItem[];
  abilities: AbilityListItem[];
  evolution_chain: EvolutionChain;

  constructor(
    props: PokemonSpeciesInterface &
      PokemonInterface & { evo_chain: EvolutionChainInterface }
  ) {
    this.id = props.id;
    this.name = props.name;
    this.stats = {
      hp: props.stats[0].base_stat,
      attack: props.stats[1].base_stat,
      defense: props.stats[2].base_stat,
      sp_atk: props.stats[3].base_stat,
      sp_def: props.stats[4].base_stat,
      speed: props.stats[5].base_stat,
    };
    this.types = props.types.map((t) => new ListItem(t.type));
    this.pokedex_entry = props.flavor_text_entries.find(
      (entry) => entry.language.name == "en"
    )?.flavor_text;
    this.base_exp = props.base_experience;
    this.forms = props.forms.map((form) => new ListItem(form));
    this.genera = props.genera.map((genus) => new GeneraListItem(genus));
    this.baby = props.is_baby;
    this.mythical = props.is_mythical;
    this.legendary = props.is_legendary;
    this.height = props.height;
    this.capture_rate = props.capture_rate;
    this.base_happiness = props.base_happiness;
    this.cry = props.cries.latest;
    this.names = props.names.map((name) => new NameListItem(name));
    this.abilities = props.abilities.map(
      (ability) => new AbilityListItem(ability)
    );
    this.evolution_chain = new EvolutionChain(props.evo_chain);
  }
}
