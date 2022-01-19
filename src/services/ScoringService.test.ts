import { ScoringService } from "./ScoringService";

describe("scoring-service", () => {
    let service: ScoringService;

    beforeEach(()=> {
        service = ScoringService.getInstance();
    });

    it("should return the instance", () => {
        expect(service).toBeInstanceOf(ScoringService);
    });
});
