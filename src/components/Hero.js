import React from 'react';
import HeroImage from '../images/home-1.jpg';
import ProjectImage2 from '../images/project_2.jpg';

const Hero = () => {
  return (
    <div className="flex-ns relative items-center-ns w-100 vh-100 ph4 ph6-ns">
      <div className="absolute z-0" style={{ zIndex: '-1' }}>
        <img src={HeroImage} className="dn db-ns" />
        <img src={ProjectImage2} className="db dn-ns ml4 mt5" />
      </div>
      <div className="w-40-ns z-1 pt6 pt0-ns">
        <h1 className="f1 f-headline-ns lh-solid-ns font-4">Aerea Studio</h1>
        <p className="lh-copy mt5">Un espacio de convergencia entre el diseño y la fotografía que da vida a nuevos proyectos. Exploramos y experimentamos con diferentes técnicas para lograr el resultado que necesitas.</p>
      </div>
    </div>
  );
}

export default Hero;