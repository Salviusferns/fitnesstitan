import './Styles.css';

export default function Meals(props){
    return(
        <div className='top'>
            <section>
                <h1>What's Healthy Today</h1>
                <section className='menu-list'>
                    <ul>
                    <button class="pulse">Breakfast</button>
                    <button class="pulse">Lunch</button>
                    <button class="pulse">Dinner</button>
                    </ul>
                </section>
            </section>
        </div>
    )
}