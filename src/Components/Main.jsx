import React from 'react'
import wizCode from "../Images/Aymane Jeddad.jpg"


function Main() {
  return (
    <div>
        <div className="forms">
         <form>
         <input type="text" name="title" placeholder="Top text" />
          <input type="text" name="desc" placeholder="Bottom Text"/>
          <br />
          <button>Get a new meme image </button>
         </form>
        </div>

        <div className="image">
          <img src={wizCode} alt="wizCode" />
        </div>
    </div>
  )
}

export default Main