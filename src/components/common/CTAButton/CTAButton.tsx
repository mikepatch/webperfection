import cn from 'classnames';

import { PropsWithChildren } from '../../../types';
import styles from './ctaButton.module.scss';
import Link from '../Link';

type CTAButtonProps = PropsWithChildren & {
    href: string;
    variant?: 'bordered';
};

export default function CTAButton({ href, variant, children, className = '' }: CTAButtonProps) {
    const VARIANTS = {
        bordered: styles.bordered,
    };

    return (
        <Link
            to={href}
            role="button"
            className={cn(styles.ctaBtn, variant && VARIANTS[variant], className)}
        >
            {children}
        </Link>
    );
}
