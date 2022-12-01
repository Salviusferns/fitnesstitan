import './Styles.css';
import Salad from './Salad';
import { useNavigate } from 'react-router-dom';
export default function Meals(props){
    const navigate = useNavigate();
    return(
        <div>
            <div className='top'>
                <section>
                    <h1>What's Healthy Today</h1>
                    <section className='menu-list'>
                      <ul className='buttons'>
                        <button onClick={() => {navigate("/salad")}} class="pulse">Salad</button>
                        <button onClick={() => {navigate("/")}} class="pulse">Soup</button>
                        <button onClick={() => {navigate("/")}} class="pulse">Herbs</button>
                        <button onClick={() => {navigate("/")}} class="pulse">Fish</button>
                        <button onClick={() => {navigate("/")}} class="pulse">Burger</button>
                        <button onClick={() => {navigate("/")}} class="pulse">Noodle</button>
                      </ul>
                    </section>
                </section>
                <section className='middle'>
                   <div> Calorie</div>
                   <div> Exersice</div>
                </section>
                
            </div>
        </div>
    )
}