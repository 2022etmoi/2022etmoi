import { mount } from "enzyme";

import { Button } from "./Button";

describe("button", () => {
    it("should render without crash", () => {
        const wrapper = mount(<Button>Test</Button>);

        expect(wrapper.find(Button).exists()).toBeTruthy();
    });
    it("should render a secondary mode", () => {
        const wrapper = mount(<Button type="secondary">Test</Button>);

        expect(wrapper.find(Button).exists()).toBeTruthy();
    });
});
