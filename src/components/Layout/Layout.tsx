import { PropsWithChildren } from '../../types';
import Navigation from '../Navbar';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Navigation />
            {children}
            <footer>
                <p>&copy;2023 Copyright</p>
            </footer>
        </div>
    );
}
