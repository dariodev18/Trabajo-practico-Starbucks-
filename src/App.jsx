import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./routes/home";
import CafePage from "./routes/cafe.jsx";
import MenuPage from "./routes/menu.jsx";
import ExperienciaPage from "./routes/experiencia.jsx";
import LocalizarTiendaPage from "./routes/localizarTienda.jsx";
import NotFoundPage from "./routes/notFound";
import Wrapper from "./components/wrapper.jsx";
import producto1 from "./assets/img/tienda/producto_1.png";
import producto2 from "./assets/img/tienda/producto_2.png";
import producto3 from "./assets/img/tienda/producto_3.png";
import FormItems from "./components/form/formItems.jsx";
import Footer from "./components/footer/footer.jsx";
// import { createContext } from "react";

/**
 * @param {Function App} * Devuelve los distintos componentes unificandolos para ser apreciados por el usuariogit
 */


export const ThemeContext = createContext(null);
export const AppContext = createContext (null);
const themeLocalStorage = localStorage.getItem("theme") ||"light";

const initialState = {
  productos: [
        {img: producto1, title:"producto 1" },
        {img: producto2, title:"producto 2" }, 
        {img: producto3, title:"producto 3" },
      ],
};


function reducer(state, action) {
  switch (action.type) {
    // case "SET_USER":
    //   return {...state, user: action.payload };
    // case "SET_THEME":
    //   return {...state, theme:action.payload };
    case "ADD_PRODUCT":
      const oldState = state;
      oldState.productos.push(action.payload);
      alert("Producto agregado correctamente");
      return oldState;
      case "MODIFY_PRODUCT":
        return state; 
    default:
      alert("No se reconoce la accion");
      return state;
  }
}


function App() {
  const [theme, setTheme] = useState(themeLocalStorage);
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
  <AppContext.Provider value={{ appState, dispatch }} >
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Wrapper>
    <Router>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Header />

      <Routes>
        {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/experiencia" element={<ExperienciaPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/localizar" element={<LocalizarTiendaPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/form" element={<FormItems />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>   

      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
    </Router>
    <Footer />
    </Wrapper>
    </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
