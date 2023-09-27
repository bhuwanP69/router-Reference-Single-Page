import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="fixed w-full flex  justify-between">
          <h1>Jobarouter</h1>
          <Link   smooth to="home" className="cursor-pointer">Home</Link>
          <Link  smooth to="about" spy={true} duration={500} className="cursor-pointer">About</Link>
          <Link  smooth to="services" spy={true} duration={500} className="cursor-pointer">Services</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}