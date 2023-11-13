import cn from 'classnames';

import styles from './starRating.module.scss';
import { StarRatingProps } from '@/types';

export default function StarRating({ rating, className }: StarRatingProps) {
    return (
        <ul className={cn(styles.ratingList, className ? className : null)}>
            {[...Array(5)].map((_, index) => (
                <li key={index + rating} className={styles.ratingItem}>
                    {index >= rating ? (
                        <span className={styles.ratingStar}>&#9734;</span>
                    ) : (
                        <span className={styles.ratingStar}>&#9733;</span>
                    )}
                </li>
            ))}
        </ul>
    );
}
