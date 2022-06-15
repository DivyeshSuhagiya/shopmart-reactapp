import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderBottom from './components/headers/headerBottom/HeaderBottom';
import HeaderTop from './components/headers/headerTop/HeaderTop';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Electronics from './pages/electronics/Electronics';
import { Provider } from 'react-redux';
import store from './redux/stores/store';
import Mobiles from './pages/mobiles/Mobiles';
import Jewelry from './pages/jewelrys/Jewelry';
import Cloth from './pages/clothes/Cloth';
import Kitchen from './pages/kitchen/kitchen';
import Watches from './pages/watches/Watches';
import Shoes from './pages/shoes/Shoes';
import About from './pages/aboutus/About';
import Contact from './pages/contacts/Contact';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className='overflow-hidden'>
          <BrowserRouter>
            <HeaderTop />
            <HeaderBottom />
            <Route exact path='/'><Home /></Route>
            <Route path='/Electronics'><Electronics /></Route>
            <Route path='/Mobiles'><Mobiles /></Route>
            <Route path='/Jewelry'><Jewelry /></Route>
            <Route path='/Cloth'><Cloth /></Route>
            <Route path='/Kitchen'><Kitchen /></Route>
            <Route path='/Watches'><Watches /></Route>
            <Route path='/Shoes'><Shoes /></Route>
            <Route path='/About'><About /></Route>
            <Route path='/Contact'><Contact /></Route>
            <Route path='/login'><Login /></Route>
            <Route path='/register'><Register /></Route>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
}

export default App;
