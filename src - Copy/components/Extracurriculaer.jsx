import React from 'react'
import { Award } from 'lucide-react';
import Section from './Section';
import Hobbi from './hobbi';

export default function Extracurriculaer() {
  const extra=["Participated in sports kho-kho at school level in Pabal.","Participated in sports Kabbadi at school level in Pabal."]
  return (
    <div>
        <Section icon={<Award/>} sectionname="Extracurricular Activities">
      {extra.map(extr=> <Hobbi hobbi={extr}/>)}
      </Section>
    </div>
  )
}
