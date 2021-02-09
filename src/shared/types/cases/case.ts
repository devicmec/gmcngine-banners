import { IChild } from "./children";
import { IAbductor } from "./abductor";

export interface ICase {
  contactInformation: string;
  poster: string;
  circumstances: string;
  country: string;
  state: string;
  city: string;
  address: string;
  children: IChild[];
  childrenIds?: string[];
  abductors: IAbductor[];
  abductorsIds?: string[];
  miscellaneous?: string[];
  lastSeen?: string;
  missingDate: any;
}
