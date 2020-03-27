import React, { useState } from 'react';
import { css, StyleSheet } from 'aphrodite';
import AddCard from './add';
import Card from '../../components/card';

const Cards = () => {
   const [cards, setCards] = useState([]);
   const addCard = title => {
      setCards([...cards, title]);
   };
   return (
      <div className={css(styles.cards)}>
         {cards.map((c, i) => (
            <Card key={i} title={c} />
         ))}
         <AddCard onAdd={addCard} />
      </div>
   );
};

export default Cards;
const styles = StyleSheet.create({
   cards: {
      padding: '10px',
   },
});
