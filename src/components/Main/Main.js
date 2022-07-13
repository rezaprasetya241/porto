import React from 'react'
import { ContactMe, InfoLink, LinkMe, MainInfo, MainPic, MainText, PositionText } from './Main.style'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useTypewriter} from 'react-simple-typewriter'
import logo from '../../assets/image/logo.png'
import { Button, Col, Row } from 'react-bootstrap'

function Main() {

    const {text} = useTypewriter({
        words: ['Front-End Engineer', 'ReactJs Developer', 'Full-Stack Developer'],
        loop: true // Infinit
      })
  return (
    <MainInfo>
        <MainText className='animate__animated animate__fadeIn'>
            <p className='text-warning'>👋 Hi, I’m</p>
            <h5>Reza Agung Prasetya</h5>
            <PositionText>I'm a {text}</PositionText>
            <p>Knack of building applications with front and back end operations.</p>
            <InfoLink>
                <Button>Contact Me</Button>
                <LinkMe>
                    <ContactMe href='#'><FaLinkedin/></ContactMe>
                    <ContactMe href ='#'><FaGithub/></ContactMe>
                    <ContactMe href="#"><FaInstagram/></ContactMe>
                </LinkMe>
            </InfoLink>
        </MainText>
        <MainPic className=' animate__animated animate__rollIn'>
            <img src={logo}/>
        </MainPic>
    </MainInfo>
  )
}

export default Main