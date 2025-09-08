import NavLinksStyled from '../components/navlinks.jsx'

export const Nav = () => {
    return (
        <header className="bg-dark-background sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <img src='/demo.png' alt='logo' className='w-30 m-2'/>
            <NavLinksStyled />
        </header>
    )
}