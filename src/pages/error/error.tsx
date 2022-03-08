import React, { ReactElement } from 'react';
import { Result } from 'antd';
import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import { Box } from 'components/Box';

export default function error(): ReactElement {
    const { push } = useRouter();
    return (
        <Box
            width='100vw'
            minHeight='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Result
                status='500'
                title='Something went wrong!'
                subTitle='Sorry, try again later.'
                extra={<Button onClick={() => push('/')}>Back Home</Button>}
            />
        </Box>
    );
}
