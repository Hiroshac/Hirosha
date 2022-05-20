
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';





const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_air8mmo', 'template_83gjsdy', form.current, 'BQMe2DWWggIFzoAIc')

    e.target.reset();

  };

  return (
    <section id = 'contact'>
      <h5>I am here</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>hiroshachandramal01@gmail.com</h5>
            <a href='mailto:hiroshachandramal01@gmail.com'>send a message</a>
          </article>
          <article className='contact_option'>
            <AiFillLinkedin className='contact_option-icon'/>
            <h4>Linkdin</h4>
            {/* <h5>hiroshachandramal01@gmail.com</h5> */}
            <a href='https://www.linkedin.com/in/hirosha-samarasekara-b5a19b213/'>Hirosha Samarasekara</a>
          </article>
          <article className='contact_option'>
            <BsFacebook className='contact_option-icon'/>
            <h4>Facebook</h4>
            {/* <h5>hiroshachandramal01@gmail.com</h5> */}
            <a href='https://www.facebook.com/hirosha.samarasekara.92/'>Hirosha Samarasekara</a>
          </article>
          <article className='contact_option'>
            <AiOutlineInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            {/* <h5>hiroshachandramal01@gmail.com</h5> */}
            <a href='https://www.instagram.com/hirosha_c/'>HIROSHA CHANDRAMAL</a>
          </article>
        </div>

        {/* end */}
        <form ref={form} onSubmit={sendEmail}>
          <input type ="text" name = 'name' placeholder='Your Full Name' required/>
          <input type ="email" name = 'email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact