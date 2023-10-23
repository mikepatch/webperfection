import styles from './testimonials.module.scss';
import Slider from '../../common/Slider';
import StarRating from './StarRating';
import { TESTIMONIALS } from '../../../constants';

export default function Testimonials() {
    const renderTestimonials = TESTIMONIALS.map((testimonial) => (
        <article key={testimonial.id} className={styles.testimonial}>
            <img src={testimonial.imgSrc} aria-disabled className={styles.testimonialImage} />
            <section className={styles.testimonialBody}>
                <header>
                    <h3 className={styles.testimonialAuthor}>{testimonial.author}</h3>
                    <small className={styles.testimonialRole}>{testimonial.role}</small>
                    <StarRating rating={testimonial.rating} className={styles.testimonialRating} />
                </header>
                <p className={styles.testimonialComment}>{testimonial.comment}</p>
            </section>
        </article>
    ));

    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <h2>Opinie</h2>
            </header>
            <Slider>{renderTestimonials}</Slider>
        </section>
    );
}
