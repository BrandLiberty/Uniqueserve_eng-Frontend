import React from 'react'
import Footer from '../common/Footer'
import Copyright from '../common/Copyright'

const Screen = (props) => {

  

  return (
    <div className='main-screen' style={{overflow : 'hidden'}}>
      <div className='navbar-section screen-component'>
      
      </div>
      <div className='main-section screen-component'>
        {props.children || ''}
      </div>
      <div className='footer-section screen-component'>
        <Footer />
        <Copyright />
      </div>
    </div>
  )
}

export default Screen