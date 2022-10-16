import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from '../redux/stateProvider';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [initialState,dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuthenticaton = () => {
    if (initialState.user) {
      auth.signOut();
      dispatch({
        type: 'EMPTY_BASKET',
        
      
    })
    navigate("/")
    }
  }

  return (
    <Navbar>
       <Link to="/">
          <Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
       </Link>
       <SearchBar>
            <SearchInput></SearchInput>
            <SearchIcon style={{backgroundColor:'#CB8C40',padding:'6px',position:'absolute',right:'0px'}}/>
       </SearchBar>
       <HeaderNav>
          <Header_navOption>
            <Line1>{initialState.user != null?initialState.user.email.split("@")[0]:'Guest'}</Line1>
            {initialState.user !=null?<Line2 onClick={handleAuthenticaton} className='user_btn'>Sign out</Line2>:<Link className='user_btn' to="/login">Sign in</Link>}
            
          </Header_navOption>

          <Header_navOption>
            <Line1>Returns</Line1>
            <Line2><Link className='user_btn' to="/orders">& Orders</Link></Line2>
          </Header_navOption>

          <Header_navOption>
            <Line1>Your</Line1>
            <Line2>Prime</Line2>
          </Header_navOption>

          <Link style={{textDecoration:'none',background:'transparent',color:'inherit'}} to="/checkout">
            <Header_navOption style={{flexDirection:'row',alignItems:'center'}}>
                <ShoppingBasketIcon style={{marginRight:'5px'}}/>
                <span>{initialState.basket?.length}</span>
            </Header_navOption>
          </Link>
       </HeaderNav>
      
    </Navbar>
  )
}


const Navbar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #131921;
    align-items: center;
    z-index: 200;

`
const Logo = styled.img`
    margin-top: 18px;
    margin-left: 20px;
    margin-right: 20px;
    object-fit: contain;
    background: transparent;
    width: 100px;

`
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
`
const SearchInput = styled.input`
    height: 12px;
    border: none;
    width: 100%;
    padding: 12px;

    &:focus {
        outline: 2px solid #FD9A2E;
 }
`
const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  color: white;

`
const Line1 = styled.span`
  font-size: 10px;

`
const Line2 = styled.span`
  font-size: 13px;
  font-weight: 600;

`
const Header_navOption = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
`
export default Header