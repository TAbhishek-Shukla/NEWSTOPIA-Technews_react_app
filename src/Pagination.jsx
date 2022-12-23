import React from 'react';
import { useGlobalContext } from './Context';
import "./App.css"

const Pagination = () => {
  const {page,nbPages,getprevpage,getnextpage}=useGlobalContext();
  return (
   <>
   <div className="pagination-btn">
  <button onClick={()=>getprevpage() }>PREV</button>
  <p>{page + 1} of {nbPages}</p>
  <button onClick={()=>getnextpage()}>NEXT</button>
   </div>
   </>
  );
}

export default Pagination;
