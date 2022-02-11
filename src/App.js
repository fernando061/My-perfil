import "./App.css";
import perfil from "./Assets/fernando-rojo.jpg";
import decoracion from "./Assets/docoracion.png";
import decoracionBottom from "./Assets/decoracion-bottom.png";
import aboutMe from "./Assets/Aboutme.36271eab.png";
import QueMeGusta from "./Components/Home/QueMeGusta";
import Portafolio from "./Components/Home/Portafolio";
import Herramientas from "./Components/Home/Herramientas";


   
import {useState, useEffect, useContext} from 'react'
import { ObtenerUbicacion } from "./Utils/Geolocalizacion";

function App() {

  useEffect(()=>{
    // ObtenerUbicacion();
},[])

  return (
    <div className="App">
      <nav id="main" className="sc-fFubgz bjNVbG">
        <h1 class="sc-bkzZxe cSnsVU nes-text">FernandoDev</h1>
        <div class="nes-badge is-splited">
          <span class="is-dark">FullStack</span>
          <span class="is-primary">Developer</span>
        </div>
        <li class="sc-idOhPF kGntgQ">
          <a class="sc-dIUggk XavQL" href="/">
            Home
          </a>
          <a class="sc-dIUggk XavQL" href="/contactme">
            ContactMe
          </a>
        </li>
      </nav>

      <div className="sobre-mi-principal">
        <img src={perfil}></img>
        <div className="sobre-mi">
          <span>Hello world!</span>
          <h2>I'm Fernando Rojo</h2>
          <h5>FullStack Developer Junior</h5>
          <h5>
            specialized in <span>React JS</span>,{" "}
          </h5>
          <h5>
            {" "}
            <span>Angular</span>
          </h5>
          <div className="contenedor-redirect-redes">
            <button className="button-icon-redes button-icon-redes2">
              <span>
                <i class="fab fa-linkedin"></i>
              </span>
            </button>
            <button className="button-icon-redes button-icon-redes2">
              <span>
                <i class="fab fa-github"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="sobre-mi-decoracion ">
        <img src={decoracion} className="mx-w-100"/>
      </div>
      <div className="sobre-mi-principal-detalle">
        <div className="sobre-mi-left"></div>
<img className="sobre-mi-right" src={aboutMe}/>
      </div>
      <div className="sobre-mi-decoracion">
        <img className="mx-w-100" src={decoracionBottom}/>
      </div>
<QueMeGusta></QueMeGusta>
<Portafolio></Portafolio>
<Herramientas/>
    </div>
  );
}

export default App;
