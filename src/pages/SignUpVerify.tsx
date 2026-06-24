"use client"
import { useForm, type SubmitHandler, Controller } from 'react-hook-form'
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { useNavigate } from 'react-router-dom'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import campLogo from "../assets/icons/campLogo.svg"
import signUpImage from "../assets/images/signup.png"

type formFields = {
    otp: string
}


const SignUpVerify = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, control } = useForm<formFields>()
    const onSubmit : SubmitHandler<formFields> = (data) => {
        console.log(data)
        navigate("/home")
    }

  return (
    <div>
        <div className='h-screen flex'>

            <div className='flex-1 flex justify-center items-center bg-white'>

                <div className="w-[482px] h-max flex flex-col items-center">
                    <h1 className='text-[20px] font-SFNSExpanded [-webkit-text-stroke:0.5px_#003286] text-center text-[#003286] mb-[15px]'>Enter Verification Code</h1>
                    <p className='text-center font-WFVisualSans opacity-50 font-medium mb-[26px]'>Please enter the  6-digit code was sent to +234...566.</p>
                    <form className="flex flex-col items-center" action="" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="otp"
                            control={control}
                            rules={{ required: true, minLength: 6 }}
                            render={({ field }) => (
                                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} containerClassName="gap-[10px] mb-[26px]" value={field.value} onChange={field.onChange}>
                                <InputOTPGroup className="h-[93px] border border-[#BDBDBD8F] rounded-[100px]">
                                    <InputOTPSlot className="w-[55px] h-full border-none rounded-[100px]" index={0} />
                                </InputOTPGroup>
                                <InputOTPGroup className="h-[93px] border border-[#BDBDBD8F] rounded-[100px]">
                                    <InputOTPSlot className="w-[55px] h-full border-none rounded-[100px]" index={1} />
                                </InputOTPGroup>
                                <InputOTPGroup className="h-[93px] border border-[#BDBDBD8F] rounded-[100px]">
                                    <InputOTPSlot className="w-[55px] h-full border-none rounded-[100px]" index={2} />
                                </InputOTPGroup>
                                <InputOTPGroup className="h-[93px] border border-[#BDBDBD8F] rounded-[100px]">
                                    <InputOTPSlot className="w-[55px] h-full border-none rounded-[100px]" index={3} />
                                </InputOTPGroup>
                                <InputOTPGroup className="h-[93px] border border-[#BDBDBD8F] rounded-[100px]">
                                    <InputOTPSlot className="w-[55px] h-full border-none rounded-[100px]" index={4} />
                                </InputOTPGroup>
                                <InputOTPGroup className="h-[93px] border border-[#BDBDBD8F] rounded-[100px]">
                                    <InputOTPSlot className="w-[55px] h-full border-none rounded-[100px]" index={5} />
                                </InputOTPGroup>
                                </InputOTP>
                            )}
                            />
                        <button type='button' className="text-[14px] text-[#003286] rounded-[100px] px-[15px] py-[13px] bg-[#F8F8F8] font-WFVisualSans font-medium underline mb-[33px]">Resend Code</button>
                        <button type="submit" className="h-[60px] w-full text-[16px] bg-[#003286] rounded-[100px] p-[7px] text-white font-WFVisualSans font-semibold">Continue</button>
                    </form>
                </div>

            </div>

            <div className='flex-1 bg-cover' style={{ backgroundImage: `url(${signUpImage})` }}>
                <img className='mt-[45px] ml-[45px]' src={campLogo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SignUpVerify