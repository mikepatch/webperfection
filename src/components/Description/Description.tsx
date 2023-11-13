import styles from './description.module.scss';
import HeaderImage from '@/assets/images/description-header-logo.png';
import CTAButton from '@/components/common/CTAButton';

export default function Description() {
    return (
        <section id="descriptionSection" className={styles.descriptionWrapper}>
            <div className={styles.sectionImage} />
            <article className={styles.body}>
                <header className={styles.header}>
                    <h3 className={styles.headerTitle}>
                        Zrealizuj swój projekt i pomóż w rozwoju młodych talentów IT
                    </h3>
                    <img src={HeaderImage} aria-hidden="true" className={styles.headerImage} />
                </header>
                <section className={styles.contentWrapper}>
                    <p className={styles.content}>
                        Absolwenci programu mentoringowego pod okiem Mateusza Bogolubowa są gotowi,
                        by pomóc Ci zrealizować Twój pomysł na aplikację w sposób, który jest nie
                        tylko efektywny, ale i bardzo atrakcyjny dla Twojego portfela. Dlaczego? To
                        proste. Nasi absolwenci, którzy wcześniej pracowali w innych branżach,
                        znaleźli swoje powołanie w IT i są teraz gotowi wykorzystać swoje
                        umiejętności, by pomóc Ci osiągnąć sukces.
                    </p>
                    <p className={styles.content}>
                        Korzystając z naszych usług, masz pewność, że pracujesz z ludźmi, którzy są
                        prawdziwymi pasjonatami IT. Ich zapał do pracy jest niesamowity, a ich
                        pozytywne nastawienie sprawia, że praca z nimi jest czystą przyjemnością.
                        Dzięki temu, praca nad Twoim projektem nie tylko będzie efektywna, ale i
                        przyjemna.
                    </p>
                </section>
                <CTAButton href="#" variant="bordered" className={styles.ctaButton}>
                    Współpracuj z nami
                </CTAButton>
            </article>
        </section>
    );
}
