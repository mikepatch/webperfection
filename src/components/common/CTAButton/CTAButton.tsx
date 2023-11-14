import cn from 'classnames';
import { Link as ScrollLink } from 'react-scroll';

import styles from './ctaButton.module.scss';
import { CTAButtonProps } from '@/types';

export default function CTAButton({ href, variant, children, className = '' }: CTAButtonProps) {
    const VARIANTS = {
        bordered: styles.bordered,
    };

    return (
        <ScrollLink
            to={href}
            role="button"
            offset={-150}
            className={cn(styles.ctaBtn, variant && VARIANTS[variant], className)}
        >
            {children}
        </ScrollLink>
    );
}
