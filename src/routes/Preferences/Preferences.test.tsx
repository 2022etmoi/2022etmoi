import { mount } from "enzyme";
import { Preferences } from "./Preferences";

describe("preferences", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Preferences />);
        expect(wrapper.find(Preferences).exists()).toBeTruthy();
    });
});
