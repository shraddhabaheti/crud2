import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Post() {
   const [data,setData]=useState([]);
   const [serch,setSerch]=useState([]);
   const navigate=useNavigate();
   const getApi = async()=>{
       try{
        let res= await axios.get('https://jsonplaceholder.typicode.com/photos')
        let newData = res?.data.slice(0,50)
        setData(newData)
        setSerch(newData)
       }catch(err){
            console.log(err)
       }
     
   }
    useEffect(()=>{
       getApi()
   },[])
   const handleChange = (e) => {
    if (e.target.value) {
         let newData =  serch.filter(value => value.title.includes(e.target.value)) 
        setData(newData)
    } 
     else {
        setData(serch)
     }

  }

   const onSubmit =(id)=>{
       navigate(`/view/${id}`)
   }
const submit=()=>{
    navigate('/viewdetails')
}
   return (

    <div>
        <div>
      <h1 className='id'>Post data with api </h1>
           
            <input type="search" placeholder='serch...'className='id1' onChange={handleChange} />
        </div>
        {
            data.map((value, i) => {
                return (
                    <Table>
                        <tr>
                            <td>
                    <Card style={{ width: '18rem' }}>
                   <Card.Title>{value.title}</Card.Title>
                   <Card.Img variant="top" src={value.url} />
                     <Card.Body>
                    <Card.Text>{value.id}</Card.Text>
                    <Card.Text> </Card.Text>
                    <Button variant="warning" type="submit" onClick={()=>onSubmit(value.id)}>view</Button>
                    <Button variant="primary" type="submit" onClick={()=>submit()}>viewdetails</Button>
                     </Card.Body>
                     </Card>
                     </td>
                     <td>
                    <Card style={{ width: '18rem' }}>
                   <Card.Title>{value.title}</Card.Title>
                  <Card.Img variant="top" src={value.url} />
                     <Card.Body>
                    <Card.Text>{value.id}</Card.Text>
                    <Card.Text> </Card.Text>
                    <Button variant="warning" type="submit" onClick={()=>onSubmit(value.id)}>view</Button>
                    <Button variant="primary" type="submit" onClick={()=>submit()}>viewdetails</Button>
                     </Card.Body>
                     </Card>
                     </td>
                     <td>
                    <Card style={{ width: '18rem' }}>
                   <Card.Title>{value.title}</Card.Title>
                   <Card.Img variant="top" src={value.url} />
                     <Card.Body>
                    <Card.Text>{value.id}</Card.Text>
                    <Card.Text> </Card.Text>
                    <Button variant="warning" type="submit" onClick={()=>onSubmit(value.id)}>view</Button>
                    <Button variant="primary" type="submit" onClick={()=>submit()}>viewdetails</Button>
                     </Card.Body>
                     </Card>
                     </td>
                     </tr>
                     </Table>
                 )
           })
        }
    </div> 
 );
}
export default Post;