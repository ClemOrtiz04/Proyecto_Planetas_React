import CardPlaneta from './CardPlaneta.jsx'

import './style/planeta.css'

export default function Planetas () {
    return (
        <>
            <main class="container mt-5 pt-5">
                <h1 class="text-center mb-4">Planetas del Sistema Solar</h1>
                <CardPlaneta />
            </main>
        </>
    )
}