import { useState } from "react";


interface GalleryImage {
    id: string;
    src: string;
    alt: string;
}

// Sample data using placeholders
const IMAGES: GalleryImage[] = [
    { id: '1', src: 'https://api.dicebear.com/7.x/shapes/svg?seed=1&backgroundColor=f3f4f6', alt: 'Dining room view 1' },
    { id: '2', src: 'https://api.dicebear.com/7.x/shapes/svg?seed=2&backgroundColor=f3f4f6', alt: 'Dining room view 2' },
    { id: '3', src: 'https://api.dicebear.com/7.x/shapes/svg?seed=3&backgroundColor=f3f4f6', alt: 'Dining room view 3' },
    { id: '4', src: 'https://api.dicebear.com/7.x/shapes/svg?seed=4&backgroundColor=f3f4f6', alt: 'Dining room view 4' },
    { id: '5', src: 'https://api.dicebear.com/7.x/shapes/svg?seed=5&backgroundColor=f3f4f6', alt: 'Dining room view 5' },
];


const ListingImageSlider = () => {

    const [activeId, setActiveId] = useState<string>(IMAGES[0].id);

    const activeImage = IMAGES.find((img) => img.id === activeId) || IMAGES[0];
  return (
    <div className='w-full min-w-0 lg:flex-1 lg:max-w-[584px] text-center flex flex-col gap-3 sm:gap-5 justify-between'>
        <div className='h-[min(70vw,552px)] min-h-[240px] w-full rounded-[20px] sm:rounded-[30px] overflow-hidden'>
            <img className='object-cover h-full w-full'  src={activeImage.src} alt={activeImage.alt} />
        </div>
        <div className='flex gap-2 sm:gap-3 justify-start sm:justify-between overflow-x-auto'>
            {IMAGES.map((image) => {

                const isActive = image.id === activeId;

                return(
                    <button key={image.id} onClick={() => setActiveId(image.id)} 
                        className={`relative h-16 w-16 sm:h-20 sm:w-20 md:w-[98px] md:h-[98px] shrink-0 overflow-hidden rounded-2xl sm:rounded-[28px] transition-all duration-200
                            ${isActive ? 'ring-2 ring-[#003286] scale-95' : 'hover:opacity-80'}`}>

                            <img className='w-full h-full object-cover' src={image.src} alt="" />
                    </button>
                )
            })}
        </div>
    </div>
  )
}

export default ListingImageSlider