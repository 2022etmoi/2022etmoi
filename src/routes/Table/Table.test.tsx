import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { Table } from "./Table";

describe("table", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <Table/>
            </MemoryRouter>
        );
        expect(wrapper.find(Table).exists()).toBeTruthy();
    });
});
