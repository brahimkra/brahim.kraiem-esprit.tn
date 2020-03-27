import React, { useState, useRef } from 'react';

import { css, StyleSheet } from 'aphrodite';
import CardModal from './cardModal';

const Card = ({ title }) => {
   const [show, setShow] = useState(false);

   const showDetails = () => {
      setShow(true);
   };
   const handleClose = () => {
      setShow(false);
   };
   return (
      <>
         <div className={css(styles.card)} onClick={showDetails}>
            <span>{title}</span>
         </div>
         {show && <CardModal title={title} closeModal={handleClose} />}
      </>
   );
};

export default Card;

const styles = StyleSheet.create({
   card: {
      background: '#99999942',
      padding: '7px',
      borderRadius: '4px',
      margin: '5px 0',
      cursor: 'pointer',
   },
});
