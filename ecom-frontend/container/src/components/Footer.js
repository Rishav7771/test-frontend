import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div class="footer">
  <footer class="pt-5" style={{ display:"flex" , justifyContent:"center" }}>
    <div class="row d-flex flex-row flex-sm-row justify-content-between" style={{width:"1200px"}}>
      <div class="col-3 col-md-2 mb-3 " style={{textAlign:"left"}}>
        <h5 >Phones</h5>
        <ul class="flex-column" className='div-list'>
          <li class="nav-item mb-2"><a>OnePlus 12</a></li>
          <li class="nav-item mb-2"><a>OnePlus 12R</a></li>
          <li class="nav-item mb-2"><a>OnePlus Open</a></li>
          <li class="nav-item mb-2"><a>OnePlus 11 5G</a></li>
          <li class="nav-item mb-2"><a>OnePlus 11R 5G</a></li>
        </ul>
      </div>

      <div class="col-3 col-md-2 mb-3 ">
        <h5 className='top-text'>Store</h5>
        <ul class="nav flex-column" className='div-list'>
          <li class="nav-item mb-2" ><a>Tablet</a></li>
          <li class="nav-item mb-2"><a>Audio</a></li>
          <li class="nav-item mb-2"><a>Wearables</a></li>
          <li class="nav-item mb-2"><a>Cases & Protection</a></li>
          <li class="nav-item mb-2"><a>Power & Cables</a></li>
        </ul>
      </div>

      <div class="col-3 col-md-2 mb-3">
        <h5 className='top-text'>Support</h5>
        <ul class="nav flex-column" className='div-list'>
          <li class="nav-item mb-2"><a>Protection Plan</a></li>
          <li class="nav-item mb-2"><a>Shopping FAQs</a></li>
          <li class="nav-item mb-2"><a>User Manuals</a></li>
          <li class="nav-item mb-2"><a>Service Centers</a></li>
          <li class="nav-item mb-2"><a>Repair Service</a></li>
        </ul>
      </div>
      <div class="col-md-3 col-md-2 mb-3 ">
        <h5 className='top-text'>Explore</h5>
        <ul class="nav flex-column" className='div-list'>
          <li class="nav-item mb-2"><a>About</a></li>
          <li class="nav-item mb-2"><a>Community</a></li>
          <li class="nav-item mb-2"><a>Find</a></li>
          <li class="nav-item mb-2"><a>Press</a></li>
          <li class="nav-item mb-2"><a>Careers</a></li>
        </ul>
      </div>

     


    <div class="d-flex flex-column flex-sm-row justify-content-center py-5 ">
      <p>© 2022 Company, Inc. All rights reserved.</p>
    </div>
    </div>
  </footer>
</div>
  )
}

export default Footer