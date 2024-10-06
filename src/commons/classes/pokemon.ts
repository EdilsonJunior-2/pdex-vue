import { PokemonInterface } from "../interfaces/pokemon";
import { PokemonSpeciesInterface } from "../interfaces/pokemonSpecies";
import { AbilityListItem } from "./lists/abilityListItem";
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
  pokedex_entry: string;
  base_exp: number;
  forms: ListItem[];
  genera: LanguageListItem[];
  baby: boolean;
  mythical: boolean;
  legendary: boolean;
  height: number;
  capture_rate: number;
  base_hapiness: number;
  cry: string;
  names: LanguageListItem[];
  abilities: AbilityListItem[];

  constructor(props: PokemonSpeciesInterface & PokemonInterface) {
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
    this.pokedex_entry = props.flavor_text_entries[0].flavor_text;
    this.base_exp = props.base_experience;
    this.forms = props.forms.map((form) => new ListItem(form));
    this.genera = props.genera.map((genus) => new LanguageListItem(genus));
    this.baby = props.is_baby;
    this.mythical = props.is_mythical;
    this.legendary = props.is_legendary;
    this.height = props.height;
    this.capture_rate = props.capture_rate;
    this.base_hapiness = props.base_hapiness;
    this.cry = props.cries.latest;
    this.names = props.names.map((name) => new NameListItem(name));
    this.abilities = props.abilities.map(
      (ability) => new AbilityListItem(ability)
    );
  }
}
