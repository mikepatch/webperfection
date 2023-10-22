import { ReactNode } from 'react';

export type PropsWithChildren<P = unknown> = P & { children: ReactNode; className?: string };

export type FormField = {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    pattern: string;
    type: 'text' | 'number' | 'email' | 'submit' | 'textarea';
    required: boolean;
    errorMessage: string;
}

export type TeamMember = {
    id: string;
    role: string;
    imgSrc: string;
}