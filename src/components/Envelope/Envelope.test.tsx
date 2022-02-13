import { mount } from "enzyme";

import { Envelope } from "./Envelope";

describe("envelope", () => {
    it("should render without crash", () => {
        const wrapper = mount(<Envelope />);

        expect(wrapper.find(Envelope).exists()).toBeTruthy();
    });
});
