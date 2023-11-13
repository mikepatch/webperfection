import { FormState } from '@/types';

export const sendToWebhook = async (webhookUrl: string, values: FormState) => {
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        };
        const response = await fetch(webhookUrl, options);
        console.log(response);
        if (!response.ok) {
            throw new Error(
                `Request failed with status: ${response.status} ${response.statusText}`
            );
        }

        return response.text();
    } catch (err) {
        console.error(err);
    }
};
