import cn from 'classnames';

import { PropsWithChildren } from '../../../types';
import styles from './button.module.scss';

type ButtonProps = PropsWithChildren & {
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
};

export default function Button({ type = 'button', onClick, className, children }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={cn(styles.btn, className)}>
            {children}
        </button>
    );
}
