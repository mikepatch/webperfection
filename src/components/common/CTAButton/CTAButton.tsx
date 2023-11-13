import cn from 'classnames';

import styles from './ctaButton.module.scss';
import { CTAButtonProps } from '@/types';
import Link from '../Link';

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
