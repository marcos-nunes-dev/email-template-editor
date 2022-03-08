import { useContext } from 'react';
import { MailTemplateContext } from 'providers/TemplateContext';

export const useTemplate = () => {
    const [state, setState] = useContext(MailTemplateContext);

    const setCode = (code: string) => {
        setState({ ...state, code });
    };

    const setVariables = (variables: string) => {
        setState({ ...state, variables });
    };

    const setSavedCopy = (savedCopy: string) => {
        setState({ ...state, savedCopy });
    };

    return {
        code: state?.code,
        variables: state?.variables,
        savedCopy: state?.savedCopy,
        setCode,
        setVariables,
        setSavedCopy,
    };
};
