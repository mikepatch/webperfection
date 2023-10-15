import { PropsWithChildren } from '../../types';
import styles from './button.module.scss';

export default function Button({ children, className }: PropsWithChildren) {
    return <button className={`${styles.btn} ${className}`}>{children}</button>;
}
