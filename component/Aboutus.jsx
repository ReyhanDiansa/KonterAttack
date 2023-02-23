import React from 'react'
import styles from "../styles/aboutus.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';
import Brand from './Brand';
import Choose from './Choose';

const Aboutus = () => {
  const router = useRouter()
  return (
    <div>
        <section className={styles.aboutus}>
        <div className={styles.aboutus_content}>
          <div className={styles.aboutus_image}>
            <Image
              src="/assets/images/aboutphone.png"
              alt="Phone Hero"
              width={520}
              height={390}
            />
          </div>
          <div className={styles.aboutus_text}>
            <p>
              Welcome to our phone shop, where you'll find the latest and
              greatest in mobile technology. Whether you're looking for a sleek
              and stylish device or a rugged and durable one, we have something
              for everyone.
            </p>
            <p>
              Our selection includes all the top brands and models, so you can
              find the perfect phone to fit your needs and budget. Our
              knowledgeable and friendly staff is always here to help you find
              the phone that's right for you. We understand that choosing a new
              phone can be overwhelming, with so many options and features to
              consider. That's why we're here to answer your questions and guide
              you through the decision-making process.
            </p>
            <p>
              We're committed to providing our customers with the best possible
              shopping experience. From the moment you walk through our doors,
              we strive to make you feel welcome and valued. Our goal is to help
              you find the perfect phone, at a price that fits your budget. So
              come on in and explore our selection of phones, accessories, and
              more. We're confident that you'll find what you're looking for and
              leave our store feeling satisfied and excited about your new
              phone. Thank you for choosing our phone shop for all your mobile
              needs.
            </p>
            <div className={styles.aboutus_button}>
              <button>See Product</button>
            </div>
          </div>
        </div>
      </section>
      {router.pathname === "/Aboutus" ? <><Brand/> <Choose/></>: ''}
    </div>
  )
}

export default Aboutus