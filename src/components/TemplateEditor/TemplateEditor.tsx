import React, { ReactElement } from 'react';
import { CodeEditor } from 'components/CodeEditor';
import { useTemplate } from 'hooks/useTemplate';
import { useRouter } from 'next/router';

export function TemplateEditor(): ReactElement {
    const { code, setCode } = useTemplate();
    const { query } = useRouter();
    return (
        <CodeEditor
            initialCode={code}
            codeEditHandler={setCode}
            fileName={query.template_name}
        />
    );
}
