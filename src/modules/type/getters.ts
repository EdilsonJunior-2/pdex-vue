import { TypeState } from "./store";

const getters = {
  getTypeList(state: TypeState) {
    return state.typeList;
  },
  getType(state: TypeState) {
    return state.type;
  },
};

export default getters;
