const loadAllData = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayAllData(data.data.news_category))
}
loadAllData()
const displayAllData = allNews => {
  const place = document.getElementById('navber-news');
  allNews.forEach(news => {
    const div = document.createElement('div');
    // categoris.classList.add('btn');
    div.innerHTML = `
    <a id="show-all-news-length" onclick="showDetails('${news.category_id}')" class="nav-link" href="#">${news.category_name}</a>
    `
    place.appendChild('div')
  })
}
const showDetails = (id) => {
  loadSpinner(true)
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}
const displayDetails = categoryId => {
  const showNews = document.getElementById('show-all-news').innerText = categoryId.length
  const placeCard = document.getElementById('card-container')
  placeCard.innerHTML = '';
  categoryId.forEach(id => {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('col')
    cardDiv.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${id.thumbnail_url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${id.title}</h5>
          <p class="card-text cards">${id.details}</p>
          <div class="d-flex justify-content-around align-items-center">
         <div> <img class="img-fluid img" src="${id.author.img}" alt="">  ${id.author.name ? id.author.name : "No found name"}</div>
         <div class=""> 
        <p>  <p/>
        <p> <i class="fa-solid fa-eye"></i> ${id.total_view ? id.total_view : 'No data available'}</p>
         </div>
         <a onclick="detailModal('${id._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">  <i class="fa-solid fa-arrow-right"></i></a>
          </div>
      
        </div>
      </div>
    </div>
  </div>
    `
    placeCard.appendChild(cardDiv)
  })
  loadSpinner(false)
}


// loadNews();















// const displayNewsDetails = (newsDetails, allNews) => {
//     const newsDetailsContainer = document.getElementById('news-button');

//     newsDetails.forEach((categoeies) => {
//         const news = document.createElement('div');
//         categoeies.classList.add('buttons');
//         newsDiv.innerHTML = `
//       <div class=" d-flex justify-content-between ">
//        <button type="button" class="btn btn-light">${news.category_name}</button>
//       </div>
//         `;
//         newsDetailsContainer.appendChild(newsDetailsDiv);
//     })
// }
// document.getElementById('news-button').addEventListener('click', function () {
//     allNews();
//     const allNews = async (category_id) => {
//         const url = ` https://openapi.programming-hero.com/api/news/category/"${category_id}"`;
//         const res = await fetch(url);
//         const data = await res.json();
//         displayNews(data.data);
//     }
//     const displayNews = (allNews) => {
//         const newsContainer = document.getElementById('news-container');
//         allNews.forEach(news => {
//             const newsDiv = document.createElement('div');
//             newsDiv.classList.add('card');
//             newsDiv.innerHTML = `
//          <div class="row g-0">
//             <div class="col-md-4">
//                  <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
//             </div>
//             <div class="col-md-8">
//               <div class="card-body">
//                      <h5 class="card-title">${news.title}</h5>
//                     <p class="card-text">This is a wider card with supporting text below as a natural
//                          lead-in to
//                         additional content. This content is a little bit longer.</p>
//                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                  </div>
//                 <div>
//                    </div>
//              </div>
//           </div>
//         `;
//             newsContainer.appendChild(newsDiv);
//         })

//     }
// })
// loadNewsDetails();
