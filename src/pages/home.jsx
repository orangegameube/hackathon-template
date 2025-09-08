import { Front } from '../components/front.jsx';
import { FAQ } from '../components/faq.jsx';
import { Nav } from '../components/nav.jsx';
import { Schedule } from '../components/schedule.jsx';
import { Logistics } from '../components/logistics.jsx'

export const Home = () => {
    return (
        <div>
            <Nav />
            <div>
                <Front />
                <div className="bg-slate-950 text-slate-100 overflow-x-hidden">
                    <Logistics />
                    <Schedule />
                    <FAQ />
                </div>
            </div>
        </div>
    );
};