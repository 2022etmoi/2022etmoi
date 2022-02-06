export enum PropositionID {
    EOLIENNE = "EOLIENNE",
    SUCCESSIONS = "SUCCESSIONS",
    SMIC = "SMIC",
    REPUBLIQUE = "REPUBLIQUE",
    EPR = "EPR",
    LOGEMENT = "LOGEMENT",
    PASS = "PASS",
    EGALITE_HF = "EGALITE_HF",
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
    DESOBEIR = "DESOBEIR",
    SOL = "SOL",
    PENALE = "PENALE",
    CANNABIS = "CANNABIS",
    DETTE = "DETTE",
    TRAITES = "TRAITES",
    CROISSANCE = "CROISSANCE",
    ASSANGE = "ASSANGE",
    RIC = "RIC",
    SPECULATION = "SPECULATION",
    OTAN = "OTAN",
    REDEVANCE = "REDEVANCE",
    ECOLE = "ECOLE",
    GUERRE = "GUERRE",
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
