import { FormField } from '../../types';

export const FORM_FIELDS: FormField[] = [
    {
        id: 'fullName',
        name: 'fullName',
        label: 'Imię i nazwisko',
        placeholder: 'Jan Kowalski',
        pattern: `^[a-zA-Z\s]`,
        type: 'text',
        required: true,
        errorMessage: 'Wpisz poprawne imię i nazwisko.',
    },
    {
        id: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'jan.kowalski@example.com',
        pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$`,
        type: 'email',
        required: true,
        errorMessage: 'Wpisz poprawny adres email.',
    },
    {
        id: 'budget',
        name: 'budget',
        label: 'Szacowany budżet',
        placeholder: '5000 PLN',
        pattern: `^[0-9]`,
        type: 'text',
        required: true,
        errorMessage: 'Wpisz poprawną wartość.',
    },
    {
        id: 'message',
        name: 'message',
        label: 'Twoja wiadomość',
        placeholder: 'Zależy mi na utworzeniu strony e-commerce. Chcę uzyskać więcej informacji...',
        pattern: '',
        type: 'textarea',
        required: false,
        errorMessage: '',
    },
];
