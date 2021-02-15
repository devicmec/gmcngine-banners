import { IAbductor } from "./abductor";
import { IChild } from "./children";

export enum CaseTypes {
  Missing = "Missing",
  EndangeredMiss = "Endangered Missing",
  EndangeredRun = "Endangered Runaway",
  FamilyAbduction = "Family Abduction",
  LostInjuredMiss = "Lost Injured Missing",
  NonFamilyAbduction = "Non-Family Abduction",
  Unidentified = "Unidentified",
}

export interface ICase {
  agencyCode: string;
  contactInformation: string;
  caseId: string;
  poster: string;
  caseType: CaseTypes;
  public: boolean;
  status: string;
  openDate: any;
  circumstances: string;
  country: string;
  state: string;
  city: string;
  address: string;
  children: IChild[];
  childrenIds?: string[];
  abductors: IAbductor[];
  abductorsIds?: string[];
  providers?: IListProviders;
  sendMatches: string;
  closedDate?: any;
  closedComments?: string;
  miscellaneous?: string[];
  lastSeen?: string;
  missingDate: any;
  agenciesAccess?: string[];
}

export interface IListProviders {
  [key: string]: { threshold: number; checked: boolean };
}
