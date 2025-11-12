<template>
  <div class="product-page">

    <div class="content">
      <h1 class="page-title">Product List</h1>

      <div
        v-for="section in productSections"
        :key="section.section"
        class="product-section"
      >
        <h2 class="section-title">{{ section.sectionLabel }}</h2>

        <div class="product-grid">
          <ProductCard
            v-for="p in section.products"
            :key="p.id"
            :product="p"
            @click="$router.push('/products/' + p.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/products/ProductCard.vue";
import { getAllProducts } from "@/core/services/productService";

const productSections = getAllProducts();
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  min-height: 100vh;
}

.content {
  width: 100%;
  max-width: 1550px;
  margin: 60px auto;
  padding: 0 20px;
}

.page-title {
  display: none; 
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--buhler-green);
  margin: 1.5rem 0 1.5rem 0;
  border: none;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 28px; 
}

@media (max-width: 1280px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
