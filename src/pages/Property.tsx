
import ListingImageSlider from '@/components/ListingImageSlider'
import NavBar from '@/components/NavBar'
import '../App.css'
import { useParams } from 'react-router-dom'
import locationBlueIcon from '../assets/icons/locationBlue.svg'
import microphoneBlueIcon from '../assets/icons/microphoneBlue.svg'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import PropertyAmenities from '@/components/PropertyAmenities'
import cautionSign from "../assets/icons/danger.svg"
import { CircleArrowRight } from 'lucide-react'
import Testimonial from '@/components/Testimonial'
import CampaignBox from '@/components/CampaignBox'
import Footer from '@/components/Footer'
import PropertyMap from '@/components/PropertyMap'


const Property = () => {

    const { id } = useParams()
    const [isSaved, setIsSaved] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);

    const maxLength = 300
    

    const description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quod enim molestias, voluptatibus id labore, adipisci alias quibusdam exercitationem minus eius aperiam cum quia? Facere debitis dicta amet ipsum necessitatibus provident numquam, aspernatur obcaecati aperiam ullam. Aperiam quasi est cumque. Perspiciatis aliquid repudiandae dicta tenetur quod minima quam atque expedita blanditiis repellat molestias, asperiores at iste ut et dignissimos culpa nobis nostrum, quidem minus! Quae, quis fugiat, similique, aliquam consequatur qui soluta dolores voluptate vero ipsum deleniti recusandae reprehenderit totam consequuntur. Obcaecati ad repellendus nobis soluta expedita assumenda dolorem pariatur accusamus hic, quibusdam saepe fugit doloremque, repudiandae harum in sunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quod enim molestias, voluptatibus id labore, adipisci alias quibusdam exercitationem minus eius aperiam cum quia? Facere debitis dicta amet ipsum necessitatibus provident numquam, aspernatur obcaecati aperiam ullam. Aperiam quasi est cumque. Perspiciatis aliquid repudiandae dicta tenetur quod minima quam atque expedita blanditiis repellat molestias, asperiores at iste ut et dignissimos culpa nobis nostrum, quidem minus! Quae, quis fugiat, similique, aliquam consequatur qui soluta dolores voluptate vero ipsum deleniti recusandae reprehenderit totam consequuntur. Obcaecati ad repellendus nobis soluta expedita assumenda dolorem pariatur accusamus hic, quibusdam saepe fugit doloremque, repudiandae harum in sunt?"
    
    
    // console.log(description.length)
    if (description.length <= maxLength) {
        return <p>{description}</p>;
    }

    const displayDescription = isExpanded ? description : `${description.substring(0, maxLength)}...`;

  return (
    <div className='h-max overflow-x-hidden bg-white'>
        <NavBar/>
        <div className='px-4 sm:px-6 lg:px-[77px]'>
            <div className='h-max pb-8 md:pb-[41px] mt-8 md:mt-[80px] lg:mt-[123px] border-b border-[rgba(0,50,134,0.2)] flex flex-col lg:flex-row gap-6 lg:gap-[59px]'>
                <ListingImageSlider/>
                <div className='min-w-0 flex-1 flex flex-col gap-6 lg:gap-[31px] bg-white'>
                    <div className='flex gap-1.75 items-center'>
                        <div className='min-w-0 flex flex-1 flex-col gap-1.75'>
                            <h3 className='font-SFNSExpanded text-xl sm:text-[25px] text-[#003286] [-webkit-text-stroke:0.7px_#003286]'>Ebby Lodge</h3>
                            <div className='flex items-center gap-0.75'><img className='border-[#003286]' src={locationBlueIcon} alt="" /><span className='text-[rgba(129,129,129,0.76)] font-WFVisualSans font-medium capitalize'>Old G.R.A, Koraka Lane, Port Harcourt, Rivers State.</span></div>
                        </div>
                        <Button onClick={() => setIsSaved(!isSaved)} className ='font-WFVisualSans h-[27px] p-0 font-bold flex gap-0.75 items-center text-[rgba(0,50,134,0.76)]'>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill={isSaved ? "#003286" : "none"} xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5415 4.95833C3.5415 3.39352 4.81003 2.125 6.37484 2.125H10.6248C12.1896 2.125 13.4582 3.39353 13.4582 4.95833V14.2859C13.4582 14.8463 12.8382 15.1848 12.3668 14.8817L9.26591 12.8883C8.79925 12.5883 8.20043 12.5883 7.73376 12.8883L4.63288 14.8817C4.16147 15.1848 3.5415 14.8463 3.5415 14.2859V4.95833Z" stroke="#003286" stroke-width="1.5"/>
                                <path d="M6.375 6.02084H10.625" stroke={isSaved ? "white" : "#003286"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className='leading-3'>Save</span>
                        </Button>
                        <div className='font-WFVisualSans font-bold'>
                            <i className="fa-solid fa-star text-[#FFC300]"></i>
                            <span className='text-[rgba(0,50,134,0.76)]'>4.6</span>
                            <span className='text-[12px] text-[rgba(0,50,134,0.5)]'>(31)</span>
                        </div>
                    </div>

                    <Separator className='bg-[rgba(0,50,134,0.2)]'/>

                    <PropertyAmenities icon='fa-solid fa-bed' heading='2 Bedroom' writeUp='One living room, one kitchen, each having bathrooms.'/>
                    <PropertyAmenities icon='fa-solid fa-bath' heading='3 Restroom' writeUp='One for the parlor and the other two for the rooms.'/>
                    <PropertyAmenities icon='fa-solid fa-flag' heading='5,890ft' writeUp='Mind you an average house is 4,000ft.'/>
                
                    <Separator className='bg-[rgba(0,50,134,0.2)]'/>

                    <h3 className='font-SFNSExpanded leading-7 text-2xl sm:text-[30px] text-[#003286] [-webkit-text-stroke:1px_#003286]'>₦{Number(id).toLocaleString()},000,000<span className='text-base sm:text-[20px]'>/yr</span></h3>

                    <Button className='rounded-[100px] font-WFVisualSans text-base sm:text-[20px] font-bold h-max py-4 px-5 text-white bg-[#003286] border border-[rgba(0,50,134,0.5)]'>Add to waitlist</Button>

                    <div className='h-max p-4 sm:p-[25px] flex flex-wrap items-center gap-3.5 border border-[rgba(0,50,134,0.5)] rounded-[15px]'>
                        <div className='h-[49px] w-[49px] shrink-0 rounded-full bg-[rgba(0,50,134,0.13)] content-center text-center font-WFVisualSans font-bold text-[22px] text-white'>D</div>
                        <div className='flex-1'>
                            <h5 className='font-SFNSExpanded text-[18px] text-[#003286] [-webkit-text-stroke:0.5px_#003286]'>Denzel Crentsil</h5>
                            <p className='font-WFVisualSans font-medium text-[rgba(0,0,0,0.5)]'>Host - Hosted 2 years ago</p>
                        </div>
                        <Button className='rounded-[100px] font-WFVisualSans font-bold h-max py-2.5 px-4 text-white bg-[#003286]'>Meet the Owner</Button>
                    </div>
                </div>
            </div>

            

            {/* Description Row */}
            <div className='h-max flex flex-col md:flex-row gap-6 md:gap-[44px] mt-8 md:mt-[41px]'>
                <div className='flex-1 flex flex-col gap-3'>
                    <h3 className='font-SFNSExpanded text-[24px] text-[#003286] [-webkit-text-stroke:0.5px_#003286]'>Description</h3>
                    <p className='font-WFVisualSans description pr-3 font-medium text-[rgba(0,0,0,0.5)]'>
                        {displayDescription}
                        <Button variant="link" className='font-WFVisualSans font-bold text-[#003286]' onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Show Less' : 'Show More'}</Button>
                    </p>
                </div>
                <div className='w-full md:max-w-[399px] shrink-0 px-5 sm:px-[35px] py-6 flex flex-col items-center justify-center gap-5.5 border border-[rgba(0,50,134,0.5)] rounded-[30px]'>
                    <img className='w-[67px]' src={cautionSign} alt="" />
                    <div className='text-center'>
                        <h5 className='font-SFNSExpanded text-[24px] text-[#003286] [-webkit-text-stroke:0.5px_#003286]'>Rent Warning</h5>
                        <p className='font-WFVisualSans font-medium text-[rgba(0,0,0,0.5)]'>After Payment your rent date starts 7days after. because we assume and give you time to pack and start using the apartment.</p>
                    </div>
                </div>
            </div> 


            <Separator className='bg-[rgba(0,50,134,0.2)] my-8 md:my-[43px]'/>

        </div>


        <div className='bg-[rgba(235,235,235,0.71)] h-max px-4 py-10 md:py-[60px] flex flex-col items-center'>
            <div className='w-full h-fit flex flex-col items-center text-center'>
                <div className='h-[120px] mb-3.5 w-[120px] sm:h-[148px] sm:w-[148px] rounded-full bg-[rgba(0,50,134,0.13)] content-center text-center font-WFVisualSans font-bold text-[56px] sm:text-[67px] text-white'>D</div>
                <h4 className='font-SFNSExpanded leading-tight sm:leading-10 text-3xl sm:text-[40px] text-[#003286] [-webkit-text-stroke:1px_#003286]'>Denzel Crentsil</h4>
                <span className='font-WFVisualSans font-medium text-[rgba(0,0,0,0.5)]'>Host - Hosted 2 years ago</span>
            </div>
            <div className='font-WFVisualSans my-[25px] flex flex-wrap justify-center gap-x-4 gap-y-2 h-auto font-bold text-[#003286]'>
                <div className='flex gap-0.75 items-center'><img src={microphoneBlueIcon} alt="" /> <span>Speaks English</span></div>
                <div className='flex gap-0.75 items-center'><img src={locationBlueIcon} alt="" /> <span>Lives in Accra, Ghana</span></div>
            </div>
            <div className='font-WFVisualSans w-full max-w-[891px] font-medium text-[rgba(0,0,0,0.5)] mb-[43px] text-center'>
                <p className=''>Hi there! I'm Nathaniel, a warm and attentive host who genuinely enjoys meeting new people and making every guest feel at home. I take great care in maintaining a clean, comfortable, and inviting space so you can relax and enjoy your stay without a worry. My priority is to ensure a smooth, stress-free experience—offering thoughtful hospitality and quick support whenever you need it. Questions? Just reach out—I'm always here to help!</p>
            </div>

            <Button className="border px-[20px] py-4 font-WFVisualSans font-bold flex items-center rounded-[100px] border-[rgba(0,50,134,0.5)] text-[#003286] w-max h-max">
                <span>View Owners houses</span>
                <CircleArrowRight className="size-5 stroke-[1.5]" />
            </Button>
        </div>


        <Testimonial/>
        <CampaignBox tag='Via Email' heading='Contact us' arrowIcon={false} option1='Via Email Address' option2='Via Phone Number'/>
        <Footer/>
        <div className='min-h-[400px] h-[70vh] max-h-[600px] bg-[#003286] flex flex-col md:flex-row'>
            <div className='flex-1'>
                <h1>see properties on the map</h1>
            </div>
            <div className='min-h-[300px] flex-[1.5] p-4 border'>
                <PropertyMap/>
            </div>
        </div>
    </div>
  )
}

export default Property