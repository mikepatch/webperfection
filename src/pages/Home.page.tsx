import Description from '../components/Home/Description';
import Form from '../components/Home/Form';
import Hero from '../components/Home/Hero';
import Offer from '../components/Home/Offer';
import Team from '../components/Home/Team';

export default function Home() {
    return (
        <>
            <Hero />
            <main>
                <Offer />
                <Form />
                <Description />
                <Team />
            </main>
        </>
    );
}
