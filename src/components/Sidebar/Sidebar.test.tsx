import { mount } from "enzyme";

import { Sidebar } from "./Sidebar";

describe("sidebar", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Sidebar links={[{
            name: "test",
            icon: "test.svg",
            component: <div>test</div>,
        }]}/>);

        expect(wrapper.find(Sidebar).exists()).toBeTruthy();
        expect(wrapper.find(".sidebar__link")).toHaveLength(1);
        expect(wrapper.find(".sidebar__link img")).toHaveLength(1);
    });
});
