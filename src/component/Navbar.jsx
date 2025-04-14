import React, {useState} from "react";
import "./Navbar.css";

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const closeNav = () => setIsNavCollapsed(true);

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand brandname" href="#home">
                    <b className="navname">Thesaif</b>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home" onClick={closeNav}>
                                <b>Home</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#about" onClick={closeNav}>
                                <b>About</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#projects" onClick={closeNav}>
                                <b>Projects</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#skills" onClick={closeNav}>
                                <b>Skills</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#contact" onClick={closeNav}>
                                <b>Contact</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
