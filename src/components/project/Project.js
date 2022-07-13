import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import foto from '../../assets/image/avatar.png'
import DataProject from './DataProject.json'
import { LinkProject, ProjectImg, ProjectList, Url } from './Project.style'

export default function Project() {
  return (
      <div className='Project'>
        <h1 className='text-center text-white'>My Project</h1>
        <ProjectList>
            {
                DataProject.map( data => {
                    let url = data.src
                    return(
                        <Card style={{ width: '18rem' }} key={data.id} className='CardProject'>
                            {/* <Card.Img src={data.src} className='projectImg'/> */}
                            <ProjectImg src={data.src} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>Hello</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Url>
                                    <Button variant="warning">Details</Button>
                                    <LinkProject href='#'>
                                        <FaGithub />
                                    </LinkProject>
                                </Url>
                            </Card.Body>
                    </Card>
                    )
                })
            }
        </ProjectList>
      </div>
  )
}
