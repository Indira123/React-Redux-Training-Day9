import React from "react";
import { Link, useHistory } from "react-router-dom";
const Dashboard = () => {

  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <nav className='navbar navbar-inverse'>
      <ul className='nav navbar-nav'>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/todos">Todo List</Link>
        </li>
        <li>
          <button style={{ marginTop: 7 + 'px' }} className='btn' onClick={handleClick}>
            Goodbye
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
