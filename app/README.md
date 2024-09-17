# MedOps - Medical Inventory Management System

**MedOps** is a software application designed to streamline the inventory management and distribution processes within a medical warehouse. It simplifies the tracking of medical supplies, optimizes stock levels, and ensures timely replenishment and accurate order fulfillment.

## Features

- **Inventory Tracking**: Monitor stock levels of medical supplies.
- **Order Management**: Generate, track, and fulfill orders efficiently.
- **Supplier Integration**: Manage suppliers and automate order replenishment.
- **Notifications & Alerts**: Real-time notifications for low stock levels.
- **Reporting**: Generate detailed reports on stock usage and supply status.
- **User Roles & Permissions**: Manage different user roles with controlled access.
- ### User:
- 	Ability to log in and access basic account information.
-	View available medicines and their details.
-	Place orders for required medicines.
-	Track the status of their orders.
-	View order history.
- ### Manager:
-	Staff CRUD: Create, Read, Update, and Delete operations for managing staff members. (Pagination)
-	Supplier CRUD: Manage suppliers who provide the medicines. (Pagination)
-	Transport CRUD: Oversee the management of transport vehicles. 
-	View Medicine: Access detailed information about all medicines in the inventory. (Pagination)
-	View Category: View and manage categories of medicines.
-	Password Request: Handle password reset requests for users. (Pagination)
-	View Users: Access and manage all users in the system. (Pagination)
-	Roles CRUD 
-	Supplier CRUD
- ### Operator:
-	View Delivery: Track deliveries and their statuses. (Pagination)
-	View Medicine: Access information on all medicines stored in the warehouse. (Pagination)
-	View Medicine Category: Monitor categories of medicines. 
-	View Order: View details of orders placed by healthcare facilities. (Pagination)
-	View Staff: Access information on staff members. (Pagination)
-	View Supplier: View and manage details of suppliers. (Pagination)
-	View Transport: Monitor transport vehicles and their schedules.
-	View Users: Access and manage user profiles.  (Pagination)
- ### Logistics:
-	Medicine CRUD: Manage the inventory by adding, updating, or removing medicines. (Pagination)
-	Medicine Category CRUD: Organize and manage categories for different types of medicines.
-	View Order: Access and manage orders from healthcare facilities. (Pagination)
- ### transporter
-	View Delivery Order: Access and review delivery orders assigned to them. 



## Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript)
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Pytest (Backend), Jest (Frontend)
- **Deployment**: Docker, Render

## Installation

### Prerequisites

- react.js
- Node.js 
- express.js
- mysql

### Repository

1. **Clone the repository:**
    ```bash
    git clone https://github.com/MohamedAhmeDdev/medOps-v-2.0
    ```


### Backend Setup (Express)

1. **Clone the repository:**
    ```bash
    cd server
    ```

2. **installation:**
    ```bash
    npm install
    ```

3. **Run the Express server:**
    ```bash
    nodemon
    ```

### Frontend Setup (React)

1. **Navigate to the frontend directory:**
    ```bash
    cd app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the React development server:**
    ```bash
    npm start
    ```

## Usage

### Backend

- The API is accessible at `http://localhost:5000`.

### Frontend

- The web interface is available at `http://localhost:3000`.





## License

MedOps is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


