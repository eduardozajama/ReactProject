import React from 'react'

import { Container } from 'react-bootstrap'

const About = () => {
    
  return (
    <div className='About'>
      <Container>
      <h1>About us</h1>
      <img className='Consulting' src='../images/consulting.jpg' alt='Imagen de una pantalla virtual' width={500} ></img>
      <div className='Text'>
        <h5> Somos un grupo de estudiantes del programa Codo a Codo. Este es el trabajo final del curso de React<br></br>
        
         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</h5>
      </div>
      </Container>
    </div>
  )
}

export default About