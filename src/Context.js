//creatinh context for storing dat and provide it to other componnets using reate context and usecontext api
import React from "react";
import { createContext,useContext,useReducer ,useEffect} from "react";
import reducer from "./Reducer";

let API="https://hn.algolia.com/api/v1/search?";

//reducer initialstate
const initialState={
    query: "HTML",
    nbPages:0,
    page:0,
    hits:[], 
isLoading :true,
}
//CONTEXT CREATION 
const AppContext= createContext();

//creating provider function
const AppProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    
 //fetching data from api
    const fetchData= async(url)=>{
        dispatch({
            type:"SET_LOADING"
        })
    try{
     const res= await fetch(url); 
    const data=  await res.json();
    console.log(data);
    dispatch({type:"Get_Stories",
payload:{
    hits:data.hits,
    nbPages:data.nbPages ,
}});
    }
    catch(er){
        console.log(er);
    }
 }
 //to remove the post

 const removePost=(post_id)=>{
    dispatch({type:"REMOVE_POST",
payload:post_id});
 } 
 //searach part
 //to call api function input search
 const SearchPost=(searchquery)=>{
    dispatch({type:"SEARCH_QUERY",
payload:searchquery})
 }
 //prevpage
const getprevpage=()=>{
    dispatch({
        type:"PREV_PAGE",
    })
}
//nextpage
const getnextpage=()=>{
    dispatch({
        type:"NEXT_PAGE",
    })
}
    useEffect(() => {
      return () => {
        fetchData(`${API}query=${state.query}&page=${state.page}`);
      };
    }, [state.query,state.page]);

    return( 
    <AppContext.Provider value={{...state,removePost,SearchPost,getprevpage,getnextpage}}>
     {children}
    </AppContext.Provider>
);
};
//creating custom hoook as global
const useGlobalContext=()=>{
    return  useContext(AppContext);
}
export{AppContext,AppProvider,useGlobalContext};