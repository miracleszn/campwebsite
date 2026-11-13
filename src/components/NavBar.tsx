import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Menu, X } from 'lucide-react'
import campLogo from "../assets/icons/campLogo.svg"
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='relative z-20 px-3 sm:px-6 lg:px-[77px] w-full pt-3 sm:pt-6'>
            <div className='min-h-[50px] w-full px-2 sm:px-3 items-center flex justify-between gap-3 lg:gap-[49px] bg-white/[.85] lg:bg-white/[.08] backdrop-blur-xl border border-white/40 rounded-[100px] shadow-xl'>
                
                <div className='flex-1 min-w-0'>
                    <Link to={"/"} aria-label="Camp home">
                        <img className='w-20 sm:w-auto' src={campLogo} alt="Camp" />
                    </Link>
                </div>
                
                <ToggleGroup type="single" /*value={landingPageScrollToggle} onValueChange={landingPageScroll}*/ className='hidden lg:flex bg-[#F7F7F7] h-[40px] p-1 rounded-[100px] font-WFVisualSans text-[rgba(0,0,0,0.5)] font-medium'>
                    <ToggleGroupItem className='px-[12px] py-[4px] data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="browse-rentals">Browse Rentals</ToggleGroupItem>
                    <ToggleGroupItem className='data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="how-it-works">How It Works</ToggleGroupItem>
                    <ToggleGroupItem className='data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="c">For Owners</ToggleGroupItem>
                </ToggleGroup>
                <div className='flex gap-2 h-10'>
                    <Button className='hidden sm:block h-full font-WFVisualSans font-semibold px-4 text-white bg-[#003286] rounded-[100px]'>Sell your property</Button>
                    <div className='hidden sm:flex w-10 font-WFVisualSans font-bold text-[#003286] justify-center items-center bg-[rgba(0,50,134,0.13)] rounded-full'>D</div>
                    <Button
                        type="button"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='h-full w-10 p-0 text-white bg-[#003286] rounded-full lg:hidden'
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>
            {menuOpen && (
                <div className='absolute left-3 right-3 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/95 p-3 font-WFVisualSans shadow-xl sm:left-6 sm:right-6 lg:hidden'>
                    <Link onClick={() => setMenuOpen(false)} className='rounded-lg px-3 py-2' to="/home">Browse Rentals</Link>
                    <Link onClick={() => setMenuOpen(false)} className='rounded-lg px-3 py-2' to="/signup">Create an account</Link>
                    <Link onClick={() => setMenuOpen(false)} className='rounded-lg px-3 py-2' to="/login">Log in</Link>
                </div>
            )}
        </nav>
  )
}

export default NavBar