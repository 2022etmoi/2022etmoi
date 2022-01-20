import { mount } from "enzyme";
import { Landing } from "./Landing";

describe("landing", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Landing />);
        expect(wrapper.find(Landing).exists()).toBeTruthy();
    });
});
