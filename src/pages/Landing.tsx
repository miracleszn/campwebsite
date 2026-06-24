import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from '@/components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import Footer from '@/components/Footer'
// import { useState } from 'react'
import rightCircle from '../assets/icons/RightCircle.svg'
import campLogo from '../assets/icons/campLogo.svg'
import hero1 from '../assets/images/hero1.jpg'
import zoomIn from '../assets/icons/zoom-in.svg'
import home from '../assets/icons/Home.svg'
import chart1 from '../assets/icons/Chart1.svg'
import users from '../assets/icons/Users.svg'
import CampaignBox from '@/components/CampaignBox'

interface StatsProps {
  iconSrc: string;
  heading : string;
  subHeading : string;
  
}


const Stats = ({ iconSrc, heading, subHeading } : StatsProps) => {
  return (
    <div className='flex w-max flex-col gap-5 items-center'>
        <img className='w-[40px]' src={iconSrc} alt="" />
        <div className='text-center'>
            <h2 className='font-SFNSExpanded text-[40px] leading-11 text-[#003286] [-webkit-text-stroke:1px_#003286]'>{heading}</h2>
            <p className='font-WFVisualSans font-medium uppercase text-[rgba(0,0,0,0.76)]'>{subHeading}</p>
        </div>
    </div>
  )
}


interface HowItWorksChildProps {
  numberedLabel : string;
  title : string;
  text : string;
  
}


const HowItWorksChild = ({ numberedLabel, title, text} : HowItWorksChildProps) => {
  return (
    <div className='flex w-[90%] flex-col gap-5 py-[69px]'>
        <h3 className='font-SFNSExpanded text-[60px] leading-16 text-[rgba(0,50,134,0.3)] [-webkit-text-stroke:1px_rgba(0,50,134,0.3)]'>{numberedLabel}</h3>
        <div className=''>
            <h4 className='font-SFNSExpanded mb-3 text-[24px] leading-7 text-[#003286] [-webkit-text-stroke:0.5px_#003286]'>{title}</h4>
            <p className='font-WFVisualSans text-[16px] font-medium text-[rgba(0,0,0,0.5)]'>{text}</p>
        </div>
    </div>
  )
}





interface Rental {
  id: string | number;
  title: string;
  location: string;
  price: number | string;
  image: string;
  bedroom: number;       
  bathroom: number;      
  sqft: string;          
  averageRating: number; 
  numberOfReviews: number; 
}

