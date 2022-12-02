import './App.css';
import Homepage from './components/Hompage';
import Membership from './components/Membership';
import Navbar from './components/Navbar';

import ContactUs from './components/Contactus';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='Homepage' element={<Homepage/>}/>
        <Route path='/Membership' element={<Membership/>}/>
        <Route path='/Contactus' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}


export default App;
