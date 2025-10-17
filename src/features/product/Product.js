import React from "react";
import PropTypes from "prop-types";

export default function Product({ item }) {
  let imageSrc;

  try {
    // ดึงภาพจากโฟลเดอร์ assets
    imageSrc = require(`../../assets/${item.imageURL}`);
  } catch (err) {
    // fallback ถ้าไม่มีไฟล์
    imageSrc = "https://picsum.photos/300/200";
  }

  return (
    <li className="Products">
      <img className="Products__image" src={imageSrc} alt={item.name} />
      <h3 className="Products__name">{item.name}</h3>
      <p className="Products__type">Type: {item.type}</p>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
