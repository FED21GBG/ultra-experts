function ProductCard(props) {
  return (
    <section>
      <article>
        <h1>Event This</h1>
        <h2>{props.event.name}</h2>
        <h3>{props.event.name}</h3>
      </article>
    </section>
  );
}

export default ProductCard;
