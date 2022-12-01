import "./salad.css"
export default function Salad(){
    const salad = [{ 
        name: "Grilled Lemon Herb Mediterranean Chicken Salad", 
        rating: "-2/10", 
        summary: "This Grilled Lemon Herb Mediterranean Chicken Salad recipe is as close to perfect as you can get! Full of Mediterranean flavours: olives, tomatoes, cucumber, avocados, and chicken for a complete meal in a salad bowl!", 
        review: "“This salad dressing/marinade recipe is flat-out delicious! My husband is raving about it, too. I’ll be making it in quantity so I can have it on hand all of the time. Thank you!….” — Gay", 
        releasedate:"12/07/2022", 
        upvotes: 0, 
        downvotes: 0, 
      }, 
      { 
        name:"Honey Mustard Chicken, Avocado + Bacon Salad", 
        rating:"great/10", 
        summary: "Refreshing, sweet and savoury all at the same time! A popular reader favourite, this Honey Mustard Chicken Salad has been remade all over the world time and time again! You all know me by now that when I create a salad recipe, it ends up being a giant salad that’s a meal in itself. Amazing combinations in a bowl with a hint of garlic, crispy bacon, creamy avocado slices, juicy tomatoes and red onion slices. This is THE ultimate in chicken salad recipes.", 
        review: "“Another great Karina recipe! We loved this salad. An explosion of great flavors. YUMMY! Keep those salad recipes coming, Karina! : )……..” — Annette E", 
        releasedate:"04/08/2021", 
        upvotes: 0, 
        downvotes: 0, 
      }, 
      { 
        id: 3,
        name: "Grille Chimichurri Chicken Avocado Salad", 
        rating: "9/10", 
        summary: "This Chimichurri Chicken Avocado Salad deserves a DRUM ROLL… Using authentic Chimichurri as a dressing that doubles as a marinade keeps all of the incredible flavours of chimichurri in this bowl! After making a batch of this Authentic Chimuchurri with my dad and grilling chicken thighs with it, I KNEW a new salad was coming!", 
        review: "“I’ve tried your recipe yesterday… and it was the BEST f***ing salad I’ve ever eaten! Just WOW! So easy to prepare with a just a few different ingredients, really awesome. Even my boyfriend who doesn’t like salad very much liked this one. ?Thank you very much. ? Best regards………” — Sonja", 
        releasedate: "28/04/2045", 
        upvotes: 0, 
        downvotes: 0 
      }
    ] 
    return(
        <div>
            <ul className="salad">
            {salad.map(res => (
                <button>{res.name}</button>
            ))}
            </ul>
        </div>
    )
}