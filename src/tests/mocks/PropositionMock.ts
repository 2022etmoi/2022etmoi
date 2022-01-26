import { Proposition, PropositionID } from "../../types";

export const PropositionMock: Proposition = new Proposition(
    PropositionID.SMIC,
    "Category",
    "Proposition content",
    "Proposition description",
);
