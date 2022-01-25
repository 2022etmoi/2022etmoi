import { mount } from "enzyme";

import { Button, PropositionCard } from "../../components";
import { act } from "../../tests/testUtils";
import { Propositions } from "./Propositions";

describe("propositions", ()=> {
    it("should render without crash", ()=> {
        const wrapper = mount(<Propositions />);
        expect(wrapper.find(Propositions).exists()).toBeTruthy();
    });

    it("should display a new proposition after a vote", ()=> {
        const wrapper = mount(<Propositions />);
        expect(wrapper.find(Propositions).exists()).toBeTruthy();

        const firstProposition = wrapper.find(PropositionCard).find("header").text();
        act(()=> {
            wrapper.find(Button).at(0).simulate("click");
        });
        wrapper.update();
        const secondProposition = wrapper.find(PropositionCard).find("header").text();
        expect(secondProposition).not.toStrictEqual(firstProposition);
    });
});
