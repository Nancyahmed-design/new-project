import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React ,{ Suspense } from 'react';
import {BrowserRouter as Router ,Route  ,Switch ,Link} from 'react-router-dom';

// const Header = React.lazy(() => import('./components/Header'));
// const Home = React.lazy(() => import('./components/Home'));
// const Login = React.lazy(() => import('./components/Login'));
// const Done = React.lazy(() => import('./components/Done'));
// const Book = React.lazy(() => import('./components/Book'));
// const Counter = React.lazy(() => import('./components/Counter'));


import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Done from './components/Done';
import Book from './components/Book';
import Counter from './components/Counter';
import Product from './components/Product';



function App() {
 
  return (
    
    <Router>
    <div className="App">
     
     <Header /> 
     
    {/*<Header />
      <Login />  
      <Header />
      <Welcome />
      <Home />
      <Done />*/}
      <Suspense fallback="loading...">
     <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/todo" exact component={Done} />
      <Route path="/Book" exact component={Book} />
      <Route path="/Counter" exact component={Counter} />
      <Route path="/Product" exact component={Product} />

      </Switch>
      </Suspense>
    </div>
    </Router>
  );
}

export default App;
