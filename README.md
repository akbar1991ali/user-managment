# User Management Website

This project implements a simple user management website with both frontend and backend components. It allows you to manage users by viewing a list of users and creating new users.

## Features

- View a list of users
- Create a new user with a first name, last name, and email address

## Technologies Used

### Backend (Express.js with TypeScript)

- Express.js: A minimal and flexible Node.js web application framework.
- TypeScript: A statically typed superset of JavaScript that compiles to plain JavaScript.
- MongoDB: A NoSQL database used for data persistence.
- dotenv: A package for loading environment variables from a file.

### Frontend (React.js with TypeScript)

- React.js: A JavaScript library for building user interfaces.
- TypeScript: Adds static types to JavaScript for enhanced development.
- Bootstrap: A popular UI framework for building responsive and attractive user interfaces.

## Installation and Setup

### Backend

1. Navigate to the `user-management/server` directory.
2. Install dependencies: `npm install`
3. Create a .env file and below var
    `PORT=3010`
    `DB_URI="mongodb://mongodb:27017/dbname"`

### Frontend
1. Navigate to the `user-management/client` directory.
2. Install dependencies: `npm install`
