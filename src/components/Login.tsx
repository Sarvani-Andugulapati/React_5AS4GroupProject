import { Card, Button, Form, Alert } from 'react-bootstrap';
import {FormEvent, useRef, useState} from "react";
import {userData} from "../user-credentials";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const [error, setError] = useState('');

    const doLogin= (event: FormEvent<HTMLFormElement>) =>{

        event.preventDefault();

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const matcheduerData = userData.users.find((userData)=>{

            if(userData.username === username &&
                userData.password === password){
                    return true;
                }
        })

        if(matcheduerData){
             navigate("/Home");
        }else{
            setError("Invalid username/password supplied.")
        }

    }

    return (
        <div style={{height:"90vh",position:"relative",display:"flex",
        padding:"80px 0",justifyContent:"center"}}>

            <Card style={{width: "40%",padding:"20px 0",borderColor:"brown",
            borderRadius:"8px",boxShadow:"10px 10px 20px rgba(6, 64, 112)"}}>

                <Form 
                style={{paddingLeft:"20px",paddingRight:"20px"}}
                onSubmit={doLogin}>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" ref={usernameRef}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    {
                        error && (
                            <Alert key= "danger" variant ="danger">
                                {error}
                            </Alert>
                        )
                    }
                </Form>
            </Card>
            </div>
    )
    }
export {Login}