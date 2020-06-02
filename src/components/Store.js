import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store() {
  const products = [
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'red',
      img:
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'green',
      img:
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'blue',
      img:
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'black',
      img:
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
    },
    {
      name: 'Nike free run',
      price: '170',
      color: 'black',
      img:
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
    },
    {
      name: 'Nike Metcon 3',
      price: '150',
      color: 'green',
      img:
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
    },
  ];
  const [icons, setIcon] = useState('view_list');

  return (
    <>
      <IconSwitch
        icon={icons}
        onSwitch={() => {
          setIcon((prevIcons) => (prevIcons === 'view_list' && 'view_module') || 'view_list');
        }}
      />
      {(icons === 'view_list' && <CardsView cards={products} />) || (<ListView items={products} />)}
    </>
  );
}

Store.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
  }).isRequired
}