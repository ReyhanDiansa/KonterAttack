import Navbar from "@/component/Navbar";
import React, { useState, useEffect } from "react";
import data from "../../data/produk.json";
import styles from "@/styles/product.module.css";
import StarRatings from "react-star-ratings";
import { BsBatteryFull, BsCpu, BsSearch } from "react-icons/bs";
import { MdOutlineSdCard } from "react-icons/md";
import Image from "next/image";
import Footer from "@/component/Footer";

const Favorite = () => {
  const [datas, setDatas] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFiltered] = useState([]);

  const fetchGetAll = () => {
    setDatas(data);
  };

  useEffect(() => {
    fetchGetAll();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = datas.filter((e) => {
      return e.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFiltered(filteredData);
  };

  const filterData = () => {
    const filteredData = datas.filter((e) => {
      return e.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFiltered(filteredData);
  };

  useEffect(() => {
    filterData();
  }, [datas, keyword]);

  return (
    <div>
      <Navbar />
      <div className={styles.search}>
        <BsSearch />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Product"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </div>
      <div className={styles.card_container}> 
        {filteredData
          ? filteredData.map((item, index) => (
              <div className={styles.card}>
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
                    starDimension="10px"
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
            ))
          : datas.map((item, index) => (
              <div className={styles.card}>
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
                    starDimension="10px"
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
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
