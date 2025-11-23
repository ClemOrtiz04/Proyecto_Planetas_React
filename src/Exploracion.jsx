import AcordeonMisiones from "./AcordeonMisiones"
import TablaMisiones from "./TablaMisiones"
import './style/exploracion.css'

export default function Exploracion () {
    return (
        <>
            <main class="container mt-5 pt-5">
                <h1 class="text-center mb-4">Exploración Espacial</h1>
                <div class="alert alert-info text-center mb-4">¡Nuevo lanzamiento de la misión Artemis programado para 2025!</div>

                <AcordeonMisiones />
                <h3 class="mt-5">Misiones Futuras</h3>
                <TablaMisiones />
            </main>
        </>
    )
}