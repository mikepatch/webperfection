import styles from './offer.module.scss';
import Icon from '../../common/Icon';
import BrandLogo from '../../common/BrandLogo';

export default function Offer() {
    const OFFER_ITEMS = [
        {
            id: 1,
            title: 'Transparentność umowy',
            iconId: 'icon-chat',
            description:
                'U nas nie musisz martwić się o koszty i negocjacje. Gramy w otwarte karty i przedstawiamy jasne warunki współpracy. Wspólnie zdecydujemy, jak najlepiej zrealizować Twój projekt przy maksymalnej transparentności.',
        },
        {
            id: 2,
            title: 'Minimalne  koszty dla Ciebie',
            iconId: 'icon-pay',
            description:
                'Dzięki wykorzystaniu zespołu juniorów i nadzoru Seniora, możemy zrealizować Twój projekt z minimalnym nakładem finansowym.',
        },
        {
            id: 3,
            title: 'Doświadczenie dla juniorów',
            iconId: 'icon-computer',
            description:
                'Zespoły składające się z absolwentów mentoringu Devmentor.pl to pasjonaci IT, którzy chcą zdobyć praktyczne doświadczenie w branży. Dzięki nam, Twoja aplikacja zostanie zrealizowana przez ludzi, którzy chcą się rozwijać w swoim zawodzie.',
        },
    ];

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
        <section className={styles.offerWrapper}>
            <h3 className={styles.offerTitle}>Twój projekt, nasza pasja, minimalny koszt</h3>
            <ul className={styles.offerList}>{renderOfferItems}</ul>
            <BrandLogo variant="mini" className={styles.logo} />
        </section>
    );
}
