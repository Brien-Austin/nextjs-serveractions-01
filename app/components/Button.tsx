"use client"
import { Circle, CornerLeftUpIcon, Heading1, Instagram, ShoppingBag, Ticket } from 'lucide-react'

import TriggerServer from '../actions/TriggerServer';
import { useState, useTransition } from 'react';

export default function Button() {
    const [message , setMessage] = useState<string>("")
    const [response, setresponse] = useState<any>({})
    const [isLoaded, setTransition] = useTransition();
    const handleClick = async  () => {
        console.log("Button clicked from client ");
        setTransition(async() => {
            const response = await TriggerServer(message);
            console.log(response);
            setresponse(response)
        })


        
    }
    return (
        <>
            {isLoaded && <h1>Loading ...</h1>}
            <div className='border p-5 border-slate-500 rounded-xl flex justify-center flex-col items-center'>
                <input onChange={(e)=>(setMessage(e.target.value))} className='w-64 border border-slate-400 rounded-lg mb-10 h-16 px-3'required  type="text" placeholder='Say a message to Server' />
                 <button type='submit' onClick={handleClick} className="bg-green-600 rounded text-white px-5 py-3 flex justify-center items-center gap-5 "><span className='text-2xl'>Trigger Server</span>
            </button>

            </div>
           
            <br />
            <div>
                
            </div> 
            <pre>
                {
                    JSON.stringify(response,null,4)
                }
            </pre>
        </>
    )
}