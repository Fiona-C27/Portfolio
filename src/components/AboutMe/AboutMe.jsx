import React from 'react'
import Container from '../Layout/Container'
import Profile from '../../assets/Profile.jpg'

const AboutMe = () => {
  return (
    <div className='bg-secondary h-[600px] '>
        <Container>
            <div className='flex justify-between py-[100px]'>
                <div>
                    <h1 className='text-[#FEFEFE] text-[50px] font-bold'>About <span className='text-lightyellow text-[50px] font-semibold'>Me</span></h1>
                    <br/>
                    <br/>
                    <div className='w-[700px]'>
                    <p className='text-[#FEFEFE] text-[20px] font-regular'>Passionate about <span className='text-lightyellow text-[20px] font-bold'>Frontend Development</span>. I combine creativity and technical skill to create impactful visual experiences. With a strong background in web design and expertise in web development. I create <span className='text-lightyellow text-[20px] font-regular'>Aesthetic Intuitive & Responsive user interfaces.</span> My user-centered approach allows me to design captivating visuals and provide an optimal user experiences. Continuously seeking the latest trends, <span className='text-lightyellow text-[20px] font-regular'>I enjoy taking on new challenges</span> and collaborating with clients to bring their ideas to life through high-quality web design and web development experiences.</p>
                    </div>
                </div>
                <div className='mr-[90px]'>
                    <img className='h-[400px] w-[300px] rounded-lg' src={Profile} alt=''/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AboutMe