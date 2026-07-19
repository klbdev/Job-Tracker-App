# Job-Tracker-App
A user interface with authentication to manage your job applications.

## Table of contents
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Features](#features)

## Dependencies
### Frontend (client)
- React.js
- Bootstrap
### Backend (server)
- Node.js
- Express.js
- MongoDB and Mongoose Object Data Modeling (ODM) library.
- JSON web tokens (JWT).
- bcrypt for hashing.

## Usage
### Register
- All users must register an account to use the application. An alert will be shown to indicate a successful registration.
### Login
- Simple login page interface with JWT for session token and bcrypt for password comparison.
### Dashboard
- Displays the logged in user on the top right of the navigation bar
- Displays jobs saved into MongoDB belonging to the logged in user.
- Clicking **Update** on a card will open an offcanvas with a prefilled form based on the current value.
- Clicking **Delete** on a card will permanently delete the job entry.
### New
- Displays a form to input a new job entry. An alert will be shown to indicate a successful input.

## Features
### Filter
- User can sort by date in ascending or descending order, and add job type and status filters. Click **Apply** to set the filter.
### Pagination
- The pagination component displays a maximum of 5 entries per page to reduce scrolling.
