
export const NavBar = () => {
    return(
        <div>
            <header>
        
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-2 pb-2">
                    <div className="container d-flex justify-content-lg-around">
                    <a className="navbar-brand" href="index.html"><img width="100" height="100" src="https://barilocheoutdoor.com/wp-content/uploads/2021/07/logo.webp" alt="Bariloche Outdoor logo" loading="lazy"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 botones">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="index.html">Camping</a></li>
                            <li><a className="dropdown-item" href="index.html">Montaña</a></li>
                            <li><a className="dropdown-item" href="index.html">Kayaks</a></li>
                            <li><a className="dropdown-item" href="index.html">Bicis</a></li>
                            <li><a className="dropdown-item" href="index.html">Ski</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Carrito</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Contacto</a>
                        </li>
                        
                        </ul>
                        <form className="d-flex">
                        <input className="form-control me-2 formBuscar" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-light formBuscar" type="submit">Buscar</button>
                        </form>
                    </div>
                    </div>
                </nav>

            </header>
        </div>
    )

}

