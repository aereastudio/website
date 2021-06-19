import React from 'react';

import ProjectImage1 from '../images/la-presumida.jpg';
import ProjectImage2 from '../images/book-modelo.jpg';
import ProjectImage3 from '../images/logo-papeleria.jpg';
import ProjectImage4 from '../images/fotografia-producto.jpg';
import ProjectImage5 from '../images/publicacion-redes-sociales.jpg';

const Projects = () => {
  return (
    <div id="projects" className="flex items-center centered-container mt4 vh-100-ns pv5-ns pv0">
      <div>
        <div className="grid-projects-items">
          <div>
            <img src={ProjectImage1} alt="" className="w-100" />
            <h3 className="font-3 mt3">La Presumida Sour</h3>
            <p className="f7 font-3 mt1 lh-copy">Fotografía de producto con intervención ilustrada</p>
          </div>
          <div>
            <img src={ProjectImage2} alt="" className="w-100" />
            <h3 className="font-3 mt3">Book Modelo</h3>
            <p className="f7 font-3 mt1 lh-copy">Fotografía Editorial</p>
          </div>
          <div>
            <img src={ProjectImage3} alt="" className="w-100" />
            <h3 className="font-3 mt3">Logo y papelería Écfrasis</h3>
            <p className="f7 font-3 mt1 lh-copy">Branding e Imagen corporativa</p>
          </div>
          <div>
            <img src={ProjectImage4} alt="" className="w-100" />
            <h3 className="font-3 mt3">República del Cobre</h3>
            <p className="f7 font-3 mt1 lh-copy">Fotografía e-commerce</p>
          </div>
          <div>
            <img src={ProjectImage5} alt="" className="w-100" />
            <h3 className="font-3 mt3">Insanity Nice</h3>
            <p className="f7 font-3 mt1 lh-copy">Retrato con intervención ilustrada</p>
          </div>
        </div>
        <div className="w-100 tc mt4 mb4 mb0-ns">
          <a href="https://www.behance.net/aereastudio" className="f5 f5-ns font-2 ttu mr5-ns mr3 pointer dim no-underline black">Ver más</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
