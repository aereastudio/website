import React from 'react';
import ContactImage from '../images/home-2.jpg';
import ProjectImage2 from '../images/project_2.jpg';

const Contact = () => {
  return (
    <div id="contact" className="flex-ns relative items-center-ns w-100-ns vh-100-ns ph4 ph6-ns">
      <div className="absolute z-0" style={{ zIndex: '-1' }}>
        <img src={ContactImage} className="dn db-ns" />
        <img src={ProjectImage2} className="db dn-ns ml4 mt5 mb6" />
      </div>
      <div className="w-40-ns z-1 pt6 pt0-ns">
        <h1 className="f1 f-headline-ns lh-solid-ns font-4">Escríbenos</h1>
        <p className="lh-copy mt5">Para más información, dudas o cotizaciones escríbenos a info.aereastudio@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
