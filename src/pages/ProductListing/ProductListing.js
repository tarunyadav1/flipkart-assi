import React from "react";
import Product from './../../components/product/product'
import Data from './../../data'

import './ProductListing.css'


function ProductListing({setCompareItem, compareItem}) {




  return (
    <div className="listing-product">
    {
        Data.map((item) => {
            return <Product compareItem={compareItem} setCompareItem={setCompareItem} item={item}/>
        })
    }
    </div>
  );
}

export default ProductListing;
