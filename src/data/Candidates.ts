import { Candidate, CandidateID } from "../types";
import { Arthaud } from "./Arthaud";
import { DupontAignan } from "./Dupont_Aignan";
import { Hidalgo } from "./Hidalgo";
import { Jadot } from "./Jadot";
import { Lassalle } from "./Lassalle";
import { LePen } from "./Le_Pen";
import { Macron } from "./Macron";
import { Melenchon } from "./Melenchon";
import { Pecresse } from "./Pecresse";
import { Poutou } from "./Poutou";
import { Roussel } from "./Roussel";
import { Zemmour } from "./Zemmour";

export const candidates: Map<CandidateID, Candidate> = new Map<CandidateID, Candidate>([
    [CandidateID.ARTHAUD, Arthaud],
    [CandidateID.DUPONT_AIGNAN, DupontAignan],
    [CandidateID.HIDALGO, Hidalgo],
    [CandidateID.JADOT, Jadot],
    [CandidateID.LASSALLE, Lassalle],
    [CandidateID.LE_PEN, LePen],
    [CandidateID.MACRON, Macron],
    [CandidateID.MELENCHON, Melenchon],
    [CandidateID.PECRESSE, Pecresse],
    [CandidateID.POUTOU, Poutou],
    [CandidateID.ROUSSEL, Roussel],
    [CandidateID.ZEMMOUR, Zemmour],
]);
