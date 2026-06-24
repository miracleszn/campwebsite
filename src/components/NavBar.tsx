import React from 'react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Menu } from 'lucide-react'
import campLogo from "../assets/icons/campLogo.svg"

const NavBar = () => {
  return (
    <nav className=' px-[77px] w-full pt-[24px]'>
            <div className='h-[50px] w-full px-1 items-center flex gap-[49px]  bg-white/[.08] backdrop-blur-xl border border-white/20 rounded-[100px] shadow-xl'>
                <div className='flex-1'>
                    <img src={campLogo} alt="" />
                </div>
                <ToggleGroup type="single" /*value={landingPageScrollToggle} onValueChange={landingPageScroll}*/ className='bg-[#F7F7F7] h-[40px] p-1 rounded-[100px] font-WFVisualSans text-[rgba(0,0,0,0.5)] font-medium'>
                    <ToggleGroupItem className='px-[12px] py-[4px] data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="browse-rentals">Browse Rentals</ToggleGroupItem>
                    <ToggleGroupItem className='data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="how-it-works">How It Works</ToggleGroupItem>
                    <ToggleGroupItem className='data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="c">For Owners</ToggleGroupItem>
                </ToggleGroup>
                <div className='flex gap-2.5 h-[40px]'>
                    
                    <Button className='h-full font-WFVisualSans font-semibold px-[16px] py-[10.5] text-white bg-[#003286] rounded-[100px]'>Sell your property</Button>
                    <Button className='h-full font-WFVisualSans w-[40px] text-white bg-[#003286] rounded-full'><Menu /></Button>
                </div>
            </div>
        </nav>
  )
}

export default NavBar