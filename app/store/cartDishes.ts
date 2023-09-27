import { create } from "zustand";

export const useCartStore = create((set) => ({
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
  local: (myDishes) =>
    set(() => {
      localStorage.setItem("LOCAL_KEY", JSON.stringify(myDishes));
    }),
}));

console.log(useCartStore.equalityFn);

// export const useStore = create(
//   persist(
//     (set, get) => ({
//       fishes: 0,
//       addAFish: () => set({ fishes: get().fishes + 1 }),
//     }),
//     {
//       name: "food-storage", // unique name
//       getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
//     }
//   )
// );
