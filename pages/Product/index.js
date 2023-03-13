import Navbar from "../../component/Navbar";
import React, { useState, useEffect } from "react";
import styles from "../../styles/product.module.css";
import StarRatings from "react-star-ratings";
import { BsBatteryFull, BsCpu, BsSearch } from "react-icons/bs";
import { MdOutlineSdCard } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Favorite = () => {
  const [datas, setDatas] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFiltered] = useState([]);

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

  function getFiltered(filtered) {
    if (!filtered || filtered.length === 0) {
      return (
        <div className={styles.count}>
          <p>0 Produk</p>
        </div>
      );
    } else {
      return (
        <div className={styles.count}>
          <p> {filtered.length} Produk </p>
        </div>
      );
    }
  }

  useEffect(() => {
    getData();
  }, []);
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
        {getFiltered(filteredData)}
      </div>
      <div className={styles.card_container}>
        {filteredData ? (
          <>
            {filteredData.map((item) => (
              <div className={styles.card} key={item.id}>
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
          </>
        ) : (
          datas.map((item) => (
            <div className={styles.card} key={item.id}>
              <Image src={item.image} alt="My Image" width={150} height={150} />
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
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
