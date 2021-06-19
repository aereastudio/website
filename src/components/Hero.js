import React from 'react';
import HeroImage from '../images/foto-home.jpg';
import HeroImageMobile from '../images/home-small.jpg';

const Hero = () => {
  return (
    <div className="centered-container / flex items-center-ns w-100 vh-100">
      <div className="margin-container hero-img / absolute right-0" style={{ zIndex: '-1' }}>
        <img src={HeroImage} className="dn db-ns" alt="" />
        <img src={HeroImageMobile} className="db dn-ns mt4" alt="" />
      </div>
      <div className="w-30-ns w-100 mt5 mt0-ns">
        <h1 className="f1 f-headline-ns lh-solid-ns font-4">Aérea Studio</h1>
        <p className="f6 lh-copy mt3">Un espacio de convergencia entre el diseño y la fotografía que da vida a nuevos proyectos. Exploramos y experimentamos con diferentes técnicas para lograr el resultado que necesitas.</p>
      </div>
    </div>
  );
}

export default Hero;