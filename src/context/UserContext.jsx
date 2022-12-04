import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [wishList, setWishList] = useState([]);
  const [cartList, setCartList] = useState([])

  const addProductToWishList = (product) => {
    setWishList([...wishList, product])
  }

  const addProductToCartList = (product) => {
    setCartList([...cartList, product])
  }

  return (
    <UserContext.Provider value={{ usuario, setUsuario, addProductToWishList, addProductToCartList }}>
      {children}
    </UserContext.Provider>
  );
};