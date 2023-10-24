import { useNavigate } from 'react-router-dom';

import Button from '../common/Button';
import styles from './notFound.module.scss';

export default function NotFound() {
    const navigate = useNavigate();

    const handleReturn = () => navigate(-1);

    return (
        <section className={styles.wrapper}>
            <h2>O nie!</h2>
            <p>Nic tutaj nie ma :(</p>
            <Button type="button" onClick={handleReturn} className={styles.button}>
                Powrót
            </Button>
        </section>
    );
}
