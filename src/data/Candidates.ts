import { Candidate, CandidateID } from "../types";
import { Hidalgo } from "./Hidalgo";
import { LePen } from "./Le_Pen";
import { Melenchon } from "./Melenchon";
import { Zemmour } from "./Zemmour";
import { Pecresse } from "./Pecresse";

export const candidates: Map<CandidateID, Candidate> = new Map<CandidateID, Candidate>([
    [CandidateID.MELENCHON, Melenchon],
    [CandidateID.HIDALGO, Hidalgo],
    [CandidateID.PECRESSE, Pecresse],
    [CandidateID.LE_PEN, LePen],
    [CandidateID.ZEMMOUR, Zemmour],
]);
