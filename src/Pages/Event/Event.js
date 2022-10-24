import React from 'react'
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png"
import topbar from "../../assets/status-bar.svg";
import hero from "../../assets/hero.png";
import lock from "../../assets/lock.svg";
import reload from "../../assets/reload.svg";
import right from "../../assets/Symbol.svg";
import left from "../../assets/leftarrow.svg";
import line from "../../assets/realine.svg";
import copy from "../../assets/copy.svg";
import read from "../../assets/read.svg";
import upload from "../../assets/upload.svg";
import calendar from "../../assets/calendar.png";
import link from "../../assets/linki.png";
import location from "../../assets/location.png";

const Event = () => {

  const myData = JSON.parse(localStorage.getItem("mydata"))
  console.log(myData)


  return (
    <div className=" flex items-center justify-center ">
      <div className="py-4 xl:py-5 px-4 bg-bgcolor">
       <section>
           <img src = {banner} />
       </section>

        <section className="mt-16">
        <h1 className="text-darkblue bg-clip-text text-darkPurple text-4xl">{myData.eventName}</h1>
        <div className="text-base py-4">
            <p className="w-80 text-txt font-light text-base">
            👋 Hosted by {myData.hostName}
            </p>
          </div>
        </section>

        <section className="flex items-center justify-between mb-6 px-2 py-4 px-6 bg-white rounded-lg mt-6 opacity-2">
         <p>14 responses <span className='text-darkPurple'>.see guests</span></p>
         

         <div className='flex items-center justify-center bg-darkPurple w-20 h-10 rounded-lg'>
           <p className='text-white'>Invite</p>
         </div>

        </section>

        <section>
          <div className='flex justify-between px-4 mb-4'>
            <div className='bg-white rounded-lg flex items-center justify-center w-12 h-10'>
            <img src={calendar} className='w-6' />
            </div>
            <p className=""> {myData.start} <span>to {myData.end}</span></p>
            <img src={right} />
            
          </div>

          <div className='flex justify-between px-4 mb-4'>
            <div className='bg-white rounded-lg flex items-center justify-center w-12 h-10'>
            <img src={location} className='w-6' />
            </div>
            <p>{myData.location}</p>
            <img src={right} />
            
          </div>

          <div className='flex justify-between px-4 mb-4'>
            <div className='bg-white rounded-lg flex items-center justify-center w-12 h-10'>
            <img src={link} className='w-6' />
            </div>
            <p>Link</p>
            <img src={right} />
            
          </div>
        </section>

        <div className="flex items-center h-16 mt-2 justify-center">
            <button
              type="button"

              className="flex items-center rounded-lg text-white py-2 px-8 text-sm mx-4 bg-gradient-to-r from-darkPurple to-lightPurple"
            >
             

            <Link to="/create">  🎉 Create my event </Link>
            </button>
          </div>
        <hr/>
        <section className="bg-footer px-6 mb-4 ">

          <div className="flex justify-between mb-6 px-2 py-2 bg-grey rounded mt-6 opacity-2">
            <div className="inline-flex">
              <p className="text-xs">A</p>
              <p className="text-sm">A</p>
            </div>

            <div className="inline-flex">
              <img src={lock} />
              <p className="pl-2">domain.com</p>
            </div>
            <div>
              <img src={reload} />
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <img src={left} />
            <img src={right} />
            <img src={upload} />
            <img src={read} />
            <img src={copy} />
          </div>
          <div className="flex items-center justify-center">
            <img src={line} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Event