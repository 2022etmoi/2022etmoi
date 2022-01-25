import { mount } from "enzyme";

import { act } from "../../tests/testUtils";
import { UserAnswer } from "../../types";
import { PropositionButton } from "./PropositionButton";

describe("proposition-button", () => {
    const onClickSpy = jest.fn();

    beforeEach(()=> {
        jest.resetAllMocks();
    });

    it("should render without crash", ()=> {
        const wrapper = mount(<PropositionButton userAnswer={UserAnswer.MUST} onClick={onClickSpy} emoji={""}/>);

        expect(wrapper.find(PropositionButton).exists()).toBeTruthy();
    });

    it("should call the onClick callback when clicked", () => {
        const wrapper = mount(<PropositionButton userAnswer={UserAnswer.MUST} onClick={onClickSpy} emoji={""}/>);

        act(()=> {
            wrapper.find(PropositionButton).simulate("click");
        });
        wrapper.update();
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
