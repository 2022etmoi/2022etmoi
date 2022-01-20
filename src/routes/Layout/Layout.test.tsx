import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Layout } from "./Layout";

describe("layout", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <Layout/>
            </MemoryRouter>
        );
        expect(wrapper.find(Layout).exists()).toBeTruthy();
    });
});
