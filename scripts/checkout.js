// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let walletAmount = localStorage.getItem("amount")
  document.querySelector("#wallet").innerText = walletAmount


  let arr = JSON.parse(localStorage.getItem("movie"));


  arr.map(function (el, index, arr) {

    let movie_box = document.querySelector("#movie")

    let url_image = "https://image.tmdb.org/t/p/w500"

    let box = document.createElement("div")

    let image = document.createElement("img");
    image.src = url_image + el.poster_path

    let name = document.createElement("h2")
    name.innerText = el.title

    box.append(name, image);
    movie_box.append(box)


  })


  function bookticket() {

    let seatno = document.querySelector("#number_of_seats").value
    let user = document.querySelector("#user_name").value
    let total_amount = seatno * 100
    // console.log(total_amount)
    if (user === "") {
      alert("Invaild user details")
    }
    else {
      if (total_amount > walletAmount) {
        alert("Insufficient Balance!")
      }
      else {
        alert("Booking successful!")
      }
    }


  }
