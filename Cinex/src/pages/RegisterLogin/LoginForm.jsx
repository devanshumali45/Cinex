import React from 'react'
import PasswordField from '../../components/PasswordField';
import Back from "../../assets/back.jpg";
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return (
        <>
            <img src={Back} alt="background img" className='hidden md:block absolute -z-20 h-screen w-full saturate-200' />
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-stone-800 to-stone-950 -z-10 opacity-80'></div>
            <div className="flex h-screen items-center justify-center ">
                <div className='p-10 bg-black/60 rounded-lg space-y-8 max-w-lg'>
                    <div className='space-y-10'>
                        <h1 className='text-3xl  font-semibold text-white'>Sign In</h1>
                        <div className='space-y-5 '>
                            <input placeholder='Email' name="email" className='bg-zinc-600 text-white outline-0 px-6 h-12 rounded-md w-full' />
                            <PasswordField holder="Password" />
                        </div>
                        <button className='w-full text-white font-bold bg-red-600 py-3 rounded-lg'>Sign In</button>
                    </div>
                    <div className='flex'>
                        <p className='text-zinc-400'>New to Movix?</p>
                        <Link to={'/register'} className='text-white'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm