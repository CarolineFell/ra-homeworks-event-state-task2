import React from 'react';
import shortid from 'shortid';
import ShopCard from './ShopCard';

export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className="cards-view">
      {cards.map((o) => (
        <ShopCard items={o} key={shortid.generate()}/>
      ))}
    </div>
  );
}