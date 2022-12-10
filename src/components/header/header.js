import * as React from "react"
import { Link } from "gatsby"
import './header.css'
import Logo from "../../images/logo.png"

const Header = () => (
  <header>
    <div className="header-inner">
      <Link to="/">
        <img src={Logo} alt="ロゴ" className="h-logo"/>
      </Link>
      <ul className="right-contents">
        <li className="contact">
          <Link to="/contact">
            CONTACT
          </Link>
        </li>
        <li className="bars">
          <span className="line-1"></span>
          <span className="line-2"></span>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
