
import myTable from '../src/Table'
import React from 'react'
import Enzyme from '../config/enzymeConfig'
import {shallow } from 'enzyme'
 
describe('myTable',()=>{
    it('should hava the `th` "Items"',()=>{
        const wrapper=shallow(
            <myTable/>
        );
        expect(
            wrapper.contains(<th>Items</th>)
        ).toBe(true)
    });
});
 