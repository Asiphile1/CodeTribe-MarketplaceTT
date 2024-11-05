# CodeTribe Marketplace

Welcome to CodeTribe Marketplace! This is a full-stack marketplace MVP designed to sell tech hardware. The project implements a Node.js backend with a RESTful API, a React.js frontend, and MongoDB for the database. User authentication, product management, and a responsive UI are featured.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Tech Stack](#tech-stack)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Features
* **User Authentication**: Login, registration, and JWT-based authentication
* **Product Management**: Add, update, view, and delete products
* **Cart Management**: Add to cart, view cart, and checkout functionality
* **Responsive UI**: Fully responsive design for desktop and mobile
* **RESTful API**: CRUD operations for products and user management

## Project Structure
```plaintext
CodeTribe-Marketplace
├── backend
│   ├── models
│   ├── routes
│   │   ├── cartRoutes.js
│   │   └── productRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── vercel.json
│
├── README.md
└── .gitignore


```
## Installation

Prerequisites

* Node.js and npm
* MongoDB account
* Git for version control
* Vercel for deployment

## Setup

1. Clone the repository
 ``` bash
git clone https://github.com/your-username/CodeTribe-Marketplace.git
cd CodeTribe-Marketplace
``` 
2. Install dependencies for both backend and frontend:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```
## Environment Variables

In the backend, create a .env file in the root of the backend folder with the following variables:
 ```plaintext
PORT=5000
MONGODB_URI=mongodb+srv://test-user01:thisIsTest01@market.xdkfm.mongodb.net/?retryWrites=true&w=majority&appName=Market
JWT_SECRET=supersecretkey
```

## Running the Application

Backend (Node.js)
1. Start the server:
```bash

cd backend
npm start
```
The backend will run on http://localhost:5000.

## Frontend (React)
2. Start the React development server:
```bash

cd frontend
npm start
```
The frontend will run on http://localhost:3000.

## API Endpoints

```HTTP Method	Endpoint	Description
POST	/api/login	User login
POST	/api/register	User registration
GET	/api/products	Get all products
POST	/api/products	Add new product
GET	/api/cart	Get cart items
POST	/api/cart	Add item to cart
POST	/api/checkout	Checkout
```
## Tech Stack

```
Frontend
React.js
Redux
Material-UI
```
```
Backend
Node.js
Express.js
RESTful API
```
```
Database
MongoDB
```
```
JWT authentication
Vercel deployment
```
## Future Improvements

* Enhanced Product Filtering: Add categories and price ranges
* Order History: Users can view past orders
* Enhanced UI: Improve styling and animations
* Payment Integration: Integrate with payment gateways like Stripe

## Contributing
1. Fork the repository.
2. Create a new branch with your feature/fix.
```bash

git checkout -b feature/feature-name
```
3. Commit your changes.
```bash
git commit -m "Add a descriptive message"
```
4. Push to the branch.
```bash

git push origin feature/feature-name
```
5. Open a pull request to merge into the main branch.
