import React from "react";
import "./headerButton.css";
import { Link, NavLink } from "react-router-dom";

/**
 * HeaderButton es el boton de la barra de navegacion
 * @param {Object} data - contiene los datos del boton 
 * @param {String} data.name - Nombre del boton 
 * @param {String} data.link - Link del boton 
 * @param {String} data.customCss - Clase de css para el boton 
 * @param {String} data.img - Imagen del boton 
 * @returns {JSX.Element} - Retorna el boton de la barra de navegacion segun los datos recibidos y tiene tres estados distintos, logo, boton y localizar tienda
 */

function HeaderButton({ data: { name, link, customCss, img } }) {
 if(name === "Localizar tienda") {
  return (
    <li className={`header__button ${customCss}`}>
      <a target="_blank" href={link}>{name}</a>
    </li>
  );
 }

  if (img) {
    return (
      <li className={`header__button ${customCss}`}>
        <NavLink to="/">
        <img src={img} alt={name} />

        </NavLink>
      </li>
    );
  }
  return (
    <li
      
      className={`header__button header__button--link ${customCss}`}
    >
      <NavLink to={link}>{name}</NavLink>
    </li>
  );
}

export default HeaderButton;
