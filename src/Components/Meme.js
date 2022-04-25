import React from 'react'
import {memesData} from '../memesData';

const Meme = () => {

  const [meme, setMeme]  = React.useState({
      topText: '',
      bottomText: '',
      randomImage: "https://i.imgflip.com/1g8my4.jpg",
  }) 
  
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage(e) {
      e.preventDefault();
      const memesArray = allMemeImages.data.memes 
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMeme(prevState => ({
          ...prevState,
          randomImage: url
      }))
  }
// const [allMemeImages, setAllMemeImages] = React.useState({
//     topText: '',
//     bottomText: '',
//     randomImage: "https://i.imgflip.com/16iyn1.jpg",
//   })

//   const memesArray = memesData.data.memes
//   const randomNumber = Math.floor(Math.random() * memesArray.length)

//   let meme = allMemeImages.randomImage ? "https://i.imgflip.com/16iyn1.jpg" : memesArray[randomNumber].url

//   function getMemeImage(e) {
//     e.preventDefault();
//     // const memesArray = memesData.data.memes 
//     // const randomNum = Math.floor(Math.random() * memesArray.length);
//     // setMemeImage(memesArray[randomNum].url)
//     setAllMemeImages(prevState => ({
//       ...prevState,
//       randomImage: !prevState.randomImage
//     }))
//   }

  return (
    <div>
        <form className="form">
            <input className="form--input" type="text" placeholder="Top Text" />
            <input className="form--input" type="text" placeholder="Bottom Text" />
            <button onClick={getMemeImage} className="form--button">Get a new image</button>
        </form>
        <img className="meme--img" src={meme.randomImage} />
        
    </div>
  )
}

export default Meme