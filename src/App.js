// import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation/Nav";
import Product from './Products/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from "./Sidebar/sidebar";
import Category from './Sidebar/Category/Category';

function App() {
    return (
        <>
            <Sidebar/>
            <Navigation/>
            <Recommended/>
            <Product/>
        </>
    );
}

export default App;
