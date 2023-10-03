import React, { useRef, useState } from 'react';

import BurgerButton from './BurgerButton';
import styles from './navbar.module.scss';
import Menu from './Menu';
import Logo from './Logo';
import { useOnClickOutside } from '../../hooks';

export default function Navbar() {
    const MENU_ITEMS = [
        {
            id: 'aboutProject',
            label: 'O projekcie',
            href: '/project',
        },
        { id: 'aboutUs', label: 'O nas', href: '/about' },
        { id: 'contact', label: 'Kontakt', href: '/contact' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const node = useRef<HTMLElement>(null);
    useOnClickOutside(node, () => setIsMenuOpen(false));

    return (
        <nav ref={node} className={styles.navbar}>
            <div className={styles.navbarContent}>
                <Logo />
                <Menu isOpen={isMenuOpen} menuItems={MENU_ITEMS} />
                <BurgerButton isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
        </nav>
    );
}
