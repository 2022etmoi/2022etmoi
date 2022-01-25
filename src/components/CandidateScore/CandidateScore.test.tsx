import { mount } from "enzyme";

import { CandidateMock } from "../../tests/mocks";
import { CandidateScore } from "./CandidateScore";

describe("candidate-score", () => {
    it("should render without crash", () => {
        const wrapper = mount(<CandidateScore candidateID={CandidateMock.id}/>);

        expect(wrapper.find(CandidateScore).exists()).toBeTruthy();
    });
});
