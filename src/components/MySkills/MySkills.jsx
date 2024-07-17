import React from 'react'
import Container from '../Layout/Container'
import skills from '../../assets/skills.jpg'
import me from '../../assets/me.jpg'

const MySkills = () => {
  return (
    <div className='bg-secondary p-[100px] '>
        <Container>
        <h1 className='text-[#FEFEFE] text-[50px] text-center font-bold pb-20'>My <span className='text-lightyellow text-[50px] font-semibold'>Skills</span></h1>
            <div className='flex justify-between'>
            <div className='mx-[90px]'>
            <img className='h-[400px] w-[500px] rounded-lg drop-shadow-3xl' src={skills} alt=''/>
            </div>
            <div className='mx-[90px]'>
            <img className='h-[400px] w-[500px] rounded-lg drop-shadow-3xl' src={me} alt=''/>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default MySkills