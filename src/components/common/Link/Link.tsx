import cn from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { LinkHTMLAttributes } from 'react';

import { PropsWithChildren } from '../../../types';
import styles from './link.module.scss';

type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> &
    PropsWithChildren & {
        to: string;
    };

export default function Link({ to, children, className, ...props }: LinkProps) {
    return (
        <RouterLink to={to} className={cn(styles.link, className ? className : null)} {...props}>
            {children}
        </RouterLink>
    );
}
