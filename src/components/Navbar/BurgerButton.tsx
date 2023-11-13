import cn from 'classnames';

import styles from './burgerButton.module.scss';
import { BurgerButtonProps } from '@/types';

export default function BurgerButton({ isOpen, toggleMenu }: BurgerButtonProps) {
    const buttonStyles = cn(styles.burgerIcon, isOpen && styles.active);

    return (
        <button className={buttonStyles} onClick={toggleMenu}>
            <div />
            <div />
            <div />
        </button>
    );
}
