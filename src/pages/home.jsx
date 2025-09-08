import { Front } from '../components/front.jsx';
import { FAQ } from '../components/faq.jsx';
import { Nav } from '../components/nav.jsx';
import { Schedule } from '../components/schedule.jsx';

export const Home = () => {
    return (
        <div>
            <Nav />
            <Front />
            <Schedule />
            <FAQ />
        </div>
    );
};