import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { getTemplates } from 'services/templates';
import Link from 'next/link';

interface IProps {
    templateList: string[];
}

export default function Home({ templateList }: IProps): ReactElement {
    return (
        <Box
            display='flex'
            width='100vw'
            minHeight='100vh'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                as='img'
                src='/img/cartalogo.svg'
                alt='Demo Logo'
                maxWidth='160px'
                mb='20px'
            />
            <Box textAlign='center'>
                <Text as='h1' fontWeight='100'>
                    Select a template to edit
                </Text>
                <Box display='flex' flexWrap='wrap' alignItems='center'>
                    {templateList.map((template, idx) => (
                        <Link key={idx} href={`/${template}`}>
                            <a>
                                <Box boxShadow='md' p='20px' m='8px'>
                                    {template}
                                </Box>
                            </a>
                        </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const templateList = await getTemplates();
        return {
            props: {
                templateList,
            },
        };
    } catch (error) {
        return {
            redirect: { permanent: false, destination: '/error/error' },
        };
    }
};
