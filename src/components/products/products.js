import Card from "./productCard";

export default function Products(){

    return(
        <section className="py-4 overflow-hidden">

        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Popular Foods</h5>
            </div>
            <div className="col-12">
              <div className="carousel slide" id="carouselPopularItems" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row gx-3 h-100 align-items-center">
                      
                      
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                  </div>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </section>
    )
}