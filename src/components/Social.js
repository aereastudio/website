import React from 'react';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import PinterestIcon from '../../assets/pinterest.svg';
import BehanceIcon from '../../assets/behance.svg';

const Social = () => {
  return (
    <div className="fixed flex db-ns bottom-0 right-0 ph5 pb3">
      <div className="pv3-ns ph3">
        <a className="pointer dim">
          <FacebookIcon />
        </a>
      </div>
      <div className="pv3-ns ph3">
        <a className="pointer dim">
          <InstagramIcon />
        </a>
      </div>
      <div className="pv3-ns ph3">
        <a className="pointer dim">
          <PinterestIcon />
        </a>
      </div>
      <div className="pv3-ns ph3">
        <a className="pointer dim">
          <BehanceIcon />
        </a>
      </div>
    </div>
  );
}

export default Social;
