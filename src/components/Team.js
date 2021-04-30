import React from 'react';

import AboutImage2 from '../images/nosotros_2.jpg';
import AboutImage3 from '../images/nosotros_3.jpg';

const Team = () => {
  return (
    <div className="flex w-80 center pv5">
      <div className="w-100">
        <div className="flex-ns w-90 fr">
          <div className="flex-ns items-center w-50-ns mb5 mb0-ns">
            <div className="w-30-ns tc tl-ns">
              <img src={AboutImage2} alt="" />
            </div>
            <div className="w-70-ns ph4 mv4 mh2 mv0-ns mh2-ns">
              <h3 className="font-3 tc tl-ns">Felipe Sepúlveda Pastén</h3>
              <p className="tc tl-ns">Diseñador Gráfico UCH</p>
              <p className="f6 mt4 lh-copy">Hago imágenes fotográficas bajo el pseudónimo áreagris en las redes sociales. Me interesa investigar las diferentes maneras en que la cámara fotográfica nos permite llevar fácilmente a la pantalla lo que acontece en el plano material.</p>
            </div>
          </div>
          <div className="flex-ns items-center w-50-ns">
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
    </div>
  );
}

export default Team;
