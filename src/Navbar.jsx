import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home.jsx'
import Exploracion from './Exploracion.jsx'
import Galeria from './Galeria.jsx'
import Planetas from './Planetas.jsx'

export default function Navbar () {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link to='/' className="navbar-brand">UniversAndre</Link>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/planetas' className="nav-link">Planetas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/exploracion' className="nav-link">Exploración</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/galeria' className="nav-link">Galeria</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path = '/' element = { <Home />} />
                    <Route path = '/exploracion' element = { <Exploracion />} />
                    <Route path = '/galeria' element = { <Galeria />} />
                    <Route path = '/planetas' element = { <Planetas />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}