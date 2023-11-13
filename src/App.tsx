import './styles/main.scss';

import Description from './components/Description';
import Layout from './components/Layout';
import Offer from './components/Offer';
import Summary from './components/Summary';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App() {
    return (
        <Layout>
            <Offer />
            <ContactForm />
            <Description />
            <Team />
            <Summary />
            <Testimonials />
        </Layout>
    );
}

export default App;
