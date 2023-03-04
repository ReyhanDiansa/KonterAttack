import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import data from "../../data/produk.json";
import Image from "next/image";
import styles from "../../styles/detail.module.css";
import Navbar from "@/component/Navbar";
import StarRatings from "react-star-ratings";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";
import Footer from "@/component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [filtered, setFiltered] = useState([]);
  const [counter, setCounter] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [datas] = useState(data);

  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  useEffect(() => {
    if (id) {
      const filteredData = datas.filter((e) => e.id === id);
      setFiltered(filteredData[0]);
    }
  }, [id]);

  if (!filtered && !data) {
    return <div>Loading...</div>;
  }

  const decrementCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const incrementCount = () => {
    if (filtered.stok - filtered.terjual > counter) {
      setCounter(counter + 1);
    }
  };

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  console.log(filtered.image_car);
  return (
    <>
      <Navbar />
      <Link href={"/Product"}>
        <div className={styles.back}>
          <div className={styles.back_icon}>
            <AiOutlineArrowLeft />
          </div>  
          <div className={styles.back_text}>Back to Product</div>
        </div>
      </Link>
      <div className={styles.detail_container}>
        <div className={styles.detail_image}>
          <Slider ref={sliderRef} {...settings}>
            {filtered.image_car &&
              Object.entries(filtered.image_car).map(([key, value]) => (
                <div key={key} className={styles.carousel}>
                  <Image
                    src={value}
                    width={400}
                    height={400}
                    alt="phone image"
                  />
                </div>
              ))}
          </Slider>
          <div className={styles.next}>
            <button onClick={next}>
              <GrNext size={20} />
            </button>
          </div>
          <div className={styles.prev}>
            <button onClick={previous}>
              <GrPrevious size={20} />
            </button>
          </div>
        </div>
        <div className={styles.detail_text}>
          <div className={styles.detail_title}>
            <h1>{filtered.name}</h1>
          </div>
          <div className={styles.rating}>
            <div className={styles.star_rate}>
              <StarRatings
                rating={filtered.rate}
                starRatedColor={"#ffd700"}
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
              />
              <p>{filtered.rate}</p>
            </div>
            <div className={styles.line_rate}>|</div>
            <div className={styles.terjual}>
              <p>{filtered.terjual} Terjual</p>
            </div>
          </div>
          <div className={styles.price}>
            <h4>Rp {filtered.price}</h4>
          </div>
          <div className={styles.garansi}>garansi 2 tahun</div>
          <div className={styles.merk}>
            <p>
              Merk: <span> {filtered.merk}</span>
            </p>
          </div>
          <div className={styles.desk}>
            <p>
              Deskripsi:{" "}
              <span>
                {showMore
                  ? filtered.desk
                  : filtered.desk
                  ? filtered.desk.slice(0, 100) + "..."
                  : ""}
              </span>{" "}
              {!showMore && (
                <button onClick={() => setShowMore(true)}> Read More</button>
              )}{" "}
              {showMore && (
                <button onClick={() => setShowMore(false)}> Hide</button>
              )}
            </p>
          </div>
          <div className={styles.count}>
            <div onClick={decrementCount} className={styles.count_button}>
              <AiOutlineMinusCircle />
            </div>
            <div className={styles.number}>{counter}</div>
            <div onClick={incrementCount} className={styles.count_button}>
              <AiOutlinePlusCircle />
            </div>
            <div>Sisa {filtered.stok - filtered.terjual}</div>
          </div>
          <div className={styles.detail_button}>
            <button className={styles.cart_button}>
              <AiOutlineShoppingCart />
              Add to Cart
            </button>
            <button className={styles.checkout_button}>Checkout</button>
          </div>
        </div>
      </div>

      <div className={styles.detail_spec}>
        <h1>SPESIFICATION</h1>
        <table>
          <tbody>
            {filtered.spesification &&
              Object.entries(filtered.spesification).map(([key, value]) => (
                <tr key={key}>
                  <td>
                    <span>{key}</span>
                  </td>
                  <td>: {value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
