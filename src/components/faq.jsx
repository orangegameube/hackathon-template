import { useState } from 'react';
import FAQfunc from '../components/faqfunc.jsx';
import '../styles/faq.css';

export const FAQ = () => {
    const [faqs, setfaqs] = useState([
        {
            q: "What's a hackathon?",
            a: "A hackathon is an event where a bunch of people get together and build technical projects, which receive awards and recognition. You'll be able to enjoy free workshops and mentorship from our team in order to turn your vision into a reality!",
            open: false
        },
        {
            q: "Are we actually... hacking?",
            a: 'The definition of "hack" in this situation describes using tools to create something awesome. We will NOT be infiltrating any computers or systems (sorry to disappoint)!',
            open: false
        },
        {
            q: "Who is eligible to participate in this hackathon?",
            a: "Something",
            open: false
        },
        {
            q: "What does this event cost to attend?",
            a: "Nothing! This event is free to all attendees, all you need to do is register!",
            open: false
        },
        {
            q: "What if I don't know how to code?",
            a: "Something",
            open: false
        },
        {
            q: "What should I bring to the event?",
            a: "Something",
            open: false
        },
        {
            q: "What if I don't have a team?",
            a: "Something",
            open: false
        },
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open =! faq.open
            } else {
                faq.open = false
            }

            return faq;
        }))
    }

    return (
        <div>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQfunc faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                ))}
            </div>
        </div>
    );
}