import './titleBar.css';
import { useContext } from 'react';
import { ThemeContext } from "../../App";

/**
 * 
 * @param {TitleBar} * Devuelve una barra de titulo  
 * 
 */

function TitleBar({ text }) {
  const {theme} = useContext(ThemeContext);
  return <div className={`title-bar-${theme}`}>{text}</div>
  
}

export default TitleBar;