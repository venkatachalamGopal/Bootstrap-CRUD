import React, {useEffect, useState} from 'react';
import {Table,Button} from 'react-bootstrap'
import{useNavigate} from 'react-router-dom'
export const url=`https://640810eb8ee73db92e37819d.mockapi.io/users`

export function CreateUsers(){
    const[users,setUsers]=useState([]);
    const navigate=useNavigate();

    // Get Function call

    useEffect(()=>{
        function getdata(){
            fetch(`${url}`)
            .then((res)=> res.json()).then((data)=>setUsers(data))
        }
        getdata();
    },[])

    // Delete Function call

    function deleteuser(id){
        if(window.confirm(`Are You sure ! wants to Delete this User- ${id}`)===true)
        {
                fetch(`${url}/${id}`,{
                method:'DELETE'
                })
                .then(()=>{
                // Here call again getall data after deletion
                function getdata(){
                fetch(`${url}`)
                .then((res)=> res.json()).then((data)=>setUsers(data))
                }
                getdata()
                })
            
        }
        else{
            
        }
    }

 
  
    return(
        <>
        <h3>User Lists </h3>
        <Table striped="columns" bordered style={{border:'1px'}}>
            <thead variant="dark">
            <tr className='thead'>
                <th>S.NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>CITY</th>
                <th>STATE</th>
                <th>ACTION</th>
            </tr>
            </thead>
            {users.map((elem,index,arr)=><tbody key={elem.id}>
                <tr >
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                    <td>{elem.age}</td>
                    <td>{elem.city}</td>
                    <td>{elem.state}</td>
                    <td>
                        <Button variant='danger' onClick={()=>deleteuser(elem.id)} size='sm'>Delete</Button>
                        {' '}
                        <Button variant='warning' size='sm'onClick={()=>navigate(`/edit-user/${elem.id}`)}>Edit</Button>
                    </td>
                </tr>
            </tbody>
            )}
            
        </Table>
        <Button variant='success' onClick={()=>navigate('/add-user')}>Create New User</Button>

        
        </>
    )
}