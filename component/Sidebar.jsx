import Link from "next/link";
import React from "react";
import styles from "../styles/sidebar.module.css";


const Sidebar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_link}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Product">Product</Link>
        </li>
        <li>
          <Link href="/Aboutus">About Us</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
