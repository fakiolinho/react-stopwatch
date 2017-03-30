import React from 'react';

import Link from 'components/Link';
import './style.scss';

const Footer = () => (
  <footer>
    <p>
      Made with <span className="heart">&hearts;</span> by <Link
        href="https://github.com/fakiolinho"
        target="_blank">
        Marios
      </Link>
    </p>
  </footer>
);

export default Footer;
