import cn from 'classnames';

import { PropsWithChildren } from '../../../types';
import styles from './button.module.scss';

type ButtonProps = PropsWithChildren & {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

export default function Button({ type = 'button', onClick, className, children }: ButtonProps) {
    return (
        <button role="button" type={type} onClick={onClick} className={cn(styles.btn, className)}>
            {children}
        </button>
    );
}
