import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../redux/stateProvider'
import { getBasketTotal} from '../redux/reducer'
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  useEffect(()=>{
    
  },[])


    function numberWithCommas(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
  }
  const navigateToPayment=()=>{
    navigate("/payment")
  }

  const [initialState, dispatch] = useStateValue();
  

  
  return (
    <Container>
        <Heading>Subtotal ({initialState.basket.length} items):$<strong>{numberWithCommas(getBasketTotal(initialState.basket))}</strong> </Heading>
        <ContainsGift>This order contains a gift</ContainsGift>
        <CheckoutBtn onClick={navigateToPayment}>Proceed to Checkout</CheckoutBtn>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100px;
background-color: #f3f3f3;
border: 1px solid #dddddd;
border-radius: 3px;
padding: 12px 6px;
`
const Heading = styled.span`
font-size: 16px;
width: 100%;
`
const ContainsGift = styled.span`
font-size: 13px;
display: flex;
align-items: center;
width: 100%;

`
const CheckoutBtn = styled.button`
background-color: #f0c14b;
border-radius: 2px;
height: 30px;
width: 90%;
margin-top: 10px;
border: 1px solid;
border-color: #a88734 #9c7e31 #846a29;
color: #111;
cursor: pointer;
`
export default Subtotal