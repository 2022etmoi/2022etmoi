import { Candidate, CandidateID } from "../types";
import { Hidalgo } from "./Hidalgo";
import { LePen } from "./Le_Pen";
import { Melenchon } from "./Melenchon";
import { Pecresse } from "./Pecresse";
import { Roussel } from "./Roussel";
import { Zemmour } from "./Zemmour";

export const candidates: Map<CandidateID, Candidate> = new Map<CandidateID, Candidate>([
    [CandidateID.HIDALGO, Hidalgo],
    [CandidateID.LE_PEN, LePen],
    [CandidateID.MELENCHON, Melenchon],
    [CandidateID.PECRESSE, Pecresse],
    [CandidateID.ROUSSEL, Roussel],
    [CandidateID.ZEMMOUR, Zemmour],
]);
