import { create } from "zustand";

const useCartStore = create((set) => ({
  cartCount: 0,
  addToCart: (productId, buttonText) => {
    if (buttonText === "Add to Cart") {
      const existingCart = JSON.parse(localStorage.getItem("cartCount")) || [];
      const updatedCart = [...existingCart, { id: productId }];
      localStorage.setItem("cartCount", JSON.stringify(updatedCart));
      set({ cartCount: updatedCart.length });
    }
  },
}));

export const useCart = () => useCartStore();
