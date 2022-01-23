import { mount } from "enzyme";

import { PropositionMock } from "../../tests/mocks";
import { act } from "../../tests/testUtils";
import { PropositionButton } from "../PropositionButton";
import { PropositionCard } from "./PropositionCard";

describe("proposition-card", () => {
    const onClickSpy = jest.fn();

    beforeEach(()=> {
        jest.resetAllMocks();
    });

    it("should render without crash", ()=> {
        const wrapper = mount(<PropositionCard propositionID={PropositionMock.id} onClick={onClickSpy}/>);

        expect(wrapper.find(PropositionCard).exists()).toBeTruthy();
        expect(wrapper.find(PropositionCard).find(PropositionButton)).toHaveLength(5);
    });

    it("should call the callback when clicked", () => {
        const wrapper = mount(<PropositionCard propositionID={PropositionMock.id} onClick={onClickSpy}/>);

        expect(wrapper.find(PropositionCard).exists()).toBeTruthy();

        act(()=> {
            wrapper.find(PropositionButton).at(0).simulate("click");
        });
        wrapper.update();
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
