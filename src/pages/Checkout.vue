<template>
  <div class="checkout-page">
    <h2>Checkout</h2>

    <!-- Clear Cart Button -->
    <div v-if="cart.items.length" class="clear-cart-container">
      <button class="clear-cart-btn" @click="clearCart">Clear Cart</button>
    </div>

    <div v-if="cart.items.length" class="cart-list">
      <div v-for="(item, index) in cart.items" :key="index" class="cart-item">
        <div class="cart-left">
          <img :src="item.image" :alt="item.name" class="cart-image" />
          <div class="cart-info">
            <div class="cart-name">{{ item.name }}</div>
            <div class="cart-type">{{ item.type }}</div>
          </div>
        </div>

        <div class="cart-right">
          <div class="cart-price">
            x{{ item.price }}
            <span class="remove-btn" @click="removeItem(index)">X</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Your cart is empty.</p>
    </div>

    <div class="cart-total" v-if="cart.items.length">
      <strong>Total: x{{ cart.total.toFixed(2) }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/core/store/cartStore";
const cart = useCartStore();

function removeItem(index: number) {
  cart.items.splice(index, 1);
}

// Clear all items from cart
function clearCart() {
  cart.items = [];
}
</script>

<style scoped>
.checkout-page {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
}

/* Clear Cart Button */
.clear-cart-container {
  text-align: right;
  margin-bottom: 12px;
}

.clear-cart-btn {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.clear-cart-btn:hover {
  background-color: #e63946;
}

/* Cart list */
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}

.cart-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cart-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.cart-info {
  display: flex;
  flex-direction: column;
}

.cart-name {
  font-weight: 600;
  font-size: 1rem;
}

.cart-type {
  font-size: 0.85rem;
  color: #555;
}

.cart-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.cart-price {
  font-weight: 500;
  font-size: 1rem;
}

.remove-btn {
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}

.remove-btn:hover {
  background-color: #c9cdd0ff;
}

.cart-total {
  margin-top: 24px;
  text-align: right;
  font-size: 1.2rem;
}
</style>
