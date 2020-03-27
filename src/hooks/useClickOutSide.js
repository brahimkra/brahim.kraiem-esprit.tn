import { useEffect } from "react";

function useClickOutSide(ref, handleClick) {
   useEffect(() => {
     function handleClickOutside(event) {
       if (ref.current && !ref.current.contains(event.target)) {
         handleClick()
       }
     }
     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [handleClick, ref]);
 }
 export default useClickOutSide