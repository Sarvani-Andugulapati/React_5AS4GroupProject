import  data  from '../data.json';
import { Button, Card, Col, Row } from 'react-bootstrap';


const MovieList = () => {
   
    return (
      <div>
  
        <Row>
          {
            data['movies-in-theaters'].map((movieItem) =>(
            <Col key = {movieItem.id}>
              <Card style={{ width: '150px' }}>
                <Card.Img variant="top" src={movieItem.posterurl} />
                <Card.Body>
                  <Card.Title> {movieItem.title}</Card.Title>
                  <Button variant="primary">Details</Button>
                  <Button variant="outline-secondary">fav</Button>  
                </Card.Body>
              </Card>
            </Col>
            ))
  }
        </Row>
        <Row>
          {
            data.moviescoming.map((movieItem) =>(
            <Col key = {movieItem.id}>
              <Card style={{ width: '150px' }}>
                <Card.Img variant="top" src={movieItem.posterurl} />
                <Card.Body>
                  <Card.Title> {movieItem.title}</Card.Title>
                  <Button variant="primary">Details</Button>
                  <Button variant="outline-secondary">fav</Button>  
                </Card.Body>
              </Card>
            </Col>
            ))
  }
        </Row>
        <Row>
          {
            data['top-rated-india'].map((movieItem) =>(
            <Col key = {movieItem.id}>
              <Card style={{ width: '150px' }}>
                <Card.Img variant="top" src={movieItem.posterurl} />
                <Card.Body>
                  <Card.Title> {movieItem.title}</Card.Title>
                  <Button variant="primary">Details</Button>
                  <Button variant="outline-secondary">fav</Button>  
                </Card.Body>
              </Card>
            </Col>
            ))
  }
        </Row>
        <Row>
          {
            data['top-rated-movies'].map((movieItem) =>(
            <Col key = {movieItem.id}>
              <Card style={{ width: '150px' }}>
                <Card.Img variant="top" src={movieItem.posterurl} />
                <Card.Body>
                  <Card.Title> {movieItem.title}</Card.Title>
                  <Button variant="primary">Details</Button>
                  <Button variant="outline-secondary">fav</Button>
                </Card.Body>
              </Card>
            </Col>
            ))
  }
        </Row>
      </div>
    )
  }
  export { MovieList }