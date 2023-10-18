import Description from '../components/Home/Description';
import Form from '../components/Home/Form';
import Hero from '../components/Home/Hero';
import Offer from '../components/Home/Offer';

export default function Home() {
    return (
        <>
            <Hero />
            <main>
                <Offer />
                <Form />
                <Description />
            </main>
        </>
    );
}
