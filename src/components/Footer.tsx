import { Button } from './ui/button'
import campFooterLogo from '../assets/icons/campFooterLogo.svg'

interface FooterColumnProps {
    title : string;
    one : string;
    two : string;
    three : string;
    four : string;
  
}


const FooterColumn = ({ title, one, two, three, four } : FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-4 sm:gap-9'>
        <h3 className='text-lg sm:text-[20.25px] leading-[22.5px] font-WFVisualSans font-semibold text-white'>{title}</h3>
        <div className='text-[rgba(255,255,255,0.67)] font-WFVisualSans font-normal flex flex-col gap-[10px] items-start'>
            <Button className='p-0 font-normal' variant="link">{one}</Button>
            <Button className='p-0 font-normal' variant="link">{two}</Button>
            <Button className='p-0 font-normal' variant="link">{three}</Button>
            <Button className='p-0 font-normal' variant="link">{four}</Button>
        </div>
    </div>
  )
}


const Footer = () => {
  return (
    <footer className='bg-black flex flex-col gap-10 md:gap-[80px] h-max px-4 py-12 sm:px-6 md:px-[88.5px] md:py-[83px]'>
        <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
            <div className='flex flex-col gap-[27px]'>
                <img className='w-[141.38px]' src={campFooterLogo} alt="Camp" />
                <p className='font-WFVisualSans text-white font-normal'>The rental marketplace built for real people —<br className='hidden sm:block' />renters and owners alike.</p>
            </div>
            <div className='grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 md:gap-[clamp(2rem,6vw,5.5rem)]'>
                <FooterColumn title='Renters' one='Browse listings' two='Search by map' three='Saved properties' four='Renter guides'/>
                <FooterColumn title='Owners' one='List a property' two='Pricing' three='Tenant screening' four='Owner resources'/>
                <FooterColumn title='Company' one='About us' two='Blog' three='Careers' four='Privacy policy'/>
            </div>
        </div>
        <div className='border-t pt-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end border-[rgba(255,255,255,0.25)] '>
            <span className='text-sm sm:text-[18px] font-WFVisualSans font-normal text-[rgba(255,255,255,0.45)]'>Copyright © 2026 camp Inc. </span>
            <div className='flex flex-wrap items-center text-white'>
                <span className='text-sm sm:text-[18px] font-WFVisualSans font-normal text-[rgba(255,255,255,0.45)]'>All Rights Reserved | </span>

                <Button className='p-0 rounded-none text-sm sm:text-[18px] font-WFVisualSans font-normal border-t-0 border-l-0 border-r-0 border-b-1 border-white'>Terms and Conditions </Button>
                <span className='text-sm sm:text-[18px] font-WFVisualSans font-normal text-[rgba(255,255,255,0.45)]'> | </span>

                <Button className='p-0 rounded-none text-sm sm:text-[18px] font-WFVisualSans font-normal border-t-0 border-l-0 border-r-0 border-b-1 border-white'> Privacy Policy</Button>
            </div>
        </div>
    </footer>
  )
}
// Camp
// Renters
// Owners
// Company
// The rental marketplace built for real people — renters and owners alike.


// About us

// 
// 

// 
// 

// 
// 
// Copyright © 2026 camp Inc. 
// All Rights Reserved | Terms and Conditions | Privacy Policy
export default Footer