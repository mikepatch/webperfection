import { useState } from 'react';
import { FormField } from '../types';

type FormState = {
    [key: string]: string;
};

type ErrorsState = {
    [key: string]: string;
};

export function useForm(initialValues: FormState, fields: FormField[]) {
    const [values, setValues] = useState<FormState>(initialValues);
    const [errors, setErrors] = useState<ErrorsState>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const handleSubmit = (e: React.FormEvent, callback: () => void) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            callback();
            setValues(initialValues);
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = () => {
        let validationErrors: ErrorsState = {};

        fields.forEach((field) => {
            if (field.required && !values[field.name]) {
                validationErrors[field.name] = `Pole jest wymagane.`;
            } else if (field.pattern && !new RegExp(field.pattern).test(values[field.name])) {
                validationErrors[field.name] = field.errorMessage;
            }
        });

        return validationErrors;
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
}
