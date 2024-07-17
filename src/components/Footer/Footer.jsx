import React from 'react'
import Container from '../Layout/Container'
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-secondary p-[100px] '>
        <Container>
        <h1 className='text-[#FEFEFE] text-[50px] text-center font-bold pb-20'>Contact <span className='text-lightyellow text-[50px] font-semibold'>Me</span></h1>
        <div className='flex justify-between'>
            <div >
            <MdOutlineEmail className='text-lightyellow w-[80px] h-[80px] mx-[140px] mt-[20px]'/>
            <br/>
            <br/>
            <p className='text-[#FEFEFE] mx-[50px] text-[20px] font-bold'>fiona.ahmed1996@gmail.com</p>
            </div>
            <div >
            <MdLocationOn className='text-lightyellow w-[80px] h-[80px] mx-[140px] mt-[20px]' />
            <br/>
            <br/>
            <p className='text-[#FEFEFE] mx-[100px] text-[20px] font-bold'>Dhaka - Bangladesh</p>
            </div>
            <div >
            <FaMobileAlt className='text-lightyellow w-[80px] h-[80px] mx-[150px] mt-[20px]'/>
            <br/>
            <br/>
            <p className='text-[#FEFEFE] mx-[100px] text-[20px] font-bold'>+880 1701-796415</p>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer