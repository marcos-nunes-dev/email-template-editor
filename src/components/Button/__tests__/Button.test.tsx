/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from 'tests';
import { Button } from '../Button';

const text = 'Its a button';

describe('<Button />', () => {
    it('should render Button', () => {
        const { getByText } = render(<Button>{text}</Button>);
        expect(getByText(text)).toBeTruthy();
    });

    it('should fire event', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <Button onClick={onClick()}>{text}</Button>
        );
        fireEvent.click(getByText(text));

        expect(onClick).toBeCalled();
        expect(onClick).toBeCalledTimes(1);
    });
});
