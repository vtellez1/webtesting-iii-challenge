// Test away!
import React from 'react';
import { render } from '@testing-library/react'
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';

import Display from './Display';

import { testNameToKey } from 'jest-snapshot/build/utils';
import expectExport from 'expect';
import { JestEnvironment } from '@jest/environment';


expect.extend({toBeInTheDocument, toHaveClass});

test('correct door status renders', () => {
    const { getByText, rerender } = render(<Display closed />);
    getByText(/closed/i);

    rerender(<Display closed={false}/>);
    getByText(/open/i);
})

test('correct locked status renders', () =>{
    const { getByText, rerender } = render(<Display locked/>);
    getByText(/locked/i);

    rerender(<Display locked={false}/>);
    getByText(/unlocked/i);
})

test('correct classname for closed renders', ()=>{
    const { rerender, getByTestId} = render(<Display closed />);
    expect(getByTestId("closedDisplay")).toHaveClass("led red-led");

    rerender(<Display closed={false}/>);
    expect(getByTestId("closedDisplay")).toHaveClass("led green-led");
})

test('correct classname for locked renders', () => {
    const {rerender, getByTestId } = render(<Display locked/>);
    expect(getByTestId("lockDisplay")).toHaveClass("led red-led");

    rerender(<Display locked={false}/>);
    expect(getByTestId("lockDisplay")).toHaveClass("led green-led");
})