import React, { createContext, useState, useEffect } from "react";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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

  const createWishListAndCartListInDataBase = async (user) => {
    await addDoc(collection(db, "cartLists"), {
      cliente: user.uid,
      products: cartList,
    });
    await addDoc(collection(db, "wishLists"), {
      cliente: user.uid,
      products: wishList,
    });
  }

  return (
    <UserContext.Provider value={{ usuario, setUsuario, addProductToWishList, addProductToCartList, createWishListAndCartListInDataBase }}>
      {children}
    </UserContext.Provider>
  );
};