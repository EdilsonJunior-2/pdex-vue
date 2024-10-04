import { getTypeList } from "@/api/type";

const actions = {
  fetchTypeList({ commit }: any) {
    getTypeList().then((res) => commit("setTypeList", res));
  },
};

export default actions;
