import React from 'react';
import programer from '../../Assets/Skills.7ce92d9f.png'
import angular from '../../Assets/Frameworks/angular.png'
import react from '../../Assets/Frameworks/react.png'
import bootstrap from '../../Assets/Frameworks/bootstrap.png'
import django from '../../Assets/Frameworks/django.png'
import node from '../../Assets/Frameworks/node.png'
import spring from '../../Assets/Frameworks/springBoot.png'
import net from '../../Assets/Frameworks/NetFramework.png'
import '../../CSS/Portafolio.css'


const Portafolio = () => {
  return <section className='portafolio-main'>

    <div className='portafolio-container'>
        <h1>PortFolio</h1>
        <div>
            <h3 style={{fontSize:'1.5em',marginBottom:'1em'}}> > Frameworks</h3>
            <div className='container-frameworks'>
              <div className='framework-icon'>
                <img src={angular} />
                <h6>Angular</h6>
              </div>
              <div className='framework-icon'>
                <img src={react}/>
                <h6>React</h6>
              </div>
              <div className='framework-icon'>
                <img src={bootstrap}/>
                <h6>Bootstrap</h6>
              </div>


              <div className='framework-icon'>
                <img  style={{width:'80px'}} src={django}/>
                <h6>Django</h6>
              </div>
              <div className='framework-icon'>
                <img style={{width:'100px'}} src={node}/>
                <h6>Node JS y TS</h6>
              </div>
              <div className='framework-icon'>
                <img  src={net}/>
                <h6>ASP.Net Framework</h6>
              </div>

            </div>
            <div></div>
        </div>
    </div>
    <div>

    
        <img style={{marginLeft:'auto',marginRight:'auto',maxWidth:'100%'}} src={programer}/>
    </div>
  </section>;
};

export default Portafolio;
