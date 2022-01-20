import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { Navigation } from "./Navigation";

describe("navigation", () => {

    it("should render without crash", ()=> {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <Navigation />
            </MemoryRouter>
        );

        expect(wrapper.find(Navigation).exists()).toBeTruthy();
    });
});
