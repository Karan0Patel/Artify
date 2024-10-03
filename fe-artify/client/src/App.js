import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EditProfile from './Components/EditProfile';
import SubscriptionPage from './Components/SubscriptionPage';
import Login from './Components/Login';
import Signup from './Components/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path='/' element={<EditProfile/>}/>
        <Route path='/subscription' element={<SubscriptionPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
