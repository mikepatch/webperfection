import cn from 'classnames';

import styles from './menu.module.scss';
import SocialMediaBar from '../SocialMediaBar';
import BrandLogo from '../common/BrandLogo';

type MenuItem = {
    id: string;
    label: string;
    href: string;
};

type MenuProps = {
    isOpen: Boolean;
    menuItems: MenuItem[];
};

export default function Menu({ isOpen, menuItems }: MenuProps) {
    const menuStyles = cn(styles.menuBar, isOpen && styles.active);
    const renderMenuItems = menuItems.map(
        ({ id, label, href }): JSX.Element => (
            <li key={id} className={styles.menuItem}>
                <a href={href} className={cn(styles.menuLink, styles.activePage)}>
                    {label}
                </a>
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
