import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('hides password quality bar by default', () => {
   const tree = renderer.create(<PasswordInput htmlId="test" name="test" onChange={() => {}} value="asdasdasdasd"/>).toJSON();
   expect(tree).toMatchSnapshot();
});

test('toggles input type when show/hide password clicked', () => {
   const wrapper = shallow(
       <PasswordInput
           htmlId="test"
           name="test"
           onChange={() => {}}
           showVisibilityToggle
           value=""
       />
   );
   expect(wrapper.find({type: 'password'})).toHaveLength(1);
   expect(wrapper.find({type: 'text'})).toHaveLength(0);

   wrapper.find('a').simulate('click');

   expect(wrapper.find({type: 'password'})).toHaveLength(0);
   expect(wrapper.find({type: 'text'})).toHaveLength(1);
});
