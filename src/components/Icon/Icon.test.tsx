import { mount } from "enzyme";

import { Icon } from "./Icon";

describe("icon", () => {

    it("should render without crash", ()=> {
        const wrapper = mount(
            <Icon file="scores"/>
        );

        expect(wrapper.find(Icon).exists()).toBeTruthy();
    });
});
