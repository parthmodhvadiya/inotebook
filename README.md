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
### Week 4

#### Day 1 (22/5/2024):
- **Project Initialization:** Set up the project repository and created initial project structure with HTML, CSS, and JavaScript files.
- **Research:** Researched best practices for creating a calendar application.

#### Day 2 (23/5/2024):
- **Basic HTML Structure:** Developed the basic HTML structure for the calendar including divs for the header, month navigation, and the calendar grid.
- **CSS Styling:** Started basic styling for the calendar layout and navigation buttons.

#### Day 3 (24/5/2024):
- **JavaScript Setup:** Initialized JavaScript variables and functions to handle the current date and month display.
- **Current Date Display:** Implemented functionality to display the current month and year in the header.

#### Day 4 (27/5/2024):
- **Calendar Grid Generation:** Created a function to dynamically generate the days of the current month in the calendar grid.
- **Adjacent Month Days:** Added functionality to include days from the previous and next months to ensure full week rows.

#### Day 5 (28/5/2024):
- **Month Navigation:** Developed navigation buttons to switch between months.
- **Date Calculation:** Implemented date calculations to correctly update the calendar when navigating months.

#### Day 6 (29/5/2024):
- **Jump to Date:** Added an input field and button to allow users to jump to a specific date by entering it in MM/YYYY format.
- **Validation:** Implemented input validation for the date format.

#### Day 7 (30/5/2024):
- **Event Management UI:** Designed the user interface for adding, viewing, and deleting events.
- **Event Form:** Created a form for users to input event details including date, time, and description.


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
