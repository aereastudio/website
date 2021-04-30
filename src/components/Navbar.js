import React from 'react';
import { Link } from 'react-scroll';

import LogoIcon from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex w-90 fixed z-1 items-center justify-between pv3-ns pv2 bg-white">
      <a className="w-10 tc" href="/">
        <LogoIcon width="50px" />
      </a>
      <div className="">
        <Link
          className="f6 f6-ns font-2 ttu mr5-ns mr3 pointer dim"
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
        >
          Equipo Aérea
        </Link>
        <Link
          className="f6 f6-ns font-2 ttu mr5-ns mr3 pointer dim"
          to="projects"
          smooth={true}
          offset={-100}
          duration={500}
        >
          Portafolio
        </Link>
        <Link
          className="f6 f6-ns font-2 ttu pointer dim"
          to="contact"
          smooth={true}
          offset={-1}
          duration={500}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
