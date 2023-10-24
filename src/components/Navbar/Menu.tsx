import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './menu.module.scss';
import SocialMediaBar from '../SocialMediaBar';
import BrandLogo from '../common/BrandLogo';
import { MENU_ITEMS } from '../../constants';

type MenuProps = {
    isOpen: Boolean;
};

export default function Menu({ isOpen }: MenuProps) {
    const menuStyles = cn(styles.menuBar, isOpen && styles.active);

    const renderMenuItems = MENU_ITEMS.map(
        ({ id, label, href }): JSX.Element => (
            <li key={id} className={styles.menuItem}>
                <NavLink
                    to={href}
                    className={({ isActive }) =>
                        isActive ? cn(styles.menuLink, styles.activePage) : styles.menuLink
                    }
                >
                    {label}
                </NavLink>
            </li>
        )
    );
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
