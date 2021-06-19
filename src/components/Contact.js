import React from 'react';
import ContactImage from '../images/contacto.jpg';
import ContactImageMobile from '../images/contacto-small.jpg';

const Contact = () => {
  return (
    <div id="contact" className="centered-container / flex items-center w-100 vh-100 mt4 mt0-ns">
      <div className="margin-container / absolute right-0" style={{ zIndex: '-1' }}>
        <img src={ContactImage}  className="dn db-ns" alt="" />
        <img src={ContactImageMobile} className="db dn-ns" alt="" />
      </div>
      <div className="w-30-ns w-100">
        <h1 className="f1 f-headline-ns lh-solid-ns font-4">Escríbenos</h1>
        <p className="lh-copy mt3">Para más información, dudas o cotizaciones escríbenos a info.aereastudio@gmail.com.</p>
      </div>
    </div>
  );
}

export default Contact;
