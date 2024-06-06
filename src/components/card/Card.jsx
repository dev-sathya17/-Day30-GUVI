// Importing custom CSS
import "./Card.css";

// Importing required icons
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// Card component to render all the user data into cards
const Card = ({ user, handleUpdate, handleDelete }) => {
  return (
    <div className="card">
      <h2 className="title">{user.name}</h2>
      <div className="content">
        <FaUser className="icon" />
        <p>{user.username}</p>
      </div>
      <div className="content">
        <IoIosMail className="icon" />
        <p>{user.email}</p>
      </div>
      <div className="content">
        <MdCall className="icon" />
        <p>{user.phone}</p>
      </div>
      <div>
        <div className="content">
          <MdWork className="icon" />
          <p className="company-name">{user.company.name}</p>
        </div>
        <div className="content work">
          <p className="company-bs">{user.company.bs}</p>
        </div>
        <div className="content work">
          <p>
            <em>{user.company.catchPhrase}.</em>
          </p>
        </div>
      </div>
      <div className="content">
        <FaLocationDot className="icon" />
        <p>{`${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode} `}</p>
      </div>
      <div className="button-group">
        <button className="btn btn-edit" onClick={() => handleUpdate(user)}>
          <MdEdit className="btn-icon" />
        </button>
        <button
          className="btn btn-delete"
          onClick={() => handleDelete(user.id)}
        >
          <MdDelete className="btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
