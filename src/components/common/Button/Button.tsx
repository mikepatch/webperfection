import { PropsWithChildren } from '../../../types';
import styles from './button.module.scss';

type ButtonProps = PropsWithChildren & {
    href: string;
    variant?: 'default' | 'bordered';
};

export default function Button({
    href,
    variant = 'default',
    children,
    className = '',
}: ButtonProps) {
    const VARIANTS = {
        default: '',
        bordered: styles.bordered,
    };
    return (
        <a href={href} className={`${styles.btn} ${VARIANTS[variant]} ${className}`}>
            {children}
        </a>
    );
}
