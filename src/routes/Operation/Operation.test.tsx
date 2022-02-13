import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { Operation } from "./Operation";

describe("operation", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/fonctionnement"]}>
                <Operation/>
            </MemoryRouter>
        );
        expect(wrapper.find(Operation).exists()).toBeTruthy();
    });
});
