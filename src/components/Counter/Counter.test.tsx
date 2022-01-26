import { mount } from "enzyme";

import { Counter } from "./Counter";

describe("counter", () => {
    it("should render without crash", () => {
        const wrapper = mount(<Counter current={0} max={10}/>);

        expect(wrapper.find(Counter).exists()).toBeTruthy();
        expect(wrapper.find(Counter).text().toString()).toStrictEqual("0\xa0/\xa010");
    });
});
