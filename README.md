// Online Library System

This is a React-based Online Library System that allows users to:
- Browse books by category
- Search books by title or author
- View book details
- Add new books to the system
- Navigate across different pages smoothly using React Router
- Manage state using Redux

..........................................................................................................

 Features

// Home Page (15 Marks)
- Welcome message
- Shows 5 popular books
- Navigation links to Home, Browse Books, Add Book

// Browse Books Page (20 Marks)
- Filter books by category via dynamic route `/books/:category`
- Search bar to filter books by title or author
- “View Details” link for each book

//  Book Details Page (15 Marks)
- Dynamic route `/books/info/:id`
- Shows book title, author, rating, and description
- Back to Browse button

// Add Book Page (30 Marks)
- Form to add new books
- Redux used to store added books
- Form validation to prevent empty inputs
- After submission, redirects to Browse Books page

// 404 Page (10 Marks)
- Friendly Page Not Found
- Link to go back to Home

..........................................................................................................................