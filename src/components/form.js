import React, { useRef, useState } from 'react';
import useClickOutSide from '../hooks/useClickOutSide';
import { StyleSheet, css } from 'aphrodite';

const Form = ({ submit, type }) => {
   const formRef = useRef(null);
   const [clicked, setClicked] = useState(false);
   const [value, setValue] = useState('');
   useClickOutSide(formRef, setClicked);
   
   const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      setValue('');
      setClicked(false);
      submit(value);
   };
   const handleRest = () => {
      setValue('');
      setClicked(false);
   };
   if (!clicked)
      return (
         <button className={css(styles.buttonLg)} onClick={() => setClicked(true)}>
            <i className="fa fa-plus"></i> Ajouter une {type}
         </button>
      );
   return (
      <div>
         <form ref={formRef} className={css(styles.grayDiv)} onSubmit={handleSubmit}>
            {type === 'liste' ? (
               <input
                  className={css(styles.input)}
                  type="text"
                  autoFocus
                  placeholder={'saisissez le titre de la ' + type}
                  onChange={e => setValue(e.target.value)}
                  value={value}
               />
            ) : (
               <textarea
                  className={css(styles.input)}
                  type="text"
                  autoFocus
                  placeholder={'saisissez le titre de la ' + type}
                  onChange={e => setValue(e.target.value)}
                  value={value}
               />
            )}
            <div>
               <button className={css(styles.button)} type="submit">
                  Ajouter une {type}
               </button>
               <button type="reset" className={css(styles.cancelBtn)} onClick={handleRest}>
                  <i className="fa fa-close"></i>
               </button>
            </div>
         </form>
      </div>
   );
};

export default Form;
const styles = StyleSheet.create({
   header: {
      padding: '10px',
   },
   h1: {
      display: 'inline',
      margin: '0 10px',
      color: 'white',
   },
   button: {
      background: '#25b325',
      border: 0,
      color: 'white',
      padding: '8px',
      borderRadius: '5px',
      minHeight: '32px',
      height: '32px',
      marginTop: '0',
      paddingTop: '4px',
      paddingBottom: '4px',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
   },
   buttonLg: {
      background: '#6a6a6a6b',
      border: 0,
      color: 'white',
      padding: '8px',
      borderRadius: '5px',
      minHeight: '32px',
      height: '32px',
      marginTop: '0',
      paddingTop: '4px',
      paddingBottom: '4px',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      width: '180px',
   },
   cancelBtn: {
      border: 0,
      padding: '8px',
      borderRadius: '5px',
      color: '#43464b',
   },
   input: {
      border: 0,
      padding: '8px',
      borderRadius: '5px',
      marginBottom: '5px',
   },
   grayDiv: {
      background: '#ebecf0',
      borderRadius: 3,
      height: 'auto',
      minHeight: 32,
      padding: 4,
   },
});
