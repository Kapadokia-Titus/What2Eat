import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/nav';
import './theme.min.css'
import Home from './components/home';
import Products from './components/products/products';

function App() {
  return (
    <>
    <NavBar/>
    <Home />
    <Products />
    </>
    
  );
}

export default App;
