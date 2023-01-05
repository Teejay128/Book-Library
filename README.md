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

### User

| field           | data_type | constraints      |
| --------------- | --------- | ---------------- |
| userName        | string    | required         |
| email           | string    | required, unique |
| password        | string    | required         |
| subscribedBooks | objectId  | ref: "books"     |
| useRole         | enum      | [ user, admin ]  |
| timestamps      | date      | auto-generated   |
| id              | string    | auto-generated   |

### Author

| field  | data_type | constraints    |
| ------ | --------- | -------------- |
| name   | string    | required       |
| id     | string    | auto-generated |

### Book

| field        | data_type | constraints      |
| ------------ | --------- | ---------------- |
| title        | string    | required, unique |
| author       | objectId  | ref: "authors    |
| description  | string    | required         |
| body         | string    | required         |
| isbn         | string    | auto-generated   |
| category     | enum      | (tags, genre)?   |
| timestamps   | Date      | auto-generated   |
| id           | string    | auto-generated   |

## Frontend

- Home/landing page
- Register/Login page
- Form page
- Book page
