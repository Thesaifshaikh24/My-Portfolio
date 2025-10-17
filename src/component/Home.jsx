import React from 'react'
import "./Home.css"
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
    <section id='home'>
        <div>
            <img src="./images/effect.jpg" className='effect' alt="" />
        </div>
        <div className='wa_box'>
          <a href="https://wa.link/gm38md"><i class="bi bi-whatsapp"></i></a>
        </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-left">
            <div className='heading'>
             <h3 className='myname'>Hello, my name is</h3>
             <h1 className='headingname'>Saif Shaikh</h1>
             <div class="typewriter">
             <h1><span className="type"><span>I'm a MERN Stack Developer</span></span> </h1>
            </div>
            {/* <button className='resume'><b>Resume <i className="bi bi-download"></i></b></button> */}
            <a href="./images/resume.png" download='resume.png' ><button className='resume'><b>Resume <i className='bi bi-download'></i></b></button></a>
            <button className='resume'><a href="#projects" className='nav-link'><b>Projects <i className="bi bi-arrow-bar-right"></i></b></a></button><br />
            {/* <button className='resume'><b>Projects <i className="bi bi-arrow-bar-right"></i></b></button><br /> */}
            <h3 className='mt-3 icones'><a href="https://www.linkedin.com/in/saif-shaikh-82b920308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer' className='nav-link'><i class="bi bi-linkedin"></i></a></h3>
            <h3 className='mt-3 icones'><a href="mailto:shaikhsaif23178@gmail.com" target='_blank' rel='noopener noreferrer' className='nav-link'><i class="bi bi-envelope-fill"></i></a></h3>
            <h3 className='mt-3 icones'><a href="https://www.instagram.com/the.saifshaikh/" target='_blank' rel='noopener noreferrer' className='nav-link'><i class="bi bi-instagram"></i></a></h3>
            <h3 className='mt-3 icones'><a href="https://github.com/Thesaifshaikh24" target='_blank' rel='noopener noreferrer' className='nav-link'><i class="bi bi-github"></i></a></h3>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12' data-aos="zoom-in">
            <div>
              <img src="./images/myphoto.png" className='photo' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <About/>
    <Project/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default Home
