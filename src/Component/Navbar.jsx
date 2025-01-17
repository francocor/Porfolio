import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="logo">
                <ul className="nav-links">
                    <li><a href="#hero"></a>Inicio</li>
                    <li><a href="#about"></a>Sobre mi</li>
                    <li><a href="#proyects"></a>Proyectos</li>
                    <li><a href="#skills"></a>Habilidades</li>
                    <li><a href="#contact"></a>Contacto</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar