import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import UpdateHotel from '../Hotels/UpdateHotel';
export default function Home() {

const[users, setUsers] = useState([])
const{hotel_id} = useParams()


useEffect(()=>{
    loadUsers();
},[]);

const loadUsers = async() => {
    const result = await axios.get("http://localhost:9090/hotels");
    setUsers(result.data);
};

const deleteHotel=async(hotel_id) =>{
    await axios.delete(`http://localhost:9090/hotels/${hotel_id}`)
    loadUsers();
};



  return (
    <div className='container'>
        <div className='py-4'>
        <table className='table table-striped border shadow'>
  <thead>
    <tr>
    
      <th scope="col">Index</th>
      <th scope='col'>Hotelid</th>
      <th scope="col">Hotelname</th>
      <th scope="col">Location</th>
      <th scope="col">Contact Details(Phone Number / Email)</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      
      <td>{user.hotel_id}</td>
      <td>{user.hotelname}</td>
      <td>{user.location}</td>
      <td>{user.phonenumber}</td>
      <td>
        
        <Link className='btn btn-outline-primary mx-2' to={`/updatehotel/${user.hotel_id}`}>
        Update</Link>
        <button className='btn btn-danger mx-2'
        onClick={()=>deleteHotel(user.hotel_id)}>Delete</button>
      </td>
    </tr>
        ))
    }
        
  </tbody>
</table>
        </div>

    </div>
  )
}
