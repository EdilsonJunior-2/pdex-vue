import ListItem from "@/commons/classes/lists/listItem";
import { TypeListState } from "./store";

const mutations = {
  setTypeList(
    state: TypeListState,
    props: { results: ListItem[]; count: number }
  ) {
    state.typeList = props.results;
  },
};

export default mutations;
