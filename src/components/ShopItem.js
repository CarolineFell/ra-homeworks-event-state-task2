import React from 'react';

export default function ShopItem(props) {
  const {name, price, color, img } = props.items;

  return (
    <div className="item">
      <img src={img} alt={`${name}-${color}`} />
      <h2 className="name">{name}</h2>
      <span className="color">{color}</span>
      <span className="price">${price}</span>
      <span className="button">Add to cart</span>
    </div>
  );
}