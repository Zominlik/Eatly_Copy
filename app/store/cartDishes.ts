import { create } from "zustand";

export const useCartStore:any = create((set:any) => ({
  myDishes: [
    {
      image: "",
      price: "",
      mark: "",
      id: "",
      time: "",
      name: "",
    },
  ],
  local: (myDishes:any) =>
    set(() => {
      localStorage.setItem("LOCAL_KEY", JSON.stringify(myDishes));
    }),
}));

console.log(useCartStore.equalityFn);