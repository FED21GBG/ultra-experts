import { ListContext } from "../components/ListContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Order() {
  let { orders, addProduct, removeProduct } = useContext(ListContext);

  let totalPrice = orders.reduce(
    (price, order) => price + order.quantity * order.price,
    0
  );

  const location = useLocation();
  const { from } = location.state;

  return (
    <section className="mainOrderContainer">
      <section>
        <button className="allTicketsBtn">
          <Link to="/AllTickets" className="allTicketsLink">
            Alla eventer
          </Link>
        </button>
        <h1 className="title">Order</h1>

        {orders.map((order) => (
          <section key={order.name}>
            <section className="orderContainer">
              <article className="orderInfo">
                <h6 className="orderTitle">{order.name}</h6>
                <p className="eventWhen">
                  {order.date} kl. {order.from} - {order.to}
                </p>
              </article>
              <article className="ticketsCount">
                <div
                  className="ticketButton"
                  onClick={() => removeProduct(order)}
                >
                  -
                </div>
                <div className="ticketNumber">{order.quantity}</div>
                <div className="ticketButton" onClick={() => addProduct(order)}>
                  +
                </div>
              </article>
              <div className="orderPrice">{order.price * order.quantity}</div>
            </section>
          </section>
        ))}
      </section>
      <section>
        <p className="totalText">Totalt värde på order</p>
        <h2 className="totalPrice">{totalPrice} SEK</h2>

        <button className="bookBtnOrder cartBookTickets" id="btnOrder">
          <Link
            to="/Receipt"
            state={{ from: { orders, totalPrice } }}
            className="bookTickets"
          >
            Skicka order
          </Link>
        </button>
      </section>
    </section>
  );
}
