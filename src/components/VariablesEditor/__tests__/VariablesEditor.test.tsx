/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, queryByAttribute } from 'tests';
import { VariablesEditor } from '../VariablesEditor';

describe('<VariablesEditor />', () => {
    it('should render VariablesEditor', () => {
        const { getByPlaceholderText } = render(<VariablesEditor />);
        expect(
            getByPlaceholderText('Type your template variables...')
        ).toBeTruthy();
    });

    it('should return error', () => {
        const { container, getByText } = render(<VariablesEditor />);
        const getById = queryByAttribute.bind(null, 'id');

        fireEvent.change(getById(container, 'text-area'), {
            target: { value: '{ "user: "marc }' },
        });

        expect(getByText('Ops, looks like something is wrong')).toBeTruthy();
    });
});
