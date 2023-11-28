import React from 'react'
import Banner from '../components/banner/banner'
import banner3 from '../assets/img/banner_3.png'
import banner4 from '../assets/img/banner_4.png'
import banner5 from '../assets/img/banner_5.png'
import TitleBar from '../components/titleBar/titleBar'

function ExperienciaPage() {
  return (
    <div>
      <TitleBar text={"Experiencia Starbucks"}></TitleBar>
      
      <h2 className='experiencia-parrafo'>Para cada momento hay una forma de vivir la Experiencia Starbucks como vos quieras.</h2>
      
      
      <Banner
        img={banner3}
        title={"In Store"}
        description={"En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable."}
        backgroundColor={"#f2f0eb"}
        color={"#000000de"}
        height={"350"}
        isFlipped={true}
          />
          <br />
          <br />
      <Banner
        img={banner4}
        title={"Drive Thru"}
        description={"Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto."}
        backgroundColor={"#f2f0eb"}
        color={"#000000de"}
        height={"350"}
          />
          <br />
          <br />
      <Banner
        img={banner5}
        title={"Delivery"}
        description={"Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya."}
        backgroundColor={"#f2f0eb"}
        color={"#000000de"}
        height={"350"}
        haveButton={true}
          />
    </div>
  );
}

export default ExperienciaPage