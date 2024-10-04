import React from 'react'
import Section from './Section'
import { Heart } from 'lucide-react';
import Hobbi from './hobbi';


export default function Hobbies() {
  const hobbi =["Web Suffering to learn new things.","Playing and Watching Cricket.","Swimming",]
  return (
    <div>
      <Section icon={<Heart/> } sectionname="Hobbies and Interest">
      {hobbi.map(hobbies=><Hobbi hobbi={hobbies}/>)}

      </Section>
    </div>
  )
}