const Landing = () => {

    const [landingPageScrollToggle, setLandingPageScrollToggle] = useState<string>('browse-rentals');
    const [featuredRentals, setFeaturedRentals] = useState<Rental[]>([])
    const [howItWorksToggle, setHowItWorksToggle] = useState<string>('for-renters');

    const landingPageScroll = (value : string) => {
        if (!value) return;
        if (value) {
            setLandingPageScrollToggle(value);
        }
        

        const element = document.getElementById(value);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleValueChangeForHowItWorksToggle = (value : string) => {
        if (value) {
            setHowItWorksToggle(value);
        }
    };

    useEffect(() => {
    fetch(`http://localhost:8000/rentals`)
      .then((res) => res.json())
      .then((data) => setFeaturedRentals(data));
  }, []);

  return (
    <div className='relative'>
        {/* <div></div> */}
        <nav className=' px-[77px] w-full fixed top-6 z-[1000]'>
            <div className='h-[50px] w-full px-1 items-center flex gap-[49px]  bg-white/[.08] backdrop-blur-xl border border-white/20 rounded-[100px] shadow-xl'>
                <div className='flex-1'>
                    <img src={campLogo} alt="" />
                </div>
                <ToggleGroup type="single" value={landingPageScrollToggle} onValueChange={landingPageScroll} className='bg-[#F7F7F7] h-[40px] p-1 rounded-[100px] font-WFVisualSans text-[rgba(0,0,0,0.5)] font-medium'>
                    <ToggleGroupItem className='px-[12px] py-[4px] data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="browse-rentals">Browse Rentals</ToggleGroupItem>
                    <ToggleGroupItem className='data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="how-it-works">How It Works</ToggleGroupItem>
                    <ToggleGroupItem className='data-[state=on]:text-black data-[state=on]:bg-white data-[state=on]:shadow-[0_1px_2px_rgba(0,0,0,0.05)] data-[state=on]:rounded-[100px]' value="c">For Owners</ToggleGroupItem>
                </ToggleGroup>
                <div className='flex gap-2.5 h-[40px]'>
                    <Link to={"/signup"}>
                        <Button className='h-full font-WFVisualSans font-semibold px-[16px] py-[10.5] bg-[#F7F7F7] rounded-[100px]'>Sign Up</Button>
                    </Link>
                    <Button className='h-full font-WFVisualSans font-semibold px-[16px] py-[10.5] text-white bg-[#003286] rounded-[100px]'>Sell your property</Button>
                </div>
            </div>
        </nav>

        {/* landig page */}
        <section id='browse-rentals' className='scroll-mt-20 '>
            <div className='flex pt-26 px-[77px] pb-[89px] justify-between items-center bg-[url(/heroBg.png)] bg-cover'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3.75'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-WFVisualSans font-medium uppercase text-[rgba(0,0,0,0.76)]'>Rental Marketplace</span>
                            <h1 className='font-SFNSExpanded text-[40px] text-[#003286] [-webkit-text-stroke:1px_#003286] leading-[47px]'>Find a home you<br/> actually want to live in.</h1>
                        </div>
                        <p className='font-WFVisualSans font-medium text-[rgba(0,0,0,0.5)]'>Camp connects renters with verified landlords across the city. No <br/>middlemen, no hidden fees — just the right home.</p>
                    </div>
                    {/* <i class="fa-solid fa-location-dot"></i> */}
                    <div className='w-[549px] flex flex-col gap-5'>
                        <InputGroup className='h-[68px] rounded-[100px] bg-[#F7F7F7] p-2.5 outline-none'>
                            <InputGroupAddon align="inline-start">
                            <InputGroupButton variant="secondary"><i className="fa-solid fa-location-dot text-[16px] text-[rgba(0,0,0,0.5)]"></i></InputGroupButton>
                            </InputGroupAddon>
                            <InputGroupInput className='text-[24px] font-WFVisualSans' placeholder="City, neighborhood, ZIP..." />
                            <InputGroupAddon align="inline-end">
                            <InputGroupButton className='flex gap-1 h-full rounded-[100px] items-center justify-center px-4 py-3 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]' variant="secondary">
                                <img src={zoomIn} alt="" />
                                <span className='font-WFVisualSans font-medium'>Search</span>
                            </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                        <ToggleGroup type="multiple" className='flex gap-2.25 h-[40px] rounded-none font-WFVisualSans text-[rgba(0,50,134,0.8)]'>
                            <ToggleGroupItem className='px-[16px] py-[10px] h-full border border-[rgba(0,50,134,0.5)] font-semibold data-[state=on]:text-white data-[state=on]:bg-[rgba(0,50,134,0.8)] rounded-[100px]' value="a">Port Harcourt</ToggleGroupItem>
                            <ToggleGroupItem className='px-[16px] py-[10px] h-full border border-[rgba(0,50,134,0.5)] font-semibold data-[state=on]:text-white data-[state=on]:bg-[rgba(0,50,134,0.8)] rounded-[100px]' value="b">Abuja</ToggleGroupItem>
                            <ToggleGroupItem className='px-[16px] py-[10px] h-full border border-[rgba(0,50,134,0.5)] font-semibold data-[state=on]:text-white data-[state=on]:bg-[rgba(0,50,134,0.8)] rounded-[100px]' value="c">Calabar</ToggleGroupItem>
                            <ToggleGroupItem className='px-[16px] py-[10px] h-full border border-[rgba(0,50,134,0.5)] font-semibold data-[state=on]:text-white data-[state=on]:bg-[rgba(0,50,134,0.8)] rounded-[100px]' value="d">Lagos</ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>

                <div className='h-[482px] w-[514px] p-[16px] flex justify-end bg-cover bg-center rounded-[30px]' style={{ backgroundImage: `url(${hero1})` }}>
                    {/* <img className='h-full w-full object-center' src="/hero1.jpg" alt="" /> */}
                    <div className='px-4 py-[10.5] h-[40px] content-center text-center rounded-[100px] bg-[rgba(0,50,134,1)] font-WFVisualSans font-semibold text-[rgba(255,255,255,1)]'>
                        6400+ active listing
                    </div>
                </div>
            </div>

            <div className='px-[77px] pt-[83px] h-max bg-[#003286]'>
                <div className='flex justify-between items-end mb-[63px]'>
                    <div>
                        <span className='font-WFVisualSans font-medium uppercase text-[rgba(255,255,255,0.76)]'>Rental Marketplace</span>
                        <h2 className='text-[40px] leading-11 font-SFNSExpanded text-white [-webkit-text-stroke:1px_#ffffff]'>Current Listing</h2>
                    </div>
                    <div>
                        <ToggleGroup type="single" className='flex gap-2.25 h-[40px] rounded-none font-WFVisualSans text-white' defaultValue='all'>
                            <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="all">All</ToggleGroupItem>
                            <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="2bedrooms">2bedrooms</ToggleGroupItem>
                            <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="selfcon">Selfcon</ToggleGroupItem>
                            <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="duplex">Duplex</ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>

                {/* Flex of 2 */}
                <div className='flex gap-[25px]'>
                    {featuredRentals.slice(0, 2).map((obj) => (
                        // <p </p>
                    <div key={obj.id} className='flex-1 rounded-[20px] overflow-hidden h-[492px] bg-[rgba(255,255,255,0.16)]'>
                        <div className='h-[255px]  bg-amber-400'><img className='h-full w-full object-cover' src={`http://localhost:8000${obj.image}`} alt="" /></div>
                            <div className='px-[22px] mt-[17px]'>
                                {/* Title, location, rating, reviews */}
                                <div className='flex justify-between'>
                                    <div className='flex flex-1 flex-col gap-1.75'>
                                        <h3 className='font-SFNSExpanded text-[20px] text-white [-webkit-text-stroke:0.5px_#ffffff]'>{obj.title}</h3>
                                        <div className='flex items-center gap-0.75'><img src="/location.svg" alt="" /><span className='text-[rgba(255,255,255,0.76)] font-WFVisualSans font-semibold capitalize'>{obj.location}</span></div>
                                    </div>
                                    <div className='font-WFVisualSans font-semibold'>
                                        <i className="fa-solid fa-star text-[#FFC300]"></i>
                                        <span className='text-[rgba(255,255,255,0.76)]'>{obj.averageRating}</span>
                                        <span className='text-[12px] text-[rgba(255,255,255,0.5)]'>({obj.numberOfReviews})</span>
                                    </div>
                                </div>

                                {/* Amenities Row */}
                                <div className='flex h-6 mt-6 gap-2.5 font-WFVisualSans font-semibold'>
                                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-bed text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{obj.bedroom} Bed</span></div>
                                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-bath text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{obj.bathroom} Bath</span></div>
                                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-flag text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{obj.sqft}ft</span></div>
                                </div>
                            </div>
                            <div className='px-5.5'>
                                <div className='flex justify-between h-[76px] items-center mt-2.5 border-t-1 border-[rgba(255,255,255,0.25)]'>
                                    <h3 className='font-SFNSExpanded text-[25px] text-white [-webkit-text-stroke:0.5px_#ffffff]'>₦{Number(obj.price).toLocaleString()}<span className='text-[16px]'>/yr</span></h3>
                                    <Button className='h-[40px] font-WFVisualSans bg-[rgba(247,247,247,1)] font-semibold px-[16px] py-[10.5] text-[#003286] rounded-[100px]'>View Details</Button>

                                </div>
                            </div>
                    </div>
                    ))}
                    
                </div>

                {/* Flex of 3 */}
                <div className='flex mt-[25px] gap-[25px]'>
                    {featuredRentals.slice(2).map((obj) => (
                        // <p </p>
                    <div key={obj.id} className='flex-1 rounded-[20px] overflow-hidden h-[492px] bg-[rgba(255,255,255,0.16)]'>
                        <div className='h-[255px]  bg-amber-400'><img className='h-full w-full object-cover' src={`http://localhost:8000${obj.image}`} alt="" /></div>
                            <div className='px-[22px] mt-[17px]'>
                                {/* Title, location, rating, reviews */}
                                <div className='flex justify-between'>
                                    <div className='flex flex-1 flex-col gap-1.75'>
                                        <h3 className='font-SFNSExpanded text-[20px] text-white [-webkit-text-stroke:0.5px_#ffffff]'>{obj.title}</h3>
                                        <div className='flex items-center gap-0.75'><img src="/location.svg" alt="" /><span className='text-[rgba(255,255,255,0.76)] font-WFVisualSans font-semibold capitalize'>{obj.location.length > 24 ? obj.location.slice(0, 24) + '...' : obj.location}</span></div>
                                    </div>
                                    <div className='font-WFVisualSans font-semibold'>
                                        <i className="fa-solid fa-star text-[#FFC300]"></i>
                                        <span className='text-[rgba(255,255,255,0.76)]'>{obj.averageRating}</span>
                                        <span className='text-[12px] text-[rgba(255,255,255,0.5)]'>({obj.numberOfReviews})</span>
                                    </div>
                                </div>

                                {/* Amenities Row */}
                                <div className='flex h-6 mt-6 gap-2.5 font-WFVisualSans font-semibold'>
                                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-bed text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{obj.bedroom} Bed</span></div>
                                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-bath text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{obj.bathroom} Bath</span></div>
                                    <div className='h-full flex gap-1 items-center'><i className="fa-solid fa-flag text-white"></i><span className='text-[rgba(255,255,255,0.76)]'>{obj.sqft}ft</span></div>
                                </div>
                            </div>
                            <div className='px-5.5'>
                                <div className='flex justify-between h-[76px] items-center mt-2.5 border-t-1 border-[rgba(255,255,255,0.25)]'>
                                    <h3 className='font-SFNSExpanded text-[25px] text-white [-webkit-text-stroke:0.5px_#ffffff]'>₦{Number(obj.price).toLocaleString()}<span className='text-[16px]'>/yr</span></h3>
                                    <Button className='h-[40px] font-WFVisualSans bg-[rgba(247,247,247,1)] font-semibold px-[16px] py-[10.5] text-[#003286] rounded-[100px]'>View Details</Button>

                                </div>
                            </div>
                    </div>
                    ))}
                    
                </div>

                <div className='pt-[94px] pb-[83px]'>
                    <Button className='font-WFVisualSans justify-self-center text-white flex gap-2 items-center w-max h-max bg-[rgba(255,255,255,0.16)] px-5 py-4 rounded-[100px] border border-[rgba(255,255,255,0.5)] font-semibold'>
                        <span>View all listings</span>
                        <img src={rightCircle} alt="" />
                    </Button>
                </div>
                
            </div>

            <div className='h-[317px] flex justify-around items-center bg-[rgba(235,235,235,0.71)]'>
                <Stats iconSrc={home} heading='34,590' subHeading='Active Listing'/>
                <Stats iconSrc={chart1} heading='95%' subHeading='Match satisfaction'/>
                <Stats iconSrc={users} heading='82,788' subHeading='Happy renters'/>
            </div>

            

        </section>
        <section id='how-it-works' className='scroll-mt-20'>
            <div className='h-max px-[77px]'>
                <div className='flex flex-col items-center gap-[34px] mt-22 mb-16.5'>
                    <div className='text-center'>
                        <span className='font-WFVisualSans font-medium uppercase text-[rgba(0,0,0,0.76)]'>Simple process</span>
                        <h2 className='font-SFNSExpanded text-[#003286] leading-11 text-[40px] [-webkit-text-stroke:1px_#003286]'>How Camp works</h2>
                    </div>

                    <ToggleGroup type="single" value={howItWorksToggle} onValueChange={handleValueChangeForHowItWorksToggle} className='h-max gap-0 font-WFVisualSans rounded-none text-[#003286] font-semibold'>
                        <ToggleGroupItem className='px-[25px] py-[16px] h-max font-semibold bg-[#00328629] data-[state=on]:text-white data-[state=on]:bg-[#003286] rounded-r-none rounded-l-[100px]' value="for-renters">For Renters</ToggleGroupItem>
                        <ToggleGroupItem className='px-[25px] py-[16px] h-max font-semibold bg-[#00328629] data-[state=on]:text-white data-[state=on]:bg-[#003286] rounded-l-none rounded-r-[100px]' value="for-owners">For Owners</ToggleGroupItem>
                    </ToggleGroup>
                </div>

                <div className='flex h-max mb-[84px]'>
                    <div className='flex-1 flex'>
                        <HowItWorksChild numberedLabel='01' title='Search your area' text='Filter by neighborhood, price range, size, and move-in date. Save searches and get notified when new matches appear.'/>
                    </div>
                    <div className='flex-1 flex justify-center border-l border-r border-[rgba(0,50,134,0.16)]'>
                        <HowItWorksChild numberedLabel='02' title='Tour and compare' text='Schedule viewings directly through \camp. Compare multiple properties side by side before you decide.'/>
                    </div>
                    <div className='flex-1 flex justify-end'>
                        <HowItWorksChild numberedLabel='03' title='Sign and move in' text='Complete your rental agreement digitally. No paperwork stacks, no fax machines. Move in on your terms'/>
                    </div>
                </div>

            </div>

            <CampaignBox tag='Property owners' heading='List your property. Find the right tenant.' arrowIcon={true} option1='Start listing for free' option2='Learn More'/>
        </section>
        <Footer/>
    </div>
  )
}

export default Landing