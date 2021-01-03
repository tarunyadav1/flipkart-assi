import React from 'react'
import CompareProductFormat from './../../components/compareProductFormat/compareProductFormat'

import './CompareProduct.css'


const CompareProducts = ({ compareItem }) => {


    return (

        <div className="compare-product-container">
            {
                compareItem.length ?
                    compareItem.map((item) => {
                        return <CompareProductFormat item={item} />
                    }) : <div>Add Items to Compare</div>
            }
        </div>


    )
}



export default CompareProducts