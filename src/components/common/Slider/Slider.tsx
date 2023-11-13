import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './slider.module.scss';
import { SliderProps } from '@/types';

export default function Slider({ autoplay, children }: SliderProps) {
    return (
        <Swiper
            autoplay={autoplay ? autoplay : false}
            centerInsufficientSlides
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
            grabCursor
            modules={[Pagination, Autoplay, A11y]}
            pagination={{
                clickable: true,
                bulletClass: styles.sliderDot,
                bulletActiveClass: styles.sliderDotActive,
            }}
            slidesPerView="auto"
            spaceBetween={30}
            className={styles.slider}
        >
            {React.Children.map(children, (child) => (
                <SwiperSlide className={styles.sliderSlide}>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
}
