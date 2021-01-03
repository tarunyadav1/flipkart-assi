import React from 'react'

import './compareProductFormat.css'

const CompareItem = ({ item }) => {

    const { name, price, specs, imageUrl } = item


    return (

        <div className="container-compare">
            <div className="image-compare">
                <img src={imageUrl} alt='mobile'></img>
            </div>
            <div className="name-compare">{name}</div>
            <div className="price-compare">$ {price}</div>
            <hr />
            <div className="specs">
                <ul>
                    {
                        specs.map((spec, index) => {
                            return <li key={index}>{spec}</li>
                        })
                    }
                </ul>
            </div>

        </div>
    )
}



export default CompareItem