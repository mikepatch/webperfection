import styles from './layout.module.scss';
import { PropsWithChildren } from '../../types';
import Footer from '../Footer';
import Navigation from '../Navbar';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={styles.wrapper}>
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}
