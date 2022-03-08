import { Box, BoxProps } from 'components/Box';
import styled from 'styled-components';

export const TextAreaWrapper = styled(Box)<BoxProps | any>`
    resize: none;
    ::placeholder {
        color: #4a5dbb;
        opacity: 1;
    }
    :-ms-input-placeholder {
        color: #4a5dbb;
    }
    ::-ms-input-placeholder {
        color: #4a5dbb;
    }
`;

TextAreaWrapper.defaultProps = {
    as: 'textarea',
    backgroundColor: '#1d308f',
    color: '#fff',
    border: 'none',
    p: '10px',
    width: '100%',
    height: '100%',
    borderRadius: 'lg',
};
