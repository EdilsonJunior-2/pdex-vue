import { getType, getTypeList } from "@/api/type";
import { Type } from "@/commons/classes/type";

const actions = {
  fetchTypeList({ commit }: any) {
    getTypeList().then((res) => commit("setTypeList", res));
  },
  fetchType({ commit, getters }: any, typeId?: string) {
    commit("setLimit", 50);
    if (typeId)
      getType(typeId).then((res: Type) => {
        commit("setTotal", res.pokemon.length);
        commit("setType", res);
      });
    else {
      commit("setTotal", getters.getPokemonList.length);
      commit("setType", null);
    }
  },
};

export default actions;
