import React, { useState, useRef, useEffect } from "react";
import css from "./CatalogDropdown.module.css";

const CatalogDropdown = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className={css.dropdown} ref={ref}>
      <button
        className={css.dropdownButton}
        onClick={() => setOpen(!open)}
      >
        {selected === "kosmetika"
          ? "Kosmetika"
          : selected === "boshqa"
          ? "Boshqa"
          : "Mahsulotlar"}
        <span className={css.arrow}>▼</span>
      </button>

      <ul className={`${css.menu} ${open ? css.show : ""}`}>
        <li
          className={`${css.item} ${
            selected === "mahsulotlar" ? css.active : ""
          }`}
          onClick={() => handleSelect("mahsulotlar")}
        >
          Mahsulotlar
        </li>
        <li
          className={`${css.item} ${
            selected === "kosmetika" ? css.active : ""
          }`}
          onClick={() => handleSelect("kosmetika")}
        >
          Kosmetika
        </li>
        <li
          className={`${css.item} ${selected === "boshqa" ? css.active : ""}`}
          onClick={() => handleSelect("boshqa")}
        >
          Boshqa
        </li>
      </ul>
    </div>
  );
};

export default CatalogDropdown;
