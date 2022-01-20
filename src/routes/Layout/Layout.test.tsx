import { mount } from "enzyme";
import { Layout } from "./Layout";

describe("layout", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Layout />);
        expect(wrapper.find(Layout).exists()).toBeTruthy();
    });
});
