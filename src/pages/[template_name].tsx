import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { Box } from 'components/Box';
import { getTemplatesById } from 'services/templates';
import { TemplateEditor } from 'components/TemplateEditor';
import { MailTemplateProvider } from 'providers/TemplateContext';
import { Preview } from 'components/Preview';
import { VariablesEditor } from 'components/VariablesEditor';

interface IProps {
    templateData: any;
}

export default function TemplateEdit({ templateData }: IProps): ReactElement {
    return (
        <MailTemplateProvider initialCode={templateData?.content}>
            <Box display='flex' alignItems='stretch' minHeight='100vh'>
                <Box width='50%' backgroundColor='#f3f5f7'>
                    <Preview />
                </Box>
                <Box
                    width='50%'
                    backgroundColor='#fff'
                    display='flex'
                    justifyContent='space-between'
                    flexDirection='column'
                >
                    <Box height='70vh'>
                        <TemplateEditor />
                    </Box>
                    <Box height='30vh' p='20px' backgroundColor='#3758fa'>
                        <VariablesEditor />
                    </Box>
                </Box>
            </Box>
        </MailTemplateProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    try {
        const templateData = await getTemplatesById(query.template_name);
        return {
            props: {
                templateData,
            },
        };
    } catch (error) {
        return {
            redirect: { permanent: false, destination: '/error/error' },
        };
    }
};
