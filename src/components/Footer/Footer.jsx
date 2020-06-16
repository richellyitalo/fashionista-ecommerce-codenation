import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    Desenvolvido por @richellyitalo
    <a href="https://github.com/richellyitalo" target="_blank"
      className="footer__link">
      <AiFillGithub />
    </a>
    <a href="https://www.linkedin.com/in/richellyitalo/" target="_blank"
      className="footer__link">
      <AiFillLinkedin />
    </a>
  </div>
);

export default Footer;