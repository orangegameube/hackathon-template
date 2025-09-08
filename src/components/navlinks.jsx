import {NavLink} from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from "react";

const NavLinks = () => {
    return (
        <>
            <NavLink to="#about">About</NavLink>
            <NavLink to="#schedule">Schedule</NavLink>
            <NavLink to="#faqdiv">FAQ</NavLink>
            <NavLink to="#team">Team</NavLink>
            <NavLink to="#sponsors">Sponsors</NavLink>
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
            <nav className="w-1/3 flex justify-end">
                <div className="hidden w-full flex justify-between md:flex">
                    <NavLinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex flex-col items-center basis-full'>
                    <NavLinks />
                </div>
            )}
        </>
    );

};

export default NavLinksStyled;