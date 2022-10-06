import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/nav';
import './theme.min.css'
import Home from './components/home';
import Products from './components/products/products';
import Categories from './components/products/categories';

function App() {
  return (
    <>
    <NavBar/>
    <Home />
    <Categories />
    <Products />
    </>
    
  );
}

export default App;
