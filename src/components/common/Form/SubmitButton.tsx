import { PropsWithChildren } from '@/types';
import Button from '../Button';

export default function SubmitButton({ className, children }: PropsWithChildren) {
    return (
        <Button type="submit" className={className}>
            {children}
        </Button>
    );
}
