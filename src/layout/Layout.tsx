import { useState, type ReactNode } from "react";
import { NavLink } from "react-router";
import { OpenMenu, CloseMenu } from "../icons/icons";

export const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <div>
          <h1>Porthoquotes</h1>

          <button type="button" onClick={() => setShowNav(!showNav)} className="btn-nav">
            {showNav ? <CloseMenu /> : <OpenMenu />}
          </button>
        </div>

        <nav className={showNav ? "nav-active" : ""}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowNav(!showNav)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/qod" onClick={() => setShowNav(!showNav)}>
                Random quote
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" onClick={() => setShowNav(!showNav)}>
                Search posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        Quotes and posts provided by
        <a href="https://dummyjson.com/" target="_blank" title="Go to DummyJSON website">
          DummyJSON
        </a>
      </footer>
    </>
  );
};
