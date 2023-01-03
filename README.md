# Book-Library

An API library where users can store, read and receive books

## How to run locally

- Clone the project locally
- cd into the project folder
- run `npm install` to install dependencies
- run `npm run dev:start` to start local instance using nodemon
- open `http://localhost:3000` in your browser

## Routes

### User routes /user

- GET /:id - Display user details

### Authentication /auth

- POST /register => Registers a new user
- POST /login => Login a user into the application
- POST /logout => Logout a user from the application

### Book routes /book

- GET /           Returns all available books in the library
- GET /:id        Returns a particular book by its ID
- POST /          Adds a new book to the library
- DELETE /:id     Removes a book from the library
- PATCH /:id        Updates a book in the Library

## Models

### Book

- title: string
- author : author_id
- description : string
- body : string
- isbn : string
- category : enum []
- timestamps : Date

### Author

- name: string
- id: string

### User

- first_name : string
- last_name : string
- email : string
- password : string
- subscribedBooks : Book[]
- role : enum [ user, admin ]

## Frontend

- Home/landing page
- Register/Login page
- Form page
- Book page
