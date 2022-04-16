import troll from '../images/trollface.png'

function Header() {
  return (
    <header className="header">
      <div className="header--sitename">
        <img 
          src={ troll }
          alt="Troll face meme"
          className="header--logo"
        />
        <h1 className="header--title">Meme Generator</h1>
      </div>
      <h3 className="header--subtitle">React Course - Project 3</h3>
    </header>
  )
}

export default Header