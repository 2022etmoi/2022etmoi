export enum PropositionID {
    AAH = "AAH",
    ASSANGE = "ASSANGE",
    BAC = "BAC",
    BREVETS = "BREVETS",
    CANNABIS = "CANNABIS",
    CLOUD = "CLOUD",
    CROISSANCE = "CROISSANCE",
    DESOBEIR = "DESOBEIR",
    DESTITUER = "DESTITUER",
    DETTE = "DETTE",
    ECOLE = "ECOLE",
    EGALITE_HF = "EGALITE_HF",
    EPR = "EPR",
    EOLIENNE = "EOLIENNE",
    GUERRE = "GUERRE",
    ISF = "ISF",
    LIBRE_ECHANGE = "LIBRE_ECHANGE",
    LOGEMENT = "LOGEMENT",
    OTAN = "OTAN",
    PASS = "PASS",
    PENALE = "PENALE",
    PRIVATISER = "PRIVATISER",
    REDEVANCE = "REDEVANCE",
    REPUBLIQUE = "REPUBLIQUE",
    RIC = "RIC",
    SMIC = "SMIC",
    SOINS = "SOINS",
    SOL = "SOL",
    SPECULATION = "SPECULATION",
    SUCCESSIONS = "SUCCESSIONS",
    TEMPS = "TEMPS",
    TRAITES = "TRAITES",
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
