import {  Route, BrowserRouter, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import './styles/main.scss';
import { HomePage, NotFoundPage } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
