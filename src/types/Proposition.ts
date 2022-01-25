export enum PropositionID {
    EOLIENNE = "EOLIENNE",
    SUCCESSIONS = "SUCCESSIONS",
    SMIC = "SMIC",
    REPUBLIQUE = "REPUBLIQUE",
    EPR = "EPR",
    LOGEMENT = "LOGEMENT",
    PASS = "PASS",
    ECOCIDE = "ECOCIDE",
    EGALITE_HF = "EGALITE_HF",
    IMPOT_TRANSITION = "IMPOT_TRANSITION",
    ISF = "ISF",
    DESTITUER = "DESTITUER",
    PRIVATISER = "PRIVATISER",
    BAC = "BAC",
    BREVETS = "BREVETS",
    LIBRE_ECHANGE = "LIBRE_ECHANGE",
    AAH = "AAH",
    SOINS = "SOINS",
    TEMPS = "TEMPS",
    CLOUD = "CLOUD",
}

export class Proposition {
    id: PropositionID;
    category: string;
    content: string;
    description: string;
    revision: number;

    constructor(id: PropositionID, category: string, content: string, description: string, revision = 1.0) {
        this.id = id;
        this.category = category;
        this.content = content;
        this.description = description;
        this.revision = revision;
    }
}
