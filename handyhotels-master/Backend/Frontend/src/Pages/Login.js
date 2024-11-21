
import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link,  } from 'react-router-dom';

function Login() {
  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      

      <Link className='btn btn-outline-primary mx-2' to={'/home'}>SignIn</Link>

      

       
          

        

    </MDBContainer>
  );
}

export default Login;