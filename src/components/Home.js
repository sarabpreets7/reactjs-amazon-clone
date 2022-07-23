import React from 'react'
import styled from 'styled-components';
import Product from './Product';


function HomePage() {

 
  return (
    <Home>
        <HomeImg src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></HomeImg>

        <HomeRow className='home__row'>
            <Product desc="The Lean Startup : How Constant Innovation Creates Radically Succesfull Business PaperBack"
                     price='11.96'
                     productImg = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                     rating={3}
                     id={1}/>

            <Product productImg='https://images-na.ssl-images-amazon.com/images/I/41o5PJi5v3L._SX327_BO1,204,203,200_.jpg'
                     desc="Believe in Yourself : The Ultimate Guide to Overcoming Your Imperfections, Learn How to Take Action And Believe In Yourself Despite the Imperfections"
                     price='10.80'
                     rating = {4}
                     id={2}/>
            
        </HomeRow>

        <HomeRow className='home__row'>
            <Product productImg='https://m.media-amazon.com/images/I/719sMfG+11L._AC_UL320_.jpg'
                     desc='MSI Gaming GF63 Thin, Intel 11th Gen. i7-11800H, 40CM FHD 144Hz Gaming Laptop '
                     price={1107}
                     rating={4}
                     id={3}/>

            <Product productImg='https://images-eu.ssl-images-amazon.com/images/I/31IdiM9ZM8L._SX300_SY300_QL70_FMwebp_.jpg'
                     desc='boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)'
                     price={10}
                     rating={3}
                     id={4}/>

            <Product productImg='https://m.media-amazon.com/images/I/61ahn9N38zL._AC_UY218_.jpg'
                     desc='OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage'
                     price={465}
                     rating={5}
                     id={5}/>
                     
        </HomeRow>

        <HomeRow className='home__row'>
            <Product productImg='https://images-eu.ssl-images-amazon.com/images/I/415CwforHgL._SY300_SX300_QL70_FMwebp_.jpg'
                     desc='AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)'
                     price={500}
                     rating={4}
                     id='6'/>
        </HomeRow>

    </Home>
  )
}

const Home = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;
max-width: 1200px;
/* z-index: -4; */

`
const HomeRow = styled.div`
display: flex;
max-width: 1200px;
align-items: flex-start;
z-index: 1;
background: transparent;
padding-left: 15px;
margin-bottom: 15px;
justify-content: space-around;
z-index: 40;
`
const HomeImg = styled.img`
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
    margin-bottom: -130px;
`

export default HomePage