import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
// import { Button } from './ui/button'
import { Eye, EyeOff } from "lucide-react"
import campLogo from "../assets/icons/campLogo.svg"
import rightBg from "../assets/images/loginRightBg.png"
import leftBg from "../assets/images/loginLeftBg_crop.png"
import pic1 from "../assets/images/login_1.jpg"
import pic2 from "../assets/images/login_2.png"
import pic3 from "../assets/images/login_3.png"

type formFields = {
    email: string,
    phoneNumber: string,
    userName : string,
    passWord: string,
    isAgreed : boolean
}

const Login = () => {

    const { register, handleSubmit, formState : { errors, isSubmitting }, unregister } = useForm<formFields>({
        defaultValues: {
        email: "miraclediamond99@gmail.com",
        phoneNumber: "",
        userName: "testauthenticate",
        
    },
    shouldUnregister: false
    })
    const [useEmail, setUseEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()


    const onSubmit : SubmitHandler<formFields> = async (data) => {

        const { isAgreed, ...formData } = data

        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log(formData)
        navigate("/verifyOTP")
    }

    // useEffect(() => {
    //     if (useEmail) {
    //         unregister("phoneNumber")
    //     } else {
    //         unregister("email")
    //     }
    //     }, [useEmail, unregister])

  return (
    <div className='h-[100dvh] flex'>

        <div className='flex-1 flex justify-center bg-right bg-auto bg-no-repeat items-center' style={{ backgroundImage: `url(${leftBg})` }}>
            <div className='w-[482px]'>
                <h1 className='text-[20px] font-SFNSExpanded [-webkit-text-stroke:0.5px_#003286] text-center text-[#003286] mb-[15px]'>Get Right Back</h1>
                <p className='text-[16px] text-center font-WFVisualSans opacity-50 font-medium mb-[38px]'>Please fill in the information to proceed.</p>
                <form action="" onSubmit={handleSubmit(onSubmit)} className=''>
                    {useEmail ? (
                        <input className='block h-13.5 w-full font-StackSansHeadline text-[14px] border border-[#BDBDBD8F] rounded-[100px] pl-5.5 py-4.5 mb-[15px] focus:outline-none' {...register('email', {required : "Email Incorrect", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" }})} type="email" placeholder='Enter Email' />

                       ) : (
                         <div className='text-[14px] h-13.5 gap-1 flex items-center border border-[#BDBDBD8F] font-StackSansHeadline rounded-[100px] pl-5.5 mb-[15px]'>
                        <span>+234 <span className='text-gray-300'>-</span></span>
                        <input className='block flex-1 h-full rounded-r-[100px] py-4.5 focus:outline-none ' {...register('phoneNumber', {required : "Phone Number Incorrect", pattern: { value: /^[0-9]{10,11}$/, message: "Invalid phone number" }})} type="text" placeholder='XXX XXXX XXX' />
                        </div>
                    )}
                    {errors.phoneNumber && (
                        <div className='text-red-500 text-[10px]'>{errors.phoneNumber.message}</div>
                    )}
                    {/* <input clad-[100px] pl-5.5 py-4.5 focus:outline-none' {...register('password', {required : "Password Incorrect", minLength: { value: 8, message: "Password must be at least 8 characters" }})} type="password" placeholder='Enter Password' /> */}
                    <div className='text-[14px] h-13.5 gap-1 flex items-center border border-[#BDBDBD8F] font-StackSansHeadline rounded-[100px] pl-5.5 pr-5.5 mb-[15px]'>
                        <input className='block flex-1 h-full rounded-r-[100px] py-4.5 focus:outline-none ' {...register('passWord', {required : "Password Incorrect", minLength: { value: 8, message: "Password must be at least 8 characters" }})} type={showPassword ? "text" : "password"} placeholder='Enter Password' />
                        <button type="button" className="h-full" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                            <EyeOff className="h-5 w-5 text-[#003286]" />
                            ) : (
                            <Eye className="h-5 w-5 text-[#003286]" />
                            )}
                        </button>
                    </div>
                    {errors.passWord && (
                        <div className='text-red-500 text-[10px]'>{errors.passWord?.message}</div>
                    )}
                    <div className='mt-[5px] mb-[38px] flex justify-between'>
                        <button className='font-StackSansHeadline signUpAnchorTags' type='button' onClick={() => setUseEmail(!useEmail)}>{useEmail ? "Use Phone Number" : "Use Email"}</button>
                        <button className='font-StackSansHeadline signUpAnchorTags px-2 bg-white/9 backdrop-blur-xl border border-white/20 rounded-[100px]'>Forget Password?</button>
                    </div>
                    {/* <div className='h-[50px] w-fit px-[13px] justify-self-center mb-[20px] flex gap-3 items-center justify-center rounded-[100px] bg-[#F8F8F8] text-[14px] font-medium font-StackSansHeadline text-[#7E7E7E]'>
                        <input className="appearance-none w-5 h-5 bg-gray-300 rounded-full border-none checked:bg-[#003286] bg-[url(/tick.svg)] bg-center bg-no-repeat" type="checkbox" {...register('isAgreed', {required : true})} />
                        <p>I have agree to the <a className='signUpAnchorTags underline' href="#">terms & Condition</a> and <a className='signUpAnchorTags underline' href="#"> Privacy Policy</a></p>
                    </div> */}
                    {/* <Link to={"/verifyOTP"}> */}
                        <button className='block h-[60px] mb-[20px] w-full p-1.75 bg-[#003286] rounded-[100px] font-WFVisualSans font-semibold text-white' disabled={isSubmitting} type="submit">{isSubmitting ? "Hold..." : "Login"}</button>
                    {/* </Link> */}
                </form>
                <p className='font-medium text-center text-[14px] text-[#3C4A42] font-WFVisualSans'>Don’t have an account? <a className='underline font-WFVisualSans font-bold cursor-pointer' onClick={() => navigate("/signup")}>Create an account</a></p>
            </div>
        </div>
        <div className='flex-1 bg-left bg-auto bg-no-repeat bg-[#003286]' style={{ backgroundImage: `url(${rightBg})` }}>
            {/* <img className='mt-[45px] ml-[45px]' src={campLogo} alt="" /> */}
            <div className='h-full justify-self-end flex gap-[17px] mr-[23px]'> {/* Column */}
                <div className='w-[151px] h-full flex gap-[20px] flex-col'>
                    <div className='h-[154px] overflow-hidden rounded-br-[100px]'>
                        <img className='h-full w-full object-center' src={pic1} alt="" />
                    </div>
                    <div className='flex-1 overflow-hidden rounded-tl-[100px] rounded-br-[100px]'> {/* or h-[307px] */}
                        <img className='h-full w-full object-center' src={pic2} alt="" />
                    </div>
                    <div className='h-[154px] rounded-tl-[100px] content-end glass-card'>
                        <p className='text-center h-[106px] content-center font-WFVisualSans font-bold text-[26px] text-white'>Stopping<br/>Greed</p>
                    </div>
                </div>

                <div className='w-[151px] h-full flex gap-[20px] flex-col'>
                    <div className='flex-1 rounded-b-[100px] content-center glass-card stopTop'>
                        <p className='text-center leading-8 font-WFVisualSans font-bold text-[32px] text-white'>No<br/>More<br/>Agent<br/>Wahala</p>
                    </div>
                    <div className='h-[151px] rounded-full glass-card'></div>
                    <div className='flex-1 overflow-hidden rounded-tl-[100px]'>
                        <img className='h-full w-full object-center' src={pic3} alt="" />
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Login