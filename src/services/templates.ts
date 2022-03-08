import { instance } from 'services';

export async function getTemplates(): Promise<string[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await instance('/templates');
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

export async function getTemplatesById(
    name: string | string[] | undefined
): Promise<string> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await instance(`/templates/${name}`);
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

export async function saveTemplateById(
    name: string | string[] | undefined,
    content: string
): Promise<Record<string, never>> {
    return new Promise(async (resolve, reject) => {
        instance
            .put(`/templates/${name}`, {
                content,
            })
            .then(() => {
                resolve({});
            })
            .catch((err) => {
                reject(err);
            });
    });
}
