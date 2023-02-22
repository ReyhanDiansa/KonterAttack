import styles from "@/styles/Home.module.css";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { BsBatteryFull, BsCpu } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { MdOutlineSdCard } from "react-icons/md";
import Footer from "@/component/Footer";
import data from "../data/produk.json"
import Aboutus from "@/component/Aboutus";
import Brand from "@/component/Brand";

export default function Home() {
  
  const bestProducts = data.filter(product => product.best);
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
              <button>Buy Now</button>
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
          <h1><span>BEST</span> SELLER</h1>
        </div>
        <div className={styles.card_container}>

          {bestProducts.map((item, index) => (
          <div className={styles.card} >
            <Image
              src={item.image}
              alt="My Image"
              width={150}
              height={150}
            />
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
              <button>Buy</button>
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

          {/* <div className={styles.card}>
            <Image
              src="/assets/images/redmin11.jpg"
              alt="My Image"
              width={150}
              height={150}
            />
            <div className={styles.rating}>
              <StarRatings
                rating={4.5}
                starRatedColor={"#ffd700"}
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
              />
            </div>
            <h2>Redmi note 11</h2>
            <div className={styles.price}>
              <h3>
                <span className={styles.rupiah}>Rp</span> 2.200.000
              </h3>
            </div>
            <div className={styles.card_button}>
              <button>Buy</button>
            </div>
            <hr className={styles.card_line} />
            <div className={styles.card_detail}>
              <div className={styles.battery}>
                <BsBatteryFull /> <span>5000 mAh</span>
              </div>
              <div className={styles.memory}>
                <MdOutlineSdCard />
                <span> 128GB</span>
              </div>
              <div className={styles.cpu}>
                <BsCpu /> <span>Snapdragon® 680</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/assets/images/redmin11.jpg"
              alt="My Image"
              width={150}
              height={150}
            />
            <div className={styles.rating}>
              <StarRatings
                rating={4.5}
                starRatedColor={"#ffd700"}
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
              />
            </div>
            <h2>Redmi note 11</h2>
            <div className={styles.price}>
              <h3>
                <span className={styles.rupiah}>Rp</span> 2.200.000
              </h3>
            </div>
            <div className={styles.card_button}>
              <button>Buy</button>
            </div>
            <hr className={styles.card_line} />
            <div className={styles.card_detail}>
              <div className={styles.battery}>
                <BsBatteryFull /> <span>5000 mAh</span>
              </div>
              <div className={styles.memory}>
                <MdOutlineSdCard />
                <span> 128GB</span>
              </div>
              <div className={styles.cpu}>
                <BsCpu /> <span>Snapdragon® 680</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/assets/images/redmin11.jpg"
              alt="My Image"
              width={150}
              height={150}
            />
            <div className={styles.rating}>
              <StarRatings
                rating={4.5}
                starRatedColor={"#ffd700"}
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
              />
            </div>
            <h2>Redmi note 11</h2>
            <div className={styles.price}>
              <h3>
                <span className={styles.rupiah}>Rp</span> 2.200.000
              </h3>
            </div>
            <div className={styles.card_button}>
              <button>Buy</button>
            </div>
            <hr className={styles.card_line} />
            <div className={styles.card_detail}>
              <div className={styles.battery}>
                <BsBatteryFull /> <span>5000 mAh</span>
              </div>
              <div className={styles.memory}>
                <MdOutlineSdCard />
                <span> 128GB</span>
              </div>
              <div className={styles.cpu}>
                <BsCpu /> <span>Snapdragon® 680</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className={styles.aboutus}>
        <div className={styles.aboutus_title}>
          <h1>ABOUT <span>US</span></h1>
        </div>
        <Aboutus />
      </section>

      <Brand />

      <Footer />
    </>
  );
}
