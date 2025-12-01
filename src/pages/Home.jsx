import React, { useState, useEffect } from "react";
import css from "./Home.module.css";
import logo from "../assets/logo.png";
import LikeUnlike from "../components/LikeUnlike";
import DropdownMenu from "../components/DropdownMenu";
import CatalogDropdown from "../components/CatalogDropdown";

// Kosmetika rasmlar
import kos1 from "../assets/kosmetika/1kos.png";
import kos2 from "../assets/kosmetika/2kos.png";
import kos3 from "../assets/kosmetika/3kos.png";
import kos4 from "../assets/kosmetika/4kos.png";
import kos5 from "../assets/kosmetika/5kos.png";
import loyavayalpiz from "../assets/kosmetika/loyvayalpiz3.png";

// Mahsulotlar rasmlari
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
import fito from "../assets/fito.png";
import For2 from "../assets/for2.png";
import Line from "../assets/Herbaline.png";

// Boshqa rasmlar
import eko from "../assets/boshqa/ekoligik.png";
import supersh from "../assets/boshqa/supersh.jpeg";
import ikkishisha from "../assets/boshqa/2lshisha.png";
import qoshiq from "../assets/boshqa/qoshiqoddiy.png";
import beshshaker from "../assets/boshqa/5shaker.jpeg";
import Shartnoma from "../assets/shartnoma.png";

// --- Mahsulotlar (Nutrition) ---
const allProducts = [
  {
    name: "Formula 1 Kakteyl",
    vp: 23.95,
    recommendedPrice: 473878,
    price50: 276937,
    price42: 308448,
    price35: 336020,
    price25: 375408,
    likes: 25,
    unlikes: 0,
    image: kakltel,
    category: "mahsulotlar",
  },
  {
    name: "Formula 3 Oqsil",
    vp: 17.95,
    recommendedPrice: 403945,
    price50: 236068,
    price42: 262928,
    price35: 286431,
    price25: 320007,
    likes: 17,
    unlikes: 2,
    image: formula3,
    category: "mahsulotlar",
  },
  {
    name: "Suli olma ichimligi",
    vp: 22.95,
    recommendedPrice: 414312,
    price50: 242126,
    price42: 269676,
    price35: 293782,
    price25: 328219,
    likes: 12,
    unlikes: 1,
    image: olmalik,
    category: "mahsulotlar",
  },
  {
    name: "Beta xart",
    vp: 25.95,
    recommendedPrice: 623632,
    price25: 494043,
    price35: 442208,
    price42: 405923,
    price50: 364454,
    likes: 19,
    unlikes: 3,
    image: betaxart,
    category: "mahsulotlar",
  },
  {
    name: "Chips",
    vp: 11.75,
    recommendedPrice: 365877,
    price25: 302125,
    price35: 276624,
    price42: 258774,
    price50: 238373,
    likes: 10,
    unlikes: 2,
    image: chips,
    category: "mahsulotlar",
  },
  {
    name: "Protein Drink Mix. Vegan",
    vp: 31.45,
    recommendedPrice: 541576,
    price25: 429038,
    price35: 384023,
    price42: 352513,
    price50: 316500,
    likes: 6,
    unlikes: 1,
    image: drinkmiks,
    category: "mahsulotlar",
  },
  {
    name: "Travnoy 102gr",
    vp: 34.95,
    recommendedPrice: 641214,
    price25: 507972,
    price35: 454675,
    price42: 417367,
    price50: 374729,
    likes: 7,
    unlikes: 0,
    image: tr102,
    category: "mahsulotlar",
  },
  {
    name: "Travnoy 51gr",
    vp: 19.95,
    recommendedPrice: 366916,
    price25: 290672,
    price35: 260174,
    price42: 238826,
    price50: 214428,
    likes: 14,
    unlikes: 2,
    image: tr51,
    category: "mahsulotlar",
  },
  {
    name: "Aloe",
    vp: 24.95,
    recommendedPrice: 429536,
    price25: 340280,
    price35: 304577,
    price42: 279586,
    price50: 251024,
    likes: 21,
    unlikes: 1,
    image: aloeclassic,
    category: "mahsulotlar",
  },
  {
    name: "Aloe Mango",
    vp: 24.95,
    recommendedPrice: 429536,
    price25: 340280,
    price35: 304577,
    price42: 279586,
    price50: 251024,
    likes: 18,
    unlikes: 3,
    image: aloemanga,
    category: "mahsulotlar",
  },
  {
    name: "PROTEINLI BATONCHIK LIMONLI",
    vp: 7.7,
    recommendedPrice: 272006,
    price25: 242074,
    price35: 230101,
    price42: 221719,
    price50: 212141,
    likes: 14,
    unlikes: 2,
    image: baton,
    category: "mahsulotlar",
  },
  {
    name: "Fito Komplit ",
    vp: 29.5,
    recommendedPrice: 470575,
    price25: 470575,
    price35: 422939,
    price42: 389594,
    price50: 351486,
    likes: 14,
    unlikes: 2,
    image: fito,
    category: "mahsulotlar",
  },
  {
    name: "Formula 2",
    vp: 13.55,
    recommendedPrice: 284564,
    price25: 284564,
    price35: 254707,
    price42: 233808,
    price50: 209922,
    likes: 14,
    unlikes: 2,
    image: For2,
    category: "mahsulotlar",
  },

  {
    name: "Herbalifeline Max ",
    vp: 19.40,
    recommendedPrice: 305689,
    price25: 305689,
    price35: 273616,
    price42: 251165,
    price50: 225506,
    likes: 14,
    unlikes: 2,
    image: Line,
    category: "mahsulotlar",
  },
];

