"use client";
import React from 'react';
import { Vortex } from "@/components/ui/vortex";
function page() {
  return (
    <div className="min-h-screen text-2xl text-white bg-black  py-12 pt-36">
         <Vortex
        className=" flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
       >
       <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
       <p className="max-w-xl text-center mb-8 ">We are here to help! Feel free to reach out with any queries you might have, and I'll do my best to provide the information you need.</p>
       <div>
        <form className="flex flex-col gap-4 ">
            <input type="text" name="email" className="border-white border-2 w-[568px] rounded-md "   placeholder="email"/>
            <textarea name="body-text" className="border-white  border-2 h-[320px] rounded-md w-[568px]" placeholder="Message"></textarea>
            <button type="submit" className="bg-purple-300 text-[1.4rem] py-1.5 hover:bg-purple-400 hover:text-[1.5rem] rounded-md w-[170px]">Send Message</button>
        </form>   
       </div>

       </Vortex>
    </div>
  )
}

export default page
