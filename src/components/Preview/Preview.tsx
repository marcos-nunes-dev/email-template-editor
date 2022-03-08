import React, { ReactElement, useMemo } from 'react';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import parse from 'html-react-parser';
import { useTemplate } from 'hooks/useTemplate';
import Mustache from 'mustache';
import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import { saveTemplateById } from 'services/templates';
import { message } from 'antd';

// { "user": {"name": "teste" }, "confirmation": "asd", "aaa": "123123"}

export function Preview(): ReactElement {
    const { code, variables, savedCopy, setSavedCopy } = useTemplate();
    const { query } = useRouter();

    const submitSaveTemplate = () => {
        !code && message.warning('You need to send something in code.');
        saveTemplateById(query.template_name, code)
            .then(() => {
                message.success('Template successfully edited.');
                setSavedCopy(code);
            })
            .catch(() => message.error('Ops, something went wrong.'));
    };

    const CodeMemoized = useMemo(() => {
        return parse(Mustache.render(code, JSON.parse(variables)));
    }, [code, variables]);

    return (
        <Box
            position='fixed'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='50%'
            overflowY='scroll'
            height='100%'
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                width='90%'
            >
                <Text as='h1' fontSize='xl' fontWeight='400' color='#2d3540'>
                    Preview Template
                </Text>
                <Box>
                    <Button
                        onClick={submitSaveTemplate}
                        disabled={code === savedCopy}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
            <Box
                width='90%'
                backgroundColor='#fff'
                borderRadius='10px'
                overflow='hidden'
                boxShadow='md'
            >
                {CodeMemoized}
            </Box>
        </Box>
    );
}
