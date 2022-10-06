

export default function Card(){

    return(
    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div class="card card-span h-100 rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/thai-soup.png" alt="..." />
        <div class="card-body ps-0">
            <h5 class="fw-bold text-1000 text-truncate mb-1">Thai Soup</h5>
            <div><span class="text-warning me-2"><i class="fas fa-map-marker-alt"></i></span><span class="text-primary">Foody Man</span></div><span class="text-1000 fw-bold">$2.79</span>
        </div>
        </div>
        <div class="d-grid gap-2"><a class="btn btn-lg btn-danger" href="#!" role="button">Order now</a></div>
    </div>
  )
}