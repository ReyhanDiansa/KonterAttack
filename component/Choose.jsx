import React from "react";
import styles from "@/styles/choose.module.css";
import { MdHighQuality } from "react-icons/md";
import Image from "next/image";
import { RiSecurePaymentFill } from "react-icons/ri";

const Choose = () => {
  return (
    <section className={styles.choose}>
      <div className={styles.choose_title}>
        <h1>
          WHY <span>CHOOSE</span> US
        </h1>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.card_icon}>
            <MdHighQuality />
          </div>
          <div className={styles.card_title}>
            <h1>HIGH QUALITY</h1>
          </div>
          <div className={styles.card_detail}>
            <p>
              This store offers high-quality mobile phones for sale. The phones
              are equipped with advanced features, durable and reliable, making
              them an excellent choice for those seeking the best in mobile
              technology.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_icon}>
            <Image
              src="/assets/images/garansi.png"
              alt="Phone Hero"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.card_title}>
            <h1>2 YEAR WARRANTY</h1>
          </div>
          <div className={styles.card_detail}>
            <p>
              This store offers mobile phones for sale that come with a 2-year
              warranty. Customers can buy with confidence, knowing that their
              phone is covered in case of any defects or issues that may arise
              during the warranty period.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_icon}>
            <RiSecurePaymentFill />
          </div>
          <div className={styles.card_title}>
            <h1>SECURE PAYMENT</h1>
          </div>
          <div className={styles.card_detail}>
            <p>
              Customers can make payments safely and conveniently using a
              variety of payment methods. The store's payment system is designed
              to ensure that all transactions are secure and protected against
              fraud, giving customers peace of mind when making purchases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
