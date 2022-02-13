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
        <a href="" className="link">
        <i class="devicon-linkedin-plain"> Linkedin</i>
       
        </a>
        <a href="" className="link">
        <i class="devicon-github-original">GitHub</i>
        </a>
        <a href="" className="link">
        <i class="devicon-twitter-original">Twitterx</i>

        </a>
      </ul>
      <img src={team}/>
      
    </footer>
  );
};

export default Footer;
