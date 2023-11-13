import cn from 'classnames';

import styles from './menu.module.scss';
import { MENU_ITEMS } from '@/constants';
import { MenuProps } from '@/types';
import SocialMediaBar from '../SocialMediaBar';
import BrandLogo from '../common/BrandLogo';
import Link from '../common/Link';

export default function Menu({ isOpen, closeMenu }: MenuProps) {
    const menuStyles = cn(styles.menuBar, isOpen && styles.active);

    const renderMenuItems = MENU_ITEMS.map(({ id, label, href }) => (
        <li key={id} className={styles.menuItem}>
            <Link to={href} className={cn(styles.menuLink, styles.activePage)} onClick={closeMenu}>
                {label}
            </Link>
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
