import React from 'react';
import Banner from '../components/banner/banner';
import banner1 from '../assets/img/banner_1.png';
import banner2 from '../assets/img/banner_2.png' 
function HomePage() {
  return (
    <div>
      <Banner 
      img={banner1} 
      title={"¡PUMPKINLICIOUS!"} 
      description={"Una temporada con tu favorito de siempre. ¡Nuestro Pumpkin Spice vuelve por tiempo limitado en sus versiones Iced, Latte y Frappuccino!"
    } 
      backgroundColor={"#fe5000"}
      color={"#fff"}
      height={"400"}
      
      />
      <br />
      <Banner 
      img={banner2} 
      title={"Unite a algo mas grande"} 
      description={"Revisa las oportunidades que tenemos para vos"} 
      backgroundColor={"#d4e9e2"}
      color={"#00754a"}
      height={"350"}
      isFlipped={true}
      haveButton={true}
      />
    </div>
  )
}

export default HomePage