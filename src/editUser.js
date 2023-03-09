import { useNavigate,useParams } from "react-router-dom";
import { Form,Button } from "react-bootstrap";
import { useEffect,useState } from "react";
import { url } from "./createUsers";

export function EditUser(){
    const navigate=useNavigate();
    const {id}=useParams();
    const[name,setName]=useState()
    const[age,setAge]=useState()
    const[city,setCity]=useState()
    const[state,setState]=useState()

    useEffect(()=>{
        async function edituser(){
            const resp=await fetch(`${url}/${id}`);
            const data=await resp.json()
            setName(data.name);setAge(data.age);setCity(data.city);setState(data.state);
            
        }
        edituser()
    },[id])
        
    async function edituser(){
        const editobj={
            name:name,age:age,city:city,state:state
        }
        await fetch(`${url}/${id}`,{
            method:"PUT",
            body:JSON.stringify(editobj),
            headers:{
                "Content-Type":"application/json"
            }
        })
        navigate('/');
        // console.log(editobj);
    }
    

    return(
        <>
        <h4><u>Edit user : </u></h4>
        <Form>
            <Form.Group className='mb-2'>
                <Form.Label>User Name :</Form.Label>
                <Form.Control value={name} onChange={((event)=>setName(event.target.value))}/>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Age :</Form.Label>
                <Form.Control value={age} onChange={((event)=>setAge(event.target.value))} />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>City :</Form.Label>
                <Form.Control value={city} onChange={((event)=>setCity(event.target.value))} />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>State :</Form.Label>
                <Form.Control value={state} onChange={((event)=>setState(event.target.value))}/>
            </Form.Group>
            <Button onClick={()=>edituser()}>Save</Button>
        </Form>
        </>
    );
}