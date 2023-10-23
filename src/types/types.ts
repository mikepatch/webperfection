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
};

export type TeamMember = {
    id: string;
    role: string;
    imgSrc: string;
};

export type StarRatingValue = 0 | 1 | 2 | 3 | 4 | 5;

export type Testimonial = {
    id: number;
    author: string;
    role: string;
    rating: StarRatingValue;
    comment: string;
    imgSrc: string;
};
