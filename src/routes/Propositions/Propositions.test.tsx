import { mount } from "enzyme";
import { Propositions } from "./Propositions";

describe("propositions", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Propositions />);
        expect(wrapper.find(Propositions).exists()).toBeTruthy();
    });
});
