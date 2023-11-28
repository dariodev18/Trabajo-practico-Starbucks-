import {useContext} from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";
import { ThemeContext } from "../../App";

/**
 * @param {buttonList} *Devuelve los elementos que se mostraran en el header
 * @param {Function Header} * Devuelve el header, mostrando los distintos elementos
 */

const buttonList = [
  {
    name: "logo",
    link: "home",
    customCss: "",
    img: logo,
  },
  {
    name: "COFFEE",
    link: "cafe",
    customCss: "",
    img: "",
  },
  {
    name: "MENU",
    link: "menu",
    customCss: "",
    img: "",
  },
  {
    name: "EXPERIENCIA",
    link: "experiencia",
    customCss: "",
    img: "",
  },
  {
    name: "ADMIN",
    link: "form",
    customCss: "header__button--admin",
    img: "",
  },
  {
    name: "Localizar tienda",
    link: "https://www.google.com.ar/maps/search/Starbucks/@-31.4113283,-64.208896,14z/data=!3m1!4b1?entry=ttu",
    customCss: "header__button--right",
    img: "",
  },
];

function Header() {
  const {theme, setTheme} = useContext(ThemeContext);
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  return (
    <header>
      <nav>
        <div className="wrapper">
          {/* ToDo: Buscar nombre de forma de escribir este css */}
          <ul className="header__container">
            {buttonList.map((aButton, index) => {
              return <HeaderButton key={index}  data={aButton} />;
            })}
            <button onClick={handleClick}>Cambiar Tema</button>
          </ul>
        </div>
      </nav>
      
    </header>
  );
}

export default Header;
