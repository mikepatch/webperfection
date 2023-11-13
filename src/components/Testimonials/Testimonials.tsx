import styles from './testimonials.module.scss';
import { TESTIMONIALS } from '@/constants';
import Slider from '@/components/common/Slider';
import StarRating from './StarRating';

export default function Testimonials() {
    const renderTestimonials = TESTIMONIALS.map((testimonial) => (
        <article key={testimonial.id} className={styles.testimonial}>
            <img src={testimonial.imgSrc} aria-disabled className={styles.testimonialImage} />
            <section className={styles.testimonialBody}>
                <header>
                    <h4 className={styles.testimonialAuthor}>{testimonial.author}</h4>
                    <small className={styles.testimonialRole}>{testimonial.role}</small>
                    <StarRating rating={testimonial.rating} className={styles.testimonialRating} />
                </header>
                <p className={styles.testimonialComment}>{testimonial.comment}</p>
            </section>
        </article>
    ));

    return (
        <section id="testimonialsSection" className={styles.testimonialsWrapper}>
            <header className={styles.header}>
                <h3>Opinie</h3>
            </header>
            <Slider>{renderTestimonials}</Slider>
        </section>
    );
}
