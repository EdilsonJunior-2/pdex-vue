import ListItem from "@/commons/classes/lists/listItem";
import { TypeState } from "./store";
import { Type } from "@/commons/classes/type";

const mutations = {
  setTypeList(state: TypeState, props: { results: ListItem[]; count: number }) {
    state.typeList = props.results;
  },
  setType(state: TypeState, props: Type | null) {
    state.type = props;
  },
};

export default mutations;
