import LinkDesktop from "./LinkDesktop"
import LinkMobil from "./LinkMobil"

const Navbar = () => {
  return (
    <nav className="bg-black py-5">
      <div className="align-element">
        <LinkMobil />
        <LinkDesktop />
      </div>
    </nav>
  )
}

export default Navbar