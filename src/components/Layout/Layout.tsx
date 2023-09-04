import { PropsWithChildren } from '../../types';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <header>
                <h2>webperfection</h2>
                <nav>
                    <ul>
                        <li>O projekcie</li>
                        <li>O nas</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy;2023 Copyright</p>
            </footer>
        </div>
    );
}
