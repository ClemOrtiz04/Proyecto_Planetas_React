import CardGaleria from './CardGaleria.jsx'
import Formulario from './Formulario.jsx'
import './style/galeria.css'

export default function Galeria () {
    return (
        <>
            <main class="container mt-5 pt-5">
                <h1 class="text-center mb-4">Galería Astronómica</h1>
                <CardGaleria />
                <Formulario />
            </main>
            
        </>
    )
}