import './index.css'

export default function Header(){
    return(
        <nav className='navbar'>
            <img className='logo-img' src='/trollface.png'/>
            <h3 className='logo-text'>Meme Generator</h3>
            <p className='logo-sub-text'>React Course - Project 3</p>
        </nav>
    )
}