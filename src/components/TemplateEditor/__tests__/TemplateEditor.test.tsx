/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'tests';
import { TemplateEditor } from '../TemplateEditor';

describe('<TemplateEditor />', () => {
    it('should match snapshot', () => {
        const { container } = render(<TemplateEditor />);
        expect(container).toMatchSnapshot();
    });
});
