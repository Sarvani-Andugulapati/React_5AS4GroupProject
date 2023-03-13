import { SsearchLister } from "./SearchLister"
import { Container,Row,Col } from "react-bootstrap"
import { Favourites } from "./Favourites-List"
import { MovieList } from "./MovieList"
import { useState } from "react"
import  data  from '../data.json';


const Home = () =>{
    const [item, setItem] = useState(data);
    return(
        <Container>
            <Row>
                <Col lg={9}>
                <SsearchLister></SsearchLister><br></br>
                <MovieList></MovieList>
                </Col>
                <Col>
                <Favourites></Favourites>
                </Col>
            </Row>
        </Container>
    )
}
export{Home}