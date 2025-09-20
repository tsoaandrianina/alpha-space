import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
          <p className="my-2">-2025-</p>
          <p className="mars-font text-2xl my-4 text-center">alphaSpace, by Rahents</p>
          <p>resources : </p>
          <p>
            <Link to="/"> Nasa</Link> | <Link to="/">Nasa API</Link> | <Link to="/">Rahents chaine youtube</Link>
          </p>
          <p>
            <Link to="/">
              JWST
            </Link>
          </p>
            <p className="mb-8">
            <Link to="/">
              SNAPI API
            </Link>
          </p>
      </div>
    </footer>
  )
}

export default Footer
