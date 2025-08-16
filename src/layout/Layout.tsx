import { useState, type ReactNode } from "react";
import { NavLink } from "react-router";
import { OpenMenu, CloseMenu } from "../icons/icons";

export const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <div>
          <h1>Porthocitas</h1>
          <button type="button" onClick={() => setShowNav(!showNav)} className="btn-nav">
            {showNav ? <CloseMenu /> : <OpenMenu />}
          </button>
        </div>

        <nav className={showNav ? "nav-active" : ""}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowNav(!showNav)}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/qod" onClick={() => setShowNav(!showNav)}>
                Cita del día
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        Inspirational quotes provided by
        <a href="https://zenquotes.io/" target="_blank">
          ZenQuotes API
        </a>
      </footer>
    </>
  );
};
