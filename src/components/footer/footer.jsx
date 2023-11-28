import React from 'react';
import './footer.css';
import footerafip from '../../assets/img/footer/afip.jpg';
import footersocial1 from '../../assets/img/footer/facebook.png';
import footersocial2 from '../../assets/img/footer/instagram.png';
import footersocial3 from '../../assets/img/footer/linkedin.png';

/**
 * @param {Function Footer} * Devuelve el footer, con links e imagenes de redes sociales
 * 
 * @returns 
 */


function Footer() {
  return (
    <footer>
    <div class="footer-container">
      <div class="footer-logo">
        <img src={footerafip} alt="Starbucks Logo" />
      </div>
      <div class="footer-links">
        <hr />
        <ul>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Impacto social</a></li>
          <li><a href="#">Atención al cliente</a></li>
          <li><a href="#">Experiencia Starbucks</a></li>          
        </ul>
      </div>
      <div class="footer-social">
        <a href="#" class="social-icon-1"><img src={footersocial1} alt="Facebook" /></a>
        <a href="#" class="social-icon-2"><img src={footersocial2} alt="Twitter" /></a>
        <a href="#" class="social-icon-3"><img src={footersocial3} alt="Instagram" /></a>
      </div>
    </div>
    <div class="footer-copyright">
      &copy; 2023 Starbucks Corporation. Todos los derechos reservados.
    </div>
  </footer>
  );
}


export default Footer;