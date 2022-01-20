import { mount } from "enzyme";

import { Options } from "./Options";

describe("options", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Options />);
        expect(wrapper.find(Options).exists()).toBeTruthy();
    });
});
