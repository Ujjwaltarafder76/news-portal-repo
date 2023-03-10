const loadingSpinner = isLoading => {
  const pulseSpinner = document.getElementById('pulse-spinner');
  if (isLoading) {
    pulseSpinner.classList.remove('hidden')
  } else {
    pulseSpinner.classList.add('hidden')
  }

}
loadingSpinner(false)

const loadNewsPortal = async () => {

  const url = `https://openapi.programming-hero.com/api/news/categories`
  try {
    const response = await fetch(url)
    const data = response.json()
    return data
  }
  catch (error) {
    console.log(error);
  }


}
const displayCatagorisNewsPortal = async () => {
  const displayCatagoris = await loadNewsPortal()


  const catagorisContainer = document.getElementById('catagories-container');
  displayCatagoris.data.news_category.forEach(data => {

    const div = document.createElement('div');
    div.classList.add('md:px-3')
    div.innerHTML = `
      
      <button class="focus:ring-2 py-2 px-3 rounded " onclick="dynamicData(${data.category_id})">${data.category_name} </button>
      `
    catagorisContainer.appendChild(div)

  })

}
displayCatagorisNewsPortal()



const dynamicData = (data) => {
  loadingSpinner(true)
  fetch(`https://openapi.programming-hero.com/api/news/category/0${data}`)
    .then(res => res.json())
    .then(result => displayData(result.data))

}
dynamicData(1);


const displayData = (data) => {

  data.sort((a, b) => b.total_view - a.total_view);
  console.log(data);

  // counting...........
  const lengthCount = document.getElementById('length-count');
  lengthCount.innerText = data.length

  // items.........
  if (data.length === 0) {
    lengthCount.innerText = 'No '
    loadingSpinner(false)
  }
  //  cards.............
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';

  data.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('py-5')
    // classList.........
    div.innerHTML = `
      <div class="card card-side bg-base-100 shadow-xl  lg:flex-nowrap flex-wrap ">
      <img src="${element.image_url}" alt="Movie" class="lg:w-1/3 ">

            <div class="card-body">
            <h2 class="card-title">${element.title}</h2>
            <p class="py-4">${element.details.slice(0, 200) + '...'} </p>
            <div class="flex justify-between items-center flex-wrap gap-4 content-center">
            <div class="flex gap-3 items-center">
                <div><img src="${element.author.img}" alt="" class="w-10 h-10 rounded-full">
                </div>
                <div>
                    <h1>${element.author.name ? element.author.name : 'N/A'}</h1>
                    <h1>${element.author.published_date}</h1>
                </div>
            </div>
            <div><i class="fa-regular fa-eye"></i> ${element.total_view ? element.total_view : 'No view'}</div>
            <div> ${element.rating.number} ${element.rating.badge}</div>
            <div class="sm:pr-10 sm:pb-4">
            <!-- The button to open modal -->
            <label onclick="modalBody('${element._id}')" for="my-modal-3" class=" cursor-pointer modal-button"><i title="Click for more details" class="fa-solid textColor text-2xl   sm:absolute sm:hover:pl-8  fa-arrow-right-long"></i></label>

      
            </div>
        </div>
        </div>
            

              
          </div>
 `;
    cardContainer.appendChild(div)


    loadingSpinner(false)
  })
}

const modalBody = (news_id) => {
  const url = (`https://openapi.programming-hero.com/api/news/${news_id}`)
  fetch(url)
    .then(res => res.json())
    .then(result => displayModal(result.data[0]))
}
const displayModal = (data) => {

  const modalContainer = document.getElementById('modal-news-box');
  modalContainer.innerHTML = `
  <div class="card">
  <img src="${data.image_url}" alt="Movie" >
  <h2 class="card-title">${data.title}</h2>
  <p class="py-4">${data.details} </p>
</div>
  `
}
