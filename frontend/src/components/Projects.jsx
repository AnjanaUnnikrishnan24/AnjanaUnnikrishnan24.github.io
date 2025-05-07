import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const projectData = [
  {
    title: '',
    image: '',
    description: '',
    technologies:'',
  },
 
]

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <h2 className="text-center mb-4">Personal Projects</h2>
      <Container>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
