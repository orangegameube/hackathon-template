import { Front } from '../components/front.jsx';
import { FAQ } from '../components/faq.jsx';
import { Nav } from '../components/nav.jsx';
import { Schedule } from '../components/schedule.jsx';
import { Logistics } from '../components/logistics.jsx';
import { Tracks } from '../components/tracks.jsx';
import { Sponsors } from '../components/sponsors.jsx';
import { Team } from '../components/team.jsx';
import { Contact } from '../components/contact.jsx'

export const Home = () => {

    return (
        <div>
            <Nav />
            <div>
                <Front />
                <div className="bg-slate-950 text-slate-100 overflow-x-hidden w-xxl">
                    <Logistics />
                    <Tracks />
                    <Schedule />
                    <FAQ />
                </div>
                <div className="bg-pink-950 text-slate-100 overflow-x-hidden w-xxl">
                    <Sponsors />
                    <Team />
                    <Contact />
                </div>
            </div>
        </div>
    );
};