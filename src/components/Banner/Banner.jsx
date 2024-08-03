import React from 'react'
import Container from '../Layout/Container'
import banner from '../../assets/banner.jpg'
import { SiMinutemailer } from "react-icons/si";
import cv from "../../assets/Fiona_Resume.pdf"


const Banner = () => {
  return (
    <div id="home" className='bg-primary h-[600px] '>
        <Container>
        <div className='flex justify-between'>
            <div className='mt-[150px]'>
                <h4 className='text-[#FEFEFE] text-[30px] font-bold'>Hello, My name is</h4>
                <h1 className='text-[#FEFEFE] text-[50px] font-bold'>Fiona <span className='text-lightyellow text-[50px] font-semibold'>Ahmed,</span></h1>
                <h1 className='text-[#FEFEFE] text-[50px] font-bold'>I'am a Frontend <span className='text-lightyellow text-[50px] font-semibold'>Developer</span>.</h1>
                <br/>
                <br/>
                <div className='flex gap-10'>
                <a href={cv} download="Fiona_Resume.pdf" className='text-[#FEFEFE] text-[20px] font-bold hover:text-primary px-5 py-2 bg-lightyellow rounded-full cursor-pointer'>Download CV</a>
                <button className='text-[#FEFEFE] text-[20px] font-bold hover:text-primary px-10 py-2 bg-lightyellow rounded-full flex gap-4 items-center'>
                  <a href="https://wa.me/1701796415" className='flex'>Let's Talk<SiMinutemailer className='ml-[5px] w-[25px] mt-1 cursor-pointer' /></a>
                </button>
                </div>
            </div>
            <div className='mt-[100px]'>
            <img className='h-[400px] w-[500px] rounded-full drop-shadow-3xl' src={banner} alt=''/>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Banner