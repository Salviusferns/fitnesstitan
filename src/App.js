import './App.css';
import Homepage from './components/Hompage';
import Membership from './components/Membership';
import Navbar from './components/Navbar';
import Meals from './components/Meals/Meals';
import ContactUs from './components/Contactus';
import { Route, Routes } from 'react-router-dom';
import Noodles from "./components/Meals/Noodle"
import Fish from "./components/Meals/Fish"
import Burger from "./components/Meals/Burger"
import Salad from "./components/Meals/Salad"
import Soup from "./components/Meals/Soup"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='Homepage' element={<Homepage/>}/>
        <Route path='/Membership' element={<Membership/>}/>
        <Route path='/meals' element={<Meals/>}>
          <Route path='Salad' element={<Salad/>}/>
          <Route path='Soup' element={<Soup/>}/>
          <Route path='Fish' element={<Fish/>}/>
          <Route path='Burger' element={<Burger/>}/>
          <Route path='Noodles' element={<Noodles/>}/>
        </Route>
        <Route path='/Contactus' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}


export default App;
