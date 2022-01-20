import {Proposition, PropositionID} from "../types";

export const propositions: Set<Proposition> = new Set([
    new Proposition(
        PropositionID.EOLIENNE,
        "Interdire tout nouveau projet de construction d'éoliennes sur terre et en mer",
        "Description eolienne",
    ),
    new Proposition(
        PropositionID.SUCCESSIONS,
        "Il faut alléger l'impôt sur les successions",
        "Description successions",
    ),
    new Proposition(
        PropositionID.SMIC,
        "Revaloriser le SMIC",
        "Description smic",
    ),
    new Proposition(
        PropositionID.REPUBLIQUE,
        "Il faut passer à la 6ème république",
        "Description republique",
    ),
    new Proposition(
        PropositionID.EPR,
        "Construire au moins six nouveaux EPR en France",
        "Description epr",
    ),
    new Proposition(
        PropositionID.LOGEMENT,
        "Autoriser les mairies à refuser la construction de logements sociaux sur leur territoire",
        "Description logement",
    ),
    new Proposition(
        PropositionID.PASS,
        "Abroger le pass sanitaire et vaccinal",
        "Description pass",
    ),
]);
