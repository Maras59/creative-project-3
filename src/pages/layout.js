import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quote Generator</Link>
          </li>
          
          <li>
            <a href="https://www.github.com">Github Repo</a>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;