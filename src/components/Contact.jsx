import React from 'react'
import Section from './Section'
import { Globe } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

export default function Contact() {
  const contact=[]
  return (
    <div className='pb-8'>
      <Section icon={<Globe/>} sectionname="Contact and SocialMedia">
      <p className='text-sm text-gray-700 mb-4'>Email:jadhav.ganesh1700@gmail.com
        <br></br>
        Phone:+919923906995
      </p>
      <a href='#' className='flex text-blue-500 mb-3'><span className='mr-2'>{<Linkedin/>}</span>LinkedIn</a>
      <a href='#' className='flex text-blue-500 mb-3'><span className='mr-2'>{<Github/>}</span>Github</a>
    

      </Section>
    </div>
  )
}
