import {useState} from 'react';
import '@/styles/globals.css'
import Link from 'next/link'
import Buttonv2 from '@/components/Buttonv2'
import Card from '@/components/Card'
import TextBline from '@/components/TextBline'
export default function Login() {
    const [type, setType] = useState("password")
    
    return (
        <div className="flex flex-col gap-5 m-auto top-10 h-[100vh] sm:top-0 justify-center items-center w-[90%] sm:w-[500px] relative">
            
            <Card>
            <form className='flex flex-col gap-4 '>
                <h1 className="text-3xl">Sign In</h1>
                <div className='border border-gray-300 p-2 rounded-sm flex'> <input className="flex-1 focus:outline-none" type="email" placeholder="Email"/></div>
                <div  className='border border-gray-300 p-2 rounded-sm flex '> <input className="flex-1 focus:outline-none" type={type} placeholder="Password"/><span onClick={()=>type=='password'?setType('text'):setType('password')}>Show</span></div>
                <div>Forgot password?</div>
                <Buttonv2 perform={function(){alert('Hello')}} text={"Login"}/>
                <TextBline text={'or'} />
                <Link href="/auth/signup"><Buttonv2 perform={function(){}} text={"Sign up"}/></Link>

            </form>
            </Card>
            
        </div>
    );
}