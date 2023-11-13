import Description from '../components/Description';
import Form from '../components/ContactForm';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import Summary from '../components/Summary';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

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
