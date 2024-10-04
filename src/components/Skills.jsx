import React from 'react'
import Section from './Section'
import { Code } from 'lucide-react';
import Skill from './Skill';

export default function Skills() {
  const skilltitle=[ "HTML5","CSS","JavaScript","Tailwind","Bootstrap","React"];
  return (
    
      <Section icon={<Code/>} sectionname="Skills" >
         
      {skilltitle.map(title=><Skill title={title}/>)}
       

      </Section>
    
  )
}
