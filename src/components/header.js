import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Header = () => {
   return (
      <header className={css(styles.header)}>
         <h2 className={css(styles.h2)}>Tableau Reezocar</h2>
         <button className={css(styles.button)}>Initialiser le jeu de données</button>
      </header>
   );
};

export default Header;

const styles = StyleSheet.create({
   header: {
      padding: "10px",
      height:'50px'
   },
   h2:{
      display:"inline",
      margin:'0 10px',
      color:"white"
   },
   button:{
      background:"#25b325",
      border: 0,
      color: "white",
      padding: "8px",
      borderRadius: "5px",
   }
});
