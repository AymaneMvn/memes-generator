import { useState } from "react";
import "./App.css";
import memesData from "./memesData";

export default function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = useState(memesData)


function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

  return (
    <div className="container">
      <div className="form">
        <header>
          <nav>
            <h1>Meme Generator</h1>
            <p>React Js - Aymen Je</p>
          </nav>
        </header>

        <div className="forms">
          <form>
            <input
              type="text"
              name="text1"
              placeholder="Top text"
              onChange={handleChange}
            />
            <input
              type="text"
              name="text2"
              placeholder="Bottom Text"
              onChange={handleChange}
            />
            <br />
            <button type="button" onClick={getMemeImage}>
              Get a new meme image
            </button>
          </form>
        </div>

        <div className="image">
          <div className="content">
            <h1>{meme.text1}</h1>
            <h1>{meme.text2}</h1>
          </div>
          <img src={meme.randomImage} alt="wizCode" className="wizCode" />
        </div>
      </div>
    </div>
  );
}
