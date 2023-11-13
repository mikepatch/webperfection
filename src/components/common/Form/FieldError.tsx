import { PropsWithChildren } from '@/types';

export default function FieldError({ className, children }: PropsWithChildren) {
    return <span className={className}>{children}</span>;
}
