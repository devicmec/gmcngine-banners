export interface IAgency {
  code: string;
  contact: string;
  contactperson: string;
  country: string;
  email: string;
  logo: any;
  name: string;
  phone: string;
  headline?: string;
  language?: string;
}

export const initialAgency: IAgency = {
  code: "",
  contact: "",
  contactperson: "",
  country: "",
  email: "",
  logo: { url: "" },
  name: "",
  phone: "",
};
