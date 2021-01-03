import React from 'react'
import CompareProductFormat from './../../components/compareProductFormat/compareProductFormat'

import './CompareProduct.css'


const CompareProducts = ({ compareItem }) => {


    return (

        <div className="compare-product-container">
            {
                compareItem.map((item) => {
                    return <CompareProductFormat item={item} />
                })
            }
        </div>


    )
}



export default CompareProducts