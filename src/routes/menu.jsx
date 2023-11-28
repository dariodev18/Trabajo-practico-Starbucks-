import React, { useContext } from 'react';
import TitleBar from '../components/titleBar/titleBar';
import { AppContext } from '../App';
import ProductItem from '../components/productItem/productItem';
function MenuPage() {
  const { appState } = useContext(AppContext);
  return (
    <div>
      <TitleBar text={"Menu"}></TitleBar>
      <hr />
    <span className='menu-subtitulo'>¡Disfrútalos!
      <h2 className='menu-parrafo'>Conoce nuestras bebidas y alimentos de temporada</h2>
    </span> 
    <h3>Bebidas</h3>
    <hr />
    
    {
      appState.productos.map((producto) => {
        return (
          <ProductItem 
          img={producto.img}
          title={producto.title}
          ></ProductItem>
        );
    })
  }
 </div>
  );
}
export default MenuPage;