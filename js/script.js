const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displaynews(data.data.news_category);
}
const displaynews = news => {
    const newsContainer = document.getElementById('news-button');
    news.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('btn');
        newsDiv.innerHTML = `
      <div class="d-flex judtify-content-center-between "> 
       <button type="button" class="btn btn-light">${news.category_name}</button>
      </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}





// const displayNews = news => {
//     const newsContainer = document.getElementById('news-container');
//     news.forEach(news => {
//         const newsDiv = document.createElement('div');
//         newsDiv.classList.add('card');
//         newsDiv.innerHTML = `
//      <div class="row g-0">
//         <div class="col-md-4">
//              <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
//         </div>
//          <div class="col-md-8">
//              <div class="card-body">
//                  <h5 class="card-title">${news.title}</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural
//                      lead-in to
//                     additional content. This content is a little bit longer.</p>
//                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//              </div>
//            <div>

//              </div>
//         </div>
//      </div>
//      `;
//         newsContainer.appendChild(newsDiv);

//     });

loadNews();