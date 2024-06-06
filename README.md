# GUVI - DAY 30

## React Axios Task

### How to run the project on your machine:

1. Pull the repository to your local machine.

```
git pull
```

2. To install all the dependencies:

```
npm install
```

3. Once everything is installed successfully, now it's time to run the server.

```
npm run dev
```

### Dependencies used

1. React Router Dom

```
npm install react-router-dom
```

2. React Icons

```
npm install react-icons
```

3. Axios

```
npm install axios
```

### About the Task

> - The project is a depiction of using the `axios` library to preform API Calls from a react client.
> - We perform all the basic Operations on an API which is called as CRUD.
> - CRUD stands for Create, Read, Update and Delete.
> - In this project, we use a third-party Mock API from `jsonplaceholder.typicode.com`.
> - API URL: https://jsonplaceholder.typicode.com/users

### Code Flow and Explanation

> - We initialise the project with routes.
> - Routes are the URLs or Endpoints which are associated with independent components that are rendered when the respective routes are hit on the browser.
> - We use `react-router-dom` to work with routes in our react application.
> - We use `createBrowserRouter` function to create routes in our react application and map them to components which act like webpages. These pages are located in the _pages_ folder.
> - The createBrowserRouter function accepts an array of objects where each object has a route, a component and a loader function associated with it.
> - When the route is visited, the loader function is executed and the component is rendered.
> - This is our Home page. [Source Directory](./src/pages/Home.jsx)
> - This Home page contains a form for adding the user data and a container for displaying all the user data in the form of Cards.
> - The cards are located seperately in a different folder with its own CSS file, for it to be more readable, maintainable and reusable. [Source Directory](./src/components/card/Card.jsx)
> - From the loader function, we fetch the data in the API and return the response to the component.
> - In the component, we use the `useLoader` hook to get the data from the loader.
> - The data is stored in a state variable for it to be re-rendered whenever the state is updated.
> - We use the `useState` hook to achieve this.
> - Different handler are declared in the home page such as `handleToggle`, `handleUpdate`, `handleDelete` and `handleSubmit`.
> - This handlers are invoked whenever the associated event is triggered.
> - The `handleSubmit` handler is invoked when the form is submitted, when the submit button is clicked. We make a `POST` HTTP method API call to the jsonplaceholder.typicode.com server by using the `axios` library and create a user record in their servers. Then we add this user object to our users state using the `rest operator`
> - The `handleToggle` button is used to toggle the display of the form in the home page. It is invoked when the button is clicked.
> - The `handleUpdate` and `handleDelete` handlers are used to perform `update` and `delete` operations respectively over the user data in the API using HTTP Methods such as `PUT` and `DELETE` respectively.
> - CSS for respective components is handled separately for it to be cleaner and easier to understand.
> - The UI is made responsive using `flexbox` in CSS.
