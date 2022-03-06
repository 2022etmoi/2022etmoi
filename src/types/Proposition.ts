/**
 * The full list of shown Propositions.
 */
export enum PropositionID {
    AAH = "AAH",
    AUTOROUTES = "AUTOROUTES",
    BAC = "BAC",
    BREVETS_LIBERER = "BREVETS_LIBERER",
    CANNABIS = "CANNABIS",
    CLOUD_SOUVERAIN = "CLOUD_SOUVERAIN",
    DESOBEIR = "DESOBEIR",
    DESTITUER = "DESTITUER",
    DETTE = "DETTE",
    EGALITE_HF = "EGALITE_HF",
    NUCLEAIRE = "NUCLEAIRE",
    STOP_EOLIENNE = "STOP_EOLIENNE",
    GUERRE_MIGRANTS_ACCEPTER = "GUERRE_MIGRANTS_ACCEPTER",
    ISF = "ISF",
    LIBRE_ECHANGE_FIN = "LIBRE_ECHANGE_FIN",
    LOGEMENT_SOCIAL_REFUSER = "LOGEMENT_SOCIAL_REFUSER",
    OTAN = "OTAN",
    PASS_ABROGER = "PASS_ABROGER",
    PRIVATISER = "PRIVATISER",
    REDEVANCE = "REDEVANCE",
    REPUBLIQUE = "REPUBLIQUE",
    RIC = "RIC",
    SMIC = "SMIC",
    SOINS_ETRANGERS_STOP = "SOINS_ETRANGERS_STOP",
    SOL = "SOL",
    SPECULATION = "SPECULATION",
    SUCCESSIONS = "SUCCESSIONS",
    TEMPS = "TEMPS",
    TRAITES_RENEGOCIER = "TRAITES_RENEGOCIER",
    TVA = "TVA",
}

/**
 * Represents a Proposition.
 */
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
