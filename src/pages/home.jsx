import { Front } from '../components/front.jsx';
import { FAQ } from '../components/faq.jsx';
import { Nav } from '../components/nav.jsx';

export const Home = () => {
    return (
        <div>
            <Nav />
            <Front />
            <FAQ />
        </div>
    );
};