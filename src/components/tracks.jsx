import '../styles/logistics.css'

export const Tracks = () => {

    return (
        <div className='text-center m-10' id='logistics'>
            <h1 className='mb-5'>Build Tracks</h1>
            <p className='mb-8'>Choose a passion and build something amazing with code!</p>
            <hr class="solid mb-8"/>
            <div className='flex itemcont'>
                <div className='rounded-xl bg-white p-10 m-5 track'>
                    <img />
                    <h3>Financial Literacy</h3>
                    <h6>Using SQL to mimic real-world situations and careers in finance</h6>
                </div>
                <div className='rounded-xl bg-white p-10 m-5 track'>
                    <img />
                    <h3>Neuroscience</h3>
                    <h6>TBD</h6>
                </div>
                <div className='rounded-xl bg-white p-10 m-5 track'>
                    <img />
                    <h3>Graphic Design</h3>
                    <h6>TBD</h6>
                </div>
            </div>
        </div>
    );

};