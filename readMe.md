# Fishing Industry Backend API

## Overview
This is the backend API for the fishing industry system, designed to facilitate fish marketplace operations, real-time data tracking, and supply chain transparency.

## Tech Stack
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **CORS & dotenv** for environment management
- **REST API** structure

## Features
- User authentication & management
- Fish listings (CRUD operations)
- Order processing & tracking
- Secure payment integration (M-Pesa, etc.)
- Notifications & alerts

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (Local or Atlas)
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fishing-backend.git
   cd fishing-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   or for live reload:
   ```bash
   npm install -g nodemon
   nodemon server.js
   ```
5. The API runs at `http://localhost:5000/`

## API Endpoints
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| GET    | `/api/users`    | Get all users       |
| POST   | `/api/users`    | Register a user     |
| GET    | `/api/fish`     | Get all fish listings |
| POST   | `/api/fish`     | Add a new listing   |
| GET    | `/api/orders`   | Fetch all orders    |
| POST   | `/api/orders`   | Place a new order   |

## Contributing
Feel free to fork the repo and contribute. Open a pull request for review.

## License
MIT License
