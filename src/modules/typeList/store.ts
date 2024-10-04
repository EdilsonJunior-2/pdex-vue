import ListItem from "@/commons/classes/lists/listItem";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const typeListModule = {
  namespaced: true,
  state: () =>
    <TypeListState>{
      typeList: [],
    },
  getters,
  actions,
  mutations,
};

export default typeListModule;

export interface TypeListState {
  typeList: ListItem[];
}
