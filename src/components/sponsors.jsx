import '../styles/collections.css'

export const Sponsors = () => {

    return (
        <div className='text-center mt-24 text-2xl font-black' id='sponsors'>
            <h1>Our Sponsors</h1>
            <div className='sponsorcont'>
                <img src='placeholder.png' className='w-90 sponsor'/>
                <img src='placeholder.png' className='sponsor'/>
                <img src='placeholder.png' className=' w-40 sponsor'/>
            </div>
            <div className='sponsorcont'>
                <img src='placeholder.png' className=' w-70 sponsor'/>
                <img src='placeholder.png' className='sponsor'/>
                <img src='placeholder.png' className=' w-40 sponsor'/>
                <img src='placeholder.png' className='sponsor'/>
            </div>
        </div>
    )
}