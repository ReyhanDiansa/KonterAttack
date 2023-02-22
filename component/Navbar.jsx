import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "@/styles/navbar.module.css";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useMediaQuery } from "@react-hook/media-query";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);


  const router = useRouter();

  const mediaQueries = {
    small: "(max-width: 768px)",
    medium: "(min-width: 769px) and (max-width: 1024px)",
    large: "(min-width: 1025px)",
  };

  const isMedium = useMediaQuery(mediaQueries.medium);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isMedium) {
      setIsOpen(false);
    }
  }, [isMedium]);

  const handleScroll = () => {
    if(window.scrollY > 0){
      setisScrolled(true);
    }else if(window.scrollY === 0){
      setisScrolled(false)
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });
  console.log(isScrolled);

  return (
    <div className={styles.header} >
      <div className={isScrolled ? `${styles.nav} ${styles.nav_scroll}` : styles.nav}>
        <div className={styles.nav_title}>
          <h1>KonterAttack</h1>
        </div>
        <div className={styles.nav_toggle} onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <FaBars />}
        </div>
        <div className={styles.nav_link }>
          <ul>
            <li className={router.pathname === "/" ? styles.nav_active : ""}>
              <Link href="/" className={styles.nav_list}>
                Home
              </Link>
            </li>
            <li
              className={
                router.pathname === "/Product" ? styles.nav_active : ""
              }
            >
              <Link href="/Product" className={styles.nav_list}>
                Product
              </Link>
            </li>
            <li
              className={
                router.pathname === "/Aboutus" ? styles.nav_active : ""
              }
            >
              <Link href="/Aboutus" className={styles.nav_list}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && <Sidebar />}
    </div>
  );
};

export default Navbar;
