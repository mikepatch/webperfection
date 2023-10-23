import { useRef, useState } from 'react';
import cn from 'classnames';

import styles from './navbar.module.scss';

import BurgerButton from './BurgerButton';
import Menu from './Menu';
import BrandLogo from '../common/BrandLogo';
import { useScroll } from '../../hooks/useScroll';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export default function Navbar() {

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
                <Menu isOpen={isMenuOpen} />
                <BurgerButton isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
        </nav>
    );
}
