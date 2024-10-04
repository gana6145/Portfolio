import { User } from 'lucide-react'
import React from 'react'
import Section from './Section'
import Ssc from '../Ssc'
import { BookOpenText } from 'lucide-react';
import Card from './Card';


export default function Education() {
  return (
    <div>
      <Section icon={<BookOpenText/>} sectionname="Education">
      <Card title="Bachelor In Computer Engineering. "  school="Shree Ramchandra college of Engineering Pune." year="2022-25" percentage="74.75%"/>
      <Card title="Diploma Mechanical Engineering." school="Cusrow Wadia Institute Of Technology Pune." year="2019-22" percentage="87.88%"/>
      <Card title="Secondary School Certificate." school="Shree Bhairvnath Vidya Mandir Pabal." year="2018-19" percentage="85%"/>

      </Section>
    </div>
  )
}
