import React from 'react';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import PinterestIcon from '../../assets/pinterest.svg';
import BehanceIcon from '../../assets/behance.svg';

const Social = () => {
  return (
    <div className="fixed flex db-ns bottom-0 right-0 w-10 tc mb4">
      <div className="pv3-ns ph3">
        <a className="pointer dim" href="https://www.facebook.com/aereastudio">
          <FacebookIcon />
        </a>
      </div>
      <div className="pv3-ns ph3">
        <a className="pointer dim" href="https://www.instagram.com/aereastudio/">
          <InstagramIcon />
        </a>
      </div>
      <div className="pv3-ns ph3">
        <a className="pointer dim" href="https://www.pinterest.cl/aerea_studio/_created/">
          <PinterestIcon />
        </a>
      </div>
      <div className="pv3-ns ph3">
        <a className="pointer dim" href="https://www.behance.net/aereastudio">
          <BehanceIcon />
        </a>
      </div>
    </div>
  );
}

export default Social;
