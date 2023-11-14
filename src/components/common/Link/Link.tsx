import cn from 'classnames';

import styles from './link.module.scss';
import { LinkProps } from '@/types';

export default function Link({ href, children, className, ...props }: LinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            className={cn(styles.link, className ? className : null)}
            {...props}
        >
            {children}
        </a>
    );
}
