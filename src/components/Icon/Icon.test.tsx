import { mount } from "enzyme";

import { Icon } from "./Icon";

describe("icon", () => {

    it("should render without crash", ()=> {
        const wrapper = mount(
            <Icon file="logo"/>
        );

        expect(wrapper.find(Icon).exists()).toBeTruthy();
    });
});
