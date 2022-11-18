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
                        <button class="pulse">Salad</button>
                        <button class="pulse">Soup</button>
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