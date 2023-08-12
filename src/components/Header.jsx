import { Link } from "react-router-dom";
import "../styles/main.css";

function Header() {
  return (
    <header className="flex flex-col justify-center items-center h-[8rem] bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow mb-10">
        <h1 className="p-3 shadow-text text-4xl text-white text-center font-bold header-title">Pokedex</h1>
        <div className="flex">
          <Link className="p-2 text-xl transition-all hover:text-red-300 hover:font-bold" to="/">Home</Link>
          <Link className="p-2 text-xl transition-all hover:text-red-300 hover:font-bold" to="/favorites">Favorites</Link>
        </div>
    </header>
  )
}

export default Header