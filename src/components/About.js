import React from 'react';
import AboutImage1 from '../images/nosotros_1.jpg';
import AboutImage2 from '../images/nosotros_2.jpg';
import AboutImage3 from '../images/nosotros_3.jpg';

const About = () => {
  return (
    <div id="about" className="pv6">
      <h2 className="f2 ph6-ns b font-4 mb4 mb3-ns ph0-ns ph4">Equipo Aérea</h2>
      <div className="flex-ns items-center-ns ph4 ph6-ns pb5">
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
      <div className="flex-ns ph3 ph6-ns pv5" style={{ background: 'whiteSmoke' }}>
        <div className="flex-ns w-50-ns mb5 mb0-ns">
          <div className="w-30-ns tc tl-ns">
            <img src={AboutImage2} alt="" />
          </div>
          <div className="w-70-ns ph4 mv4 mh2 mv0-ns mh2-ns">
            <h3 className="font-3 tc tl-ns">Felipe Sepúlveda Pastén</h3>
            <p className="tc tl-ns">Diseñador Gráfico UCH</p>
            <p className="f6 mt4 lh-copy">Hago imágenes fotográficas bajo el pseudónimo áreagris en las redes sociales. Me interesa investigar las diferentes maneras en que la cámara fotográfica nos permite llevar fácilmente a la pantalla lo que acontece en el plano material.</p>
          </div>
        </div>
        <div className="flex-ns w-50-ns">
          <div className="w-30-ns tc tl-ns">
            <img src={AboutImage3} alt="" />
          </div>
          <div className="w-70-ns ph4 mv4 mh2 mv0-ns mh2-ns">
            <h3 className="font-3 tc tl-ns">Macarena Rivera Neumann</h3>
            <p className="tc tl-ns">Diseñadora Gráfica UCH</p>
            <p className="f6 mt4 lh-copy">Mi gran interés por el vestuario, la moda y la comunicación, sumado a mis estudios en Diseño e Ilustración, me han llevado a vin- cular mi quehacer profesional con la fo- tografía, construyendo narrativas visuales con especial atención en los detalles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;