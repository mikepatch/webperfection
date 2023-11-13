import { InputProps } from './types';

export default function Input({ id, required, type, className, ...props }: InputProps) {
    return (
        <input
            id={id}
            type={type}
            required={required}
            aria-required={required}
            className={className}
            {...props}
        />
    );
}