// --- Kosmetika ---
const cosmetics = [
  {
    name: "Herbalife SKIN aloe asosidagi tozalovchi gel",
    vp: 16.75,
    recommendedPrice: 288418,
    price25: 228491,
    price35: 204520,
    price42: 187740,
    price50: 168564,
    likes: 8,
    unlikes: 1,
    image: kos1,
    category: "kosmetika",
  },
  {
    name: "Herbalife SKIN o‘simlik tonikli loson",
    vp: 12.7,
    recommendedPrice: 218697,
    price25: 173257,
    price35: 155080,
    price42: 142357,
    price50: 127816,
    likes: 5,
    unlikes: 0,
    image: kos2,
    category: "kosmetika",
  },
  {
    name: "Herbalife SKIN qarishga qarshi zardob (50ml)",
    vp: 43.35,
    recommendedPrice: 746326,
    price25: 591256,
    price35: 529227,
    price42: 485807,
    price50: 436184,
    likes: 6,
    unlikes: 1,
    image: kos3,
    category: "kosmetika",
  },
  {
    name: "Herbalife SKIN loy va yalpiz asosida tozalovchi niqob",
    vp: 14.2,
    recommendedPrice: 267561,
    price25: 211968,
    price35: 189731,
    price42: 174164,
    price50: 156374,
    likes: 3,
    unlikes: 0,
    image: loyavayalpiz,
    category: "kosmetika",
  },
  {
    name: "Lifting bilan koʼz atrofidagi teri uchun gel",
    vp: 26.35,
    recommendedPrice: 453573,
    price25: 359330,
    price35: 321633,
    price42: 295245,
    price50: 265087,
    likes: 7,
    unlikes: 1,
    image: kos4,
    category: "kosmetika",
  },
  {
    name: "Terining tabiiy porlashi uchun kunlik namlovchi krem",
    vp: 32.65,
    recommendedPrice: 561781,
    price25: 445054,
    price35: 398364,
    price42: 365680,
    price50: 328328,
    likes: 9,
    unlikes: 2,
    image: kos5,
    category: "kosmetika",
  },
];

