import styles from './summary.module.scss';

import Button from '../../common/Button';
import ImageSmall from '@src/assets/images/summary-mateusz-small.png';
import ImageBig from '@src/assets/images/summary-mateusz-big.png';

export default function Summary() {
    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <h3 className={styles.headerTitle}>
                    Twój pomysł na aplikację – nasza pasja i doświadczenie!
                </h3>
            </header>
            <article className={styles.content}>
                <p className={styles.contentDescription}>
                    Jeśli marzysz o stworzeniu własnej aplikacji, ale nie wiesz, jak to zrobić, mamy
                    dla Ciebie idealne rozwiązanie. Dzięki naszej ofercie zminimalizujesz koszty
                    startowe, a jednocześnie zyskasz dostęp do zespołu młodych, ambitnych
                    programistów, którzy chcą zdobyć doświadczenie. Podczas pracy nad Twoim
                    projektem. Cały czas będziesz mieć pełną kontrolę nad procesem i budżetem.
                    Skontaktuj się z nami już dziś i przekonaj się, jak łatwo i szybko możesz
                    zrealizować swoje marzenia o własnej aplikacji
                </p>
                <footer className={styles.contentFooter}>
                    <p className={styles.footerMentor}>
                        Mateusz Bogolubow - Mentor i Trener Programowania Devmentor.pl
                    </p>
                    <Button type="button" className={styles.footerButton}>
                        Napisz do nas
                    </Button>
                </footer>
                <picture className={styles.contentImage}>
                    <source media="(min-width: 992px)" srcSet={ImageBig} />
                    <img src={ImageSmall} alt="Mateusz Bogolubow" />
                </picture>
            </article>
        </section>
    );
}
