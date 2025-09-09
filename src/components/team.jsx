import '../styles/collections.css'

export const Team = () => {

    return (
        <div className='text-center mt-24 text-2xl font-black' id='team'>
            <h1 className='mt-30'>Meet the Team</h1>
            <hr class="solid mt-8 ml-26 mr-26"/>
            <div className='teamcont m-10'>
                <div className='member bg-white rounded-xl p-4'>
                    <img src='/person.jpg' className='rounded-full memberimg'/>
                    <h5>Firstname Lastname</h5>
                    <p className='role'>Role</p>
                </div>
                <div className='member bg-white rounded-xl p-4'>
                    <img src='/person.jpg' className='rounded-full memberimg'/>
                    <h5>Firstname Lastname</h5>
                    <p className='role'>Role</p>
                </div>
                <div className='member bg-white rounded-xl p-4'>
                    <img src='/person.jpg' className='rounded-full memberimg'/>
                    <h5>Firstname Lastname</h5>
                    <p className='role'>Role</p>
                </div>
                <div className='member bg-white rounded-xl p-4'>
                    <img src='/person.jpg' className='rounded-full memberimg'/>
                    <h5>Firstname Lastname</h5>
                    <p className='role'>Role</p>
                </div>
            </div>
            <div className='teamcont m-10'>
                <div className='member bg-white rounded-xl p-4'>
                    <img src='/person.jpg' className='rounded-full memberimg'/>
                    <h5>Firstname Lastname</h5>
                    <p className='role'>Role</p>
                </div>
                <div className='member bg-white rounded-xl p-4'>
                    <img src='/person.jpg' className='rounded-full memberimg'/>
                    <h5>Firstname Lastname</h5>
                    <p className='role'>Role</p>
                </div>
                <div className='member bg-white rounded-xl p-4'>
                    <img src='/person.jpg' className='rounded-full memberimg'/>
                    <h5>Firstname Lastname</h5>
                    <p className='role'>Role</p>
                </div>
            </div>
        </div>
    )
}