import { Box } from 'components/Box';
import styled from 'styled-components';

export const EditorWrapper = styled(Box)`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
    height: inherit;
    overflow: auto;
    .code-editor {
        font-family: 'Fira Code', monospace;
        font-weight: 400;
        font-size: 13px !important;
        line-height: 16px;
        white-space: pre;
        min-width: 100%;
        min-height: 100%;
        float: left;
        & > textarea,
        & > pre {
            outline: none;
            white-space: pre !important;
        }
        textarea:focus-visible {
            outline: none;
        }
    }
`;
