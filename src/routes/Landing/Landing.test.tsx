import { mount } from "enzyme";
import { Landing } from "./Landing";
import { MemoryRouter } from "react-router-dom";

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
