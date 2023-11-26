import About from '@/components/About/About'
import Team from '@/components/About/Team'
import Testimonials from '@/components/About/Testimonials'
import Choose from '@/components/Home/Choose'
import React from 'react'

const Page = () => {
  return (
    <div className="w-full mt-16 flex flex-col">
        <About />
        <Choose />
        <Team />
        <Testimonials />
    </div>
  )
}

export default Page