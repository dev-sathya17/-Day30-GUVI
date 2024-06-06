// importing axios: used for making API calls to a server.
import axios from "axios";

// Importing required hooks.
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// Importing required components and CSS.
import Card from "../components/card/Card";
import "./Pages.css";

// Importing required icons.
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

// Declaring Base URL as a constant for reusability
const API_URL = "https://jsonplaceholder.typicode.com/users";

// A base loader function, which is used to fetch data on page load.
export const loader = async () => {
  const response = await axios.get(API_URL);
  return { users: response.data };
};

const Home = () => {
  // Retrieve users from the loader.
  const { users: initialData } = useLoaderData();

  // Declaring required state variables
  const [users, setUsers] = useState(initialData);
  const [toggleView, setToggleView] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
      bs: "",
      catchPhrase: "",
    },
  });

  // Handler function to trigger on form submission.
  const handleSubmit = async (e) => {
    // To prevent page from reloading
    e.preventDefault();

    // Business logic for updation and addition of users.
    try {
      let response;
      let newUser;
      if (isUpdate) {
        response = await axios.put(`${API_URL}/${user.id}`, user);
        if (response.status === 200) {
          const updatedUsers = users.map((u) => {
            return u.id === user.id ? user : u;
          });
          setUsers(updatedUsers);
          setIsUpdate(false);
        }
      } else {
        let id = users.length + 1;
        newUser = { ...user, id: id };
        response = await axios.post(API_URL, newUser);
        if (response.status === 201) {
          setUsers([...users, newUser]);
        }
      }
      setUser({
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
        },
        company: {
          name: "",
          bs: "",
          catchPhrase: "",
        },
      });
      setToggleView(false);
    } catch (error) {
      console.error(
        `An error occurred while creating a user: ${error.message}`
      );
    }
  };

  // Handler function to trigger for updating a user data.
  const handleUpdate = (user) => {
    setUser(user);
    setIsUpdate(true);
    setToggleView(true);
  };

  // Handler function to trigger for deleting a user data.
  const handleDelete = (id) => {
    const usersData = users.filter((user) => user.id !== id);
    setUsers(usersData);
  };

  // Handler function for toggling the form view.
  const handleToggle = () => setToggleView(!toggleView);

  return (
    <>
      {/* Toggle Button to make the UI more clean and user-friendly. */}
      <div className="form-container">
        <div className="toggle-view-container">
          <div className="section" onClick={handleToggle}>
            <h3>Add a User</h3>
            <button className="toggle-btn">
              {toggleView ? (
                <IoIosArrowUp className="form-icon" />
              ) : (
                <IoIosArrowDown className="form-icon" />
              )}
            </button>
          </div>
        </div>
        {/* A form to get the input values for adding a new user */}
        {toggleView && (
          <form className="form">
            <div className="form-contents">
              <div className="input-container">
                <FaUser className="form-icon" />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name:"
                  className="input"
                  value={user.name}
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                  }}
                />
              </div>
              <div className="input-container detail">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username:"
                  className="input"
                  value={user.username}
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                />
              </div>
              <div className="input-container">
                <IoIosMail className="form-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email:"
                  className="input"
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>
              <div className="input-container">
                <MdCall className="form-icon" />
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile:"
                  className="input"
                  value={user.phone}
                  onChange={(e) => {
                    setUser({ ...user, phone: e.target.value });
                  }}
                />
              </div>
              <div className="input-container">
                <MdWork className="form-icon" />
                <input
                  type="text"
                  id="companyName"
                  placeholder="Enter your Company name:"
                  className="input"
                  value={user.company.name}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      company: {
                        ...user.company,
                        name: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="input-container detail">
                <input
                  type="text"
                  id="companyCatchPhrase"
                  placeholder="Enter your Company catchphrase:"
                  className="input"
                  value={user.company.catchPhrase}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      company: {
                        ...user.company,
                        catchPhrase: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="input-container detail">
                <input
                  type="text"
                  id="companyBs"
                  placeholder="Enter your Company description:"
                  className="input"
                  value={user.company.bs}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      company: {
                        ...user.company,
                        bs: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="input-container">
                <FaLocationDot className="form-icon" />
                <input
                  type="text"
                  id="suite"
                  placeholder="Enter your suite:"
                  className="input"
                  value={user.address.suite}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      address: {
                        ...user.address,
                        suite: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="input-container detail">
                <input
                  type="text"
                  id="street"
                  placeholder="Enter your street:"
                  className="input"
                  value={user.address.street}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      address: {
                        ...user.address,
                        street: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="input-container detail">
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city:"
                  className="input"
                  value={user.address.city}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      address: {
                        ...user.address,
                        city: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="input-container detail">
                <input
                  type="text"
                  id="zipcode"
                  placeholder="Enter your zipcode:"
                  className="input"
                  value={user.address.zipcode}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      address: {
                        ...user.address,
                        zipcode: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}
      </div>
      {/* Generating cards dynamically with user data */}
      <div className="card-container">
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
