import React from 'react';
import "./About.css";

function About() {
  return (
    <>
      
    <section id='about'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <center>
                    <h1 className='text-light about' data-aos="zoom-in"><b><i className="bi bi-person-fill"></i> About </b><span className='me'><b>Me</b></span></h1>
                </center>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src="./images/cartoon.png" className='cartoon' alt="" data-aos="fade-up" />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                <div className='aboutcontent'>
                    <h2 className='name5'>I'm Saif</h2>
                    <h4>MERN Stack Developer</h4><br />
                    <p>I am a MERN Stack Developer from Pune, India. I am very passionate about <br />
                    improving my coding skills & developing applications & websites. I build <br />
                     WebApps and Websites using MERN Stack. Working for myself to improve my <br />
                     skills. Love to build Full-Stack clones.</p>
                     <h6 className='text-primary mail'><span className='email'>Email :</span> </h6> <p className='mail'>shaikhsaif23178@gmail.com</p>
                </div>
            </div>
            <hr className='text-light line' />
        </div>
      </div>
    </section>
    </>
  )
}

export default About
