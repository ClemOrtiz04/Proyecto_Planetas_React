export default function CardGaleria () {
    return (
        <>
            <div class="row g-3">
                <div class="col-md-4">
                    <img src="https://images.unsplash.com/photo-1447433819943-74a20887a81e" class="img-fluid rounded imagen-galeria" data-bs-toggle="modal" data-bs-target="#imgModal1" />
                </div>
                <div class="col-md-4">
                    <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" class="img-fluid rounded imagen-galeria" data-bs-toggle="modal" data-bs-target="#imgModal2" />
                </div>
                <div class="col-md-4">
                    <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031" class="img-fluid rounded imagen-galeria" data-bs-toggle="modal" data-bs-target="#imgModal3" />
                </div>
                </div>

                <div class="modal fade" id="imgModal1" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bg-dark">
                    <img src="https://images.unsplash.com/photo-1447433819943-74a20887a81e" class="img-fluid" alt="espacio" />
                    </div>
                </div>
                </div>

                <div class="modal fade" id="imgModal2" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bg-dark">
                    <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" class="img-fluid" alt="espacio" />
                    </div>
                </div>
                </div>

                <div class="modal fade" id="imgModal3" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bg-dark">
                    <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031" class="img-fluid" alt="espacio" />
                    </div>
                </div>
                </div>
        </>
    )
}