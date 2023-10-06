import styles from './hero.module.scss';
import HeroImage from '../../../assets/images/hero-image.svg?react';
import HeroIntro from './HeroIntro';

export default function Hero() {
    return (
        <header className={styles.heroWrapper}>
            <HeroIntro />
            <HeroImage className={styles.heroImage} />
        </header>
    );
}
