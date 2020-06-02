import React from 'react';
import shortid from 'shortid';
import ShopItem from './ShopItem';

export default function ListView(props) {
  const { items } = props;

  return (
    <div className="list-view">
      {items.map((o) => (
        <ShopItem items={o} key={shortid.generate()}/>
      ))}
    </div>
  );
}