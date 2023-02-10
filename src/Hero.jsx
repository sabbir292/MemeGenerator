import React from 'react'
import './index.css'



export default function Hero(){

    const [meme, SetMeme] = React.useState({
        topText:"",
        bottomText:"", 
        url:"https://i.imgflip.com/1ur9b0.jpg"
    })



    const [allMemes, setAllMemes] = React.useState([])

        
    React.useEffect(()=>{
            fetch("https://api.imgflip.com/get_memes")
                .then(res=> res.json())
                .then(data=>setAllMemes(data.data.memes))
        },[])



        function handleChange(event){
            const {name,value} = event.target
            SetMeme(prevMeme =>({
                ...prevMeme,
                [name]:value
            }))
        }

    function handleClick(){
        let randomNum = Math.floor(Math.random()*allMemes.length)
        let randomUrl = allMemes[randomNum].url
        
        SetMeme(prevMeme=>{
            return{
                ...prevMeme,
                url:randomUrl
            }
        })

    }
    return(
        <section className='main'>
            <form className='input-container'>
                <input 
                type='text' 
                className ='toptext input'
                name='topText'
                onChange={handleChange}
                value={meme.topText}
                />
                <input 
                type='text' 
                className ='bottomtext input'
                name='bottomText'
                onChange={handleChange}
                value={meme.bottomText}
                />
            </form>
                <button onClick={handleClick} className = 'getImgBtn'>Get new meme image🖼️</button>
                <div className='meme-img'>
                    <img src={meme.url}/>
                <h2 className='top-text'>{meme.topText}</h2>
                <h2 className='bottom-text'>{meme.bottomText}</h2>
                </div>

        </section>
    )
}