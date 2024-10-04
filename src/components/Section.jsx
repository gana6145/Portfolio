


export default function Section({icon,children,sectionname}) {
  return (
    <div>
       <div className='mb-12 mx-3' >
    
    <div className='flex items-center my-3 mb-6'>
    {icon}
    <h1 className='font-bold text-2xl mx-2'>{sectionname}</h1>
    </div>
   {children}
   </div>
    </div>
  )
}
