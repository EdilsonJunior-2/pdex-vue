import ListItem from "../classes/lists/listItem";
import { ForbiddenTypes } from "../enums";

export const removingForbiddenTypes = (type: ListItem) =>
  Object.values(ForbiddenTypes).includes(type.name as ForbiddenTypes);
