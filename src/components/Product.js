import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../redux/stateProvider';
import "../css/universal.css"

function Product(props) {
    const [{basket},dispatch] = useStateValue();
    let [rating, setRating] = useState([]);

    function addToBasket(){
        let item = basket.find(obj => obj.id == props.id);
        if(item != undefined){
            console.log('updation',item);
            let quantity = item.qty;
            dispatch({
                type: 'UPDATE_BASKET',
                id: props.id,
              
            })
        }
        else{
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                  id:props.id,
                  title: props.desc,
                  image: props.productImg,
                  price: props.price,
                  rating: props.rating,
                  qty:1
                },
              });
        }
       
        }

    useEffect(() => {
        let stars = []
 
        for (var i = 0; i < props.rating; i++) {
            stars.push(<>⭐</>)
        }
        setRating(stars)

       

    }, [])


    return (
        <ProductContainer className='product_container' >

        <ProductInfo>{props.desc}</ProductInfo>
        <ProductPrice><small>$</small><strong>{props.price}</strong></ProductPrice>
        <span style={{ marginBottom: '10px' }}>{rating}</span>
        <ProductImageContainer >
            <ProductImg src={props.productImg} />
            <Button onClick={addToBasket}>Add to Basket</Button>
        </ProductImageContainer>

    </ProductContainer>
            

              

                

              
            
        
    )
}





const ProductContainer = styled.div`
min-width: 100px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
background-color: white;
z-index: 1;
margin-right: 15px;
font-size: 14px;
z-index: 140;
`


const ProductInfo = styled.span`
max-width: 500px;
margin-bottom: 5px;
text-align: left;
`
const ProductPrice = styled.span`
width: 100%;
margin-bottom: 5px;
text-align: left;

`
const ProductImageContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
/* padding-left: 20px;
padding-right: 20px; */
`
const ProductImg = styled.img`
max-width: 180px;
margin-bottom: 15px;
object-fit: contain;
max-height: 185px;
min-height: 185px;
`


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


export default Product