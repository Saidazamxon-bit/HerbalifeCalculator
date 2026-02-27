// components/DropdownMenu.jsx
import React, { useState, useRef, useEffect } from "react";
import css from "./DropdownMenu.module.css";

const discounts = [0, 25, 35, 42, 50];

const DropdownMenu = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // tashqariga bosilganda menyuni yopish
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={css.dropdown} ref={menuRef}>
      <button className={css.dropdownButton} onClick={() => setOpen(!open)}>
        {selected === 0 ? "Chegirma yo‘q" : `${selected}% chegirma`}
        <span className={css.arrow}>&#9662;</span>
      </button>

      <ul className={`${css.menu} ${open ? css.show : ""}`}>
        {discounts.map((d) => (
          <li
            key={d}
            onClick={() => {
              setSelected(d);
              setOpen(false);
            }}
            className={`${css.item} ${d === selected ? css.active : ""}`}
          >
            {d === 0 ? "Chegirma yo‘q" : `${d}% chegirma`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
