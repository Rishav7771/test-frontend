import React from 'react'
import IndividualIntervalsExample from './IndividualIntervalsExample'
import Grid from './Grid'

const Home = () => {
  return (
    <div><IndividualIntervalsExample/>
    <div style={{height:"100px",textAlign:"center"}}>
      <h1 style={{marginTop:"100px"}}>This Week’s Highlights</h1>
    </div>
    <Grid/>
    </div>
  )
}

export default Home