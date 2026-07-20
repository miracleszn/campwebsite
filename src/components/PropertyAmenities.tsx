import React from 'react'

interface PropertyAmenitiesProps{
    icon : string;
    heading : string;
    writeUp : string;
}

const PropertyAmenities = ({ icon, heading, writeUp } : PropertyAmenitiesProps) => {
  return (
    <div className='h-max flex gap-5 items-center'>
        <div className='text-[#003286] text-[20px]'><i className={icon}></i></div>
        
        <div className='font-WFVisualSans'>
            <h5 className='font-bold text-[18px] text-[#003286]'>{heading}</h5>
            <p className='font-medium text-[rgba(0,0,0,0.5)]'>{writeUp}</p>
        </div>
    </div>
  )
}

export default PropertyAmenities