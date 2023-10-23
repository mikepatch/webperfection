import { PropsWithChildren } from '../../types';
import Footer from '../Footer';
import Navigation from '../Navbar';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}
