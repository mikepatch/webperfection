import { PropsWithChildren } from '../../types';
import styles from './button.module.scss';

export default function Button({ children }: PropsWithChildren) {
    return <button className={styles.btn}>{children}</button>;
}
