import React, { ReactElement, useState } from 'react';
import { TextArea } from 'components/TextArea';
import { useTemplate } from 'hooks/useTemplate';
import { Box } from 'components/Box';
import { StatusBadge } from './styles';

export function VariablesEditor(): ReactElement {
    const { setVariables } = useTemplate();
    const [variablesError, setVariablesError] = useState<boolean | null>(null);

    function onVariablesChange(e: any) {
        try {
            setVariablesError(false);
            JSON.parse(e.target.value);
            setVariables(e.target.value);
        } catch (error) {
            setVariablesError(true);
        }
    }

    return (
        <Box position='relative' height='100%'>
            {variablesError !== null && (
                <StatusBadge error={variablesError}>
                    {variablesError
                        ? 'Ops, looks like something is wrong'
                        : 'Done'}
                </StatusBadge>
            )}
            <TextArea
                onChange={onVariablesChange}
                placeholder='Type your template variables...'
            />
        </Box>
    );
}
