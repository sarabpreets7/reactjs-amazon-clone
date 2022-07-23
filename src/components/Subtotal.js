import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../redux/stateProvider'
import { getBasketTotal} from '../redux/reducer'
function Subtotal() {

  useEffect(()=>{
    console.log('mounted');
  },[])
  const [initialState, dispatch] = useStateValue();

  
  return (
    <Container>
        <Heading>Subtotal ({initialState.basket.length} items):<strong>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(getBasketTotal(initialState.basket))}</strong> </Heading>
        <ContainsGift>This order contains a gift</ContainsGift>
        <CheckoutBtn>Proceed to Checkout</CheckoutBtn>
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
`
export default Subtotal