import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateHotel() {

    let navigate = useNavigate();

    const {hotel_id}= useParams();

    const [user,setUser] = useState({
        hotelname:"",
        location:"",
        phonenumber:""
    });

    const{hotelname,location,phonenumber} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});

    };

    useEffect(()=>{
        loadHotel()
    }, []);

   

    const loadHotel = async () =>{
        
        const result = await axios.get(`http://localhost:9090/hotels/${hotel_id}`);
        setUser(result.data);

    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9090/hotels/${hotel_id}`, user);
        navigate("/home");
    };

    




  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Update Hotel details </h2>


                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='hotelname' className='form-label'>
                        HotelName
                    </label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter Hotel Name'
                    name='hotelname'
                    value={hotelname}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='location' className='form-label'>
                        Location
                    </label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter Location Details'
                    name='location'
                    value={location}
                    onChange={(e) => onInputChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                    <label htmlFor='phonenumber' className='form-label'>
                        Contact Details(Phone Number / Email-ID)
                    </label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter Contact Details'
                    name='phonenumber'
                    value={phonenumber}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>

               <button type='submit' className='btn btn-outline-success'>Submit</button>
               <Link className='btn btn-outline-danger mx-2' to={'/home'}>Cancel</Link>

               </form>


            </div>
        </div>
    </div>
  )
}
