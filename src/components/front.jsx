import '../styles/front.css'

export const Front = () => {
    return (
        <div id='frontpage' className='bg-rose-700 pl-20 pr-20'>
            <div className='maincontainer flex justify-center p-16'>
                <div>
                    <h1 className='text-2xl font-black mb-7'>Hackathon Template</h1>
                    <h6 className='text-2xl mb-7'>A hackathon website template for future use and practice with creating assets & graphic design</h6>
                    <button className='text-center rsvp'>RSVP (does NOTHING)</button>
                </div>
                <img src='/testimg.png'/>
            </div>
        </div>
    )
}