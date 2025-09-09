import {NavLink} from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from "react";

const NavLinks = () => {
    return (
        <>
            <NavLink href="#frontpage">About</NavLink>
            <NavLink href="#schedule">Schedule</NavLink>
            <NavLink href="#faqdiv">FAQ</NavLink>
            <NavLink href="#sponsors">Sponsors</NavLink>
            <NavLink href="#team">Team</NavLink>
        </>
    );
};


const NavLinksStyled = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex flex-[1] items-center justify-end overflow-hidden">
                <div className="hidden md:flex gap-6">
                    <NavLinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex flex-col items-center basis-full bg-white'>
                    <NavLinks />
                </div>
            )}
        </>
    );

};

export default NavLinksStyled;