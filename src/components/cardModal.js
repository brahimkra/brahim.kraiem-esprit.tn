import React, { useRef } from 'react';

import { css, StyleSheet } from 'aphrodite';
import useClickOutSide from '../hooks/useClickOutSide';

const CardModal = ({ title, closeModal }) => {
   const cardRef = useRef(null)
   useClickOutSide(cardRef,closeModal)
  
   return (
      <div  className={css(styles.cardModal)}>
         <div className={css(styles.content)}  ref={cardRef}>
         <button className={css(styles.btnClose)} onClick={closeModal}>
            <i className="fa fa-close"></i>
         </button>
            <span>{title}</span>
         </div>
      </div>
   );
};

export default CardModal;

const styles = StyleSheet.create({
   cardModal: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: '#00000080',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
   },
   content: {
      background: '#fff',
      padding: '7px',
      borderRadius: '4px',
      width: '60%',
      height: '40%',
      minWidth: '300px',
      minHeight: '300px',
      cursor:'initial'
   },
   btnClose: {
      float: 'right',
      marginLeft: '5px',
      background: 'transparent',
      border: 0,
      cursor:'pointer'
   },
});
