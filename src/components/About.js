import React from 'react';
import AboutImage1 from '../images/nosotros_1.jpg';

const About = () => {
  return (
    <div id="about" className="centered-container pt5">
      <div className="w-90 fr">
        <h2 className="f2 b font-4 mb4 mb3-ns">Equipo Aérea</h2>
        <div className="flex-ns items-center-ns pb5">
          <div className="w-50-ns mb4 mb0-ns">
            <img src={AboutImage1} alt="" />
          </div>
          <div className="w-50-ns ml5-ns f6">
            <p className="mb2 lh-copy"><span className="b font-2">Somos un estudio creativo emergente</span> ubicado en Santiago de Chile y fundado de manera virtual en medio de la pandemia del 2020.</p>
            <p className="mb2 lh-copy">Utilizamos las herramientas del diseño gráfico y la fotografía para construir piezas gráficas visualmente cautivadoras.</p>
            <p className="mb2 lh-copy">Debido a las complicaciones de la pandemia, desarrollamos una metodología de trabajo remoto para el desarrollo de nuestros proyectos.</p>
            <p className="mb2 lh-copy"><span className="b font-2">Exploramos y experimentamos con diversos lenguajes visuales</span> para obtener los mejores resultados.</p>
            <div>
              <p className="mb2 mb0-ns">Nuestras áreas de trabajo:</p>
              <p className="b font-2 lh-copy">Fotografía de Producto / Visualidad y Medios / Diseño Gráfico y Web.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;