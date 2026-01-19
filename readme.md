# MERN Stack Project

## Description
A full-stack web application built with MongoDB, Express, React, and Node.js.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Steps
1. Clone the repository
    ```bash
    git clone <repository-url>
    cd mern-project
    ```

2. Install server dependencies
    ```bash
    cd server
    npm install
    ```

3. Install client dependencies
    ```bash
    cd ../client
    npm install
    ```

4. Configure environment variables
    - Create `.env` file in the server directory
    - Add `MONGODB_URI` and `PORT` variables

5. Start the application
    ```bash
    # Terminal 1 - Server (from server directory)
    npm start

    # Terminal 2 - Client (from client directory)
    npm start
    ```

## Routes

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create new user |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |


| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/goals` | Get all goals |
| POST | `/api/goals` | Create new goal |
| GET | `/api/goals/:id` | Get goal by ID |
| PUT | `/api/goals/:id` | Update goal |
| DELETE | `/api/goals/:id` | Delete goal |

### Frontend Routes
- `/` - Home page
- `/login` - Login page
- `/dashboard` - User dashboard
- `/goals` - Goals page
- `/goals/:id` - Goal details page
- `/goals/create` - Create new goal

