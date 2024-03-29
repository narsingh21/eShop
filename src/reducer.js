 export const initialState ={
    basket:[],
 }

 export const getBasketTotal =(basket)=>{
   return(basket.reduce((amount,item)=>item.price+amount,0))
 }

 const reducer =(state,action)=>{
    switch(action.type){

    case 'ADD TO CART':
    return {
        ...state,
        basket:[...state.basket, action.item]
    }
    case 'REMOVE_FROM_CART':
      const index =state.basket.findIndex(
         (basketItem)=>basketItem.id=== action.id
      )
          
           let newBasket = [...state.basket];
            if(index>=0){
               newBasket.splice(index,1);
            }else{
               console.warn(`cant remove the item as id not found`)
            }
     return {
        ...state,
        basket:newBasket
             }

     default:
      return state;        
    }
 }
 export default reducer;