import {url} from './createUsers'
import { Button,Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function AddUser(){
    const navigate=useNavigate()
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [city,setCity]=useState();
    const [state,setState]=useState();

    async function adduser(){
        const newobj={
            name:name,age:age,city:city,state:state
        }
        await fetch(`${url}`,{
            method:'POST',
            body:JSON.stringify(newobj),
            headers:{
                "Content-Type":"application/json"
            }
        })
        await navigate("/create-user");

    }

    return (
        <>
        <h3 className='add-head'><u>Add New Users :</u></h3>
        <div className="adduserDiv">
        <Form>
            <Form.Group className='mb-2'>
                <Form.Label className='form-label'>User Name :</Form.Label>
                <Form.Control className="inps" onChange={(event)=>setName(event.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Age :</Form.Label>
                <Form.Control onChange={(event)=>setAge(event.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>City :</Form.Label>
                <Form.Control onChange={(event)=>setCity(event.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>State :</Form.Label>
                <Form.Control onChange={(event)=>setState(event.target.value)}/>
            </Form.Group>
            <Button className='mt-2 userBtn' onClick={()=>adduser()}>Click to Add</Button>
        </Form>
        </div>
        </>
    );
}