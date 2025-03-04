# Fishing Industry System Backend API

## Overview
This is the backend API for a technology-driven system designed to modernize the fishing industry in Kenya and East Africa. The system includes a digital marketplace for fishers, real-time data on fish stocks and weather, blockchain for supply chain transparency, cold chain monitoring, AI-powered fish species recognition, and an e-learning platform.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)
- **Middleware:** CORS, Express JSON Parser
- **Version Control:** Git, GitHub

## Features
- **User Authentication:** Register, login, and authentication using JWT.
- **Fish Marketplace:** CRUD operations for listing fish, setting prices, and updating stock.
- **Order Management:** Users can place, track, and manage orders.
- **Secure API Endpoints:** Role-based authentication for users and admins.
- **Blockchain Integration:** Transparent supply chain tracking (future implementation).
- **AI-powered Fish Recognition:** Identifies fish species using an AI model (future implementation).
- **Cold Chain Monitoring:** Ensures fish products are stored correctly (future implementation).

## Installation
### Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local or Cloud - e.g., MongoDB Atlas)
- Git

### Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/neshtosh/fishing-blockchain.git
   cd fishing-backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. **Start the server:**
   ```sh
   npm run dev  # Using nodemon (recommended)
   OR
   node server.js  # Standard start
   ```

## API Endpoints
### Authentication
- **POST /api/auth/register** – Register a new user
- **POST /api/auth/login** – Log in and receive a JWT token

### Users
- **GET /api/users** – Get all users (Protected: Admin only)
- **GET /api/users/:id** – Get a specific user (Protected)

### Fish Marketplace
- **GET /api/fish** – Retrieve all listed fish (Protected)
- **POST /api/fish** – Add new fish (Protected: Admin/Fishermen)
- **PUT /api/fish/:id** – Update fish details (Protected)
- **DELETE /api/fish/:id** – Remove fish from listing (Protected)

### Orders
- **POST /api/orders** – Place a new order (Protected)
- **GET /api/orders** – Retrieve all orders (Protected: Admin/Fish Sellers)

## Testing with Postman
1. Open **Postman**.
2. Set the **base URL**: `http://localhost:5000`
3. **Register a user**:
   - Method: **POST**
   - Endpoint: `/api/auth/register`
   - Body (JSON):
     ```json
     {
       "name": "John Doe",
       "email": "user@example.com",
       "password": "yourpassword"
     }
     ```
4. **Login** and obtain a token:
   - Method: **POST**
   - Endpoint: `/api/auth/login`
   - Body (JSON):
     ```json
     {
       "email": "user@example.com",
       "password": "yourpassword"
     }
     ```
   - Copy the returned **JWT token**.
5. **Access protected routes**:
   - Add an `Authorization` header: `Bearer YOUR_JWT_TOKEN`
   - Example: Create a fish listing
     ```sh
     curl -X POST http://localhost:5000/api/fish \
          -H "Content-Type: application/json" \
          -H "Authorization: Bearer YOUR_JWT_TOKEN" \
          -d '{"name": "Tilapia", "price": 500, "weight": 2.5}'
     ```

## Contribution
Feel free to contribute to the project! Fork the repo, create a branch, and submit a pull request.

## License
MIT License

