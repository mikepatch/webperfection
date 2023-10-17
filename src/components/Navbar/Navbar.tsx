import { useRef, useState } from 'react';
import cn from 'classnames';

import BurgerButton from './BurgerButton';
import styles from './navbar.module.scss';
import Menu from './Menu';
import { useOnClickOutside, useScroll } from '../../hooks';
import BrandLogo from '../common/BrandLogo';

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
    const scrollPosition = useScroll();
    const isScrolled = scrollPosition > 20;
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const node = useRef<HTMLElement>(null);
    useOnClickOutside(node, () => setIsMenuOpen(false));

    return (
        <nav ref={node} className={cn(styles.navbar, isScrolled && styles.scrolled)}>
            <div className={styles.navbarContent}>
                <div className={styles.overlay} />
                <a href="#" className={styles.logoLink}>
                    <BrandLogo className={styles.logoImage} />
                </a>
                <Menu isOpen={isMenuOpen} menuItems={MENU_ITEMS} />
                <BurgerButton isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
        </nav>
    );
}
