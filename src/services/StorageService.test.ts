import { PropositionMock } from "../tests/mocks/PropositionMock";
import { UserAnswer } from "../types";
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
        service.saveAnswer(PropositionMock, UserAnswer.MUST_NOT);

        expect(JSON.parse(localStorage.getItem("user-answers") as string)).toStrictEqual([[PropositionMock.id, "MUST_NOT", 1.0]]);
    });

    it("should retrieve user answers", () => {
        service.saveAnswer(PropositionMock, UserAnswer.MUST_NOT);
        const data = service.getAnswers();

        expect(data).toHaveLength(1);
    });
});
