import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import styles from './team.module.scss';
import { TEAM_MEMBERS } from '../../../constants';
import { TeamMember } from '../../../types';
import BrandLogo from '../../common/BrandLogo';

export default function Team() {
    const renderSlides = TEAM_MEMBERS.map((teamMember: TeamMember) => (
        <SwiperSlide key={teamMember.id} className={styles.sliderSlide}>
            <figure className={styles.sliderFigure}>
                <img src={teamMember.imgSrc} aria-disabled="true" className={styles.sliderImage} />
                <figcaption className={styles.sliderCaption}>
                    <h5 className={styles.captionHeading}>{teamMember.role}</h5>
                </figcaption>
            </figure>
        </SwiperSlide>
    ));

    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <BrandLogo variant="mini" className={styles.logo} />
                <h3 className={styles.headerTitle}>Poznaj Twój zespół seniorów</h3>
            </header>
            <Swiper
                autoplay={{ delay: 3000 }}
                centerInsufficientSlides
                className={styles.slider}
                grabCursor
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    bulletClass: styles.sliderDot,
                    bulletActiveClass: styles.sliderDotActive,
                }}
                slidesPerView="auto"
                spaceBetween={30}
            >
                {renderSlides}
            </Swiper>
        </section>
    );
}
