// import TestimonialCard from "./TestimonialCard"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
// import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"


// import { useEffect, useState, useCallback } from "react";
// import { ChevronLeft, ChevronRight, MessageCircleMore } from "lucide-react";
// import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import filterIcon from "../assets/icons/filterIcon.svg"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import messageCircle from '../assets/icons/messageCircle.svg'
import '../App.css'
import { useCallback, useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

// import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Denzel Crentsil",
    role: "User/Member",
    text: "I love this website so much because it helped me in my lowest time of need. I needed a house urgently and camp came through for me. Very cheap and reliable.",
  },
  {
    id: 2,
    name: "Emma Clement",
    role: "User/Member",
    text: "I love this website so much because it helped me in my lowest time of need. I needed a house urgently and camp came through for me. Very cheap and reliable.",
  },
  {
    id: 3,
    name: "Garet Bale",
    role: "User/Member",
    text: "I love this website so much because it helped me in my lowest time of need. I needed a house urgently and camp came through for me. Very cheap and reliable.",
  },
  {
    id: 4,
    name: "Sophia Mensah",
    role: "User/Member",
    text: "Absolutely fantastic service. I was in a difficult situation and they made everything seamless. Highly recommend to anyone looking for affordable housing solutions.",
  },
  {
    id: 5,
    name: "Kwame Osei",
    role: "User/Member",
    text: "The team was professional and efficient. Found me a great deal within days. I couldn't believe how smooth the process was from start to finish.",
  },
  {
    id: 6,
    name: "Aisha Diallo",
    role: "User/Member",
    text: "Outstanding platform! I had been searching for months with no luck elsewhere, but here I found what I needed in under a week. Truly a lifesaver.",
  },
  {
    id: 7,
    name: "Marcus Webb",
    role: "User/Member",
    text: "Very impressed with the level of support offered. They guided me through everything and kept me informed at every step. Five stars without hesitation.",
  },
  {
    id: 8,
    name: "Lena Hoffmann",
    role: "User/Member",
    text: "Could not be happier with the outcome. Professional, fast, and friendly. This service has made a real difference in my life and my family's.",
  },
  {
    id: 9,
    name: "Jordan Blake",
    role: "User/Member",
    text: "I was skeptical at first but now I'm a total convert. Genuine value, genuine care. They truly put the customer first in everything they do.",
  },
];





function Testimonial() {
    const [api, setApi] = useState<CarouselApi>()

    // Manage disable states for the buttons
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    
    // Tracking current items shown out of the total
    const [currentItems, setCurrentItems] = useState(3);
    const totalItems = TESTIMONIALS.length; // 9

    const [activeCardId, setActiveCardId] = useState<number | null>(null)
    
    useEffect(() => {
        if (!api) {
            return;
        }
    
        const onSelect = () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
            
            // selectedScrollSnap() starts at 0. Multiply by 3 for the items per view.
            const snapIndex = api.selectedScrollSnap();
            setCurrentItems(Math.min((snapIndex + 1) * 3, totalItems));
        };
    
        api.on("select", onSelect);
        onSelect(); // Trigger initially to set correct bounds
    }, [api, totalItems]);

    const handlePrev = useCallback(() => api?.scrollPrev(), [api]);
    const handleNext = useCallback(() => api?.scrollNext(), [api]);

    // Your requested variables for position text (e.g. "3/9") and dynamic progress width (e.g. 33.33%)
    const positionText = `${currentItems}/${totalItems}`;
    const progressPercentage = (currentItems / totalItems) * 100;



    


  return (
    <div className="pt-[106px] pb-[127px] bg-white">
        <div className='flex justify-between items-end mb-[63px] px-[72px]'>
                <div>
                    <span className='font-WFVisualSans font-medium uppercase text-[rgba(0,0,0,0.76)]'>Simple process</span>
                    <h2 className='text-[60px] leading-16 font-SFNSExpanded text-[#003286] [-webkit-text-stroke:1px_#003286]'>Testimonials</h2>
                </div>
                <div className='h-[56px] gap-[29px] flex items-end'>
                    <Button onClick={handlePrev} disabled={!canScrollPrev} className="border px-[20px] py-4 font-WFVisualSans font-bold flex items-center rounded-[100px] border-[rgba(0,50,134,0.5)] text-[#003286] w-max h-max">
                        <CircleArrowLeft className="size-5 stroke-[1.5]" />
                        <span>Back</span>
                    </Button>
                    <Button onClick={handleNext} disabled={!canScrollNext} className="border px-[20px] py-4 font-WFVisualSans font-bold flex items-center rounded-[100px] border-[rgba(0,50,134,0.5)] text-[#003286] w-max h-max">
                        <CircleArrowRight className="size-5 stroke-[1.5]" />
                        <span>Next</span>
                    </Button>
                </div>
            </div>
        <div className="pl-[45px] pr-[72px]">
            <Carousel opts={{ slidesToScroll: 3, align: "start" }} className="w-full" setApi={setApi}>
                <CarouselContent className="-ml-1 w-full">
                    {TESTIMONIALS.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="basis-1/2 pl-[27px] lg:basis-1/3">
                        
                        <div onClick={() => setActiveCardId(testimonial.id)} className='px-[35px] py-[50px] bg-[rgba(247,247,247,1)] h-max flex flex-col gap-10.5 items-start rounded-[30px]'>
                            
                            <img className="h-[67px]" src={messageCircle} alt="" />
                            
                            <div className="h-[96px] overflow-y-auto font-WFVisualSans font-medium text-[rgba(0,0,0,0.5)] scrollbar-hide">
                                <p>{testimonial.text}</p>
                            </div>

                            <div className="h-[57px] flex gap-4 items-center">
                                <div className="w-[57px] h-full bg-red-300 rounded-full"></div>
                                <div className="flex flex-col gap-1.25">
                                    <h2 className="font-SFNSExpanded leading-7 text-[24px] text-[#003286] [-webkit-text-stroke:0.5px_#003286]">{testimonial.name}</h2>
                                    <span className="font-WFVisualSans font-medium text-[rgba(0,0,0,0.5)]">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>

                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
        <div className="flex gap-[36px] items-center px-[72px] mt-[86px]">
            <span className="font-SFNSExpanded text-[24px] text-[#003286] [-webkit-text-stroke:0.5px_#003286]">{positionText}</span>
            <div className="w-[456px] h-3 bg-[rgba(247,247,247,1)] rounded-full overflow-hidden">
                <div className="h-full rounded-l-full bg-gradient-to-r from-[#003186b7] to-[#003286] transition-all duration-500" style={{ width: `${progressPercentage}%` }}/>
            </div>
        </div>
    </div>
    
  )
}


export default Testimonial