import React, { FormEvent, useRef, useState } from "react";
import { Card, Button, Row, Col, Dropdown, Form } from "react-bootstrap";
import { moviesData } from "../movies-list";
import { ComingSoonMovies } from "./Coming_soon";


const SsearchLister = () => {

    const selectRef = useRef<HTMLSelectElement>(null);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleSelect = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const selectelement = (selectRef?.current?.value as string);


    }

    return (
        <div style={
            { backgroundColor: "lightblue", height: "auto", justifyContent: "center" }}>
            <Row>
                <Col>
                    <h1 style={{ fontSize: "16px" }}>Which movie category are you interested in?</h1>
                    <Form onSubmit={handleSelect}>
                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Select Category</Form.Label>

                            <Form.Select aria-label="Default select example" style={{ width: "auto" }}>

                                <option>Select movie type</option>
                                <option value="1">Coming Soon</option>
                                <option value="2">Movies in Theatre</option>
                                <option value="3">Top rated Indian</option>
                                <option value="4">Top rated movies</option>

                            </Form.Select>
                            <Button variant="primary" type="submit" className="float-start" style={{height:"auto",padding:"2px",fontSize:"14px"}}>
                            Select
                        </Button>
                        </Form.Group>
                      
                    </Form>
                    <ComingSoonMovies></ComingSoonMovies>
                </Col>
                
            </Row>
           
        </div>
    )
}
export { SsearchLister }