import React, { Fragment } from 'react';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import PinterestIcon from '../../assets/pinterest.svg';
import BehanceIcon from '../../assets/behance.svg';

const Social = () => {
  return (
    <>
      <div className="dn db-ns" style={{ gridColumn: 'col-start 12/span 12' }}>
        <div className="social-nav / fixed bottom-2">
          <div className="pv3-ns ph3 tc">
            <a className="pointer dim" href="https://www.facebook.com/aereastudio">
              <FacebookIcon />
            </a>
          </div>
          <div className="pv3-ns ph3 tc">
            <a className="pointer dim" href="https://www.instagram.com/aereastudio/">
              <InstagramIcon />
            </a>
          </div>
          <div className="pv3-ns ph3 tc">
            <a className="pointer dim" href="https://www.pinterest.cl/aerea_studio/_created/">
              <PinterestIcon />
            </a>
          </div>
          <div className="pv3-ns ph3 tc">
            <a className="pointer dim" href="https://www.behance.net/aereastudio">
              <BehanceIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="fixed flex bottom-1 justify-between w-100 ph5">
          <a className="pointer dim" href="https://www.facebook.com/aereastudio">
            <FacebookIcon />
          </a>
          <a className="pointer dim" href="https://www.instagram.com/aereastudio/">
            <InstagramIcon />
          </a>
          <a className="pointer dim" href="https://www.pinterest.cl/aerea_studio/_created/">
            <PinterestIcon />
          </a>
          <a className="pointer dim" href="https://www.behance.net/aereastudio">
            <BehanceIcon />
          </a>
      </div>
    </>
  );
}

export default Social;
