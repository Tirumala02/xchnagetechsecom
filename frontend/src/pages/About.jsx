import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          {/* Image properly set to fit within a container */}
          <div className='w-full md:w-[600px] h-[300px]'>
            <img className='w-full h-full object-cover' src={assets.about_img} alt="About Us" />
          </div>
          
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Exchange Tech was founded with a passion for innovation, driven by the belief that technology has the power to transform lives and industries. Our journey started with a vision to create a platform that seamlessly integrates cutting-edge technology with ethical business practices, offering solutions that empower both businesses and communities.</p>
              <p>Our team of experts is committed to delivering scalable, sustainable technology solutions that encourage collaboration, foster growth, and drive impactful change. From the development of next-generation software tools to providing cloud-based solutions and advanced analytics, we offer a diverse range of services aimed at revolutionizing industries and enabling businesses to achieve their full potential.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Exchange Tech, our mission is to deliver cutting-edge technology solutions and sustainable practices that empower businesses and communities. We focus on fostering collaboration, driving impactful change, and building a brighter future through technology. Our solutions are designed to not only meet the challenges of today but also to innovate for the opportunities of tomorrow.</p>
              <b className='text-gray-800'>Our Vision</b>
              <p>Our vision is to foster a balanced ecosystem where technology and ethical business practices unite to enhance lives, propel progress, and spark innovation. We believe in creating an environment that champions responsible innovation, sustainability, and positive social impact, paving the way for long-term growth and prosperity for all.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Technology Excellence:</b>
            <p className=' text-gray-600'>We are committed to delivering state-of-the-art technology solutions that are tailored to meet the unique needs of each client, ensuring optimal results and efficiency.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Ethical Business Practices:</b>
            <p className=' text-gray-600'>Our foundation is built on trust, integrity, and transparency. We prioritize ethical business practices in all our operations to foster long-lasting relationships with clients and stakeholders.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Innovation & Sustainability:</b>
            <p className=' text-gray-600'>We believe in the power of innovation to drive sustainability. Our solutions are designed to be both forward-thinking and environmentally responsible, ensuring that progress is made with minimal impact on the planet.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
