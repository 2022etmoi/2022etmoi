export enum PropositionID {
    EOLIENNE = "EOLIENNE",
    SUCCESSIONS = "SUCCESSIONS",
    SMIC = "SMIC",
    REPUBLIQUE = "REPUBLIQUE",
    EPR = "EPR",
    LOGEMENT = "LOGEMENT",
    PASS = "PASS",
}

export class Proposition {
    id: PropositionID;
    content: string;
    description: string;
    revision: number;

    constructor(id: PropositionID, content: string, description: string, revision = 1.0) {
        this.id = id;
        this.content = content;
        this.description = description;
        this.revision = revision;
    }
}
