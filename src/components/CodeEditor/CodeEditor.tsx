import React, { ReactElement } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import { EditorWrapper } from './styles';
import { Box } from 'components/Box';
import { Text } from 'components/Text';

interface Props {
    initialCode?: string;
    codeEditHandler?: (value: string) => void;
    fileName?: string | string[] | undefined;
}

export function CodeEditor({
    initialCode,
    codeEditHandler,
    fileName,
}: Props): ReactElement {
    console.log(initialCode, codeEditHandler, fileName);
    function editorHandler(code: string) {
        codeEditHandler
            ? codeEditHandler(code)
            : console.info('u need to handle me');
    }
    return (
        <Box height='inherit'>
            <Box backgroundColor='#f3f5f7' pt='5px'>
                <Box
                    backgroundColor='#fff'
                    width='fit-content'
                    p='7px 20px'
                    display='flex'
                    alignItems='center'
                    borderTopLeftRadius='md'
                    borderTopRightRadius='md'
                >
                    <Box
                        backgroundColor='#3858f4'
                        width='5px'
                        height='5px'
                        borderRadius='full'
                    />
                    <Text fontSize='sm' m='0' ml='5px' fontWeight='bold'>
                        {fileName || 'undefined.tmp'}
                    </Text>
                </Box>
            </Box>
            <EditorWrapper>
                <Editor
                    value={initialCode || ''}
                    onValueChange={(code) => editorHandler(code)}
                    padding={10}
                    className='code-editor'
                    textareaId='code-editor'
                    highlight={(update) =>
                        highlight(update, languages.markup, 'markup')
                    }
                />
            </EditorWrapper>
        </Box>
    );
}
