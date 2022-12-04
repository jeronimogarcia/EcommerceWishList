import React, { createContext, useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [wishList, setWishList] = useState([]);
  const [cartList, setCartList] = useState([])
  const [docID, setDocID] = useState(null)

  const addProductToWishList = (product) => {
    setWishList([...wishList, product])
    uploadWishList()
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

  const getWishListFromDatabase = async (user) => {
    const q = query(
      collection(db, "wishLists"),
      where("cliente", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setWishList(doc.data().products)
      setDocID(doc.id)
    });
  }

  const getCartListFromDatabase = async (user) => {
    const q = query(
      collection(db, "cartLists"),
      where("cliente", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCartList(doc.data().products)
    });
  }

  const uploadWishList = async () => {
    try {
      const docRef = doc(db, "wishLists", docID);
      await updateDoc(docRef, {
        products: [...wishList],
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{
      usuario,
      setUsuario,
      addProductToWishList,
      addProductToCartList,
      createWishListAndCartListInDataBase,
      getWishListFromDatabase,
      getCartListFromDatabase,
      uploadWishList
    }}>
      {children}
    </UserContext.Provider>
  );
};