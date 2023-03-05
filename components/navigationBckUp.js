import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/">BEE2BE-TECH</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/about">Quienes somos <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">Contactanos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jobs">Trabaja con nosotros</a>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/services" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Servicios
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" href="/outsourcing">Outsourcing</Link>
                <Link className="dropdown-item" href="/observatorio">Observatorio</Link>
                <Link className="dropdown-item" href="/marketing">Marketing 360</Link>
                <Link className="dropdown-item" href="/subvenciones">Subvenciones</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    
  );
};

export default Navigation;
