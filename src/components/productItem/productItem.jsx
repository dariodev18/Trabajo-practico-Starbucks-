import React from 'react';

/**
 * 
 * @param {Function ProductItem} * Devuelve los productos a exhibir, con imagenes y titulos
 
 */

function ProductItem({ img, title }) {
  return ( 
  <div>
    <div>
        <img src={img} alt="" />
    </div>
    <p>{title}</p>
  </div>
  );  
}

export default ProductItem;