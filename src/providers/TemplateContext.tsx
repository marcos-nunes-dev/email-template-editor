import React, { useState, ReactElement } from 'react';

const MailTemplateContext = React.createContext([] as any);

interface IProps {
    initialCode: string;
    children?: React.ReactNode;
}

const MailTemplateProvider = ({
    children,
    initialCode,
}: IProps): ReactElement => {
    const [state, setState] = useState({
        savedCopy: initialCode || '',
        code: initialCode || '',
        variables: '{}',
    });

    return (
        <MailTemplateContext.Provider value={[state, setState]}>
            {children}
        </MailTemplateContext.Provider>
    );
};

export { MailTemplateContext, MailTemplateProvider };
