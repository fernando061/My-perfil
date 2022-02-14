import "../../CSS/Herramientas.css";
import ordenado from "../../Assets/Tools.bee60d97.png";

const Herramientas = () => {
  return (
    <section className="herramientas-main">
      <div className="herramientas-container">
        <h3 style={{ fontSize: "1.5em", marginBottom: "1em" }}> > Tools</h3>
        <div className="container-icons">
          <div className="event-icon">
            <i class="devicon-github-original colored herramienta-icon"></i>

            <h6>GitHub</h6>
          </div>
          <div className="event-icon">
            <i class="devicon-git-plain colored herramienta-icon"></i>

            <h6>Git</h6>
          </div>
          <div className="event-icon">
            <img
              className="herramienta-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />

            <h6>Linux</h6>
          </div>
          <div className="event-icon">
            <i class="devicon-visualstudio-plain colored herramienta-icon"></i>

            <h6>Visual Studio</h6>
          </div>
          <div className="event-icon">
            <i class="devicon-firebase-plain colored herramienta-icon"></i>

            <h6>Firebase</h6>
          </div>
          <div className="event-icon">
            <i className="devicon-npm-original-wordmark colored herramienta-icon"></i>

            <h6></h6>
          </div>
          <div className="event-icon">
            <img
              className="herramienta-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
            />

            <h6>yarn</h6>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className="img-ordenado" src={ordenado} />
      </div>
    </section>
  );
};

export default Herramientas;
