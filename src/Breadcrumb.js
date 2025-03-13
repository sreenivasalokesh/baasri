import React from "react";
import { Link, useLocation } from "react-router-dom";
import './App.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const search = location.search; // Preserve query params

  // Hide breadcrumbs on home page
  if (pathnames.length === 0) return null;

  // Capitalize the first letter of each breadcrumb label
  const formatBreadcrumb = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  //style= {{ display: "flex", listStyle: "none", gap: "10px" }}
  return (
    <nav>
      <ul  className="breadcrumb">
        <li>
          <Link to={`/${search}`}>Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}${search}`;
          return (
            <li key={to}>
              <span> / </span>
              <Link to={to}>{formatBreadcrumb(decodeURIComponent(value))}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
