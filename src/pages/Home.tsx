import NavBar from '@/components/NavBar'
import PropertyCard from '@/components/PropertyCard'
import Testimonial from '@/components/Testimonial'
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext, PaginationEllipsis } from '@/components/ui/pagination'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import zoomIn from "../assets/icons/zoom-in.svg"
import filterIcon from "../assets/icons/filterIcon.svg"
import CampaignBox from '@/components/CampaignBox'
import Footer from '@/components/Footer'
import loadingVideo from '../assets/videos/loadingVideo.webm'

const LIMIT = 12
const TOTAL_ITEMS = 50 // The Platzi API typically defaults to ~50 products
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / LIMIT)

const fetchListing = async (page: number): Promise<any> => {
    const offset = (page - 1) * LIMIT

  await new Promise((resolve) => setTimeout(resolve, 6000))

    const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${LIMIT}`)
    if (!response.ok) throw new Error("Failed to fetch products")
    return response.json()
}

const Home = () => {
    
    const [page, setPage] = useState(1)

  // 2. TanStack Query integration
    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ["products", page], // Adding page here ensures refetching on change
        queryFn: () => fetchListing(page),
        placeholderData: keepPreviousData, // Keeps old data visible while loading the new page (prevents layout flashing!)
    })

    const handlePageChange = (targetPage: number) => {
        if (targetPage >= 1 && targetPage <= TOTAL_PAGES) {
            setPage(targetPage)
        }
    }



    if (isLoading) return <div className="p-8 flex items-center justify-center h-screen w-full text-center"><video className='w-300px' src={loadingVideo} autoPlay loop ></video></div>
    if (isError) return <div className="p-8 text-red-500">Error: {error.message}</div>
    
    

  return (
    <>
        <div className='flex flex-col pb-[44px] items-center bg-[url(/homeHeaderBg.png)] bg-cover'>
            <NavBar/>
            <div className='h-max pt-[35px] pb-[82px] mt-[79px] w-max flex flex-col items-center gap-[54px]'>
                <div className='flex flex-col gap-3.75 text-center'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-WFVisualSans font-medium uppercase text-[rgba(0,0,0,0.76)]'>Rental Marketplace</span>
                        <h1 className='font-SFNSExpanded text-[40px] text-[#003286] [-webkit-text-stroke:1px_#003286] leading-[47px]'>Enter Location or Area.</h1>
                    </div>
                    <p className='font-WFVisualSans font-medium text-[rgba(0,0,0,0.5)]'>Search the area or location you want to rent or buy a house.</p>
                </div>

                <div className='w-[835px] flex flex-col gap-5 items-center'>
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
        </div>
        <div className='h-max px-[85px] py-[100px] bg-[#003286]'>
            <div className='flex justify-between items-end mb-[63px]'>
                <div>
                    <span className='font-WFVisualSans font-medium uppercase text-[rgba(255,255,255,0.76)]'>Rental Marketplace</span>
                    <h2 className='text-[40px] leading-11 font-SFNSExpanded text-white [-webkit-text-stroke:1px_#ffffff]'>Current Listing</h2>
                </div>
                <div className='h-[40px] gap-3.75 flex items-center'>
                    <Button className='font-WFVisualSans justify-self-center text-white flex gap-2 items-center w-max h-full bg-[rgba(255,255,255,0.16)] px-5 py-4 rounded-[100px] border border-[rgba(255,255,255,0.5)] font-semibold'>
                        <img src={filterIcon} alt="" />
                        <span>Filter</span>
                    </Button>
                    <span className='text-[rgba(255,255,255,0.42)] text-[24px]'>|</span>
                    <ToggleGroup type="single" className='flex h-full gap-2.25 rounded-none font-WFVisualSans text-white' defaultValue='all'>
                        <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="all">All</ToggleGroupItem>
                        <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="2bedrooms">2bedrooms</ToggleGroupItem>
                        <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="selfcon">Selfcon</ToggleGroupItem>
                        <ToggleGroupItem className='px-[16px] py-[10.5px] h-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.5)] font-semibold data-[state=on]:text-[#003286] data-[state=on]:bg-white rounded-[100px]' value="duplex">Duplex</ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
            <div className='h-fit w-full gap-[25px] grid grid-cols-1 md:grid-cols-3'>
                {products?.map((product: { id: number; title: string; description: string; price: string | number; image: string[] }) => (
                    <PropertyCard id={product.id} title={product.title} location={product.description} price={product.price} image={product.image} bedroom={2} bathroom={3} sqft='11,246' averageRating={4.6} numberOfReviews={31}/>
                ))}
            </div>
            <Pagination className="mt-24.5 h-[63px]">
                <PaginationContent className=''>
                
                {/* Previous Button */}
                <PaginationItem className='border mr-[29px] px-[20px] flex items-center rounded-[100px] border-[rgba(255,255,255,0.5)] text-white w-max h-full'>
                    <PaginationPrevious
                    text='Back'
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(page - 1)
                    }}
                    className={page === 1 ? "pointer-events-none opacity-50 text-[20px] font-medium" : "cursor-pointer text-[20px] font-medium"}
                    />
                </PaginationItem>

                <div className='h-full border px-5 flex items-center rounded-[100px] border-[rgba(255,255,255,0.5)]'>
                
                    {Array.from({  length: TOTAL_PAGES }, (_, index) => {
                        const pageNumber = index + 1
                        const isActive = page === pageNumber
                        return (
                            <>
                        <PaginationItem key={pageNumber} className='w-[34px] h-[31px] text-[rgba(255,255,255,0.76)] font-WFVisualSans flex items-center justify-center'>
                            <PaginationLink
                            href="#"
                            isActive={isActive}
                            onClick={(e) => {
                                e.preventDefault()
                                handlePageChange(pageNumber)
                            }}
                            className={isActive ? "bg-white font-medium flex items-center justify-center w-full rounded-full text-[rgba(0,50,134,1)]" : "bg-transparent font-medium w-full"}
                            >
                            {pageNumber}
                            </PaginationLink>
                        </PaginationItem>

                        {index >= 0 && index < TOTAL_PAGES -1 && (
                            <span className="text-white/40 mx-1 self-center select-none" aria-hidden="true">
                                •
                            </span>
                        )}

                        </>
                        )
                    })}
                </div>
                {/* <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem> */}

                {/* Next Button */}
                <PaginationItem className='border ml-[29px] px-[20px] flex items-center rounded-[100px] border-[rgba(255,255,255,0.5)] text-white w-max h-full'>
                    <PaginationNext
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(page + 1)
                    }}
                    className={page === TOTAL_PAGES ? "pointer-events-none opacity-50 text-[20px] font-medium" : "cursor-pointer text-[20px] font-medium"}
                    />
                </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>
        <Testimonial/>
        <CampaignBox tag='Via Email' heading='Contact us' arrowIcon={false} option1='Via Email Address' option2='Via Phone Number'/>
        <Footer/>
    </>
  )
}

export default Home