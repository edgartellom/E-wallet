import React from "react";
import { NavLink } from "react-router-dom";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
  {
    display: "create-phones",
    path: "/dashboard/create-phones",
  },
];

const AdminNav = () => {
  return (
    <div className="hide-navbar">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand"></a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="admin_menu">
        <ul
          className="admin__menu d-flex justify-content-center"
          style={{ listStyleType: "none" }}
        >
          {admin__nav.map((item, index) => (
            <li className="admin___menu mx-4" key={index}>
              <NavLink to={item.display}>{item.display}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
