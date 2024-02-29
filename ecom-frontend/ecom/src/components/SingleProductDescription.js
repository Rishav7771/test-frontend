import React from 'react'
import { Button } from 'react-bootstrap'; 
import Rating from './Rating';



const SingleProductDescription = ({details}) => {
  const formattedPrice = details.price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
        <div>{details.brand}</div>
        <hr></hr>
        <h1 style={{fontWeight:"700" , fontSize:"20px" }}>{details.name}</h1>
        <div style={{display:"flex" , justifyContent:"flex-start", fontWeight:"550"}}>MRP. {formattedPrice}</div>
        <div style={{display:"flex" , justifyContent:"flex-start"}}>Price inclusive of all taxes</div>
        <br></br>
        <Button variant = "success" className='button'><Rating product={details}></Rating></Button>
        <br></br>
        <br></br>
        <div>
          <ul><b>Product Details</b>
          {details.description.map((product) => (
            <li>{product}</li>
          ))}
          </ul>
        </div>
        <br></br>
        <div><Button variant="primary" className='cartButton'> <span     ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
        </span>      Add to Cart</Button>
        </div>

    </div>
  )
}

export default SingleProductDescription