import { Button } from "./ui/button"
import campaignBg from '../assets/images/campaignBg.png'
import rightCircle from '../assets/icons/RightCircle.svg'

interface CampaignBoxProps{
  tag : string;
  heading : string;
  arrowIcon : boolean;
  option1 : string;
  option2 : string;
}

const CampaignBox = ({ tag, heading, arrowIcon, option1, option2 } : CampaignBoxProps) => {
  return (
    <div id='c' className='min-h-[470px] px-4 py-12 sm:px-6 md:px-[77px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-[#003286] bg-cover' style={{ backgroundImage: `url(${campaignBg})` }}>
      <div className='w-full max-w-[570px] flex flex-col gap-3.75'>
          <div>
              <span className='font-WFVisualSans font-medium uppercase text-[rgba(255,255,255,0.76)]'>{tag}</span>
              <h1 className='font-SFNSExpanded max-w-[450px] text-white text-3xl md:text-[40px] leading-tight md:leading-11 [-webkit-text-stroke:1px_#ffffff]'>{heading}</h1>
          </div>
          <p className='font-WFVisualSans font-medium text-[rgba(255,255,255,0.75)]'>Join over 8,000 landlords who use camp to manage listings, screen applicants, and sign leases all in one place. No commission on rent</p>
      </div>

      <div className='w-fit flex flex-col gap-2.75'>
          <Button className='font-WFVisualSans text-white flex gap-2 items-center w-max h-max bg-[rgba(255,255,255,0.16)] px-[16px] py-[10px] rounded-[100px] border border-[rgba(255,255,255,0.5)] font-semibold'>
              <span>{option1}</span>
              {arrowIcon === true ? <img src={rightCircle} alt="" /> : undefined}
          </Button>
          <Button className='font-WFVisualSans bg-white h-max text-[#003286] font-semibold py-[10px] rounded-[100px]'>{option2}</Button>
      </div>

  </div>
  )
}

export default CampaignBox