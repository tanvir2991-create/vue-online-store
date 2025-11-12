<template>
  <header class="header-bar">
    <!-- Left: Logo / Home -->
    <div class="header-left" @click="goHome">
      <img src="/logo.svg" alt="Buhler Logo" class="logo" />
    </div>

    <!-- Center: Date & Time -->
    <div class="header-center">
      <span class="date-time">{{ formattedDateTime }}</span>
    </div>

    <!-- Right: Cart -->
    <div class="header-right" @click="goToCart">
      <img src="/cart_icon.svg" alt="Cart" class="cart-icon" />
      <span>({{ cartItemCount }})</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useCartStore } from "@/core/store/cartStore";
import { useRouter } from "vue-router";

const store = useCartStore();
const router = useRouter();

const formattedDateTime = ref("");

let intervalId: number;

function updateDateTime() {
  formattedDateTime.value = new Date().toLocaleString("en-IN", {
    hour12: true,
  });
}

onMounted(() => {
  updateDateTime();
  intervalId = window.setInterval(updateDateTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const cartItemCount = computed(() => store.count);

function goHome() {
  router.push("/");
}

function goToCart() {
  router.push("/checkout");
}
</script>

<style scoped>
.header-bar {
  width: 100%;
  height: 68px;
  background-color: #ffffff;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-left {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.logo {
  height: 36px;
  object-fit: contain;
}

.header-center {
  font-size: 14px;
  color: #333333;
  font-weight: 500;
}

.header-right {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}

.cart-icon {
  height: 28px;
}

.header-bar {
  position: fixed; /* makes it stay on top */
  top: 0;
  left: 0;
  width: 100%;
  height: 68px; /* same as your header height */
  z-index: 999;  /* stay above content */
}
</style>
