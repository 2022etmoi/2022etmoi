import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { CandidateMock, ScoreMock } from "../../tests/mocks";
import { CandidateScore } from "./CandidateScore";

describe("candidate-score", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <CandidateScore score={ScoreMock} candidateID={CandidateMock.id}/>
            </MemoryRouter>
        );

        expect(wrapper.find(CandidateScore).exists()).toBeTruthy();
    });
});
