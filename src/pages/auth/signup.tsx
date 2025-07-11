import {useState} from 'react';
import '@/styles/globals.css'
import Link from 'next/link'
import Buttonv2 from '@/components/Buttonv2'
import Card from '@/components/Card'
import TextBline from '@/components/TextBline'
export default function Signup() {
    const [type, setType] = useState("password")
    
    return (
        <div className="flex flex-col gap-5 m-auto top-10 h-[100vh] sm:top-0 justify-center items-center w-[90%] sm:w-[500px] relative">
            
            <Card>
            <form className='flex flex-col gap-4 '>
                <h1 className="text-3xl">Sign Up</h1>
                <div className='flex flex-col sm:flex-row w-full gap-2'>
                <div className='border flex-1 border-gray-300 p-2 rounded-sm flex'> <input className="flex-1 focus:outline-none" type="text" placeholder="First name"/></div>
                <div className='border flex-1 border-gray-300 p-2 rounded-sm flex'> <input className="flex-1 focus:outline-none" type="text" placeholder="Last name"/></div>
                </div>
                <div className='border flex-1 border-gray-300 p-2 rounded-sm flex'> <input className="flex-1 focus:outline-none" type="email" placeholder="email"/></div>
                <div  className='border border-gray-300 p-2 rounded-sm flex '> <input className="flex-1 focus:outline-none" type={type} placeholder="Password"/><span onClick={()=>type=='password'?setType('text'):setType('password')}>Show</span></div>
                <div  className='border border-gray-300 p-2 rounded-sm flex '> <input className="flex-1 focus:outline-none" type={type} placeholder="Retype Password"/><span onClick={()=>type=='password'?setType('text'):setType('password')}>Show</span></div>
                <div className='flex gap-2 items-center'><input type="checkbox"/> <Link href="#">Agree to Terms and conditions</Link></div>
                <Buttonv2 perform={function(){alert('Hello')}} text={"Sign up"}/>
                <TextBline text={'or'} />
                <span>Have an account?</span>
                <Link href="/auth/login"><Buttonv2 perform={function(){}}  text={"Login"}/></Link>

            </form>
            </Card>
            
        </div>
    );
}