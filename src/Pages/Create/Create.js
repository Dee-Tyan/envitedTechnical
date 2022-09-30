import React, {useState} from "react";
import { Link } from "react-router-dom";
import line from "../../assets/realine.svg";




const Create = () => {

    const [eventName, setEventName] = useState("")
    const [hostName, setHostName] = useState("")
    const [location, setLocation] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [image, setImage] = useState([])

    
   
       const handleData = (e) => {
        e.preventDefault()
        displayData()
      
        
      }

      const displayData = () => {   
        let userData = [eventName, hostName, location, start, end, image];
        console.log(userData)
       } 


  return (
    <div className=" flex items-center justify-center ">
      <div className="py-4 xl:py-5 px-4 bg-bgcolor h-screen">
        <section className="text-center mt-16">
          <h1 className="text-darkPurple bg-clip-text bg-gradient-to-br from-darkPurple to-lightPurple text-4xl">
            Enter Your Details
          </h1>

          <div className="text-base text-center py-4">
            <p className="w-80 text-txt font-light text-base">
              Why wait for TGIF when you can have nonstop fun?
            </p>
          </div>

          <form className="px-8 py-16 bg-white rounded-md shadow-md" onSubmit={handleData}>
            <label className="grid text-sm text-dark text-txt">
              Event Name
              <input
                className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                type="text"
                name="eventname"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Snapchat Party"
              />
            </label>

            <label className="grid text-sm text-txt">
              Host Name
              <input
                className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                type="text"
                name="hostname"
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
                placeholder="Envited"
              />
            </label>

            <label className="grid text-sm text-txt">
              Location
              <input
                className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Virtual"
              />
            </label>

            <label className="grid text-sm text-txt">
              Start
              <input
                className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1"
                type="date"
                name="start"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="Did someone say Party?"
              />
            </label>

            <label className="grid text-sm text-txt">
              End
              <input
                className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1 mb-2"
                type="date"
                name="end"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="Mama called"
              />
            </label>

            {/* <label className="grid text-sm text-txt">
              <input
                className="border-gunmental border-2 opacity-60 rounded pl-2 mt-1 w-3 h-3"
                type="image"
                alt="send an id"
                onChange={(e) => setImage(e.target.value)}
              />
            </label> */}

            <label className="bg-darkPurple text-white px-2 py-2 mt-2 rounded-md">
              <input
                className=""
                type="submit"
                value="submit" 
              />
            </label>
          </form>
        </section>

        <hr />

        <div className="flex items-center h-16 mt-32 justify-center">
          <button
            type="button"
            className="flex items-center rounded-lg text-white py-2 px-8 text-sm mx-4 bg-gradient-to-r from-darkPurple to-lightPurple"

            onClick={displayData}
          >
            <Link to="/event"> NEXT </Link>
          </button>
        </div>
        <footer className="bg-footer px-6 mb-4 ">
          <div className="flex items-center justify-center">
            <img src={line} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Create;
