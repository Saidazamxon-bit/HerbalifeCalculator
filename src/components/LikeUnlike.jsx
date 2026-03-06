// LikeUnlike.jsx
import React, { useState } from "react";
import css from "./LikeUnlike.module.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const LikeUnlike = ({ initialLikes, initialUnlikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [unlikes, setUnlikes] = useState(initialUnlikes);
  const [selected, setSelected] = useState(null); // "like" | "unlike" | null

  const handleLike = () => {
    if (selected === "like") {
      setLikes(likes - 1);
      setSelected(null);
    } else {
      setLikes(likes + 1);
      if (selected === "unlike") setUnlikes(unlikes - 1);
      setSelected("like");
    }
  };

  const handleUnlike = () => {
    if (selected === "unlike") {
      setUnlikes(unlikes - 1);
      setSelected(null);
    } else {
      setUnlikes(unlikes + 1);
      if (selected === "like") setLikes(likes - 1);
      setSelected("unlike");
    }
  };

  return (
    <div className={css.container}>
      <button
        onClick={handleLike}
        className={`${css.btn} ${selected === "like" ? css.activeLike : ""}`}
      >
        <FaThumbsUp /> <span>{likes}</span>
      </button>
      <button
        onClick={handleUnlike}
        className={`${css.btn} ${selected === "unlike" ? css.activeUnlike : ""}`}
      >
        <FaThumbsDown /> <span>{unlikes}</span>
      </button>
    </div>
  );
};

export default LikeUnlike;
