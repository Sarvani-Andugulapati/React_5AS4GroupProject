import  data  from '../data.json';
import { Button, Card, Col, Row } from 'react-bootstrap';

import { moviescomingsoon } from '../models/moviesdisplay';


const ComingSoonMovies = () => {
  const moviesoon= data.moviescoming.forEach(element => {
 
    const imagepath=element.posterurl;

    const movietitle = element.title;

  });;
  return (
    <div>

      <Row>
        
          <Col key = {moviesoon.id}>
            <Card style={{ width: '150px' }}>
              <Card.Img variant="top" src={moviesoon.posterurl} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Movie Name
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        
            
      </Row>
    </div>
  )
}
export { ComingSoonMovies }