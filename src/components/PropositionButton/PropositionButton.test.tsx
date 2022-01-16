import { mount } from 'enzyme';
import { PropositionButton } from './PropositionButton';

describe('proposition-button', () => {
    let onClickSpy: jest.Mock;

    beforeEach(()=> {
        onClickSpy = jest.fn();
    })

    it('should render without crash', ()=> {
        const wrapper = mount(<PropositionButton onClick={onClickSpy}/>);

        expect(wrapper.find(PropositionButton))
    })
})