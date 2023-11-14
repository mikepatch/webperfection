import {
    ChangeEvent,
    ComponentPropsWithoutRef,
    FormEvent,
    LinkHTMLAttributes,
    ReactNode,
} from 'react';

export type PropsWithChildren<P = unknown> = P & { children: ReactNode; className?: string };

export type MenuItem = {
    id: string;
    label: string;
    href: string;
};

export type MenuProps = {
    isOpen: Boolean;
    closeMenu: () => void;
};

export type BurgerButtonProps = {
    isOpen: Boolean;
    toggleMenu: () => void;
};

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

export type FormProps = {
    values: FormState;
    errors: ErrorsState;
    fields: FormField[];
    onSubmit: (e: FormEvent) => Promise<void>;
    onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    title?: string;
};

export type LabelProps = PropsWithChildren & {
    id: string;
};

export type TextareaProps = {
    id: string;
    required: boolean;
    rows?: number;
    className?: string;
};

export type InputProps = {
    id: string;
    type: string;
    required: boolean;
    className?: string;
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

export type StarRatingProps = {
    rating: StarRatingValue;
    className?: string;
};

export type FormState = {
    [key: string]: string;
};

export type ServerResponseState = {
    error: boolean;
    success: boolean;
};

export type ErrorsState = {
    [key: string]: string;
};

export type BrandLogoProps = {
    variant?: 'full' | 'mini';
    className?: string;
};

export type ButtonProps = PropsWithChildren & {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

export type CTAButtonProps = PropsWithChildren & {
    href: string;
    variant?: 'bordered';
};

export type IconProps = ComponentPropsWithoutRef<'svg'> & {
    id: string;
};

export type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> &
    PropsWithChildren & {
        href: string;
    };

export type PopupProps = {
    text: string;
    title?: string;
    emoji?: string;
    buttonText?: string;
    closePopup: () => void;
};

export type AutoPlay = {
    delay: number;
};

export type SliderProps = PropsWithChildren & {
    autoplay?: AutoPlay;
};

export type SocialMediaBarProps = {
    color?: string;
};

export type SocialMediaItem = {
    id: string;
    iconId: string;
    href: string;
};
