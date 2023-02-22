import Navbar from '@/component/Navbar'
import React from 'react'
import styles from "@/styles/aboutus.module.css";
import Image from "next/image";
import Aboutus from '@/component/Aboutus';
import Footer from '@/component/Footer';

const index = () => {
  return (
    <div>
        <Navbar />
       <Aboutus />
       <Footer />
    </div>
  )
}

export default index