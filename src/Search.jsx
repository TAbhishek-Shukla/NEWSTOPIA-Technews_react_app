import React from 'react';
import "./App.css"
import { useGlobalContext } from './Context';

const Search = () => {
const {query,SearchPost}= useGlobalContext();
  return (
    <>
    <h1> NEWSTOPIA</h1>
    <form onSubmit={(e)=>{e.preventDefault();}} >
      <div>
        <input type="text" placeholder='search here ...'
        value={query}
        onChange={(e)=>SearchPost(e.target.value)} />

      </div>
    </form>
    </>
  );
}

export default Search;
