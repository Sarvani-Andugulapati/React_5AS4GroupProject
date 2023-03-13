import  data  from '../data.json';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { MovieList } from './MovieList';


const Movies = (movieType: string) => {

switch (movieType) {
  case 'moviescoming':
    {
      return (
        <div>
    
          <Row>
            {
              data.moviescoming.map((movieItem) =>(
              <Col key = {movieItem.id}>
                <Card style={{ width: '150px' }}>
                  <Card.Img variant="top" src={movieItem.posterurl} />
                  <Card.Body>
                    <Card.Title> {movieItem.title}</Card.Title>
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              ))
    }
          </Row>
        </div>
      )
    }
    case 'movies-in-theaters':
      {
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
                    </Card.Body>
                  </Card>
                </Col>
                ))
      }
            </Row>
          </div>
        )
      }
      case 'top-rated-india':
        {
          return (
            <div>
        
              <Row>
                {
                   data['top-rated-india'].map((movieItem) =>(
                  <Col key = {movieItem.id}>
                    <Card style={{ width: '150px' }}>
                      <Card.Img variant="top" src={movieItem.posterurl} />
                      <Card.Body>
                        <Card.Title> {movieItem.title}</Card.Title>
                        <Button variant="primary">Details</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  ))
        }
              </Row>
            </div>
          )
        }
        case 'top-rated-movies':
          {
            return (
              <div>
          
                <Row>
                  {
                     data['top-rated-movies'].map((movieItem) =>(
                    <Col key = {movieItem.id}>
                      <Card style={{ width: '150px' }}>
                        <Card.Img variant="top" src={movieItem.posterurl} />
                        <Card.Body>
                          <Card.Title> {movieItem.title}</Card.Title>
                          <Button variant="primary">Details</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    ))
          }
                </Row>
              </div>
            )
          }
}
  
}
 
export { Movies }