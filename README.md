# Vue Online Store

A simple online store built with **Vue 3**, **Pinia**, and **Vue Router**, featuring product listing, product details, and a checkout cart. This project was created as an assignment to demonstrate modern Vue.js concepts and state management.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Running the Project](#running-the-project)
* [Build](#build)
* [Technologies Used](#technologies-used)
* [Future Improvements](#future-improvements)

---

## Project Overview

This project is a basic online store application that allows users to:

* Browse products by category
* View product details
* Add products to a cart
* Checkout and manage cart items

The application is responsive and uses a **fixed header** for easy navigation and a real-time cart count indicator.

---

## Features

* Product listing with cards
* Product details page
* Add to cart functionality
* Checkout page with item removal
* Fixed header with cart item count
* Uniform product card and image sizing

---

## Project Structure

```
vue-online-store/
│
├─ public/               # Static assets (logo, SVGs)
├─ src/
│  ├─ assets/            # CSS, images
│  ├─ components/        # Reusable Vue components (HeaderBar, ProductCard)
│  ├─ core/
│  │   ├─ services/      # Product service
│  │   ├─ store/         # Pinia store
│  │   └─ models/        # TypeScript models (Product, ProductSection)
│  ├─ pages/             # Page-level components (ProductList, ProductDetails, Checkout, ProductNotFound)
│  ├─ App.vue
│  └─ main.ts
├─ package.json
└─ vite.config.ts
```

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd vue-online-store
```

2. Install dependencies:

```bash
npm install
```

---

## Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and visit: `http://localhost:5173`

---

## Build

To build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Technologies Used

* **Vue 3** – Frontend framework
* **TypeScript** – Type safety
* **Pinia** – State management for cart functionality
* **Vue Router 4** – Routing
* **Vite** – Development and build tool
* **SCSS/CSS** – Styling

---

## Future Improvements

* Implement **quantity management** in the cart
* Add **product search** and filters
* Persistent cart using **localStorage**
* Responsive design optimizations
* Add **user authentication** and order history

---

**Author:** Tanvir Shaikh
**Assignment Date:** 12 Nov 2025
