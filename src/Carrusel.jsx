export default function Carrusel () {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active imagenes-carrusel">
                    <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa" className="d-block w-100" alt="Imagen Espacio" />
                    </div>
                    <div className="carousel-item imagenes-carrusel">
                    <img src="https://plus.unsplash.com/premium_photo-1722018576685-45a415a4ff67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXNwYWNpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" className="d-block w-100" alt="Imagen Espacio" />
                    </div>
                    <div className="carousel-item imagenes-carrusel">
                    <img src="https://plus.unsplash.com/premium_photo-1685697414658-ba6e19f7b308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVzcGFjaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" className="d-block w-100" alt="Imagen Espacio" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}