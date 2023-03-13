import styles from "../styles/Home.module.css";
import Navbar from "../component/Navbar";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { BsBatteryFull, BsCpu } from "react-icons/bs";
import { MdOutlineSdCard } from "react-icons/md";
import Footer from "../component/Footer";
import Aboutus from "../component/AboutUs";
import Brand from "../component/Brand";
import Choose from "../component/Choose";
import Link from "next/link";
import { useState,useEffect } from "react";

export default function Home() {
  const [datas, setDatas] = useState([])
  const url = "/data/produk.json";

  async function getData() {
    try {
      const data = await fetch(url);
      console.log(data);
      const result = await data.json();
      setDatas(result);
    } catch (error) {
      console.log(error);
    }
  }
  const bestProducts = datas.filter((product) => product.best);
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.first_content}>
        <Navbar />
        <section className={styles.hero}>
          <div className={styles.hero_text}>
            <h2>All New Phone</h2>
            <h1>Up to 15% Flash Sale</h1>
            <h5>
              Whether you're looking for a sleek and stylish device or a rugged
              and durable one, we have something for everyone. Our selection
              includes all the top brands and models, so you can find the
              perfect phone to fit your needs and budget.
            </h5>
            <div className={styles.hero_button}>
              <button>
                <Link href="/Product">Buy Now</Link>
              </button>
            </div>
          </div>
          <div className={styles.hero_image}>
            <Image
              src="/assets/images/hero.png"
              alt="Phone Hero"
              width={400}
              height={390}
            />
          </div>
        </section>
      </div>

      <section className={styles.top_product}>
        <div className={styles.top_title}>
          <h1>
            <span>BEST</span> SELLER
          </h1>
        </div>
        <div className={styles.card_container}>
          {bestProducts.map((item) => (
            <div className={styles.card} key={item.id}>
              <Image src={item.image} alt="My Image" width={150} height={150} />
              <div className={styles.rating}>
                <StarRatings
                  rating={item.rate}
                  starRatedColor={"#ffd700"}
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px"
                  starSpacing="2px"
                />
              </div>
              <h2>{item.name}</h2>
              <div className={styles.price}>
                <h3>
                  <span className={styles.rupiah}>Rp</span> {item.price}
                </h3>
              </div>
              <div className={styles.card_button}>
                  <Link href={`/Detail/${item.id}`}>Buy</Link>
              </div>
              <hr className={styles.card_line} />
              <div className={styles.card_detail}>
                <div className={styles.battery}>
                  <BsBatteryFull /> <span>{item.battery}</span>
                </div>
                <div className={styles.memory}>
                  <MdOutlineSdCard />
                  <span> {item.memory}</span>
                </div>
                <div className={styles.cpu}>
                  <BsCpu /> <span>{item.cpu}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutus}>
        <div className={styles.aboutus_title}>
          <h1>
            ABOUT <span>US</span>
          </h1>
        </div>
        <Aboutus />
      </section>

      <Brand />

      <Choose />

      <Footer />
    </>
  );
}
