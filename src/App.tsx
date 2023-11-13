import './styles/main.scss';

import ContactForm from './components/ContactForm';
import Description from './components/Description';
import Layout from './components/Layout';
import Offer from './components/Offer';
import Summary from './components/Summary';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

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
