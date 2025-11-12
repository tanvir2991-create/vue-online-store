import { defineStore } from "pinia";
import type { Product } from "@/core/models/Product";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Product[],
  }),

  getters: {
    total: (state) => state.items.reduce((sum, p) => sum + p.price, 0),
    count: (state) => state.items.length,
  },

  actions: {
    add(product: Product) {
      this.items.push(product);
    },

    remove(id: number) {
      this.items = this.items.filter((p) => p.id !== id);
    },

    clear() {
      this.items = [];
    },
  },
});
