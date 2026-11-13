import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
// import { Button } from './ui/button'
import { Eye, EyeOff } from "lucide-react"
import campLogo from "../assets/icons/campLogo.svg"
import signUpImage from "../assets/images/signup.png"

type formFields = {
    email: string,
    phoneNumber: string,
    userName : string,
    passWord: string,
    isAgreed : boolean
}

const SignUp = () => {

    const { register, handleSubmit, formState : { errors, isSubmitting }, unregister } = useForm<formFields>({
        defaultValues: {
        // email: "miraclediamond99@gmail.com",
        // phoneNumber: "",
        userName: "testauthenticate",
        
    },
    shouldUnregister: false
    })
    const [useEmail, setUseEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()


    const onSubmit : SubmitHandler<formFields> = async () => {

        await new Promise((resolve) => setTimeout(resolve, 2000))
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
    <div className='min-h-screen flex flex-col md:flex-row'>

        <div className='flex-1 bg-white flex justify-center items-center py-10 md:py-8'>
            <div className='w-full max-w-[482px] px-5 sm:px-8'>
                <h1 className='text-[20px] font-SFNSExpanded [-webkit-text-stroke:0.5px_#003286] text-center text-[#003286] mb-[15px]'>Sign Up</h1>
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
                    <div className='mt-[5px] mb-[28px] sm:mb-[38px] flex flex-wrap gap-3 justify-between'>
                        <button className='font-StackSansHeadline signUpAnchorTags' type='button' onClick={() => {
                            if (useEmail) {
                                unregister("email");       // Wipes email data if switching to phone
                            } else {
                                unregister("phoneNumber"); // Wipes phone data if switching to email
                            }
                            setUseEmail(!useEmail);
                        }}>{useEmail ? "Use Phone Number" : "Use Email"}</button>
                        <a className='font-StackSansHeadline signUpAnchorTags' href="#">Forget Password?</a>
                    </div>
                    <div className='min-h-[50px] w-full sm:w-fit px-3 sm:px-[13px] justify-self-center mb-[20px] flex gap-3 items-center justify-center rounded-[24px] sm:rounded-[100px] bg-[#F8F8F8] text-[12px] sm:text-[14px] font-medium font-StackSansHeadline text-[#7E7E7E]'>
                        <input className="appearance-none w-5 h-5 bg-gray-300 rounded-full border-none checked:bg-[#003286] bg-[url(/tick.svg)] bg-center bg-no-repeat" type="checkbox" {...register('isAgreed', {required : true})} />
                        <p>I have agree to the <a className='signUpAnchorTags underline' href="#">terms & Condition</a> and <a className='signUpAnchorTags underline' href="#"> Privacy Policy</a></p>
                    </div>
                    {/* <Link to={"/verifyOTP"}> */}
                        <button className='block h-[60px] mb-[20px] w-full p-1.75 bg-[#003286] rounded-[100px] font-WFVisualSans font-semibold text-white' disabled={isSubmitting} type="submit">{isSubmitting ? "Processing..." : "Register"}</button>
                    {/* </Link> */}
                </form>
                <p className='font-medium text-center text-[14px] text-[#3C4A42] font-WFVisualSans'>Already have an account? <a className='underline font-WFVisualSans font-bold cursor-pointer' onClick={() => navigate("/login")}>Login</a></p>
            </div>
        </div>
        <div className='hidden md:block md:flex-1 min-h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${signUpImage})` }}>
            <img className='mt-8 ml-8 lg:mt-[45px] lg:ml-[45px]' src={campLogo} alt="Camp" />
        </div>

    </div>
  )
}

export default SignUp