import NavLinksStyled from '../components/navlinks.jsx'

export const Nav = () => {
    return (
        <header className="absolute bg-white sticky top-0 flex-wrap mx-auto flex w-full items-center justify-between p-2">
            <img src='/demo.png' alt='logo' className='w-30 m-2'/>
            <NavLinksStyled/>
        </header>
    )
}