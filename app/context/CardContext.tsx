"use client";
import { createContext, useEffect, useState } from "react";

export interface ITodo {
  id: number;
  price: string;
  name: string;
}
export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};
const CartContext = createContext<TodoContextType | null>(null);

function CartProvider({ children }: any) {
  // const cartLocal:any = localStorage.getItem("mycart");

  const [cart, setCart] = useState<any>([]);
  // localStorage.setItem("mycart", JSON.stringify(cart));

  let values: any = {
    cart,
    setCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };