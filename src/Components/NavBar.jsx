export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg newNav">
            <div className="container-fluid">
                <h1><a className="navbar-brand" href="#">Harunzy Collection</a></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active newNav" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link newNav" href="#">Products</a>
                    </li>
                    <li className="nav-item dropdown newNav">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Men</a></li>
                        <li><a className="dropdown-item" href="#">Women</a></li>
                        <li><a className="dropdown-item" href="#">Children</a></li>
                    </ul>
                    </li>
                    <li className="nav-item newNav">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item newNav">
                    <a className="nav-link" href="#">Blog</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}