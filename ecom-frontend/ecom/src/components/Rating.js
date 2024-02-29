import React from 'react'

const Rating = ({product}) => {
  return (
   

        <div class="d-flex gap-1 ratingstext-center">

          <span class="product-rating" style={{fontSize:"10px",fontWeight:"700"}}>{product.rating}</span>

            <span style={{fontSize:"10px",fontWeight:"700"}}><i class="fa fa-star">  |  </i></span>

            <span style={{fontSize:"10px",fontWeight:"700"}}>{product.numReviews}</span> 
        </div>

  )
}

export default Rating