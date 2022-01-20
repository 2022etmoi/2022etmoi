import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { Landing } from "./Landing";

describe("landing", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <Landing/>
            </MemoryRouter>
        );
        expect(wrapper.find(Landing).exists()).toBeTruthy();
    });
});
