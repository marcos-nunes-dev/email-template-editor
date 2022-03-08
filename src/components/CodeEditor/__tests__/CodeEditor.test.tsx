/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, queryByAttribute } from 'tests';
import { CodeEditor } from '../CodeEditor';

describe('<CodeEditor />', () => {
    it('should render CodeEditor', () => {
        const { getByText } = render(
            <CodeEditor
                initialCode='<h1>hello world</h1>'
                fileName='init.tmp'
            />
        );
        expect(getByText('<h1>hello world</h1>')).toBeTruthy();
    });

    it('should fire event', () => {
        const onEdit = jest.fn();

        const { container } = render(
            <CodeEditor
                initialCode='<h1>hello world</h1>'
                fileName='init.tmp'
                codeEditHandler={onEdit}
            />
        );
        const getById = queryByAttribute.bind(null, 'id');

        fireEvent.change(getById(container, 'code-editor'), {
            target: { value: '<span>Hi</span>' },
        });

        expect(onEdit).toBeCalled();
        expect(onEdit).toBeCalledTimes(1);
    });
});
