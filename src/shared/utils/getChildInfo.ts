import { IChild } from "../types/cases/children";

export const getChild = (childrenData: IChild[], childId?: string) => {
  return childId
    ? childrenData.find(child => child.childId === childId) || childrenData[0]
    : childrenData[0];
};
