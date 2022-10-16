import styled from "styled-components"
import { useStateValue } from '../redux/stateProvider'
import CartProduct from "./CartProduct";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getBasketTotal} from '../redux/reducer'
import uuid from "react-uuid";
import { db } from "../firebase";

export default function Payment(){

    const [initialState, dispatch] = useStateValue();
    const [{user}] = useStateValue();
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();


    function numberWithCommas(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        setProcessing(true);
        setTimeout(()=>{
           
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(uuid())
            .set({
                basket: initialState.basket,
                amount: getBasketTotal(initialState.basket),
                created: new Date()
            })

          // setSucceeded(true);
          // setError(null)
          setProcessing(false)

        
          dispatch({
              type: 'EMPTY_BASKET',
          })

          navigate('/reactjs-amazon-clone/orders')
        },1000)

    
           
        

    }

    return(

        <Container>
            
            <CheckoutCount>Checkout({initialState.basket.length} Items)</CheckoutCount>
            <HorizontalSection className="delivery_cont">

                <SideContainer><h3>Delivery Address</h3></SideContainer>
                    <VerticalFlex>
                        <p></p>
                        <div><p>123 React Lane</p></div>
                        <div> <p>Los Angeles, CA</p></div>
                    </VerticalFlex>
               
            </HorizontalSection>
                

            <HorizontalSection>
                <SideContainer>
                    <h3>Review items and delivery</h3>
                </SideContainer>
                <VerticalFlex>
                    {initialState.basket.length>0?initialState.basket.map(function(data){
                                        return(
                                        <CartProduct thruPayment={true} productImg={data.image}
                                        desc= {data.title}
                                        price={data.price}
                                        rating = {data.rating}
                                        id={data.id}
                                        qty={data.qty}/>
                                        )
                                    }):<h3>No Items to Display</h3>}
                </VerticalFlex>
            </HorizontalSection>

            <HorizontalSection>

                <SideContainer>
                    <h3>Payment</h3>
                </SideContainer>

                <VerticalFlex>
                        <div>Total Price: $<strong>{numberWithCommas(getBasketTotal(initialState.basket))}</strong> </div>
                        <Button disabled={user == null} onClick={handleSubmit}>{user == null?'Sign up/in':processing?'Processing...':'Buy Now'}</Button>
                        {/* <div><p>123 React Lane</p></div>
                        <div> <p>Los Angeles, CA</p></div> */}
                </VerticalFlex>

            </HorizontalSection>

        </Container>
    )
}

const Button = styled.button`
background: #FEA42F;
border: 1px solid;
margin-top: 10px;
color: #111;
border-color: #a88734 #9c7e31 #846a29;
margin-top:10px;
height: 29px;
width: 100px;

&:hover{
    cursor: pointer;
}
&:active{
    background-color: #F0C14B;
  /* box-shadow: 0 5px #666; */
  transform: translateY(4px);
}
`

const Container = styled.div`
background-color: #EAEDED;

width: 100%;
min-height: 200px;

`
const CheckoutCount = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 30px !important;
height: 70px;
border-bottom: 1px solid lightgray;

`
const HorizontalSection = styled.div`
/* width: 100%; */
background-color: white;
min-height: 75px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
padding: 20px 0px 0px 30px;
border-bottom: 1px solid lightgray;
`
const SideContainer = styled.div`
width: 20%;

`
const VerticalFlex = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`