import React from 'react';
import Image from 'next/image';
import styles from "@/styles/brand.module.css";

const Brand = () => {
  return (
    <section className={styles.brand}>
          <div className={styles.brand_title}>
            <h1>TRUSTED BY <span>FAMOUS</span> BRANDS</h1>
          </div>
          <div className={styles.brand_detail}>
             <div className={styles.oppo}>
             <Image
              src="/assets/images/oppo.svg"
              alt="Phone Hero"
              width={100}
              height={100}
            />
             </div>
             <div className={styles.samsung}>
             <Image
              src="/assets/images/samsung.png"
              alt="Phone Hero"
              width={130}
              height={130}
            />
             </div>
             <div className={styles.vivo}>
             <Image
              src="/assets/images/vivo.svg"
              alt="Phone Hero"
              width={100}
              height={100}
            />
             </div>
             <div className={styles.apple}>
             <Image
              src="/assets/images/apple.png"
              alt="Phone Hero"
              width={70}
              height={80}
            />
             </div>
             <div className={styles.realme}>
             <Image
              src="/assets/images/realme.png"
              alt="Phone Hero"
              width={240}
              height={80}
            />
             </div>
             <div className={styles.xiaomi}>
             <Image
              src="/assets/images/xiaomi.png"
              alt="Phone Hero"
              width={80}
              height={100}
            />
             </div>
          </div>
      </section>
  )
}

export default Brand