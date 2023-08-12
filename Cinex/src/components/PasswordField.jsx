import React, { useState } from 'react'
import visi from "../assets/visi.svg";
import nonvisi from "../assets/nonvisi.svg";

const PasswordField = (props) => {
    const [isVis, setIsVis] = useState(true);

    return (
        <div className='flex  items-center w-full h-12'>
            <input placeholder={props.holder} type={isVis ? `password` : `text`} name="password" className='bg-zinc-600 text-white outline-0 px-6 h-full rounded-l-md w-full' />
            <div className='bg-zinc-600 pr-4 rounded-r-md h-full flex items-center'>
                <img src={isVis ? visi : nonvisi} className='w-8 text-white opacity-70' onClick={() => setIsVis(prev => !prev)} />
            </div>
        </div>
    )
}

export default PasswordField