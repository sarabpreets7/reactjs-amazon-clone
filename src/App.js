import './App.css';
import Header from './components/Header';
import HomePage from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';
import Login from './components/Login';
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue} from "./redux/stateProvider";
import Payment from './components/Payment';
import Orders from './components/Orders';

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[])
  return (
  <>
  
  <Router>
  
    <Routes>
     
     <Route exact path='/login' element={[<Login/>]}></Route>
      <Route exact path='/' element={[<Header/>,<HomePage/>]}>
      </Route>
      <Route exact path='/checkout' element={[<Header/>,<Checkout/>]}>
       
      </Route>
      <Route exact path='/payment' element={[<Header/>,<Payment/>]}></Route>
      <Route exact path='/orders' element={[<Header/>,<Orders/>]}></Route>
    </Routes>
    
  </Router>
  </>
  
  );
}

export default App;
