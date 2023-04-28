import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
        data-bs-toggle="dropdown" aria-expanded="false">
        Solutions
      </a>
      <div className={styles.dropdownContent} aria-labelledby="navbarDropdownMenuLink">
        {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> */}
          <a class="dropdown-item" href="digital_transformation">Digital Transformation</a>
          <a class="dropdown-item" href="cyber_security">Cyber Security</a>
          <a class="dropdown-item" href="portfolio_management">Portfolio Management</a>
          <a class="dropdown-item" href="resource_staffing">Resource & Staffing</a>
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Dropdown;


{/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
    data-bs-toggle="dropdown" aria-expanded="false">
    Solutions
</a> */}
{/* <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <li><a class="dropdown-item" href="digital_trans">Digital Transformation</a></li>
    <li><a class="dropdown-item" href="cyber_security">Cyber Security</a></li>
    <li><a class="dropdown-item" href="portfolio_management">Portfolio Management</a></li>
    <li><a class="dropdown-item" href="resource_staffing">Resource & Staffing</a></li>
</ul> */}