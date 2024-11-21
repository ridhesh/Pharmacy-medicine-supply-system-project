
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddHotel from './Hotels/AddHotel';
import UpdateHotel from './Hotels/UpdateHotel';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Login />}/> 
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/addhotel' element={<AddHotel />} />
      <Route exact path='/updatehotel/:hotel_id' element={<UpdateHotel />}/>
      {/* <Route exact path=`/login` el */}

      </Routes>
    
      </Router>
      
    </div>
  );
}

export default App;
