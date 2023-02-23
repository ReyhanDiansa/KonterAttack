import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";
import moment from "moment";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = moment().year();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.icon_footer}>
          <div>
            <Link href="https://www.instagram.com/reyhanmd._">
              <FaInstagram />
            </Link>
          </div>

          <div>
            <Link href="https://www.instagram.com/reyhanmd._">
              <FaTwitter />
            </Link>
          </div>

          <div>
            <Link href="https://www.instagram.com/reyhanmd._">
              <MdEmail />
            </Link>
          </div>
        </div>

        <div className={styles.nav_footer}>
          <h4>
            <Link href="/" className={styles.nav_link}>
              Home
            </Link>
          </h4>
          <h4>
            <Link href="/Product" className={styles.nav_link}>
              Product
            </Link>
          </h4>
          <h4>
            <Link href="/Aboutus" className={styles.nav_link}>
              About us
            </Link>
          </h4>
        </div>
        <div className={styles.copyright}>Copyright © {year}</div>
      </div>
    </footer>
  );
};

export default Footer;
