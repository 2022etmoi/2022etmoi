import { mount } from "enzyme";

import { Table } from "./Table";

describe("table", () => {
    it("should render without crash", () => {
        const wrapper = mount(<Table/>);
        expect(wrapper.find(Table).exists()).toBeTruthy();
    });
});
