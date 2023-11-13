import { PropsWithChildren } from '@/types';

export default function Field({ className, children }: PropsWithChildren) {
    return <div className={className}>{children}</div>;
}
