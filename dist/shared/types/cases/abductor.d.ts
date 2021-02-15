export declare enum CompanionTypes {
    Abductor = "Abductor",
    Companion = "Companion",
    FamilyAcquaintance = "Family Acquaintance",
    Father = "Father",
    Mother = "Mother",
    Relative = "Relative",
    Suspect = "Suspect",
    Unknown = "Unknown",
    Witness = "Witness"
}
export interface IAbductor {
    abductorId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate?: string;
    age?: number;
    sex: string;
    eyeColor: string;
    hairColor: string;
    height: string;
    heightUnit: string;
    weight: string;
    weightUnit: string;
    images: string[];
    companionType: CompanionTypes;
    fullName: string;
}
