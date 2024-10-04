import React from 'react'
import Section from './Section'
import { Briefcase } from 'lucide-react';

export default function Projects() {
  return (
    <div>
      <Section icon={<Briefcase />} sectionname="Projects">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, aliquid.</p>
      </Section>
    </div>
  )
}
