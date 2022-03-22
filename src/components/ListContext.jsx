import React, { createContext, useEffect, useState } from "react";

export const ListContext = createContext();
export const ProductProvider = (props) => {
  const [events, setEvents] = useState([]);
  const [orders, setOrders] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const addProduct = (product) => {
    const addedOrder = orders.find((order) => order.name === product.name);

    if (addedOrder) {
      setOrders(
        orders.map((order) =>
          order.name === product.name
            ? { ...addedOrder, quantity: addedOrder.quantity + 1 }
            : order
        )
      );
    } else {
      setOrders([...orders, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const addedOrder = orders.find((order) => order.name === product.name);

    if (product.quantity === 1) {
      setDisabled(true);
    } else {
      setOrders(
        orders.map((order) =>
          order.name === product.name
            ? { ...addedOrder, quantity: addedOrder.quantity - 1 }
            : order
        )
      );
    }
  };

  const url = "https://my-json-server.typicode.com/majazocom/events/events";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <ListContext.Provider
      value={{
        events,
        setEvents,
        orders,
        setOrders,
        addProduct,
        removeProduct,
        disabled,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
