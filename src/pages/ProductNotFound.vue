<template>
  <div class="not-found-page">
    <h1>Product Not Found</h1>
    <p>The product you are looking for does not exist or has been removed.</p>
    <button @click="goHome">Go Back to Products</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
  router.push("/products"); // Navigate back to the main products page
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--buhler-green);
}

p {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #555;
}

button {
  background-color: var(--buhler-green);
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #2d7a3f;
}
</style>
