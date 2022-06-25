import React from 'react'
import images from "../../constants/images"
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { client } from '../../client'
import emailjs from "@emailjs/browser";

import "./Footer.scss";

const Footer = () => {

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { name, email, message } = formData;
  const form = React.useRef();

  const handleChangeInput = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch(error => console.log(error))
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nkene3r",
        "template_9l79svj",
        form.current,
        "lR4hz4tCyKUq455Li"
      )
      .then(
        (result) => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (err) => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <h2 className='head-text'>Take a <span>coffee</span> and <span>chat</span> with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href="mailto: tanujkalonia2002@gmial.com" className='p-text'>
            tanujkalonia2002@gmial.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href="tel : +91-9599959651" className='p-text'>
            +91-9599959651
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.location} alt="location" />
          <a href="https://www.google.com/maps/@28.3173765,77.0555482,18.87z" className='p-text'>
            Haryana, India
          </a>
        </div>
      </div>

      {
        !isFormSubmitted ?

          <div className='app__footer-form app__flex'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='app__flex'>
                <input
                  className='p-text'
                  type="text"
                  name="name"
                  value={name}
                  placeholder='Your Name'
                  onChange={handleChangeInput}
                />
              </div>
              <div className='app__flex'>
                <input
                  className='p-text'
                  type="email"
                  name="email"
                  value={email}
                  placeholder='Your Email'
                  onChange={handleChangeInput}
                />
              </div>

              <div>
                <textarea
                  className='p-text'
                  placeholder='Your Message'
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>

              <button type='submit' className='p-text' onClick={handleSubmit}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          :

          <div className='head-text'>
            <h3>Thank you for getting in touch 🥰</h3>
          </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)
