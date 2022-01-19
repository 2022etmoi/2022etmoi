import { PropositionID, UserAnswer } from "../types";
import { StorageService } from "./StorageService";

describe("storage-service", () => {
    let service: StorageService;

    beforeEach(()=> {
        localStorage.clear();
        service = StorageService.getInstance();
    });

    it("should return the instance", () => {
        expect(service).toBeInstanceOf(StorageService);
    });

    it("should save a user answer", () => {
        service.saveAnswer(PropositionID.P1, UserAnswer.MUST_NOT);

        expect(JSON.parse(localStorage.getItem("user-answers") as string)).toStrictEqual([[0,0]]);
    });

    it("should retrieve user answers", () => {
        service.saveAnswer(PropositionID.P1, UserAnswer.MUST_NOT);
        const data = service.getAnswers();

        expect(data).toHaveLength(1);
    });
});
