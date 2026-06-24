import React from 'react'
import { Button } from './ui/button';
import unavailable from "../assets/icons/unavailable.svg"
import { Link } from 'react-router-dom';

interface PropertyCardProps {
    id : number;
    title : string;
    location: string;
    price: number | string;
    image : string[];
    bedroom: number;       
    bathroom: number;      
    sqft: string;          
    averageRating: number; 
    numberOfReviews: number; 

}


const PropertyCard = ({ id, title, location, price, image, bedroom, bathroom, sqft, averageRating, numberOfReviews} : PropertyCardProps) => {
  return (
    <div key={id} className='rounded-[20px] overflow-hidden h-[492px] bg-[rgba(255,255,255,0.16)]'>
        <div className='h-[255px]  bg-amber-400'><img className='h-full w-full object-cover' src={image?.[0] || unavailable} alt="" /></div>
            <div className='px-[22px] mt-[17px]'>
                {/* Title, location, rating, reviews */}
                <div className='flex justify-between'>
                    <div className='flex flex-1 flex-col gap-1.75'>
                        <h3 className='font-SFNSExpanded text-[20px] text-white [-webkit-text-stroke:0.5px_#ffffff]'>{title.length > 20 ? title.slice(0, 20) + '...' : title}</h3>
                        <div className='flex items-center gap-0.75'><img src="/location.svg" alt="" /><span className='text-[rgba(255,255,255,0.76)] font-WFVisualSans font-semibold capitalize'>{location.length > 24 ? location.slice(0, 24) + '...' : location}</span></div>
                    </div>
                    <div className='font-WFVisualSans font-semibold'>
                        <i className="fa-solid fa-star text-[#FFC300]"></i>
                        <span className='text-[rgba(255,255,255,0.76)]'>{averageRating}</span>
                        <span className='text-[12px] text-[rgba(255,255,255,0.5)]'>({numberOfReviews})</span>
                    </div>
                </div>

                {/* Amenities Row */}
                <div className='flex h-6 mt-6 gap-2.5 font-WFVisualSans font-semibold'>
                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-bed text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{bedroom} Bed</span></div>
                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-bath text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{bathroom} Bath</span></div>
                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-flag text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{sqft}ft</span></div>
                </div>
            </div>
            <div className='px-5.5'>
                <div className='flex justify-between h-[76px] items-center mt-2.5 border-t-1 border-[rgba(255,255,255,0.25)]'>
                    <h3 className='font-SFNSExpanded text-[25px] text-white [-webkit-text-stroke:0.5px_#ffffff]'>₦{Number(price).toLocaleString()}<span className='text-[16px]'>/yr</span></h3>
                    <Link to={`/home/listing/${id}`}>
                        <Button className='h-[40px] font-WFVisualSans bg-[rgba(247,247,247,1)] font-semibold px-[16px] py-[10.5] text-[#003286] rounded-[100px]'>View Details</Button>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default PropertyCard