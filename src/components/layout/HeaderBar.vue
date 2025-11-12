<template>
  <header class="header-bar">
    <div class="header-left" @click="goHome">
      <img src="/logo.svg" alt="Buhler Logo" class="logo" />
    </div>

    <div class="header-center">
      <span class="date-time">{{ formattedDateTime }}</span>
    </div>

    <div class="header-right" @click="goToCart">
      <svg
          class="cart-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
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
      <span>({{ cartItemCount }})</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref,computed,  onMounted } from "vue";
import { useCartStore } from "@/core/store/cartStore";
import { useRouter } from "vue-router";

const store = useCartStore();
const router = useRouter();

const formattedDateTime = ref("");

function updateDateTime() {
  formattedDateTime.value = new Date().toLocaleString("en-IN", {
    hour12: true,
  });
}

onMounted(() => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
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

</style>
