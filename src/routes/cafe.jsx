import React from 'react'
import TitleBar from '../components/titleBar/titleBar';
import './cafe.css';
import nuestroCafe from '../assets/img/coffe/Nuestro_Café.png';
import nuestroCafe2 from '../assets/img/coffe/curva.jpg';
import nuestroCafe3 from '../assets/img/coffe/metodos.png';

function CafePage() {
  return (
    <div className='div__container'>
      <TitleBar text={"Nuestro café"}></TitleBar>
      <p>El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo.</p>
      
      <div className='imagen1'>
        <img src={nuestroCafe} alt="" />
      </div>
      
      <p>De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares.</p>
      <p>Para alcanzarlo nos abastecemos de los mejores granos de café arábicos siguiendo siempre estrictos principios éticos.</p>
      <strong>Nuestro tostado Starbucks</strong>
      <p>Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. </p>
      <div className='imagen2'>
        <img src={nuestroCafe2} alt="" />
      </div>
      <strong>Rubio</strong>
      <p>El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves.</p>
      <strong>Medio</strong>
      <p>El café con tostado medio es balanceado con sabores agradables y enriquecidos.</p>
      <strong>Oscuro</strong>
      <p>Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos. </p>
      <strong>Descubre los métodos de preparación en Starbucks,<br /> ¿Cuál es el correcto para vos?</strong>
      <p>Desde el cultivo responsable hasta el tostado, cada detalle en la elaboración de manera artesanal es fundamental para poder disfrutar de una taza de café Starbucks. Y además de la esencia de los granos, sabemos que la forma en la que se prepara el café tiene un efecto sorprendente en el sabor de cada taza y define su cuerpo.</p>
      <div className='imagen3'>
        <img src={nuestroCafe3} alt="" />
      </div>
      <p>Es por eso que nuestros magníficos baristas se enfocan en crear diariamente rituales escogiendo diferentes métodos de preparación para que sean nuestros clientes quienes se sorprenden. Así, de la mano de las explicaciones de nuestros expertos, no sólo cultivarán la curiosidad sino que podrán seleccionar el mejor método para su experiencia Starbucks.</p>
      <button className='button__cafe'>Conoce nuestros metodos</button>
    </div>
  );
}

export default CafePage;