const loadNews = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  newsCategory(data.data.news_category);
}
const newsCategory = allNews => {
  const categoryContainer = document.getElementById('news-button');
  allNews.forEach(news => {
    const categoris = document.createElement('div');
    categoris.classList.add('btn');
    categoris.innerHtml = `
    <div class=" text-center d-flex">
      <button type="button" class="btn btn-light ">${news.category_name}</button>
        </div>
            `;
    categoryContainer.appendChild(categoris);

  });
}
const showDetails = async () => {
  loadSpinner(true)
  const url = ``;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
}
const displayDetails = categoryId => {
  const showNews = document.getElementById()
}


loadNews();















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
