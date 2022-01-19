import { PropositionCard } from "./PropositionCard";
import { mount } from "enzyme";
import { PropositionMock } from "../../tests/mocks";
import { PropositionButton } from "../PropositionButton";

describe("proposition-card", () => {
    it("should render without crash", ()=> {
        const wrapper = mount(<PropositionCard proposition={PropositionMock}/>);

        expect(wrapper.find(PropositionCard).exists()).toBeTruthy();
        expect(wrapper.find(PropositionCard).find(PropositionButton)).toHaveLength(5);
    });
});
