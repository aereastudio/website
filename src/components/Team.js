import React from 'react';

import AboutImage2 from '../images/felipe.jpg';
import AboutImage3 from '../images/maca.jpg';

const Team = () => {
  return (
    <div className="team-grid pv4 pv5-ns">
      <div className="flex-ns w-90 fr">
        <div className="flex-ns items-center w-50-ns mb5 mb0-ns">
          <div className="w-30-ns tc tl-ns">
            <img src={AboutImage2} alt="" className="w-100" />
          </div>
          <div className="w-70-ns ph4-ns mv4 mv0-ns mh2-ns">
            <h3 className="font-3 tc tl-ns">Felipe Sepúlveda Pastén</h3>
            <p className="tc tl-ns">Diseñador Gráfico UCH</p>
            <p className="f7 mt4 lh-copy">Hago imágenes fotográficas bajo el pseudónimo áreagris en las redes sociales. Me interesa investigar las diferentes maneras en que la cámara fotográfica nos permite llevar fácilmente a la pantalla lo que acontece en el plano material.</p>
          </div>
        </div>
        <div className="flex-ns items-center w-50-ns">
          <div className="w-30-ns tc tl-ns">
            <img src={AboutImage3} alt="" className="w-100" />
          </div>
          <div className="w-70-ns ph4-ns mt4 mv0-ns mh2-ns">
            <h3 className="font-3 tc tl-ns">Macarena Rivera Neumann</h3>
            <p className="tc tl-ns">Diseñadora Gráfica UCH</p>
            <p className="f7 mt4 lh-copy">Mi gran interés por el vestuario, la moda y la comunicación, sumado a mis estudios en Diseño e Ilustración, me han llevado a vincular mi quehacer profesional con la fotografía, construyendo narrativas visuales con especial atención en los detalles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
