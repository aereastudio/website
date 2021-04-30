import React from 'react';
import ContactImage from '../images/home-22.jpg';
import ProjectImage2 from '../images/project_2.jpg';

const Contact = () => {
  return (
    <div id="contact" className="flex relative items-center w-80 vh-100 center">
      <div className="absolute w-100" style={{ zIndex: '-1' }}>
        <img src={ContactImage} className="w-90 fr dn db-ns" alt="" />
        <img src={ProjectImage2} className="db dn-ns" alt="" />
      </div>
      <div className="w-30">
        <h1 className="f1 f-headline-ns lh-solid-ns font-4">Escríbenos</h1>
        <p className="lh-copy mt5">Para más información, dudas o cotizaciones escríbenos a info.aereastudio@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
