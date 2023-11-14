import cn from 'classnames';
import { Link as ScrollLink } from 'react-scroll';

import styles from './menu.module.scss';
import { MENU_ITEMS } from '@/constants';
import { MenuProps } from '@/types';
import SocialMediaBar from '../SocialMediaBar';
import BrandLogo from '../common/BrandLogo';

export default function Menu({ isOpen, closeMenu }: MenuProps) {
    const menuStyles = cn(styles.menuBar, isOpen && styles.active);

    const renderMenuItems = MENU_ITEMS.map(({ id, label, href }) => (
        <li key={id} className={styles.menuItem}>
            <ScrollLink
                activeClass={styles.activePage}
                to={href}
                spy
                offset={-150}
                className={styles.menuLink}
                onClick={closeMenu}
            >
                {label}
            </ScrollLink>
        </li>
    ));

    return (
        <aside className={menuStyles}>
            <ul className={styles.menuList}>{renderMenuItems}</ul>
            <div className={styles.menuFooter}>
                <BrandLogo className={styles.logo} />
                <SocialMediaBar color="#E67027" />
            </div>
        </aside>
    );
}
