# GraphQL Book Inventory

A simple book inventory application demonstrating the power of GraphQL with a Node.js backend and a React.js frontend. This project serves as a learning sandbox for implementing GraphQL queries and mutations, allowing users to add books to an inventory and view a list of these books.

## Features

- **Add Books**: Users can input book information through a form in the frontend.
- **View Books List**: Users can see a list of all books added to the inventory.

## Getting Started

These instructions will guide you through setting up and running the project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (preferably the latest stable version)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

```sh
git clone [https://github.com/<your-github-username>/graphql-book-inventory.git](https://github.com/shreyasskasetty/graphQL-miniproject)https://github.com/shreyasskasetty/graphQL-miniproject
cd server
```

2. **Install Backend Dependencies**
Navigate to the backend directory and install the necessary packages:

```sh
cd server
npm install
nodemon app
```

3. **Install Frontend Dependencies**
Open a new terminal window, navigate to the frontend directory from the root of the project, and install the dependencies:

```sh
cd client
npm install
npm start
```

### Usage
**To Add a Book:** Navigate to the add book form on the frontend, fill in the details (title, author, published date), and submit.
**To View Books:** The homepage displays a list of all the books in the inventory.

### Built With
- Node.js - Backend server environment
- GraphQL - Data query language
- React.js - Frontend framework

### Authors
- Shreyas Shivakumar Kasetty - shreyasskasetty
