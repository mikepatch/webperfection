import { TextareaProps } from './types';

export default function Textarea({ id, required, rows = 4, className, ...props }: TextareaProps) {
    return (
        <textarea
            id={id}
            required={required}
            aria-required={required}
            rows={rows}
            className={className}
            {...props}
        />
    );
}
