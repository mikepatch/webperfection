import styles from './heroIntro.module.scss';
import Button from '../common';

export default function HeroIntro() {
    return (
        <section className={styles.heroIntroWrapper}>
            <h2 className={styles.heroSlogan}>Twój pomysł, nasza realizacja</h2>
            <p className={styles.heroDescription}>
                Zrealizuj swój pomysł na aplikację już dziś! Oferujemy Ci nie tylko możliwość
                tworzenia projektu zespołem specjalistów, ale także pomagamy Ci zminimalizować
                koszty startowe. Nasz zespół składa się z absolwentów, którzy chcą zdobyć
                doświadczenie w IT pod okiem doświadczonego seniora. Wspieramy Cię w realizacji
                Twojego projektu, byś mógł skupić się na tym, co dla Ciebie najważniejsze - na
                rozwijaniu Twojego pomysłu.
            </p>
            <Button>Stwórz swoją aplikację z nami</Button>
        </section>
    );
}
