import React from 'react'
import { Container } from 'react-bootstrap'
import { GetContact, Subs, Touch } from './Footer.style'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div >
        <Container>
            <GetContact>
                <Touch>
                  <h1>Get in touch</h1>
                  <p>For Business inquiry please send email to</p>
                  <p className='text-warning'>rezaprasetya241@gmail.com</p>
                    <a href='#'><FaYoutube/></a>
                    <a href='#'><FaInstagram/></a>
                    <a href='#'><FaTwitter/></a>
                    <a href='#'><FaLinkedin/></a>
                </Touch>
                <Subs>
                  <h3>Subscribe</h3>
                  <input type="text" placeholder="Your email address"/>
                  <button>Send</button>
                </Subs>
            </GetContact>
        </Container>
        <p className='text-center text-white'>Copyright 2022 • Design Made With Love by sCorns Dev.</p>
    </div>
  )
}
