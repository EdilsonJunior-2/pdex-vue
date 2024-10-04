import ListItem from "@/commons/classes/lists/listItem";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { Type } from "@/commons/classes/type";

const typeModule = {
  state: () =>
    <TypeState>{
      typeList: [],
      type: null,
    },
  getters,
  actions,
  mutations,
};

export default typeModule;

export interface TypeState {
  typeList: ListItem[];
  type: Type | null;
}
