import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('LandingPage Component', () => {
    it('Smoke Test: Renders Empty', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Snapshot Test: Empty', () => {
        const wrapper = shallow(<LandingPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})