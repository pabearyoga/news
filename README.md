# News App

This web application is developed using React, React Router, hooks, and Material
UI to display a list of top headlines with the ability to search by keyword and
apply filters.

## Requirements

- The app utilizes the React library and React Router for navigation.
- News data is fetched from the
  [News API](https://newsapi.org/docs/endpoints/top-headlines) using an API key.
- The app consists of two pages:
  1. **Article List Page:**
     - Displays a table with columns for image, title, author, publication date,
       and a link to the source.
     - Provides fields for searching articles by keywords and selecting filters
       for country and news category.
  2. **Article Details Page:**
     - Offers detailed information about the selected article.
     - Note: Due to the API limitations, article data is initially obtained on
       the article list page and passed as payload parameters to the details
       page via state during navigation using react-router-dom.

## Additional Features

- Pagination and integration with the [News API](https://newsapi.org) on the
  article list page.
  - Allows switching between pages and changing the number of displayed items
    per page.

## Tech Stack

- React
- React Router
- Material UI (or any UI library of your choice)
- Axios (for API requests)

## How to Run

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Obtain an API key from [News API](https://newsapi.org) and replace the
   placeholder in `newsService.js` with your key.
4. Run the app using `npm start`.

## Design

For the design layout and components, refer to the
[Figma design](https://www.figma.com/proto/AJceXAmClp4E0axcIhxPzO/TEST-TASK---Frontend-Developer?page-id=0%3A1&type=design&node-id=1-28250&viewport=2523%2C35%2C0.42&t=GV9Qtj0ZjlSGBI0l-1&scaling=scale-down&starting-point-node-id=1%3A28250&mode=design).

## Important Notes

- Please ensure that the API key is kept secure and not shared publicly.
- This project and its source materials are intellectual property and should not
  be published or transferred to third parties.

Feel free to reach out if you have any questions or need further clarification.
Happy coding!
