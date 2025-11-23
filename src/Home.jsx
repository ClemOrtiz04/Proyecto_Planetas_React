import Carrusel from './Carrusel.jsx';
import CardHome from './CardHome.jsx'

import './style/home.css'

export default function Home () {
    return (
        <>
            <Carrusel />
            <section className="container text-center my-5">
                <h1 className="mb-4">Explorando el Universo</h1>
                <p className="lead">Descubre los secretos del espacio, los planetas y las misiones que nos llevan más allá de las estrellas.</p>
                <CardHome />
            </section>
        </>
    )
}