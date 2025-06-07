import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg newNav">
        <div className="container-fluid">
          <h1>
            <a className="navbar-brand" href="#">
              Harunzy Collection
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link  newNav"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link newNav">
                  Product
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  to="/contact"
                  className="nav-link dropdown-toggle newNav"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Women
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Children
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item newNav">
                <Link to="/contact" className="nav-link newNav">
                  About
                </Link>
              </li>
              <li className="nav-item newNav">
                <Link to="/contact" className="nav-link newNav">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
