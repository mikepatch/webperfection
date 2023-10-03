import React from 'react';

import styles from './logo.module.scss';
import LogoIcon from '../../assets/images/brand-logo.svg?react';

export default function Logo() {
    return (
        <a href="#" className={styles.logoLink}>
            <LogoIcon />
        </a>
    );
}
