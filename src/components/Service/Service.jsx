import React from 'react'
import Container from '../Layout/Container'

import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { BiSupport } from "react-icons/bi";

const Service = () => {
  return (
    <div className='bg-primary pt-[100px] '>
        <Container>
        <h1 className='text-[#FEFEFE] text-[50px] text-center font-bold'>My <span className='text-lightyellow text-[50px] font-semibold'>Services</span></h1>
          <div className='flex justify-between py-[100px]'>
            <div className='w-[300px] h-[420px] bg-secondary hover:bg-[#932bc4] rounded-xl py-5 px-2 text-center   drop-shadow-3xl '>
            <CgWebsite className='text-lightyellow w-[80px] h-[80px] mx-[110px] mt-[20px]' />
            <br/>
            <br/>
            <h3 className='text-[#FEFEFE] text-[20px] font-bold'>Interactive <span className='text-lightyellow text-[20px] font-bold'>Frontend</span> Development</h3>
            <br/>
            <br/>
            <p className='text-[#FEFEFE] text-[15px] font-regular'>I design visually appealing, user-friendly websites that prioritize UX and brand identity, using Figma for mockups and prototypes.</p>
            </div>
            <div className='w-[300px] h-[420px] bg-secondary hover:bg-[#932bc4] rounded-xl py-5 px-2 text-center drop-shadow-3xl '>
            <FaCode className='text-lightyellow w-[80px] h-[80px] mx-[110px] mt-[20px]'  />
            <br/>
            <br/>
            <h3 className='text-[#FEFEFE] text-[20px] font-bold'>Web <span className='text-lightyellow text-[20px] font-bold'>Development</span></h3>
            <br/>
            <br/>
            <br/>
            <p className='text-[#FEFEFE] text-[15px] font-regular'>I create life websites with clean code(HTML, CSS, JS) and React(Vite) + UI frameworks(Tailwind and Bootstrap).</p>
            </div>
            <div className='w-[300px] h-[420px] bg-secondary hover:bg-[#932bc4] rounded-xl py-5 px-2 text-center drop-shadow-3xl '>
            <SiAffinitydesigner className='text-lightyellow w-[80px] h-[80px] mx-[110px] mt-[20px]'  />
            <br/>
            <br/>
            <h3 className='text-[#FEFEFE] text-[20px] font-bold'>Ui <span className='text-lightyellow text-[20px] font-bold'>Design</span></h3>
            <br/>
            <br/>
            <br/>
            <p className='text-[#FEFEFE] text-[15px] font-regular'>I craft intuitive, user-centric interface(Figma) that are both beautiful and easy to use.</p>
            </div>
            <div className='w-[300px] h-[420px] bg-secondary hover:bg-[#932bc4] rounded-xl py-5 px-2 text-center drop-shadow-3xl '>
            <BiSupport className='text-lightyellow w-[80px] h-[80px] mx-[110px] mt-[20px]'  />
            <br/>
            <br/>
            <h3 className='text-[#FEFEFE] text-[20px] font-bold'>Maintenance and technical <span className='text-lightyellow text-[20px] font-bold'>support</span></h3>
            <br/>
            <br/>
            <p className='text-[#FEFEFE] text-[15px] font-regular'>The primary role of my maintenance and support providers is to ensure IT systems which are availability, reliability, and performance.</p>
            </div>

          </div>
        </Container>
    </div>
  )
}

export default Service