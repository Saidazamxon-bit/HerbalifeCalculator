import React, { useState, useEffect } from "react";

import css from "./Home.module.css";
import logo from "../assets/logo.png";
import LikeUnlike from "../components/LikeUnlike";
import DropdownMenu from "../components/DropdownMenu";

// Rasmlar
import aloeclassic from "../assets/aloeclassic.png";
import aloemanga from "../assets/aloemanga.png";
import baton from "../assets/baton.png";
import betaxart from "../assets/betaxart.png";
import chips from "../assets/chips.png";
import drinkmiks from "../assets/drinkmiks.png";
import formula3 from "../assets/formula3.png";
import kakltel from "../assets/kaktel.png";
import tr102 from "../assets/tr102.png";
import tr51 from "../assets/tr51.png";
import olmalik from "../assets/olmalik.png";

// Mahsulotlar ro'yxati
const products = [
  {
    name: "Formula 1 Kakteyl",
    vp: 23.95,
    recommendedPrice: 462938,
    price25: 346406,
    price35: 301910,
    price42: 268504,
    price50: 231469,
    likes: 25,
    unlikes: 0,
    image: kakltel,
  },
  {
    name: "Formula 3 Oqsil",
    vp: 17.95,
    recommendedPrice: 388631,
    price25: 291473,
    price35: 254610,
    price42: 226607,
    price50: 194316,
    likes: 17,
    unlikes: 2,
    image: formula3,
  },
  {
    name: "Suli olma ichimligi",
    vp: 22.95,
    recommendedPrice: 427400,
    price25: 320550,
    price35: 279810,
    price42: 247892,
    price50: 213700,
    likes: 12,
    unlikes: 1,
    image: olmalik,
  },
  {
    name: "Beta xart",
    vp: 25.95,
    recommendedPrice: 451825,
    price25: 338869,
    price35: 295686,
    price42: 261058,
    price50: 225913,
    likes: 19,
    unlikes: 3,
    image: betaxart,
  },
  {
    name: "Chips",
    vp: 11.95,
    recommendedPrice: 244463,
    price25: 183347,
    price35: 159901,
    price42: 141789,
    price50: 122232,
    likes: 10,
    unlikes: 2,
    image: chips,
  },
  {
    name: "Protein Drink Mix. Vegan",
    vp: 31.45,
    recommendedPrice: 629300,
    price25: 471975,
    price35: 411045,
    price42: 362994,
    price50: 314650,
    likes: 6,
    unlikes: 1,
    image: drinkmiks,
  },
  {
    name: "Travnoy 102gr",
    vp: 34.95,
    recommendedPrice: 640050,
    price25: 480038,
    price35: 417033,
    price42: 368828,
    price50: 320025,
    likes: 7,
    unlikes: 0,
    image: tr102,
  },
  {
    name: "Travnoy 51gr",
    vp: 19.95,
    recommendedPrice: 363413,
    price25: 272560,
    price35: 238219,
    price42: 210780,
    price50: 181707,
    likes: 14,
    unlikes: 2,
    image: tr51,
  },
  {
    name: "Aloe",
    vp: 24.95,
    recommendedPrice: 428213,
    price25: 321160,
    price35: 280339,
    price42: 248363,
    price50: 214107,
    likes: 21,
    unlikes: 1,
    image: aloeclassic,
  },
  {
    name: "Aloe Mango",
    vp: 24.95,
    recommendedPrice: 428213,
    price25: 321160,
    price35: 280339,
    price42: 248363,
    price50: 214107,
    likes: 18,
    unlikes: 3,
    image: aloemanga,
  },
  {
    name: "PROTEINLI BATONCHIK LIMONLI",
    vp: 7.7,
    recommendedPrice: 211213,
    price25: 207035,
    price35: 216426,
    price42: 224643,
    price50: 236381,
    likes: 14,
    unlikes: 2,
    image: baton,
  },
];

