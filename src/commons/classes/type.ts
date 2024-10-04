import { DamageRelationsInterface } from "../interfaces/attributes/damageRelations";
import { TypeInterface } from "../interfaces/type";
import { LanguageListItem } from "./lists/languageListItem";
import ListItem from "./lists/listItem";

export class Type {
  id: number;
  name: string;
  moves: ListItem[];
  names: LanguageListItem[];
  pokemon: ListItem[];
  damage_relations: DamageRelationsInterface;

  constructor(props: TypeInterface) {
    this.id = props.id;
    this.damage_relations = props.damage_relations;
    this.moves = props.moves.map((move) => new ListItem(move));
    this.name = props.name;
    this.names = props.names.map((name) => new LanguageListItem(name));
    this.pokemon = props.pokemon.map((p) => new ListItem(p.pokemon));
  }
}
