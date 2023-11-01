# BlogWebsite

This repository contains the code for a Blog web application designed with Node.js, Express.js, and EJS. The application allows users to create, view, update, and delete blog posts. It aims to provide a platform for users to share their thoughts and ideas in a structured and well-styled manner, ensuring a pleasant user experience on both desktop and mobile devices.

## Installation

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.
- A [MongoDB](https://www.mongodb.com/) database connection is required.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/hseitaj/BlogWebsite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BlogWebsite
   ```
3. Install the necessary Node.js modules via NPM:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory of the project to store your MongoDB connection URI as `MONGO_URI`. Here's an example:
   ```env
   MONGO_URI=mongodb://your-username:your-password@your-host:your-port/your-database
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Project Description

The BlogWebsite project aims to create a simple yet functional platform where users can create and share blog posts. The layout and design are inspired by [Paul Graham's Essays page](http://www.paulgraham.com/articles.html). While the primary focus is on functionality, a significant emphasis is also placed on the styling to ensure a seamless user experience across different device types.

### Core Features

- **Post Creation**: Enables users to draft and publish new posts.
- **Post Viewing**: Users can view all the created posts on the home page.
- **Post Update/Delete**: Provides the option to edit or remove existing posts.
- **Styling**: The application is styled to be responsive, ensuring a good user experience on both desktop and mobile devices.

## Technical Stack

- **Backend**: The backend server is built using Node.js and Express.js, which handles routing and middleware functionality.
- **Frontend**: EJS is employed as the templating engine, generating dynamic HTML based on the application's state.
- **Database**: While the initial version does not persist posts between sessions, connecting to a MongoDB database is required for future versions.
- **Styling**: A dedicated CSS file is used for styling the website, ensuring a visually appealing and user-friendly interface.

## Deliverables

- A functional Node.js project for the website.
- At least one EJS file defining the structure of the website.
- At least one CSS file for styling the website.

## Example

A visual representation of the project's goal can be found at [Paul Graham's Essays page](http://www.paulgraham.com/articles.html).

## Contributing

Feel free to fork the project, create a feature branch, and open a Pull Request if you have additions or fixes to contribute.

---

## Changes Made

- Added a **Prerequisites** section under Installation, specifying the need for Node.js and MongoDB.
- Included steps to create a `.env` file for storing MongoDB connection URI.
- Added a **Contributing** section encouraging community involvement.
- Included a **Technical Stack** section detailing the technologies used.
- Mentioned the necessity of connecting to a MongoDB database under the Technical Stack section, aligning with the initial project description.
