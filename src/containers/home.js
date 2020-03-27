import React from 'react';
import Header from '../components/header';
import { css, StyleSheet } from 'aphrodite';
import Lists from './lists';

const Home = () => {
   return (
      <div className={css(styles.home)}>
         <Header />
         <Lists />
      </div>
   );
};

export default Home;
const styles = StyleSheet.create({
   home: {
      background: '#999',
      height: 'calc(100% - 50px)',
      position: 'fixed',
      width: '100%',
   },
});
