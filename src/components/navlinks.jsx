import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import { useState } from "react";

const NavLinks = () => {
    return (
        <>
            <HashLink smooth to="#logistics">About</HashLink>
            <HashLink smooth to="#schedule">Schedule</HashLink>
            <HashLink smooth to="#faqdiv">FAQ</HashLink>
            <HashLink smooth to="#sponsors">Sponsors</HashLink>
            <HashLink smooth to="#team">Team</HashLink>
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