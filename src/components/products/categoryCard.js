export default function CategoriesCard({item}){

    return(
        <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div class="card card-span h-100 rounded-circle"><img class="img-fluid rounded-circle h-100" src={item.food.image} alt="..." />
          <div class="card-body ps-0">
            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">{item.food.category}</h5>
          </div>
        </div>
      </div>
    )
}