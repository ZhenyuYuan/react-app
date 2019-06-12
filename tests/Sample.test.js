import React from 'react';
import { shallow, mount } from 'enzyme';
import Sample from '../src/Sample';
import Enzyme from '../config/enzymeConfig'

describe('<Sample />', () => {
//   it('should call onClickButton1() when click button1', () => {
//     const wrapper = mount(<Sample />);
//     const spy = jest.spyOn(Sample.prototype, 'onClickButton1');
//     wrapper.find('.button1').simulate('click');
//     expect(spy).toHaveBeenCalled();
//   });
  it('should call onClickButton1() when click button1 with prototype', () => {
    const spy = jest.spyOn(Sample.prototype, 'onClickButton1');
    const wrapper = shallow(<Sample />);
    // const wrapper = mount(<Sample />);
    wrapper.find('.button1').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

//   it('should call onClickButton2() when click button2', () => {
//     const wrapper = mount(<Sample />);
//     const spy = jest.spyOn(wrapper.instance(), 'onClickButton2');
//     wrapper.find('.button2').simulate('click');
//     expect(spy).toHaveBeenCalled();
//   });
  it('should call onClickButton2() when click button2', () => {
    const wrapper = mount(<Sample />);
    const spy = jest.spyOn(wrapper.instance(), 'onClickButton2');
    wrapper.instance().forceUpdate();
    wrapper.find('.button2').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});