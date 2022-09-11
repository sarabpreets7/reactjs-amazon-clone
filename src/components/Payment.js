import styled from "styled-components"
import { useStateValue } from '../redux/stateProvider'
import CartProduct from "./CartProduct";

export default function Payment(){

    const [initialState, dispatch] = useStateValue();

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

        </Container>
    )
}

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