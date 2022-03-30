import { mount } from "enzyme";

import { PhotoCredits } from "./PhotoCredits";

describe("photocredits", () => {
    it("should render without crash", () => {
        const wrapper = mount(<PhotoCredits />);

        expect(wrapper.find(PhotoCredits).exists()).toBeTruthy();
    });
});
