import React from 'react'

import './product.css'

const Product = (props) => {

    const { id,name, rating,price,specs, imageUrl } = props.item
    const { compareItem, setCompareItem} = props

   
    const handleChange = (event) => {
      const checkValue =  event.target.checked

      if(checkValue && compareItem.length < 4){
          setCompareItem([...compareItem, props.item])
      }
      if(checkValue === false){
          setCompareItem((prevState) => {
           const state =   prevState.filter((item) => item.id !== id )
           return state
          })
      }
    }


    return(
        <div className="container">
            <div className="image-container">
                <img src={imageUrl} alt="mobile phone"></img>
                <div className="compare-input">
                    <input onChange={handleChange} type='checkbox' id="compare" name="compare"></input>
                    <label  for="compare">Add to Compare</label>
                    
                </div>
            </div>
            <div className='info-container'>
                <div className='name'>
                  <strong>
                     {name}
                      </strong>
                         </div>
                 <div className="rating">{rating}</div>
                <div className="specs">
                    <ul>
                       {
                           specs.map((spec,index) => {
                               return <li key={index}>{spec} </li>
                           })
                       }
                    </ul>
                </div>

                </div>
                <div className="price-container">
    <div>$ {price}</div>
                </div>                
        </div>
    )
}

export default Product