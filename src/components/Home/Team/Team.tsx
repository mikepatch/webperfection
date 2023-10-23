import styles from './team.module.scss';
import { TEAM_MEMBERS } from '../../../constants';
import { TeamMember } from '../../../types';
import BrandLogo from '../../common/BrandLogo';
import Slider from '../../common/Slider';

export default function Team() {
    const renderSlides = TEAM_MEMBERS.map((teamMember: TeamMember) => (
        <div key={teamMember.id} className={styles.sliderWrapper}>
            <figure className={styles.sliderFigure}>
                <img src={teamMember.imgSrc} aria-disabled="true" className={styles.sliderImage} />
                <figcaption className={styles.sliderCaption}>
                    <h5 className={styles.captionHeading}>{teamMember.role}</h5>
                </figcaption>
            </figure>
        </div>
    ));

    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <BrandLogo variant="mini" className={styles.logo} />
                <h3 className={styles.headerTitle}>Poznaj Twój zespół seniorów</h3>
            </header>
            <Slider autoplay={{ delay: 3000 }}>{renderSlides}</Slider>
        </section>
    );
}
