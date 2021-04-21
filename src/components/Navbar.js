import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="flex w-100 fixed z-1 items-center justify-between pv4-ns pv4 bg-white">
      <a className="ml5-ns ml3">
        a
      </a>
      <div className="mr5-ns mr3">
        <Link
          className="f6 f5-ns font-2 ttu mr5-ns mr3 pointer dim"
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
        >
          Equipo Aérea
        </Link>
        <Link
          className="f6 f5-ns font-2 ttu mr5-ns mr3 pointer dim"
          to="projects"
          smooth={true}
          offset={-100}
          duration={500}
        >
          Portafolio
        </Link>
        <Link
          className="f6 f5-ns font-2 ttu pointer dim"
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
