import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { StorageService } from "../../services";
import { PropositionMock } from "../../tests/mocks";
import { UserAnswer } from "../../types";
import { Scores } from "./Scores";

describe("scores", ()=> {
    const storageService = StorageService.getInstance();
    beforeEach(()=> {
        storageService.saveAnswer(PropositionMock, UserAnswer.MUST_NOT);

    });
    it("should render without crash", ()=> {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <Scores/>
            </MemoryRouter>
        );
        expect(wrapper.find(Scores).exists()).toBeTruthy();
    });
});
