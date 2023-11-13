import cn from 'classnames';

import styles from './link.module.scss';
import { LinkProps } from '@/types';

export default function Link({ to, children, className, ...props }: LinkProps) {
    return (
        <a href={to} className={cn(styles.link, className ? className : null)} {...props}>
            {children}
        </a>
    );
}
