import '../styles/logistics.css'

export const Logistics = () => {

    return (
        <div classname='padit'>
            <div className='text-center m-10' id='logistics'>
                <h1 className='mb-8'>Event Details</h1>
                <hr class="solid mb-8"/>
                <div className='flex itemcont'>
                    <div className='rounded-xl bg-white p-14 m-7 logitem'>
                        <img />
                        <h3>When</h3>
                        <h5>Sometime</h5>
                    </div>
                    <div className='rounded-xl bg-white p-14 m-7 logitem'>
                        <img />
                        <h3>Where</h3>
                        <h5>Somewhere</h5>
                    </div>
                    <div className='rounded-xl bg-white p-14 m-7 logitem'>
                        <img />
                        <h3>Who</h3>
                        <h5>A great many people</h5>
                        <p className='text-center'>Includes so many</p>
                    </div>
                </div>
            </div>
        </div>
    );

};