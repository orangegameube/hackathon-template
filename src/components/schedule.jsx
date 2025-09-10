import '../styles/schedule.css'

export const Schedule = () => {
    return (
        <div id='schedule'>
            <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-pink-500/10 to-orange-500/20 border border-fuchsia-400/30 p-12 text-center m-10 schedcont'>
                <h2 className='text-gradient text-5xl md:text-7xl font-black leading-tight mb-6'>Schedule</h2>
                <div className='flex justify-content sched rounded-sm'>
                    <h3 className='mr-16 text-xl p-2 font-bold'>Time</h3>
                    <p>Stuff happens at this time</p>
                </div>
                <div className='flex justify-content sched rounded-sm'>
                    <h3 className='mr-16 text-xl p-2 font-bold'>Time</h3>
                    <p>Stuff happens at this time</p>
                </div>
                <div className='flex justify-content sched rounded-sm'>
                    <h3 className='mr-16 text-xl p-2 font-bold'>Time</h3>
                    <p>Stuff happens at this time</p>
                </div>
            </div>
        </div>
    )
}