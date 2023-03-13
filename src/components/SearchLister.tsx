import { FormEvent, FormEventHandler, useEffect, useRef, useState } from "react";
import { Button, Row, Col, Form, Modal, Container, Dropdown, ListGroup, ListGroupItem } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import  data  from '../data.json';
import { Movies } from "./Coming_soon";

const SsearchLister = () =>{

    const filterMenuOptions = data;
      const [selectedFilterOption, setSelFilterOption] = useState(
        Object.keys(filterMenuOptions)[0]
      );
      const handleSelect=(e: any)=>{
    console.log(e);
      }
      return (
        
        <Dropdown 
        title="Dropdown right"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}>
          <Dropdown.Toggle variant="warning">Search</Dropdown.Toggle>
          <Dropdown.Menu>
            <Container>
              <Row style={{ minWidth: "50vw" }}>
                <Col>
                  <ListGroup variant="flush">
                    {Object.keys(filterMenuOptions).map((fKey, id) => (
                      <ListGroup.Item
                        key={id}
                        action
                        active={selectedFilterOption === fKey}
                        onClick={() => setSelFilterOption(fKey)}
                        variant="success"
                      >
                        {fKey}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      );
                    }
export { SsearchLister }