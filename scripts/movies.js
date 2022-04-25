// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//https://api.themoviedb.org/3/search/movie?api_key=5147197db67754942e4353ea8fa56c34&language=en-US&page=1&include_adult=false&query=avenger
let walletAmount = localStorage.getItem("amount")
document.querySelector("#wallet").innerText = walletAmount
let id;
async function searchMovies() {

try {

  const query = document.querySelector("#search").value
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5147197db67754942e4353ea8fa56c34&language=en-US&page=1&include_adult=false&query=${query}`
  const res = await fetch(url)
  const data = await res.json()
  // console.log(data)
  let movies = data.results
  return movies
}
catch (err) {
  console.log("err:", err)
}
}

function appendData(data) {
let movie_box = document.querySelector("#movies")
movie_box.innerHTML = null;
data.map(function (el, index, arr) {
  let url_image = "https://image.tmdb.org/t/p/w500"
  let box = document.createElement("div")

  let image = document.createElement("img");
  image.src = url_image + el.poster_path

  let name = document.createElement("p")
  name.innerText = el.title

  let btn = document.createElement("button")
  btn.innerText = "Book now"
  btn.setAttribute("class", "book_now")

  btn.addEventListener("click", function () {

    addmovies(el, index)
  })
  box.append(image, name, btn)
  movie_box.append(box)
})
}



async function main() {
let data = await searchMovies()
if (data === undefined) {
  return fasle
}

appendData(data)
}


function debouce(fun, delay) {

if (id) {
  clearTimeout(id)
}
id = setTimeout(function () {
  fun()
}, delay)
}

let arr = JSON.parse(localStorage.getItem("movie")) || []

function  addmovies(el,index) {
arr.push(el)

localStorage.setItem("movie", JSON.stringify(arr))
window.location.href = "checkout.html"
}