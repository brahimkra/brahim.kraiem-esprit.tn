import React, { useState } from 'react';
import { css, StyleSheet } from 'aphrodite';
import AddList from './add';
import List from '../../components/list';

const Lists = () => {
   const [lists, setLists] = useState([]);
   const addList = title => {
      setLists([ ...lists, title ]);
   };
 
   return (
      <div className={css(styles.lists)}>
         {lists.map((l, i) => (
            <List key={i} title={l} />
         ))}
         <AddList onAdd={addList} />
      </div>
   );
};

export default Lists;

const styles = StyleSheet.create({
   lists: {
      flexWrap: 'nowrap',
      height: 'calc(100% - 80px)',
      padding: '10px',
      display: 'flex',
      alignItems: 'flex-start',
      overflowX: 'scroll',
      overflowY: 'hidden',
   },
});
