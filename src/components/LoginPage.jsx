import React from 'react'
import Button from '../utils/Button'
import Input from '../utils/Input'

const LoginPage = () => {
  return (
    <div>
        <div className='text-center justify-center align-center  '>
       <h1 className='text-3xl font-bold text-white'> Login Form</h1>
       </div>
        <form action="" className='justify-center text-center bg-[#] flex  mt-5 '>
     <div className='flex flex-col'>
       <div>
       <Input/>
       </div>
           
      <div className='mt-5'>
        <Button/>
      </div>
       </div>

         
        </form>
    </div>
  )
}

export default LoginPage