import { TypeListState } from "./store";

const getters = {
  getTypeList(state: TypeListState) {
    return state.typeList;
  },
};

export default getters;
