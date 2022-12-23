import React from 'react';
import { useGlobalContext } from './Context';
import "./App.css"

const Stories = () => {

  const { hits, nbPages, isLoading,removePost } = useGlobalContext();
  if (isLoading) {
    return <>
      <h2>Loading.....</h2>
    </>
  }
  return (
    <>
      <div className='stories-div'>
        {
          hits.map((curelem) => {
            const { title, author, objectID, num_comments, url } = curelem;
            return (
              <div className='card' key ={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span>{author}</span>  | <span>{num_comments}</span> comments
                </p>
                <div className="card-button">
                  <a href={url} target="_blank">
                    Read more</a>
                  <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
                </div>
              </div>
)
            
          })
        }</div>
    </>
  );
}

export default Stories;
