<template>
  <div class="product-page">
    <button class="back-button" @click="router.back()">Back</button>

    <div v-if="product" class="product-details">
      <img :src="product.image" :alt="product.name" class="product-image" />

      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-category">{{ product.type }}</p>
        <p class="product-price">x{{ product.price }}</p>

        <button class="add-to-cart" @click="cart.add(product)">
          <svg
            class="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.707A1 1 0 007 17h10a1 1 0 00.894-.553L21 9M7 13L5.4 5M7 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>

    <div v-else>
      <p>Product not found. Redirecting...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "@/core/store/cartStore";
import { getProductById } from "@/core/services/productService";

const route = useRoute();
const router = useRouter();
const cart = useCartStore();

// get product by id
const product = getProductById(Number(route.params.id));

if (!product) {
  setTimeout(() => router.push("/"), 1000);
}
</script>

<style scoped>
.product-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.back-button {
  align-self: flex-start;
  background: none;
  color: var(--buhler-green);
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 10px;
}


.product-details {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.product-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-name {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
}

.product-category {
  font-size: 1rem;
  margin: 0;
}

.product-price {
  font-size: 1.1rem;
  font-weight: 500;
}

.add-to-cart {
  display: flex;
  background: none;
  align-items: center;
  gap: 6px;
  margin-top: 230px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  style: none;
}
.cart-icon {
  stroke: var(--buhler-green);
}
</style>
