import React from 'react'
import { User } from 'lucide-react';
import Section from './Section';

export default function Aboutme() {
  return (
  <div className='mt-6'>
    <Section icon={<User/>} sectionname="About me">
     <p>As a passionate Computer Engineering student pursuing a Bachelor of Engineering degree, I aspire to leverage my technical
     acumen and innovative mindset to contribute meaningfully to the ever-evolving field of technology.</p>
    </Section>
  </div>
  )
}
