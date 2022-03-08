import { Box } from 'components/Box';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

interface IStatus {
    error?: boolean;
}

export const StatusBadge = styled(Box)<IStatus>`
    position: absolute;
    left: 50%;
    top: 0;
    background-color: ${ifProp('error', '#fa3737', '#37fa66')};
    transform: translate(-50%, -50%);
    border-radius: 100px;
    padding: 4px 15px;
    font-size: 10px;
    color: ${ifProp('error', '#6c1212', '#106c27')};
`;
