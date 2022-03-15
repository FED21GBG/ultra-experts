function Card(props) {
    function addEvent(){
        alert('hej')
    }
    return (
        <section>
            <h2>{props.event.id}</h2>
            <h3>Event: {props.event.spell}</h3>
            <p>Use : {props.event.use}</p>

            <button onClick={addEvent}>book</button>

        </section>
    );
}

export default Card;