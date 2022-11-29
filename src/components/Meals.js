import './Styles.css';
export default function Meals(props){
    return(
        <div>
            <div className='top'>
                <section>
                    <h1>What's Healthy Today</h1>
                
                    <div>Meat</div>
                    <div> Veg</div>
                    <section className='menu-list'>
                      <ul className='buttons'>
                        <li class="pulse">Salad</li>
                        <li class="pulse">Soup</li>
                        <button class="pulse">Herbs</button>
                        <button class="pulse">Fish</button>
                        <button class="pulse">Burger</button>
                        <button class="pulse">Noodle</button>
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