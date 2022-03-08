/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, queryByAttribute } from 'tests';
import { TextArea } from '../TextArea';

describe('<TextArea />', () => {
    it('should render textarea', () => {
        const { getByText } = render(<TextArea value='hello' />);
        expect(getByText('hello')).toBeTruthy();
    });

    it('should fire event', () => {
        const onEdit = jest.fn();

        const { container } = render(<TextArea onChange={() => onEdit()} />);
        const getById = queryByAttribute.bind(null, 'id');

        fireEvent.change(getById(container, 'text-area'), {
            target: { value: 'Hello' },
        });

        expect(onEdit).toBeCalled();
        expect(onEdit).toBeCalledTimes(1);
    });
});
