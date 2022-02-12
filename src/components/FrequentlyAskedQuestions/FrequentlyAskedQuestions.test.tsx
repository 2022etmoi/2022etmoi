import { mount } from "enzyme";

import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions";

describe("frequentlyaskedquestions", () => {

    it("should render without crash", ()=> {
        const wrapper = mount(
            <FrequentlyAskedQuestions />
        );

        expect(wrapper.find(FrequentlyAskedQuestions).exists()).toBeTruthy();
    });
});
