import React, { useRef } from 'react';
import './Contact.css'
import { FaEnvelopeOpen, FaFacebookF, FaLinkedin, FaPhoneSquareAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { Bounce, Roll, Zoom } from 'react-awesome-reveal';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zsew7ht', 'template_exkd0kr', form.current, 'yvbOyN-XoLMtBysx5')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact section">
            <Bounce cascade delay={500}>
                <h2 className="section__title">Get In <span>Touch</span></h2>
            </Bounce>

            <div className="contact__container container grid">
                <Roll delay={700}>
                    <div className="contact__data">
                        <h3 className="contact__title">Don't be Shy!</h3>

                        <p className="contact__description">
                            Feel free to get in touch with me. I am always open to discussing mew projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="contact__info">
                            <div className="info__item">
                                <FaEnvelopeOpen className='info__icon'></FaEnvelopeOpen>

                                <div>
                                    <span className="info__title">Mail me</span>
                                    <h4 className="info__desc">tanvirhemel09@gmail.com</h4>
                                </div>
                            </div>


                            <div className="info__item">
                                <FaPhoneSquareAlt className='info__icon'></FaPhoneSquareAlt>

                                <div>
                                    <span className="info__title">Call me</span>
                                    <h4 className="info__desc">+8801516124277</h4>
                                </div>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <a href="www.facebook.com" className="contact__social-link">
                                <FaFacebookF></FaFacebookF>
                            </a>

                            <a href="www.twitter.com" className="contact__social-link">
                                <FaTwitter></FaTwitter>
                            </a>

                            <a href="www.youtube.com" className="contact__social-link">
                                <FaYoutube></FaYoutube>
                            </a>

                            <a href="www.linkedin.com" className="contact__social-link">
                                <FaLinkedin></FaLinkedin>
                            </a>
                        </div>
                    </div>
                </Roll>

                <Zoom delay={1200}>
                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
                        <div className="form__input-group">
                            <div className="form__input-div">
                                <input type="text" name="from_name" placeholder='Your Name' className="form__control" required />
                            </div>

                            <div className="form__input-div">
                                <input type="email" name="form_email" placeholder='Your Email' className="form__control" required />
                            </div>

                            <div className="form__input-div">
                                <input type="text" name='subject' placeholder='Your Subject' className="form__control" required />
                            </div>
                        </div>
                        <div className="form__input-div">
                            <textarea name="message" placeholder='Your Message' className="form__control textarea" required></textarea>
                        </div>

                        <button type='submit' className="button">
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend></FiSend>
                            </span>
                        </button>
                    </form>
                </Zoom>
            </div>
        </section>
    );
};

export default Contact;