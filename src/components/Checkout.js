import React, { useEffect } from 'react'
import styled from 'styled-components'
import CartProduct from './CartProduct'
import Subtotal from './Subtotal'
import { useStateValue } from '../redux/stateProvider'

function Checkout() {

  const [initialState, dispatch] = useStateValue();

  useEffect(()=>{

    console.log(initialState.basket);
  },[])

  return (
    <Container>
        <LeftContainer>
            <BannerDiv>
                <BannerImg src='https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg'/>
            </BannerDiv>
            <h2>{initialState.user != null?`Hi ${initialState.user.email.split("@")[0]}`:''}<br></br>Your Shopping Basket</h2>
            <Line/>

            <ItemsContainer>
             
              {initialState.basket.length == '0'?<h3>Cart is Empty</h3>:
             <>
            {/* <CartProduct inCart={true}
                     productImg='https://m.media-amazon.com/images/I/719sMfG+11L._AC_UL320_.jpg'
                     desc='MSI Gaming GF63 Thin, Intel 11th Gen. i7-11800H, 40CM FHD 144Hz Gaming Laptop '
                     price={1107}
                     rating={4}/>

            <CartProduct inCart={true}
                     productImg='https://images-eu.ssl-images-amazon.com/images/I/31IdiM9ZM8L._SX300_SY300_QL70_FMwebp_.jpg'
                     desc='boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)'
                     price={10}
                     rating={3}/>

            <CartProduct productImg='https://m.media-amazon.com/images/I/61ahn9N38zL._AC_UY218_.jpg'
                     desc='OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage'
                     price={465}
                     rating={5}
                     inCart={true}/>

            <CartProduct productImg='https://images-eu.ssl-images-amazon.com/images/I/415CwforHgL._SY300_SX300_QL70_FMwebp_.jpg'
                     desc='AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)'
                     price={500}
                     rating={4}
                     inCart={true}/>

            <CartProduct desc="The Lean Startup : How Constant Innovation Creates Radically Succesfull Business PaperBack"
                     price='11.96'
                     productImg = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                     rating={3}
                     inCart={true}/> */}

                  {initialState.basket.map(function(data){
                    return(
                      <CartProduct thruPayment={false} productImg={data.image}
                     desc= {data.title}
                     price={data.price}
                     rating = {data.rating}
                     id={data.id}
                     qty={data.qty}/>
                    )
                  })}
            
                     </>
  }


            </ItemsContainer>


        </LeftContainer>

        <RightContainer>
          <Subtotal/>
        </RightContainer>
    </Container>
  )
}

const Container = styled.div`
display: flex;
background-color: white;

`

const LeftContainer = styled.div`
width: 70%;
background-color: white;
padding: 20px;
min-height: 510px;
`
const RightContainer = styled.div`
/* width: 25%; */
flex: 1;
padding: 20px;
padding-left: 0px;

`
const ItemsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Line = styled.hr`
margin-top: 10px;
width: 100%;
margin-bottom: 15px;

`
const BannerDiv = styled.div`
width: 100%;
margin-bottom: 20px;
`
const BannerImg = styled.img`
width: 100%;
/* height: 80px; */
`
export default Checkout