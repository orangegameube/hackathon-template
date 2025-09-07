function FAQfunc({faq, index, toggleFAQ}) {
    return (
        <div 
            className={"faq" + (faq.open ? 'open' : '')} 
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className='faq-question'>
                {faq.q}
            </div>
            <div className='faq-answer'>
               {faq.a}
            </div>
        </div>
    )
}

export default FAQfunc;