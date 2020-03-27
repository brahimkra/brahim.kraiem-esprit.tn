import React from 'react';

import { css, StyleSheet } from 'aphrodite';
import Cards from '../containers/cards';

const List = ({ title, cards }) => {
   return (
      <div className={css(styles.list)}>
         <span>{title}</span>
         <button className={css(styles.options)}>
            <i className="fa fa-ellipsis-h"></i>
         </button>

         <Cards cards={cards}/>
      </div>
   );
};

export default List;

const styles = StyleSheet.create({
   list: {
      background: '#ebecf0',
      padding: '10px',
      borderRadius: '4px',
      margin: '0 7px',
      minHeight: '300px',
      minWidth: '200px',
      maxWidth: '250px',
      maxHeight: '100%',
      overflowY: 'scroll',
   },
   options: {
      float: 'right',
      marginLeft: '5px',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
   },
});
