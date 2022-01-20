import { mount } from "enzyme";
import { Scores } from "./Scores";

describe("scores", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Scores />);
        expect(wrapper.find(Scores).exists()).toBeTruthy();
    });
});
