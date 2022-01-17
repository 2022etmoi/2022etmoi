import { PropositionButton } from "./PropositionButton";
import { mount } from "enzyme";
import { act } from "../../tests/testUtils";

describe("proposition-button", () => {
    let onClickSpy: any;

    beforeEach(()=> {
        onClickSpy = jest.fn();
    });

    it("should render without crash", ()=> {
        const wrapper = mount(<PropositionButton onClick={onClickSpy}/>);

        expect(wrapper.find(PropositionButton).exists()).toBeTruthy();
    });

    it("should call the onClick callback when clicked", () => {
        const wrapper = mount(<PropositionButton onClick={onClickSpy}/>);

        act(()=> {
            wrapper.find(PropositionButton).simulate("click");
        });
        wrapper.update();
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