// --- Boshqa mahsulotlar ---
const others = [
  {
    name: "Boshlang'ich to'plam",
    vp: 0,
    recommendedPrice: 150394,
    price25: 150394,
    price35: 150394,
    price42: 150394,
    price50: 150394,
    likes: 104,
    unlikes: 2,
    image: Shartnoma,
    category: "boshqa",
  },
  {
    name: "Ekologik qoshiq",
    vp: 0.1,
    recommendedPrice: 12155.0,
    price25: 12155.0,
    price35: 12155.0,
    price42: 12155.0,
    price50: 12155.0,
    likes: 10,
    unlikes: 2,
    image: eko,
    category: "boshqa",
  },
  {
    name: "Kokteyl Super sheyker",
    vp: 1.65,
    recommendedPrice: 118468.0,
    price25: 118468.0,
    price35: 118468.0,
    price42: 118468.0,
    price50: 118468.0,
    likes: 5,
    unlikes: 1,
    image: supersh,
    category: "boshqa",
  },
  {
    name: "Herbalife Nutrition 2 litrli shisha",
    vp: 2.4,
    recommendedPrice: 351067.0,
    price25: 351067.0,
    price35: 351067.0,
    price42: 351067.0,
    price50: 351067.0,
    likes: 5,
    unlikes: 1,
    image: ikkishisha,
    category: "boshqa",
  },
  {
    name: "HLN o'lchash qoshig'i (to'plam 10 dona)",
    vp: 1.2,
    recommendedPrice: 104371.0,
    price25: 104371.0,
    price35: 104371.0,
    price42: 104371.0,
    price50: 104371.0,
    likes: 5,
    unlikes: 1,
    image: qoshiq,
    category: "boshqa",
  },
  {
    name: "Shaker (500ml)",
    vp: 1.65,
    recommendedPrice: 153709.0,
    price25: 153709.0,
    price35: 153709.0,
    price42: 153709.0,
    price50: 153709.0,
    likes: 5,
    unlikes: 1,
    image: beshshaker,
    category: "boshqa",
  },
];

const Home = () => {
  const [catalogType, setCatalogType] = useState("mahsulotlar");
  const [notification, setNotification] = useState("");
  const [notifVisible, setNotifVisible] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const products =
    catalogType === "kosmetika"
      ? cosmetics
      : catalogType === "boshqa"
      ? others
      : allProducts;

  useEffect(() => {
    setQuantities(Array(products.length).fill("0"));
  }, [catalogType]);

  useEffect(() => {
    setSelectedItems((prev) =>
      prev.map((item) => {
        const product = products.find((p) => p.name === item.name);
        if (!product) return item;
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
        return { ...item, price: newPrice };
      })
    );
  }, [discount, catalogType]);

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

  // ✅ YANGILANGAN handleAdd
  const handleAdd = (index) => {
    const qty = parseInt(quantities[index]);
    const product = products[index];

    if (qty === 0) {
      setSelectedItems((prev) => prev.filter((i) => i.name !== product.name));
      setNotification(`${product.name} tanlanganlardan olib tashlandi`);
      setNotifVisible(true);
      setTimeout(() => setNotifVisible(false), 2000);
      setTimeout(() => setNotification(""), 2600);
      return;
    }

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

    const newItem = { name: product.name, vp: product.vp, price, quantity: qty };

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
  };

  const totalVP = selectedItems.reduce((sum, item) => sum + item.vp * item.quantity, 0);
  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={css.box}>
      {selectedItems.length > 0 && (
        <div className={css.topSummaryBoxStyled}>
          <h3 className={css.summaryTitle}>Umumiy VP</h3>
          <p className={css.summaryValue}>{totalVP.toFixed(2)}</p>
          <h3 className={css.summaryTitle}>Umumiy narx</h3>
          <p className={css.summaryValue}>{totalPrice.toLocaleString()} so‘m</p>
        </div>
      )}

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
        <div className={css.dropdownGroup}>
          <CatalogDropdown selected={catalogType} setSelected={setCatalogType} />
          <DropdownMenu selected={discount} setSelected={setDiscount} />
        </div>
      </div>

      <div className={css.cardbox}>
        {products.map((product, index) => {
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
              <div className={css.cardimg}>
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
                {item.quantity}x {item.name} → {item.vp * item.quantity} VP,{" "}
                {(item.price * item.quantity).toLocaleString()} so‘m
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
