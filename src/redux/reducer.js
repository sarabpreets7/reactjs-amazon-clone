export const initialState = {
    basket: [],
    user: null
  };

export const getBasketTotal = (basket) => 
{
  var total =0;
  for(let i=0;i<basket.length;i++){
    total += (basket[i].qty*basket[i].price)
  }
  return total.toFixed(2);
  }

  // basket?.reduce((amount, item) => (item.qty*item.price) + amount, 0);

 
  const reducer = (state, action) => {
    
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
          
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }

     
  
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
        
        case 'UPDATE_BASKET':
  
          return {
            ...state,
            basket: state.basket.map((data)=>
            data.id == action.id? {...data,qty:data.qty +1}
            :data)
          }

          case 'DECREASE_ITEM_COUNT':
            return {
              ...state,
            basket: state.basket.map((data)=>
            data.id == action.id? {...data,qty:data.qty -1}
            :data)
            }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };


  export default reducer;