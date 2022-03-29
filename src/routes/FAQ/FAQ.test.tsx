import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { FAQ } from "./FAQ";

describe("faq", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <FAQ/>
            </MemoryRouter>
        );
        expect(wrapper.find(FAQ).exists()).toBeTruthy();
    });
});
