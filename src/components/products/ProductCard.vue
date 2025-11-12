<template>
  <div class="product-card" @click="$emit('click')">
    <div class="image-section">
      <img :src="product.image" :alt="product.name" class="product-image" />
    </div>

    <div class="footer-section">
      <div class="product-name">{{ product.name }}</div>
      <div class="product-footer">
        <span class="product-price">x{{ product.price.toFixed(2) }}</span>
        <svg
          class="cart-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click.stop="cart.add(product)"

        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.707A1 1 0 007 17h10a1 1 0 00.894-.553L21 9M7 13L5.4 5M7 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/core/store/cartStore";
const cart = useCartStore();

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border: 3px solid #e9e9e9; 
  background-color: #f4f4f4; 
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  overflow: hidden;
  width: 250px; 
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.image-section {
  background-color: #f4f4f4; 
  padding: 8px; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px; 
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.footer-section {
  background-color: #e9e9e9; 
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--buhler-green);
  margin-bottom: 6px;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  color: var(--buhler-green);
  font-size: 0.95rem;
  font-weight: 500;
}

.cart-icon {
  color: var(--buhler-green);
}
</style>
