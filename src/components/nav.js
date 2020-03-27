import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Trello from '../assets/images/Trello.png';
const Nav = () => {
   return (
      <nav
         className={css(styles.nav)}>
         <img src={Trello} alt="Trello" />
      </nav>
   );
};

export default Nav;

const styles = StyleSheet.create({
   nav: {
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      height : '50px'
   },
});
