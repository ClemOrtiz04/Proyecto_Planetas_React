export default function Formulario () {
    return (
        <>
            <section class="mt-5">
                <div class="container col-md-8">
                    <div class="card bg-dark border-light shadow-lg p-4">
                    <h2 class="text-center text-light mb-4">Contáctanos</h2>
                    <p class="text-center text-secondary mb-4">¿Tienes una duda o te apasiona el universo tanto como a nosotros? Escríbenos y te responderemos pronto.</p>

                    <form>
                        <div class="mb-3">
                        <label for="nombre" class="form-label text-light">Nombre completo</label>
                        <div class="input-group">
                            <input type="text" class="form-control bg-transparent text-light border-secondary" id="nombre" placeholder="Tu nombre" />
                        </div>
                        </div>

                        <div class="mb-3">
                        <label for="correo" class="form-label text-light">Correo electrónico</label>
                        <div class="input-group">
                            <input type="email" class="form-control bg-transparent text-light border-secondary" id="correo" placeholder="nombre@ejemplo.com" />
                        </div>
                        </div>

                        <div class="mb-3">
                        <label for="asunto" class="form-label text-light">Asunto</label>
                        <input type="text" class="form-control bg-transparent text-light border-secondary" id="asunto" placeholder="Ej. Consulta sobre misiones" />
                        </div>

                        <div class="mb-3">
                        <label for="mensaje" class="form-label text-light">Mensaje</label>
                        <textarea class="form-control bg-transparent text-light border-secondary" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary w-100 fw-bold mt-3">Enviar Mensaje</button>
                    </form>
                    </div>
                </div>
                </section>
        </>
    )
}