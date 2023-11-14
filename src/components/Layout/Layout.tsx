import styles from './layout.module.scss';
import { PropsWithChildren } from '@/types';
import Footer from '../Footer';
import Navigation from '../Navbar';
import Hero from '../Hero';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={styles.wrapper}>
            <Navigation />
            <Hero />
            <main className={styles.mainWrapper}>{children}</main>
            <Footer />
        </div>
    );
}
