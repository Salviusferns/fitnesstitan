import './Meals.css';
export default function Meals(props){
    return(
        <div>
            <div className='top'>
                <section>
                    <h1>What's Healthy Today</h1>
                
                    <div>Meat</div>
                    <div> Veg</div>
                    <section className='menu-list'>
                      <ul>
                        <li>Salad</li>
                        <li>Soup</li>
                        <li>Herbs</li>
                        <li>Fish</li>
                        <li>Burger</li>
                        <li>Noodle</li>
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