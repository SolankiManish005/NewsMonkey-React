import React from 'react'
import loader from './loader.gif'

const Spinner = () => {
    return (
      <div className='text-center'> 
            <img className='my-3' style={{'height':100,'width':100}} src={loader} alt="" />
      </div>
    )
}

export default Spinner