const Home = () => {
  const [notification, setNotification] = useState("");
  const [notifVisible, setNotifVisible] = useState(false);
  const [quantities, setQuantities] = useState(Array(products.length).fill("0"));
  const [discount, setDiscount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItems((prev) =>
      prev.map((item) => {
        const product = products.find((p) => p.name === item.name);
        const newPrice =
          discount === 25
            ? product.price25
            : discount === 35
            ? product.price35
            : discount === 42
            ? product.price42
            : discount === 50
            ? product.price50
            : product.recommendedPrice;

        return {
          ...item,
          price: newPrice,
        };
      })
    );
  }, [discount]);

  const increase = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = (parseInt(newQuantities[index] || "0") + 1).toString();
    setQuantities(newQuantities);
  };

  const decrease = (index) => {
    const newQuantities = [...quantities];
    const current = parseInt(newQuantities[index] || "0");
    if (current > 0) {
      newQuantities[index] = (current - 1).toString();
      setQuantities(newQuantities);
    }
  };

  const handleAdd = (index) => {
    const qty = parseInt(quantities[index]);
    if (qty >= 0) {
      const product = products[index];
      const price =
        discount === 25
          ? product.price25
          : discount === 35
          ? product.price35
          : discount === 42
          ? product.price42
          : discount === 50
          ? product.price50
          : product.recommendedPrice;

      const newItem = {
        name: product.name,
        vp: product.vp,
        price: price,
        quantity: qty,
      };

      setSelectedItems((prev) => {
        const exists = prev.find((i) => i.name === newItem.name);
        if (exists) {
          return prev.map((i) =>
            i.name === newItem.name ? { ...i, quantity: newItem.quantity } : i
          );
        } else {
          return [...prev, newItem];
        }
      });

      setNotification(`${product.name} mahsuloti ${qty} dona qilib belgilandi`);
      setNotifVisible(true);
      setTimeout(() => setNotifVisible(false), 2000);
      setTimeout(() => setNotification(""), 2600);
    }
  };

  const totalVP = selectedItems.reduce((sum, item) => sum + item.vp * item.quantity, 0);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={css.box}>
      {notification && (
        <div
          className={`${css.notification} ${
            notifVisible ? css.notificationShow : css.notificationHide
          }`}
        >
          {notification}
        </div>
      )}

      <div className={css.topWrapper}>
        <div className={css.Hertext}>
          <img src={logo} alt="logo" />
          <h1>Herbalife Nutrition Product Scores</h1>
        </div>
        <div className={css.dropdownFixed}>
          <DropdownMenu selected={discount} setSelected={setDiscount} />
        </div>
      </div>

      <div className={css.cardbox}>
        {products.map((product, index) => {
          let customClass = "";
          if (product.name === "Beta xart") customClass = css.betaxart;
          if (product.name === "Chips") customClass = css.chips;
          if (product.name === "Aloe Mango") customClass = css.aloemango;

          const discountedPrice =
            discount === 25
              ? product.price25
              : discount === 35
              ? product.price35
              : discount === 42
              ? product.price42
              : discount === 50
              ? product.price50
              : product.recommendedPrice;

          return (
            <div className={css.card} key={index}>
              <div className={`${css.cardimg} ${customClass}`}>
                <img src={product.image} alt={product.name} className={css.productimg} />
              </div>
              <h2 className={css.productname}>{product.name}</h2>
              <h3 className={css.vpValue}>{product.vp} VP</h3>
              <p className={css.price}>Narx: {discountedPrice.toLocaleString()} so‘m</p>

              <div className={css.counter}>
                <button onClick={() => decrease(index)}>-</button>
                <input
                  type="number"
                  min="0"
                  className={css.counterInput}
                  value={quantities[index]}
                  onChange={(e) => {
                    const value = e.target.value;
                    const newQuantities = [...quantities];
                    if (/^\d*$/.test(value)) {
                      newQuantities[index] = value;
                      setQuantities(newQuantities);
                    }
                  }}
                  onBlur={() => {
                    const newQuantities = [...quantities];
                    if (newQuantities[index] === "") {
                      newQuantities[index] = "0";
                      setQuantities(newQuantities);
                    }
                  }}
                />
                <button onClick={() => increase(index)}>+</button>
              </div>

              <button className={css.addbtn} onClick={() => handleAdd(index)}>
                Qo‘shish
              </button>

              <LikeUnlike initialLikes={product.likes} initialUnlikes={product.unlikes} />
            </div>
          );
        })}
      </div>

      {selectedItems.length > 0 && (
        <div className={css.summaryBox}>
          <h2>Tanlangan mahsulotlar</h2>
          <ul>
            {selectedItems.map((item, idx) => (
              <li key={idx}>
                {item.quantity}x {item.name} → {item.vp * item.quantity} VP, {(item.price * item.quantity).toLocaleString()} so‘m
              </li>
            ))}
          </ul>
          <h3>Umumiy VP: {totalVP.toFixed(2)}</h3>
          <h3>Umumiy narx: {totalPrice.toLocaleString()} so‘m</h3>
        </div>
      )}
    </div>
  );
};

export default Home;