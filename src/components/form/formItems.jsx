import React, { useContext } from 'react';
import { AppContext } from '../../App';
import producto3 from "../../assets/img/tienda/producto_3.png";

/**
 * Form que permite la carga de nuevos items a la lista de productos
 * 
 */

function FormItems() {
    const { appState, dispatch } = useContext(AppContext);
    const handleClick = () =>{
        const productName = prompt("Ingrese el nombre del producto");
        const action = {
            type: "ADD_PRODUCT",
            payload: { img: producto3, title: productName },
        }; 
        dispatch(action);
    };
  return (
    <div>
        <button onClick={handleClick}>Agregar un nuevo item a la lista</button>
    </div>
  );
}

export default FormItems;