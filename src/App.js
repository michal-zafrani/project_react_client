import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/abouts/About';
import About1 from './components/abouts/About1';
import About2 from './components/abouts/About2';
import About3 from './components/abouts/About3';
import Nav0 from './components/Nav0';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Products from './components/products/Products';
import Home from './components/Home';
import LogIn from './components/LogIn';
import  ShoppingCart from './components/products/ShoppingCart';
import Payment from './components/products/Payment';
import ShowBuys from './components/products/ShowBuys';
import Footer from './components/Footer';
import ErrorAlert from './components/ErrorAlert';


function App() {
  return (
    <Provider store={store}>
    <div className="App container-fluid m-0 p-0">
      <Router>
        <Nav0 />
        <div className="content p-0 d-flex justify-content-center align-items-center">
          <Switch>
            <Route path="/about">
              <About>
                <About1 />
                <About2 />
                <About3 />
              </About>
            </Route>
            <Route path="/products/:group">
              <Products />
            </Route>
            <Route path="/logIn">
              <LogIn/>
            </Route>
            <Route path="/shoppingCart">
              <ShoppingCart/>
            </Route>
            <Route path="/payment">
              <Payment/>
            </Route>
            <Route path="/showBuys">
              <ShowBuys/>
            </Route>
            <Route path="/errorAlert/:massage">
              <ErrorAlert/>
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
