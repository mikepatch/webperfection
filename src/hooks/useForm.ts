import { ChangeEvent, FormEvent, useState } from 'react';
import { ErrorsState, FormField, FormState, ServerResponseState } from '../types';
import { sendToWebhook } from '@/utils';

export function useForm(initialValues: FormState, fields: FormField[]) {
    const [values, setValues] = useState<FormState>(initialValues);
    const [serverResponse, setServerResponse] = useState<ServerResponseState>({
        error: false,
        success: false,
    });
    const [errors, setErrors] = useState<ErrorsState>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });

        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        const field = fields.find((f) => f.name === name);

        if (!field) return;

        let validationError = '';

        if (field.required && !value) {
            validationError = `Pole jest wymagane.`;
        } else if (field.pattern && !new RegExp(field.pattern).test(value)) {
            validationError = field.errorMessage;
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: validationError }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const webhookUrl = target.action;

        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            const response = await sendToWebhook(webhookUrl, values);
            if (!response) {
                return setServerResponse({
                    ...serverResponse,
                    error: true,
                });
            }

            setServerResponse({ error: false, success: true });
            setValues(initialValues);
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = () => {
        let validationErrors: ErrorsState = {};

        fields.forEach((field) => {
            if (field.required && !values[field.name]) {
                validationErrors[field.name] = `Uzupełnij pole.`;
            } else if (field.pattern && !new RegExp(field.pattern).test(values[field.name])) {
                validationErrors[field.name] = field.errorMessage;
            }
        });

        return validationErrors;
    };

    return {
        values,
        serverResponse,
        errors,
        handleChange,
        handleSubmit,
    };
}
