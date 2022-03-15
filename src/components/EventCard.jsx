import ProductCard from "./ProductCard";
import { useState } from 'react'

function Card(props) {
    const [cart, setCart] = useState([]);

    function addEvent() {
        setCart(props.event)
        console.log(props.event);
      
    }



    // function toEvent(event){
    //     const productExits = cart.find((item) => item.id === event.id);
    //     console.log({ productExits });
    // }

    return (
        <section>
            <h2>{props.event.name}</h2>
            <h6>{props.event.where}</h6>
            <p> {props.event.when.from}</p>
            <p> {props.event.when.to}</p>
            <h6>{props.event.when.date}</h6>
            <h6>{props.event.price} sek</h6>




            <button onClick={addEvent}>book</button>

        </section>
    );
}

export default Card;