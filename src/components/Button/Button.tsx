import React, { ReactElement } from 'react';
import { ButtonWrapper } from './styles';

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export function Button({ children, ...props }: Props): ReactElement {
    return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}
