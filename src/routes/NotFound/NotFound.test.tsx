import { mount } from "enzyme";
import { NotFound } from "./NotFound";

describe("not-found", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<NotFound />);
        expect(wrapper.find(NotFound).exists()).toBeTruthy();
    });
});
