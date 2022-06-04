import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,  Route } from 'react-router-dom';
import HeaderBottom from './components/headers/headerBottom/HeaderBottom';
import HeaderTop from './components/headers/headerTop/HeaderTop';
import Page1 from './pages/Page1/Page1'
import Login from './pages/login/Login'
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <div className='overflow-hidden'>
      <BrowserRouter>
        <HeaderTop />
        <HeaderBottom />
        <Route exact path='/'><Page1 /></Route>
        <Route path='/page2'></Route>
        <Route path='/page3'></Route>
        <Route path='/page4'></Route>
        <Route path='/page5'></Route>
        <Route path='/page6'></Route>
        <Route path='/page7'></Route>
        <Route path='/page8'></Route>
        <Route path='/page9'></Route>
        <Route path='/page10'></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/register'><Register /></Route>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
