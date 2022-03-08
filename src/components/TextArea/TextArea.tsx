import React, { ReactElement } from 'react';
import { TextAreaWrapper } from './styles';

interface Props {
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    onChange?: (target: unknown) => void;
}

export function TextArea({ ...props }: Props): ReactElement {
    return <TextAreaWrapper id='text-area' {...props} />;
}
