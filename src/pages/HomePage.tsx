import Description from '../components/Home/Description';
import Form from '../components/Home/Form';
import Hero from '../components/Home/Hero';
import Offer from '../components/Home/Offer';
import Summary from '../components/Home/Summary';
import Team from '../components/Home/Team';
import Testimonials from '../components/Home/Testimonials';

export default function HomePage() {
    return (
        <>
            <Hero />
            <main>
                <Offer />
                <Form />
                <Description />
                <Team />
                <Summary />
                <Testimonials />
            </main>
        </>
    );
}
