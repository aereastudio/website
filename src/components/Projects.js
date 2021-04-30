import React from 'react';

import ProjectImage1 from '../images/project_1.jpg';
import ProjectImage2 from '../images/project_2.jpg';
import ProjectImage3 from '../images/project_3.jpg';
import ProjectImage4 from '../images/project_4.jpg';
import ProjectImage5 from '../images/project_5.jpg';

const Projects = () => {
  return (
    <div id="projects" className="centered-container">
      <div className="grid-projects-items pv6">
        <div>
          <img src={ProjectImage5} alt="" className="w-100" />
          <h3 className="font-3 mt4">La Presumida Sour</h3>
          <p className="f7 font-3 mt2 lh-copy">Producción fotografica con intervención ilustrada</p>
        </div>
        <div>
          <img src={ProjectImage4} alt="" className="w-100" />
          <h3 className="font-3 mt4">Fotografías book para modelo</h3>
          <p className="f7 font-3 mt2 lh-copy">Producción fotografica con modelo</p>
        </div>
        <div>
          <img src={ProjectImage3} alt="" className="w-100" />
          <h3 className="font-3 mt4">Logo y papeleria paraEcfrasis</h3>
          <p className="f7 font-3 mt2 lh-copy">Branding</p>
        </div>
        <div>
          <img src={ProjectImage2} alt="" className="w-100" />
          <h3 className="font-3 mt4">Kit de bordado Insanity_nice</h3>
          <p className="f7 font-3 mt2 lh-copy">Fotografía de productos</p>
        </div>
        <div>
          <img src={ProjectImage1} alt="" className="w-100" />
          <h3 className="font-3 mt4">Publicación de redes sociales</h3>
          <p className="f7 font-3 mt2 lh-copy">Producción fotografica con intervención ilustrada</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
