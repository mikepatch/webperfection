import Form from '../components/Home/Form';
import Hero from '../components/Home/Hero';
import Offer from '../components/Home/Offer';

export default function Home() {
    return (
        <>
            <Hero />
            <main style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <Offer />
                <Form />
            </main>
        </>
    );
}
