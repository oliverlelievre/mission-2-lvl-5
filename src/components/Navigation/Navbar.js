import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const path = window.location.pathname;
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Turners Cars
      </Link>
      <div class="navbar__bars">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div class="navbar__menu">
        <ul>
          <CustomLink class="navbar__menu--link" to="/pricing">
            Pricing
          </CustomLink>
          <CustomLink class="navbar__menu--link" to="/about">
            About
          </CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
