import './Styles.css';
import { useNavigate } from 'react-router-dom';
export default function Meals(props){
    const navigate = useNavigate();
    return(
        <div>
            <div className='top'>
                <section>
                    <h1>What's Healthy Today</h1>
                    <section className='menu-list'>
                      <ul className='butt'>
                        <button onClick={() => {navigate("/salad")}} class="pulse">Breakfast</button>
                        <button onClick={() => {navigate("/")}} class="pulse">Lunch</button>
                        <button onClick={() => {navigate("/")}} class="pulse">Dinner</button>
                      </ul>
                    </section>
                </section>
                
            </div>
        </div>
    )
}