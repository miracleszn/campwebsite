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
    <div className='flex flex-col gap-9'>
        <h3 className='text-[20.25px] leading-[22.5px] font-WFVisualSans font-semibold text-white'>{title}</h3>
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
    <footer className='bg-black flex flex-col gap-[134px] h-max px-[88.5px] py-[83px]'>
        <div className='h-[230px] flex justify-between'>
            <div className='flex flex-col gap-[27px]'>
                <img className='w-[141.38px]' src={campFooterLogo} alt="" />
                <p className='font-WFVisualSans text-white font-normal'>The rental marketplace built for real people —<br/>renters and owners alike.</p>
            </div>
            <div className='flex gap-[88px]'>
                <FooterColumn title='Renters' one='Browse listings' two='Search by map' three='Saved properties' four='Renter guides'/>
                <FooterColumn title='Owners' one='List a property' two='Pricing' three='Tenant screening' four='Owner resources'/>
                <FooterColumn title='Company' one='About us' two='Blog' three='Careers' four='Privacy policy'/>
            </div>
        </div>
        <div className='h-[77px] border-t flex justify-between items-end border-[rgba(255,255,255,0.25)] '>
            <span className=' text-[18px] font-WFVisualSans font-normal text-[rgba(255,255,255,0.45)]'>Copyright © 2026 camp Inc. </span>
            <div className=' text-white'>
                <span className='text-[18px] font-WFVisualSans font-normal text-[rgba(255,255,255,0.45)]'>All Rights Reserved | </span>

                <Button className='p-0 rounded-none text-[18px] font-WFVisualSans font-normal border-t-0 border-l-0 border-r-0 border-b-1 border-white'>Terms and Conditions </Button>
                <span className='text-[18px] font-WFVisualSans font-normal text-[rgba(255,255,255,0.45)]'> | </span>
                <Button className='p-0 rounded-none text-[18px] font-WFVisualSans font-normal border-t-0 border-l-0 border-r-0 border-b-1 border-white'> Privacy Policy</Button>
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