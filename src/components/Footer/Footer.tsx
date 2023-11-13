import styles from './footer.module.scss';
import { MENU_ITEMS } from '@/constants';
import SocialMediaBar from '../SocialMediaBar';
import Link from '../common/Link';

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.footerContent}>
                <nav className={styles.nav}>
                    <h3 className={styles.navTitle}>Nawigacja</h3>
                    <ul className={styles.navList}>
                        {MENU_ITEMS.map(({ id, label, href }) => (
                            <li key={id}>
                                <Link to={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <section className={styles.conditions}>
                    <Link to="/link">Regulamin i warunki współpracy</Link>
                </section>
                <section className={styles.address}>
                    <p className={styles.addressName}>webperfection sp. z o. o.</p>
                    <address className={styles.addressDetails}>
                        ul. Szpitalna 42, 32-300 Olkusz
                    </address>
                </section>
                <section className={styles.socials}>
                    <SocialMediaBar color="#F3F3F3" />
                </section>
            </div>
        </footer>
    );
}
