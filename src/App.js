import './App.css';
import Header from './components/Header';
import HomePage from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
  <>
  
  <Router>
  <Header/>
    <Routes>
     
      <Route exact path='/' element={[<HomePage/>]}>
      </Route>

      <Route exact path='/checkout' element={[<Checkout/>]}>
       
      </Route>
    </Routes>
    
  </Router>
  </>
  
  );
}

export default App;
