import {CandidateScore} from "./CandidateScore";
import {mount} from "enzyme";
import {CandidateMock} from "../../tests/mocks";

describe("proposition-card", () => {
    it("should render without crash", ()=> {
        const wrapper = mount(<CandidateScore candidateID={CandidateMock.id}/>);

        expect(wrapper.find(CandidateScore).exists()).toBeTruthy();
    });
});
