import { ListItemInterface } from "@/commons/interfaces/lists/list";
import api from ".";
import { Type } from "@/commons/classes/type";

export const getTypeList = () =>
  api
    .get(`type?offset=0&limit=100`)
    .then(
      (res: { data: { results: ListItemInterface[]; count: number } }) =>
        res.data
    );

export const getType = (typeIndex: string | number): Promise<Type> =>
  api.get(`type/${typeIndex}`).then((res) => new Type(res.data));
