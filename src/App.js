import React,{ useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListing from './pages/ProductListing/ProductListing'
import "./App.css";


function App() {

    const [compareItem , setCompareItem] = useState([])

    console.log(compareItem)

  return (
      <Router>
          <Switch>
        <Router path='/'>
            <ProductListing compareItem={compareItem} setCompareItem={setCompareItem} />
        </Router>
        {/* <Router path='compare'>
            <Compare/>
        </Router> */}
          </Switch>
      </Router>
  );
}

export default App;
