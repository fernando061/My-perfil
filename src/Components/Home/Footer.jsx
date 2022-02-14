import "../../CSS/Footer.css";
import team from "../../Assets/team-work.png"
const Footer = () => {
  return (
    <footer>
      <ul class="links-container">
        <h1>Quick Links</h1>
        <a href="/#main" className="link" style={{color: 'white'}}>
          {" "}
          Header{" "}
        </a>
        <a href="/#aboutme" className="link" style={{color: 'white'}}>
          {" "}
          Aboutme{" "}
        </a>
        <a href="/#hobbies" className="link" style={{color: 'white'}}>
          {" "}
          Hobbies{" "}
        </a>
        <a href="/#projects" className="link" style={{color: 'white'}}>
          {" "}
          Projects{" "}
        </a>
      </ul>
      <ul class="links-container">
      <h1>Social Media</h1>
        <a href="https://www.linkedin.com/in/fernando-rojo-ortiz-808b01216/" target="_blank" rel="noopener noreferrer" className="link link-2">
        <i class="devicon-linkedin-plain"> </i>
       <h6>Linkedin</h6>
        </a>
        <a href="https://github.com/fernando061" target="_blank" rel="noopener noreferrer" className="link link-2">
        <i class="devicon-github-original"></i>
        <h6>GitHub</h6>
        </a>
        <a href="https://twitter.com/fernando_soul03" target="_blank" rel="noopener noreferrer" className="link link-2">
        <i class="devicon-twitter-original"></i>
<h6>Twitter</h6>
        </a>
      </ul>
      <img src={team}/>
      
    </footer>
  );
};

export default Footer;
