import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../redux/stateProvider';
import '../css/universal.css';

export default function CartProduct(props) {
  const [initialState,dispatch] = useStateValue();
  let [rating, setRating] = useState([]);

  
  const removeFromCart = () => {
  
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: props.id,
    })
}
const increaseQuantity =() =>{
    dispatch({
        type: 'UPDATE_BASKET',
        id: props.id,
        
    })
}

const decreaseQuantity =() =>{
    console.log(props.qty);
    if(props.qty == 1){
        removeFromCart();
    }
    else{
        dispatch({
            type: 'DECREASE_ITEM_COUNT',
            id: props.id,
            
        })
    }
   
}

    useEffect(() => {
      let stars = []
      console.log(props.rating);
      for (var i = 0; i < props.rating; i++) {
          stars.push(<>⭐</>)
      }
      setRating(stars)

     

  }, [])

  return (
                <InCartContainer>
                    <InCartImg src={props.productImg} ></InCartImg>
                    <InCartInfo>
                        <ProductInfoCart>{props.desc}</ProductInfoCart>
                        <ProductPrice><small>$</small><strong>{props.price}</strong></ProductPrice>
                        {props.thruPayment == false?<QuantityContainer>
                            <span className='quantity__btn' >Qty:{props.qty}</span>
                            <div className='increment__decrement'> <span onClick={increaseQuantity} className='add'>+</span><span onClick={decreaseQuantity} className='minus'>-</span></div>
                        </QuantityContainer>:''}
                        <span style={{ marginBottom: '10px' }}>{rating}</span>
                        {props.thruPayment == false?<ButtonCart onClick={removeFromCart}>Remove from Basket</ButtonCart>:<div>Quantity: {props.qty}</div>}
                    </InCartInfo>

                </InCartContainer> 
  )
}
const InCartContainer = styled.div`
display: flex;
width: 100%;
margin-bottom: 15px;
padding: 5px;

`
const QuantityContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;
`
const ProductPrice = styled.span`
width: 100%;
margin-bottom: 5px;
text-align: left;
color: #86453B;

`
const InCartImg = styled.img`
width: 220px;
margin-right: 10px;
object-fit: contain;
max-height: 180px;
`
const InCartInfo = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;

`
const ProductInfoCart = styled.span`
max-width: 500px;
margin-bottom: 5px;
text-align: left;
font-weight: 600;
color: #678CB8;
`
const ButtonCart = styled.button`
background: #FEA42F;
border: 1px solid;
margin-top: 10px;
color: #111;
border-color: #a88734 #9c7e31 #846a29;
margin-top:10px;
height: 29px;
width: 150px;

&:hover{
    cursor: pointer;
}
&:active{
    background-color: #F0C14B;
  /* box-shadow: 0 5px #666; */
  transform: translateY(4px);
}

`




