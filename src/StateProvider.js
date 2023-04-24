// import React,{ createContext,useContext,useReducer } from "react";

// // Prepare the data-layer
// export const StateContext =createContext();

// // wrap our app and provide the data layer
// export const StateProvider =({reducer, initialState, children})=>{
//     <StateContext.Provider value = {useReducer(reducer, initialState)}>
//       {children}
//     </StateContext.Provider>
// }
// //   Pull information form the data layer
//  export const useStateValue =()=> useContext(StateContext)



import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);