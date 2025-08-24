# OnlineMarketPlace Dashboard (Next.js + Express + MongoDB)

## 🚀 Setup Instructions

### Prerequisites
- Node.js
- MongoDB (MongoDB Atlas)

### Installation
```bash
# Clone the repo
git clone https://github.com/sruthi0018/backend.git
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env

PORT=5000
MONGO_URI=""

Base URL

/api

Endpoints

GET /api/category → list categories

POST /api/category → create category

GET /api/category/:id → get single category

PUT /api/category/:id → update category

DELETE /api/category/:id → delete category

GET /api/product → list products (supports filters: category, search, page, limit, and sorting)

POST /api/product → create product

GET /api/product/:id → get single product

PUT /api/product/:id → update product

DELETE /api/product/:id → delete product
