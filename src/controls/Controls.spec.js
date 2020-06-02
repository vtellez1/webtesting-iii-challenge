// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument, toHaveClass, toBeDisabled } from '@testing-library/jest-dom';

import Controls from './Controls';
import { testNameToKey } from 'jest-snapshot/build/utils';

expect.extend({toBeInTheDocument, toHaveClass, toBeDisabled});

test("buttons to toggle render", () => {
    const { getByTestId, toHaveClass } = render(<Controls/>);
    expect(getByTestId("button", "button2")).toHaveClass("toggle-btn");
})

test("locked renders correct status", ()=>{
    const { getByText, rerender } = render(<Controls locked/>);
    getByText(/unlock gate/i);

    rerender(<Controls locked={false}/>);
    getByText(/lock gate/i);
})

test("closed renders correct status", ()=> {
    const { getByText, rerender } = render(<Controls closed/>);
    getByText(/open gate/i);

    rerender(<Controls closed={false}/>);
    getByText(/close gate/i);
})

test("Closed button disabled if gate is locked", ()=> {
    const toggleLocked = jest.fn();
    const {getByText} = render(<Controls toggleLocked={toggleLocked}/>);
    const lockButton = getByText('Lock Gate');
    fireEvent.click(lockButton);
    expect(toggleLocked).not.toHaveBeenCalled;
})

test("Lock button disabled if gate is locked", ()=> {
    const toggleClosed = jest.fn();
    const {getByText} = render(<Controls toggleClosed={toggleClosed}/>);
    const closeButton = getByText('Close Gate');
    fireEvent.click(closeButton);
    expect(toggleClosed).not.toHaveBeenCalled;
})