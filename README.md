# 🌟iNotebook - Online Notes Management System🌟

## 🚀 Introduction

Welcome to iNotebook, an online notes management system built using the MERN stack. iNotebook allows users to securely upload, access, and manage their notes. This README provides an overview of the project, installation instructions, and usage details.

### Table of Contents
**Development Progress**
**Features**
**Technologies Used**
**Installation**
**Usage**
**API Endpoints**
**contact**

### Development Progress
### Week 1
#### Day 1(27/05/2024): Project Initialization
 - Set up the project repository on GitHub.
 - Installed Node.js, MongoDB, and other necessary tools.
 - Created initial project structure for both frontend (React) and backend (Node.js with Express).

#### Day 2(28/05/2024): Backend Setup
 - Set up Express.js server.
 - Configured MongoDB connection using Mongoose.
 - Created basic routes for user registration and login.
 - Implemented JWT authentication and middleware for protected routes.

#### Day 3(29/05/2024): User Authentication
 - Added password encryption using bcrypt.
 - Developed user registration and login functionality.
 - Tested user authentication routes using Postman.

#### Day 4(30/05/2024): Frontend Initialization
 - Set up the React project using Create React App.
 - Created initial folder structure and installed dependencies.
 - Designed basic UI for the home page, login, and registration forms.

#### Day 5(31/05/2024): Frontend Authentication Integration
 - Integrated frontend with backend authentication API.
 - Implemented login and registration forms.
 - Added JWT token handling in frontend for maintaining sessions.

#### Day 6(01/06/2024): Note Management Backend
 - Created Mongoose models for Notes.
 - Developed CRUD API endpoints for notes (create, read, update, delete).
 - Secured notes routes using JWT authentication middleware.

### Week 2

#### Day 7(03/06/2024): Note Management Frontend
 - Designed UI components for creating, viewing, and managing notes.
 - Integrated frontend with backend CRUD API for notes.
 - Implemented state management for handling notes data.


#### Day 8(04/06/2024): Error Handling and Validation
 - Added error handling middleware in Express.
 - Implemented validation for user input on both frontend and backend.
 - Displayed error messages and validation feedback in the UI.

#### Day 9(05/06/2024): Styling and UI Improvements
 - Applied styling to login, registration, and notes management pages using CSS.
 - Improved user interface for better usability and aesthetics.
 - Added responsive design to ensure compatibility with various devices.

#### Day 10(06/06/2024): Testing and Debugging
 - Conducted thorough testing of all functionalities.
 - Fixed bugs and issues identified during testing.
 - Refined code for better readability and maintainability.

#### Day 11(07/06/2024): Deployment Preparation
 - Prepared the application for deployment.
 - Created production builds for both frontend and backend.
 - Configured environment variables for deployment.

#### Day 13(08/06/2024): Final Review 
Conducted a final review of the project to ensure all features are working as expected.



### Features
 - User Authentication: Register and log in using a unique username and password.
 - Token-Based Authentication: Maintains user sessions using JSON Web Tokens (JWT).
 - Password Encryption: Securely encrypts user passwords.
 - CRUD Operations: Create, read, update, and delete notes.
 - MongoDB Database: Stores user data and notes.

### Technologies Used
 - MongoDB: NoSQL database for flexible and scalable data management.
 - Express.js: Backend framework for handling server-side operations.
 - React: Front-end library for building a dynamic and responsive user interface.
 - Node.js: Runtime environment for running the server-side application.
 - Installation
   
### Prerequisites
**Node.js (v12 or higher)**

**MongoDB (Local or Atlas)**

 - Clone the Repository

Copy code
git clone [https://github.com/yourname/inotebook.git](https://github.com/parthmodhvadiya/inotebook/)

cd inotebook

 - Backend Setup

 1. Navigate to the backend directory:

Copy code
cd backend
Install dependencies:

Copy code
npm install
Create a .env file in the backend directory and add the following environment variables:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:

Copy code
npm start
Frontend Setup
Navigate to the frontend directory:

Copy code
cd ../frontend
Install dependencies:

Copy code
npm install
Start the frontend development server:

Copy code
npm start

### Usage
Open your browser and navigate to http://localhost:3000.

Register a new account or log in with an existing account.

Create, read, update, and delete your notes.

### API Endpoints

1. Authentication

 - Register: POST /api/auth/register
 - Login: POST /api/auth/login

2. Notes

 - Get All Notes: GET /api/notes
 - Create Note: POST /api/notes
 - Update Note: PUT /api/notes/:id
 - Delete Note: DELETE /api/notes/:id


## Contact
For any questions or suggestions, please reach out to [22it077@charusat.edu.in].

---

### Acknowledgments

Thanks to everyone who provided feedback and suggestions during the development of this project.
