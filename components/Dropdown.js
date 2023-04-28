import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <div className="nav-link px-2 text-white">Solutions</div>
      <div className={styles.dropdownContent}>
        <a href="digital_transformation">Digital Transformation</a><br />
        <a href="#">Option 2</a><br />
        <a href="#">Option 3</a><br />
      </div>
    </div>
  );
};

export default Dropdown;
