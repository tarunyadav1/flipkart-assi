import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductListing from './pages/ProductListing/ProductListing'
import CompareProducts from './pages/CompareProducts/CompareProducts'
import "./App.css";


function App() {

    const [compareItem, setCompareItem] = useState([])

    console.log(compareItem)

    return (
        <Router>
            <nav>
                <Link to="/compare">Compare</Link>
                <Link to="/">Product Listing</Link>
            </nav>
            <Switch>
                <Router exact path='/'>
                    <ProductListing compareItem={compareItem} setCompareItem={setCompareItem} />
                </Router>
                <Router path='/compare'>
                    <CompareProducts compareItem={compareItem} />
                </Router>
            </Switch>
        </Router>
    );
}

export default App;
