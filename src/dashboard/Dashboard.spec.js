// Test away
import React from 'react';
import { render } from '@testing-library/react'
import { testNameToKey } from 'jest-snapshot/build/utils';

import Dashboard from './Dashboard';

test('Controls and Display components renders', () => {
    const { getByTestId } = render(<Dashboard/>);
    getByTestId("displayComponent", "controlsComponent");
})

