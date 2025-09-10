import '../styles/collections.css'

export const Sponsors = () => {

    return (
        <div className='text-center mt-24 text-2xl font-black' id='sponsors'>
            <h1>Our Sponsors</h1>
            <div className='sponsorcont'>
                <img src='placeholder.png' className='w-90 sponsor odd'/>
                <img src='placeholder.png' className='sponsor even'/>
                <img src='placeholder.png' className=' w-40 sponsor odd'/>
            </div>
            <div className='sponsorcont'>
                <img src='placeholder.png' className=' w-70 sponsor even'/>
                <img src='placeholder.png' className='sponsor odd'/>
                <img src='placeholder.png' className=' w-40 sponsor even'/>
                <img src='placeholder.png' className='sponsor odd'/>
            </div>
        </div>
    )
}