# 🧪 Grey Scientific Labs - Product Management System

A production-ready product management interface built with modern React practices, featuring comprehensive CRUD operations, advanced search, and pagination capabilities. This project demonstrates clean architecture, type-safe development, and industry-standard coding practices.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🎯 About the Assignment

The assignment required building a scalable product management system with the following objectives:

- Implement a complete product CRUD (Create, Read, Update, Delete) system
- Design an intuitive user interface with search and pagination
- Demonstrate proficiency in React, TypeScript, and state management
- Follow industry best practices and clean code principles
- Ensure type safety and ESLint compliance

---

## 🌐 Live Demo

🔗 **[View Live Application](https://frontend-assignment-grey-labs.netlify.app/)** 

> *Note: The application is deployed on Netlify for evaluation purposes.*

---

## ✨ Features

### Core Functionality
- 📦 **Product Management** - Complete CRUD operations for products
- 🔍 **Real-time Search** - Instant search filtering by product name
- 📄 **Smart Pagination** - Navigate through large product catalogs efficiently
- ➕ **Add Products** - Create new products with validation
- ✏️ **Edit Products** - Update existing product information seamlessly

### Technical Features
- 🎨 **Modern UI/UX** - Clean, minimal dark theme interface
- 🖼️ **CDN Integration** - Optimized image delivery using Cloudinary
- ⚡ **Performance Optimized** - Fast rendering and minimal re-renders
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- 🔒 **Type Safety** - Full TypeScript implementation with strict typing
- ✅ **Code Quality** - ESLint compliant with zero warnings

---

## 🚀 Tech Stack

### Frontend Framework
- **React 19** - Modern React with hooks and functional components
- **TypeScript** - Static typing for enhanced code quality
- **Vite** - Next-generation frontend tooling for faster builds

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Git** - Version control
- **npm** - Package management

### External Services
- **Cloudinary CDN** - Image hosting and optimization

---

## 🏗️ Architecture & Design

### State Management Strategy

```typescript
const [products, setProducts] = useState<Product[]>(initialProducts);
const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
```

**Key Principles:**
- ✅ `initialProducts` used only for initialization
- ✅ All operations performed on React state
- ✅ Predictable UI updates without cascading effects
- ✅ No unnecessary `useEffect` chains

### Image Handling System

```typescript
const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const imageUrl = CDN_URL + product.cloudinaryImageId;
```

**Benefits:**
- ⚡ Faster load times with CDN
- 🔄 Automatic format optimization (WebP support)
- 📉 Reduced bandwidth usage
- 🖼️ Consistent image quality

---

## 📁 Project Structure

```
grey-scientific-labs/
│
├── src/
│   ├── components/
│   │   ├── ProductForm.tsx       # Reusable form for Add/Edit
│   │   ├── ProductList.tsx       # Product Table View
│   │   ├── ProductCardGrid.tsx       # Product grid container
│   │   ├── SearchBar.tsx         # Search functionality
│   │   ├── Pagination.tsx        # Page navigation
│   │   └── ViewToggle.tsx            # Mode switcher component
│   │
│   ├── data/
│   │   ├── products.ts           # Initial product dataset
│   │   └── ProductList.ts
│   ├── types/
│   │   └── Product.types.ts            # TypeScript interfaces
│   │
│   ├── constants/
│   │   └── CDN.ts                # CDN configuration
|   ├── utils/
│   │   └── getImageUrl.ts
│   │
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
│                
├── eslint.config.js            # ESLint configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── package.json                 # Project dependencies
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v19 or higher)
- npm or yarn package manager
- Git

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/coderror420/grey-scientific-labs.git
   cd grey-scientific-labs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev          # Start development 
```

---

## 💡 Implementation Highlights

### 1. Type-Safe Product Interface
```typescript
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  cloudinaryImageId: string;
}
```

### 2. Efficient Search Implementation
- Real-time filtering without debouncing
- Case-insensitive search
- Maintains pagination state correctly

### 3. Reusable Form Component
- Single component for both Add and Edit modes
- Controlled inputs with TypeScript validation
- No prop drilling or unnecessary re-renders

### 4. Smart Pagination Logic
- Dynamic page calculation
- Handles edge cases (empty results, single page)
- Preserves search context



---


<div align="center">

**Made with ❤️**

</div>