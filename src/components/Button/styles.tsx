import styled from 'styled-components';
import { Box, BoxProps } from 'components/Box';
export const ButtonWrapper = styled(Box)<BoxProps | any>`
    border: none;
    cursor: pointer;
    [disabled='disabled'],
    :disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

ButtonWrapper.defaultProps = {
    as: 'button',
    backgroundColor: '#3758fa',
    borderRadius: 'md',
    color: '#fff',
    p: '5px 15px',
    fontSize: 'md',
};
