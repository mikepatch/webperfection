import { LabelProps } from './types';

export default function FieldLabel({ id, className, children }: LabelProps) {
    return (
        <label htmlFor={id} className={className}>
            {children}
        </label>
    );
}
