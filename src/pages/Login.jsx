import React from 'react'
import loginImage from "../../public/assets/images/login-img-6.webp"
const login = () => {
  return (
    <div className='container mx-auto'>
        <div className='row'>
            <div className='column'>
                <div>
                    <img src={loginImage}></img>
                </div>
            </div>
            <div className='column'></div>

        </div>
        
    </div>
  )
}

export default login