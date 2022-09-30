import React from 'react'
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

const Event = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="py-4 xl:py-5 px-4 bg-bgcolor">
       <section>
           <img src = {banner} />
       </section>

        <section className="mt-16">
        <h1 className="text-darkPurple bg-clip-text text-darkPurple text-4xl">Birthday Bash</h1>
        <div className="text-base text-center py-4">
            <p className="w-80 text-txt font-light text-base">
              Hosted by Elysia
            </p>
          </div>
        </section>
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