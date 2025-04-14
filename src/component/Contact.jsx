import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id='contact'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <center>
                    <h1 className="about text-light" data-aos="zoom-in"><i class="bi bi-headset"></i> Get In <span className='me'><b>Touch</b></span></h1>
                </center>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 contact'>
                <img src="./images/Recruit.png" data-aos="fade-down" className='contactimg' alt="" />
                <div className='contactform'>
                  <form action="https://formspree.io/f/meoqroqy" method='post' data-aos="fade-right">
                    <input type="text" name='name' className='contactname' required placeholder='Enter Your Name' />
                    <input type="email" name='email' className='contactname' required placeholder='Enter Your Email' />
                    <input type="tel" name='number' className='contactname' required maxLength={10} placeholder='Enter Your Phone Number' />
                    <textarea name="message" type='text' placeholder='Enter Your Message' required className='contactname1' id=""></textarea>
                    <button className='contactname resume'><b>Send Message</b></button><br /><br />
                  </form>
                </div>
              </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
