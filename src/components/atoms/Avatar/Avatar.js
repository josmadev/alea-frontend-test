import React from "react";
import "./avatarStyles.css";
const Avatar = ({ srcImage, altImage }) => {
  return (
    <img
      className="avatar"
      src={srcImage}
      width="80"
      height="80"
      alt={altImage}
    />
  );
};

export default Avatar;
