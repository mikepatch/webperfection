import styles from './offer.module.scss';
import { OFFER_ITEMS } from '@/constants';
import Icon from '@/components/common/Icon';
import BrandLogo from '@/components/common/BrandLogo';

export default function Offer() {
    const renderOfferItems = OFFER_ITEMS.map(({ id, title, iconId, description }) => (
        <li key={id} className={styles.offerItem}>
            <header className={styles.offerItemHeader}>
                <Icon id={iconId} className={styles.offerItemIcon} />
                <h4 className={styles.offerItemTitle}>{title}</h4>
            </header>
            <p className={styles.offerItemContent}>{description}</p>
        </li>
    ));

    return (
        <section id="offerSection" className={styles.offerWrapper}>
            <h3 className={styles.offerTitle}>Twój projekt, nasza pasja, minimalny koszt</h3>
            <ul className={styles.offerList}>{renderOfferItems}</ul>
            <BrandLogo variant="mini" className={styles.logo} />
        </section>
    );
}
